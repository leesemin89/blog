---
date: 2024-02-05 00:02:10
layout: post
title: 팰월드 모드 제작법4
subtitle: 루아모딩과 그 툴에 대해서
description: 
image: 
  'assets/img/uploads/2024/feb/palworldmodingproject/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/palworldmodingproject/p_title.jpg'
category: palworld
tags:  [ palworld, mod, devlog ]
author: sammy
paginate: true
---



# 루아 모딩

## 소개
- 루아에 초점을 맞춘 튜토리얼로서 BP 상호 운용성에 대한 부분이 있을 수 있지만, 대부분이 순수하고 오염되지 않은 루아로 진행될 것입니다.
- 루아 기본 사항에 대해서는 스크립트 구조, 데이터 유형 및 흐름 제어 흐름 제어와 같은 루아 기초 페이지를 확인바랍니다.
- 이 튜토리얼에선 이런 부분을 다루지 않을 예정이므로 루아에 익숙해지십시오.
- 주로 UE4SS 모딩에 대한 사전 경험이 없는 초보자들을 대상으로 한 튜토리얼 입니다.

## 왜 루아를 쓰나요?
- 빠른 프로토타이핑, BP로 이동 및 구체화 전에 개념 증명으로 일부 코드를 빠르게 작성할 수 있습니다.
- 패키징이 간편하고 쿠킹이 불필요합니다. 모드 폴더를 압축해 업로드하기만 하면 됩니다.
- BP 단독으로 할 수 있는 것보다 조금 더 많은 일을 할 수 있습니다.

## 얼리 엑세스 고지
- 이 문서에게서 모든 것을 알려주거나 편리한 모딩 도구, 유용한 함수 분석 같은 것을 기대하지 마십시오.
- 우리는 아직 그 단계에 도달하지 못했습니다.
- 당신이 후킹한 함수가 변경되어 작동하지 않는 코드가 되어도 괜찮다면 시작합시다!



# 루아 모딩 툴

- 만약 당신이 툴에 대해 알고 있다면 스킵해도 됩니다.

## UE4SS

- 이것이 당신의 주식입니다. UE4SS는 언리얼 엔진을 위한 스크립팅 서비스로 우리가 모드를 로드할 수 있게 해줍니다.
- 모드를 개발하고 테스트하는데 매우 유용한 콘솔도 함께 제공됩니다.

### 설치법

- 모드 관리자를 사용하고 있다면 UE4SS가 이미 설치되어 있을겁니다. 하지만 없을 경우를 대비해 여기서 설치법을 다룹니다.
- 제공된 값과 일치하는지 알아보기 위해 `UE4SS-setting.ini`를 확인해야 합니다.
  - 최신 버전의 zDev 을 릴리즈 탭에서 다운로드 받습니다.
  - 모드를 추출하고 `dwmapi.dll,` `UE4SS.dll` 및 `UE4SS-settings.ini` 파일을 `Palworld/Pal/Binaries/Win64` 폴더에 복사해주세요.
  - 선호하는 에디터에서 `UE4SS-setting.ini` 파일을 열고 다음과 같은 설정을 확인합니다.
    - ConsoleEnabled = 0
      GuiConsoleEnabled = 1
      GuiConsoleVisible = 1
      EnableHotReloadSystem = 1 `Ctrl + R`로 재로드를 활성화 합니다.

```markdown
❗ **주의**
UE4SS가 로드 시 흰 콘솔 스크린이 나타나면 `GraphicsAPI`를 dx11 로 변경하세요.
```

