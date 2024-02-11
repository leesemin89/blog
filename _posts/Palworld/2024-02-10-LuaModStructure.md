---
date: 2024-02-10 00:02:10
layout: post
title: 팰월드 모드 제작법5
subtitle: 루아모드 구조에 대해 알아보자
description: 
image: 
  '../assets/img/uploads/2024/feb/2024-02-03-palworld/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-03-palworld/p_title.jpg'
category: [palworld]
tags:  
author: sammy
paginate: true
---

# 루아 모드 구조 
*****
이제 툴이 설정되었으니 Lua 모드를 생성하려면 다음을 따르십시오.  
1. 루아 모드를 생성하려면 UE4SS 가 설치된 디렉토리로의 `mods` 폴더로 가십시오.
2. 그 폴더 안에서 `TestLuaInteroMod` 📁 폴더를 생성하십시오.
3. 이 폴더를 열고 다음 폴더와 파일 하나를 생성하십시오.
   * 📁 `Scripts` 폴더 - 모든 루아 스크립트를 저장합니다.
   * 📝 `enabled.txt` 텍스트파일- 이 파일은 UE4SS에게 모드가 활성화되었음을 알립니다.

폴더를 열고 `main.lua` 파일을 생성합니다. 이 파일은 모드의 진입점이자 모든 로직이 처리되는 파일입니다.

폴더 구조는 다음과 같습니다.  
![폴더구조](../assets/img/uploads/2024/feb/2024-02-03-palworld/2024-02-10-LuaModStructure/1.folderlogic.png)
이제 `main.lua` 파일을 열고 코드를 써봅시다.

## 

## 루아의 후킹 기능
이 튜토리얼에는 파티에서 팰을 소환하는 기능을 연결합니다.

### 후킹 기능

UE4SS 에서 함수를 연결하려면 해당 RegisterHook 함수를 사용합니다.
해당 함수의 시그니처 :  

  ```lua
  RegisterHook(FunctionName, Callback)
  ```

매개변수는 다음과 같습니다: 
  * `FunctionName` - UE4SS LiveView에서 얻을 수 있는 함수이름 입니다.
  * `Callback` - 후크된 함수가 실행을 마쳤을 때 호출하는 lua 함수입니다. 이 함수는 후술할 여러 매개변수들을 받아들일 수 있습니다.
  ```markdown
  ❕NOTE
    UE4SS 후크된 함수의 실행이 완료된 후에 후크가 실행됩니다. 리턴값을 검사 및 재정의할 수 있는 기능이 있습니다.
  ```
후크의 리턴값 변경은 아주 간단합니다. 만약 해당 값을 건드리고 싶지 않다면 놔두십시오.

### 객체 생성 등록하기

그러나 `RegisterHook` 함수가 작동하려면 우리의 객체가 미리 존재해야 합니다. 따라서 여기에 또 다른 중요한 함수인 `NotifyOnNewObject`가 필요합니다.

이 함수는 특정 클래스의 객체가 생성될 때 일부 코드를 실행할 수 있게 해줍니다. 함수의 시그니처는 다음과 같습니다:  
  ```lua
  NotifyOnNewObject(ObjectPath, Callback)
  ```
매개변수는 다음과 같습니다:
  * `ObjectPath` - 생성되는 객체를 감시하는 객체의 경로입니다. 이 정보는 UE4SS LiveView에서 얻을 수 있습니다.
  * `Callback` - 주어진 객체가 생성될 때 호출하는 함수입니다. 이 함수는 생성된 객체의 인스턴스를 단일 매개변수로 받습니다.

### 1번째 후크작성하기
이 간단한 예제에서 파티에서 소환한 팰들을 스케일 다운(축소) 시키는 코드 스니펫을 작성하려 합니다.

우선, 이 게임에서 우리 파티에 속한 모든 팰들을 `otomo`라고 부르기로 합시다.
그러기 때문에 우리는 이와 관련된 내용을 찾아야 합니다.

`BP_OtomoPalHolderComponent` 가 발견되었습니다! 
이 컴포넌트는 파티의 팰들을 저장하고 필요시 소환하는 역할을 담당합니다.

그 함수를 살펴본 후 이와 유사한 시그니처를 가지고 있는 함수들을 찾을 수 있습니다 :  
  ```lua
  void ActivateOtomo(int32 SlotID, FTransform StartTransform, bool& IsSuccess);
  ```
이 함수는 파티에서 팰을 소환을 담당하는 함수입니다(던짐).

### 컴포넌트 생성 구독하기
그 함수를 후킹해봅시다! 먼저, 훅을 원하는 객체가 존재하는지 확인해야 하므로, 새 객체가 생성될 때마다 후크를 설정하도록 하겠습니다. 그리고 이를 위한 `NotifyOnNewObject`를 사용해야 합니다.

