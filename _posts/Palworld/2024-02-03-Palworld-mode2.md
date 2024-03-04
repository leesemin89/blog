---
date: 2024-02-03 00:02:10
layout: post
title: 팰월드 모드 제작법2
subtitle: 팰월드 모드 제작 설정.
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

# PDK 설정 및 구성

## 리포지토리 

저장소를 설정해야 하는데 2가지 방법이 있습니다.
* git 저장소 복제하기
* Zip 다운로드하기

## git 복제하기

링크: https://github.com/localcc/PalworldModdingKit 

`git clone` 을 사용해 저장소를 복제합니다.

## zip 파일 다운로드

[다운로드](https://github.com/localcc/PalworldModdingKit/archive/HEAD.zip)

위의 zip 파일을 받아 압축해제합니다.

저장소를 다운 받으면 다음과 같습니다.
![파일](../assets/img/uploads/2024/feb/palworldmodingproject/main2/1.png)

## Wwise
* 언리얼에서 SDK를 열기전 Wwise를 수동으로 통합해야 합니다. 
* 게임에서 사용된 Wwise 버전과 엔진버전과 공식적으로 호환되지 않기에 수동으로 복사합니다.

1. Wwise용 설치파일을 압축해제한 디렉터리를 열면 다음과 같습니다
![wwise](../assets/img/uploads/2024/feb/palworldmodingproject/main2/1.png)
2. `Unreal.5.0.tar.xz` 아카이브 압축을 풉니다.
    * 이 작업은 2번해야 할 수도 있습니다.
3. 압축을 푼 `Wwise`폴더를 SDK 의 `Plugins` 폴더에 복사합니다.
4. 필요한 DLL 을 복사합니다.
5. SDK 내부 `Wwise` 폴더를 열고 `ThridParty` 폴더를 생성합니다.
6. 이제 Wwise SDK를 설치한 폴더로 이동합니다.
   * 통합파일 설치 폴더가 아닌 SDK 설치 폴더입니다.

기본 Wwise SDK 경로
```
C:/Program Files (x86)/Audiokinetic/Wwise 2021.1.11.7933/SDK
```

이 폴더에서 다음 3가지를 선택합니다.  
   * Wind32_vc170  
   * x64_vc170  
   * include  
1. 위에 나열된 폴더들을 이전에 생성한 `ThirdParty` 폴더에 복사합니다.  
2. `vc170` 해당 폴더를 복사해 `vc160`폴더인 것처럼 복사후 이름을 바꿔 구조가 아래와 같게 만듭니다.   
   ![복사](../assets/img/uploads/2024/feb/palworldmodingproject/main2/1.png)
* Wwise가 현재 언리얼 엔진 버전과 호환되지 않는다는 대화상자를 끄려면 :  
  텍스트 편집기나 IDE에서 `Plugins/Wwise` ->  `Wwise.uplugin`을 열고  
  `EngineVersion : 5.0.0` 에서 `EngineVersion : 5.1`로 엔트리를 바꿉니다. 

Wwise 통합이 완료되었습니다.
---
이 포스트는 https://pwmodding.wiki/의 모딩가이드 번역본입니다.