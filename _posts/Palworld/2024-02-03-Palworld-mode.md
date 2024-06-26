---
date: 2024-02-03 00:01:10
layout: post
title: 팰월드 모드 제작법
subtitle: 팰월드 모드 제작 준비물
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

# 준비물 - Part1

## .NET 6

`Unreal Build Tools`를 사용하려면 시스템에 `.NET6`가 설치되어 있어야 합니다.

`다운로드 x64` 런타임을 다운로드 > [다운로드](https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime?cid=getdotnetcore&os=windows&arch=x64)

![런타임](../assets/img/uploads/2024/feb/palworldmodingproject/main/1.png)

설치 프로그램을 다운로드한 후 그 파일을 열고 런타임을 설치합니다.

## 비주얼 스튜디오 2022 

SDK를 컴파일하려면 Visual Studio 2022가 설치되어 있어야 합니다.

[다운로드](https://visualstudio.microsoft.com/vs/)

설치하는 동안 아래와 같은 구성요소를 체크합니다
![구성요소](../assets/img/uploads/2024/feb/palworldmodingproject/main/2.png)
![구성요소2](../assets/img/uploads/2024/feb/palworldmodingproject/main/3.png)

## 언리얼 엔진

비주얼 스튜디오를 설치한 후 언리얼 엔진을 설치하십시오.
  1. 에픽게임즈 런처 열기
  2. `Unreal Engine` 탭으로 이동
  3. `Library` 탭으로 이동
  4. 새 버전을 추가하려면 `Gold+` 를 클릭.
    * ![언리얼](../assets/img/uploads/2024/feb/palworldmodingproject/main/4.png)
  5. 엔진버전을 선택할 수 있습니다
  6. 5.1 버전을 선택하십시오.
    * ![버전](../assets/img/uploads/2024/feb/palworldmodingproject/main/5.png)
  
# Wwise 
팰월드는 사운드에 Wwise를 사용하므로 설치하십시오.
[다운로드](https://www.audiokinetic.com/en/download)
  * 사운드를 만들 의도가 없어도 여전히 Wwise가 있어야 프로젝트가 컴파일됩니다.

![Wwise](../assets/img/uploads/2024/feb/palworldmodingproject/main/6.png)
  * 계정을 만드십시오.

1. 다운로드 후 설치 및 로그인.
2. `Wwise` 탭으로 이동.
3. 화면 왼쪽 상단에 `Install a New Version` 헤더가 있습니다.
4. Wwise `2021.1.11` 버전을 선택 후 설치하십시오.
  * ![2021](../assets/img/uploads/2024/feb/palworldmodingproject/main/7.png)
  
다음 페이지의 선택항목은 다음과 같습니다
   * SDK(C++)
   * 마이크로소프트 -> 윈도우 -> 비주얼스튜디오 2022
  * ![선택](../assets/img/uploads/2024/feb/palworldmodingproject/main/8.png)

5. Next를 누르고 플러그인은 스킵.
6. Wwise SDK 를 설치한 후 `Unreal Engine` 탭으로 이동.
7. 다운로드 -> `Offline Integration File` 을 선택.
8. `Integration Version` 에서 `2021.1.11` 을 선택 후 기억하기 쉬운 디렉터리에 설치합니다.
   


---
이 포스트는 https://pwmodding.wiki/의 모딩가이드 번역본입니다.