main.lua
---
```lua
print("Hello world from Lua!")

RegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)
    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)
        print("New component!")
    end)
end)
```
게임 내 월드 접속 시  "Hello World from Lua!" 메시지가 나타나야 합니다. 
그러니까 게임을 열고 시도해봅시다!

  ```markdown
  모드의 메시지가 출력되지 않는다면 `enabled.txt` 가 모드 폴더에 있는지 확인합니다.
  여전히 메시지가 출력되지 않으면 `mods.txt` 를 편집해 모드를 포함하고 해당 모드를 활성화합니다.
  ```
로그는 아래와 같습니다.  
![로그](../assets/img/uploads/2024/feb/2024-02-03-palworld/2024-02-10-LuaModStructure/2.print.png)

  ```markdown
  ❕NOTE
  `NotifyOnNewObject`에 등록하기 전에 `ClientRestart`에 대한 후크를 등록하는 이유는 그렇게 하지않으면 등록의 신뢰성이 없어 컴포넌트가 생성될 시 항상 호출되지 않을 수 있기 때문입니다.
  ```

### 그 함수 후킹하기
이제 원하는 후크를 작성할 차례입니다. 지금은 간단하게 팰이 활성화되었다는 메시지를 출력해보도록 하겠습니다. 이를 위해 코드를 다음과 같이 변경합니다:

main.lua
---
```lua
print("Hello world from Lua!")

RegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)
    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)
        print("New component!")
        RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", function (self, SlotId)
            print("Activating otomo: " .. SlotId:get())
        end)
    end)
end)
```
이렇게 하고 나면 UE4SS에서 `Restart All Modes` 버튼을 누를수 있습니다.

![리스타트버튼](../assets/img/uploads/2024/feb/2024-02-03-palworld/2024-02-10-LuaModStructure/3.restartButton.png)

모드를 다시 로드한 후 타이틀 화면으로 돌아가 월드에 재접속하십시오.
이제 파티에 있는 팰을 하나 던져보면 콘솔에 다음과 같이 출력됩니다.  
![콘솔로그](../assets/img/uploads/2024/feb/2024-02-03-palworld/2024-02-10-LuaModStructure/4.consolLog.png)

이제 누가 파티에서 팰을 소환할때마다 알림을 받게 됩니다.
이제 유용한 작업을 수행해봅시다. 이 튜토리얼의 목적을 위한 팰을 약간 축소시켜봅니다.

이를 위해서 팰의 액터 인스턴스를 얻어야 하는데 어떻게 할까요?
결국 우리는 SlotID만 가지고 있습니다.

사실 우리가 가진 컴포넌트는 `UPalOtomoHolderComponentBase`에서 상속되었기 때문에, palworld 모딩 킷 헤더에서 다른 함수들을 살펴볼 수 있습니다. 흥미로운 함수를 볼 수 있습니다:

```lua
UFUNCTION(BlueprintCallable, BlueprintPure)
APalCharacter* TryGetOtomoActorBySlotIndex(const int32 SlotIndex) const;
```
이 함수는 슬롯인덱스를 받아 친구 액터를 반환합니다. 
우리가 바로 필요한 그것입니다! 이를 사용합시다.

main.lua
---
```lua
print("Hello world from Lua!")

RegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)
    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)
        print("New component!")
        RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", function (self, SlotId)
            print("Activating otomo: " .. SlotId:get())

            local HolderComponent = self:get()
            local OtomoActor = HolderComponent:TryGetOtomoActorBySlotIndex(SlotId:get())

            OtomoActor:SetActorScale3D({X = 0.6, Y = 0.6, Z = 0.6})
        end)
    end)
end)
```
```markdown
❕NOTE
Q : 왜 가끔 `:get()`을 호출합니까?
A : 우리가 후크 내부에서 얻는 일부 매개변수는 실제로 우리가 훅 내부에서 얻는 일부 매개변수는 실제로 `RemoteUnrealParam`이며, 일반적으로 이들은 액터, 객체 등의 인스턴스입니다. 따라서 이들의 내부 값을 얻으려면 `:get()`을 호출해야 합니다.
```

따라서 이 코드는 컴포넌트 인스턴스를 가져와 현재 활성 슬롯 인덱스로부터 친구 액터를 가져온 다음, 해당 액터의 3D 액터 스케일을 원래 값의 60%로 설정합니다. 게임으로 이동하여 확인해 보겠습니다!

![팰사이즈](../assets/img/uploads/2024/feb/2024-02-03-palworld/2024-02-10-LuaModStructure/5.palSize.jpg)


