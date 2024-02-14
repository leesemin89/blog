---
date: 2024-02-11 00:01:10
layout: post
title: 팰월드 모드 제작법6
subtitle: UE4SS 함수 개요에 대해 알아보기.
description: 
image: 
  'assets/img/uploads/2024/feb/2024-02-03-palworld/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-03-palworld/p_title.jpg'
category: palworld
tags:  [ palworld, mod, devlog ]
author: sammy
paginate: true
---

# UE4SS 기능 개요
UE4SS에는 내장된 Lua API 가 함께 제공되며, 그 중 일부는 우리가 작업을 수행할 수 있도록 해주는 유용한 함수 배열입니다.
이 섹션에서는 팰월드에서 사용될 때 이런 함수 중 일부를 다룹니다.

우리 루아 스크립트의 핵심을 이루는 2가지 함수가 있습니다.
  * `RegisterHook`
  * `NotifyOnNewObject`
아래에서 이를 다루는 방법을 소개합니다.

*****
## RegisterHook
*****
_SomeFunction_에 연결된 이 후크는 해당 _SomeFunction_이 실행된 후 발동합니다.
ex) 현재 스크립트에서 가장 흔히 볼 수 있는 `RegisterHook` 중 하나:
```lua
RegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context) 
    -- do something
end)
```
```markdown
**후크 되는 함수는 뭔가요?**
"ClientRestart" 를 생각하시면 됩니다.
```
```markdown
**이 예제에서 Context는 무엇인가요?**
만약 "PlayerController" 라고 말할 수 있다면, 잘 맞추셨습니다. 
콜백 함수의 첫번째 매개변수는 항상 해당 함수를 호출하는 UObject입니다. 다시말해, Context 입니다.
* 콜백함수란? : 다른 함수의 매개변수로 전달되어 그 함수의 실행 중 특정이벤트가 발생 시 호출되는 함수를 말합니다.
* 컨택스트란? : 특정 상황이나 환경을 가리키는 용어로서 주로 실행 중인 코드나 함수가 위치한 환경을 뜻하며, 해당 코드나 함수가 실행되는 맥락이나 상황을 의미.
```

하지만 이 후크도 데디케이티드 서버에 대해서는 작동하지 않습니다. 
그래서 여기서 더 나은 방법을 알려드립니다.
```lua
RegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)
    -- do something
end)
```

이 문은 클라이언트가 서버에 연결될 때마다 호출됩니다. 그리고 로컬서버에서도 작동합니다.
저는 대부분의 스크립트에서 이 문을 사용합니다. 가끔  작동하지 않을 때가 있기는 합니다. 아마도 서버 운영자가 뭔가를 잘못 설정했는지 모릅니다.

이전에 말씀드린대로 콜백함수의 첫번째 매개변수는 항상 해당 함수를 호출하는 UObject입니다. 
그러나 호출된 함수의 매개변수를 가져올 수도 있습니다.
이 콜백함수의 형식은 항상 다음과 같습니다 : `function(UObject self, UFunctionParams)`

`StupidFunction(Bool is True, int Id, string Message)` 가 있다고 가정하면, 
```lua
RegisterHook("/Script/Example.SomeObject:StupidFunction", function(Context, isTrue, Id, Message)
    print("This message is: " .. Message:get())
    print("The bool is: " .. isTrue:get())
    print("The id is: " .. id:get())
)
```
```markdown
`:get()`은 후크로부터 받는 일부 매개변수를 실제로 이상한 것으로 알려진 `RemoteUnrealParam` 입니다. 
이 부분은 내 이해수준을 넘어섰기 때문에 이들의 _실제_ 값을 얻으려면 `:get()`을 호출해야 합니다.
```
당연히 이 과정은 쉽지 않습니다. UE는 쉽게 다룰 수 있는 매개변수를 사용하지 않기 때문에 그렇습니다.

*****
## NotifyOnNewObject
*****
이 문은 우리가 특정 객체가 생성되는 것을 감시할 수 있도록 해주는 2번째 매직 소스입니다.
누군가 전기 히터를 만드는걸 알고 싶나요?

```lua
NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric.BP_BuildObject_HeaterElectric_C", function(Context)
    print("woah its a heater")
end)
```
하지만 이를 어떻게 알 수 있을까요? 그것이 당신이 나중에 다뤄야할 문제입니다. 
지금은 함수의 이해와 사용법에 집중합시다. 나중에 그 부분 역시 다룰것 입니다.

위의 코드를 실행한다면 작동할수도, 안 할수도 있습니다. 왜냐면 항상 모든 기능이 사용 가능한 것이 아니기 때문입니다.
이 문이 `/Script/`가 아니라는 점에 주목하세요. 이 문은 당신이 notify를 생성할 때 아직 존재하지 않을 수 있습니다.
그래서 확실하게 하기위해 SAP 또는 CR과 함께 `RegisterHook`으로 감싸야 합니다.
그러나 그것만으로도 충분치 않을 수 있습니다... SAP은 가끔 너무 일찍 발동되기 때문에 지연을 추가할 필요가 있습니다.
이 부분은 잠시 후에 다룰 것이므로 지금은 그대로 받아들입시다.