## 분석
*****
- UE4SS에는 5개의 탭이 있으며 그 중 2개를 주로 사용할 것입니다.
- 콘솔: 이것은 가장 많이 사용되는 탭입니다. 여기에는 `pring()`로 출력한 모든 내용이 출력됩니다.
- 라이브뷰: 이는 메모리 내의 항목을 실시간으로 보여주며, 검색에 따라 필터링이 됩니다. 매우 유용하며 아마도 자주 사용되는 도구가 될 것입니다.
- Watches: 라이브 뷰에서 주시하고 싶은 값이 있다면 해당 값을 오른 클릭해 `watch`로 지정해 이 탭에 고정할 수 있습니다. 특정 값에 주의를 기울일 때 유용합니다.
- Dumpers: 처음 사용할 때 중요하며, 그 후 대부분 건드릴 일이 없습니다. 다른 작업을 하기 전 `CXX 헤더를 덤프`하고 `Lua 유형을 생성`해야 합니다.
  - `CXX 헤더를 덤프`하면 `CXXHeaderDump` 폴더가 생성되며, 모든 헤더 파일이 들어있습니다. 이는 `PalModdingKit/Source/Pal/Public` 에 있는 것과 거의 동일하지만 약간 다른 포맷입니다. 원하는 쪽을 사용하십시오. 
    + `PalModdingKit` 폴더에는 모든 다른 클래스가 각각의 파일로 분해되어 있습니다. 당신이 당신의 것을 멋지고 깔끔하게 정리하는 것을 선호한다면 그것을 사용하세요.
    + 만약 당신이 하나의 파일로 작업하는 것을 선호한다면, `CXXHeaderDump`를 사용할 수 있습니다. 거기에는 우리가 관심을 가지는 모든 것이  `Pal.hpp`라는 하나의 파일에 들어 있습니다. 약간 다른 포맷이지만 당신의 선택입니다.

  - `Generate Lua Types`를 실행하면 `Mods/shared`/ 폴더에 `types` 폴더가 생성됩니다. 이는 프로젝트 폴더로 `Mods`를 열면 지능형 자동완성을 제공하는데 도움이 됩니다.
    + 또한 `CXX헤더`나 `PalModdingKit` 대신에 이러한 유형을 검색할 수 있습니다. `CXX 헤더`나 `PalModdingKit` 대신 이런 유형을 검색할 수 있습니다.
    + Lua 레이아웃을 선호하는 경우입니다. 대부분의 것들이 `Pal.lua`에 있지만 C++이 아닌 Lua 구문으로 작성되었습니다.

`Scripts` 폴더를 열고 `main.lua` 파일을 생성합니다.
이 파일은 이 모드의 엔트리 포인트가 되며, 모든 로직을 이 파일 내에서 수행할 것입니다.

## FModel
*****
Asset Swapping 튜토리얼의 설치 단계를 따르십시오.
루아 측면에서, 이것은 주로 게임 데이터 테이블 값을 보는데 사용됩니다. BP를 살펴볼 수 있지만 헤더 파일을 검색하는 것이 더 쉽다고 봅니다.
`uasset` 파일을 탐색하는 것은 어색할 수 있습니다.

데이터 테이블의 경우, `JSON`으로 모두 저장해 `VSCode`에서 파일 찾기를 하십시오.

다음 작업을 수행하십시오:
  1. FModel에서 Pal/Content/Pal 폴더를 엽니다.
  2. 데이터 테이블을 마우스 오른 클릭합니다.
  3. "Save Folder's Packages Properties (.json)"을 클릭합니다.
![1](../assets/img/uploads/2024/feb/palworldmodingproject/2024-02-05-LuaModdingTool/1.png)
![2](../assets/img/uploads/2024/feb/palworldmodingproject/2024-02-05-LuaModdingTool/2.png)

## VSCode
*****
나는 Lua 확장 기능이 포함된 VSCode를 선호합니다. 이를 기반으로 튜토리얼을 진행하겠습니다.
다른 에디터를 선택한 경우에는 해당 에디터에 맞도록 이 지침을 변경하십시오.

### 모딩 셋업
  - 설치가 완료되면 새 창을 열고 `File` -> `Add Folder to Workspace`
  - `Binaries\Win64` 폴더로 이동하여 이전에 생성한 `Mods`와 `CXXHeaderDump` 폴더를 추가합니다.
  - 그런 다음 방금 FModel에서 덤프한 `DataTable` 폴더도 추가해야 합니다.
  - 그 워크스페이스를 원하는 대로 저장할 수 있습니다. 아래 사진과 유사하게 보일 것입니다.
    ![3](../assets/img/uploads/2024/feb/palworldmodingproject/2024-02-05-LuaModdingTool/3.png)

당신의 개발 관련 모든 것은 Mods/YOUR_MOD_FOLDER에 있을 것이며, 헤더 파일을 검색하려면 CXXHeaderDump를 사용하고, 데이터 테이블을 검색하려면 DataTable 폴더를 사용하면 됩니다.
```markdown
**NOTE**
우리는 `Mods`를 모드의 루트 폴더로 사용합니다. 왜냐하면 UE4SS의 라이브러리 정보와 생성된 Lua 유형이 `Mods/shared`에 있기 때문입니다. 이렇게 하지 않고 인텔리센스 지원을 받으려면 매번 이를 모든 모드에 복사해야 합니다.
```