```lua
RegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)
    ExecuteWithDelay(5000,function()
        NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric_BP_BuildObject_HeaterElectric_C", function(Context)
            print("woah its a heater")
        end)
    end)
end)
```
하지만 그렇게 하면 어리석은 방법입니다. 왜냐하면 그 후크가 발동될 때마다 새로운 알림이 생성되기 때문입니다.
2명의 신규 플레이어가 게임에 참여했을때, 이제 3개의 NotifyOnNewObject가 있습니다. 
기억하세요, 이들은 발동할 때마다 내부의 모든 것을 실행합니다. 그러니 그것을 감싸세요. 
```lua
local not_hooked = true
RegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)
    if not_hooked then
        ExecuteWithDelay(5000,function()
            NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric_BP_BuildObject_HeaterElectric_C", function(Context)
                print("woah its a heater")
            end)
        end)
        not_hooked = false
    end
end)
```
이제 제대로 진행 중입니다. 
이 2가지 는 당신의 주식이 될 것입니다. 그러나 UE4SS의 몇가지 유용한 함수를 더 살펴봅시다.

*****
## StaticFindObject
*****
가끔은 기본 클래스 객체만 필요할 때가 있습니다. 좋은 예시는 `PalUtility` 입니다.
이 녀석은 많은 훌륭한 명령어를 가지고 있지만 당신이 코드에서 `PalUtility:AwesomeFunction`을 그대로 사용할 순 없습니다.
호출하려면 기본 클래스가 필요합니다. 이 때 `StaticFindObject`가 등장합니다.

```lua
local PalUtil = StaticFindObject("/Script/Pal.Default__PalUtility")
PalUtil:AwesomeFunction()
```

*****
## Find Functions
*****
이것은 객체를 찾는데 사용합니다. 여러가지가 있고 그 중 아마도 가장 많이 사용할만한 것은 FindFirstOf 와 FindAllOf 입니다만, FindObject와 FindObjects도 있습니다.

첫 두개는 짧은 이름을 사용할 수 있습니다. 긴 이름이 필요하지 않아 좋고 다음과 같이 씁니다:
```lua
local player = FindFirstOf("PalPlayerCharacter")
```

*****
## LoopAsync and ExecuteWithDelay
*****
이전 예제에서 ExcuteWithDelay를 보았습니다. 이들은 각자의 방식으로 때론 유용하며 가끔 사용될 것입니다.
때로는 어떤 일이 조금 늦게 발생하도록 만들고 싶을 때가 있는데, 그런 경우에 이렇게 사용합니다:
```lua
ExecuteWithDelay(later_in_ms, function()
    --something
end)
```
가끔은 일정한 간격을 가지고 뭔가 발생하기를 원할때도 있습니다, 이 경우에는 다음과 같이 사용합니다:
```lua
LoopAsync(every_so_often, function()
    --something
end)
```

*****
## FName + FText
*****
FName과 FText 는 UE가 어떤 이유로 사용하는 특별한 문자열 기반 요소입니다. 왜 그런지는 잘 모릅니다. 
다만 이런 요소들이 Lua에서는 귀찮다는 것만 알고 있습니다. 만약 문자열을 FName이나 FText로 변환해야 하면 다음과 같은 함수를 사용할 수 있습니다:
```lua
local fname = FName(some_fname)
local ftext = FText(some_text)
```
어떤 함수가 귀찮은 데이터를 전달해주면 그것을 역으로 처리할 수 있습니다:
```lua
RegisterHook("/idk/some:function", function(fname_param, ftext_param)
    local cool_string = fname_param:get():ToString()
    local also_cool_string = ftext_param:get():ToString()
    print(cool_string .. also_cool_string)
end)
```

*****
## Callback Functions
*****
명확히 하려면:
```lua
RegisterHook("/idk/some:function", function(self)
    --some complicated logic
end)
```
아니면 이렇게 쓸수도 있습니다:
```lua
local function complicatedFunction(self)
    --some complicated logic
end

RegisterHook("/idk/some:function", complicatedFunction)
```
간단한 모드에서는 사람들은 종종 콜백함수를 중첩시키기로 합니다. 처음에는 한눈에 더 명확해 보일수 있기 때문입니다.
하지만 코드가 더 복잡해지면 이런 콜백을 자체 함수로 분리하는 것이 나을 수 있습니다.
그렇지 않다면 콜백 안의 콜백 안의 콜백을 다뤄야할 수도 있습니다.

*****
## More functions
*****
UE4SS API 에서는 이외에도 많은 함수들이 제공되고 있으며, 이 튜토리얼에서는 그것들을 다 사용하지 못하고, 많은 유용한 함수들을 놓쳤을 것입니다.
그러나 이것들은 지금까지 가장 많이 사용한 것들이며, 더 많은 정보나 기본 유형 및 다른 API 관련 내용에 대해선 문서를 참조하는 것이 좋습니다.