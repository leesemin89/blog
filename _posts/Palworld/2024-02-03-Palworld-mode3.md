---
date: 2024-02-03 00:03:10
layout: post
title: 팰월드 모드 제작법3
subtitle: 팰월드 모드 프로젝트 내보내기
description: 
image: 
  'assets/img/uploads/2024/feb/2024-02-03-palworld/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-03-palworld/p_title.jpg'
category: palworld
tags:  
author: sammy
paginate: true
---

# PDK 런칭

## `Pal.uproject` 를 더블클릭 해 언리얼 엔진에서 열기

- 모듈이 오래되어 다시 컴파일하라는 메시지가 나타나면 YES를 누르세요.
- 모듈을 다시 컴파일하라는 메시지가 지속적으로 뜬다면 긴 파일 경로가 원인일 수 있습니다.
  git clone을 사용하는 대신 zip 을 다운로드한 경우 더 자주 발생할 수 있습니다. 
  `palworldmoddingkit` 폴더 이름을 변경하거나 드라이브의 루트로 더 가까이 옮기십시오.

- Wwise는 시작할때마다 언리얼 엔진 버전과 호환되지 않는다고 합니다 YES를 누르십시오.
- 파일이 언리얼 엔진에서 열리지 않고 다른 것고 연결되는 경우, 언리얼 엔진을 열고 거기에서 파일을 여십시오.
- 실행 시 Wwise 프로젝트 경로 문제에 대한 팝업이 뜰 수 있습니다. 무시하고 닫으십시오.
  ![팝업](../assets/img/uploads/2024/feb/2024-02-03-palworld/main3/1.png)
- 컴퓨터 사양에 따라 로딩 시간이 다릅니다.

# 프로젝트 내보내기

- 아래 두가지 설정이 활성화 되었는지 확인하십시오.
    ![설정](../assets/img/uploads/2024/feb/2024-02-03-palworld/main3/2.png)
    ![설정2](../assets/img/uploads/2024/feb/2024-02-03-palworld/main3/3.png)

1. Contents 폴더에 모드이름을 딴 데이터 자산(기본 자산 레이블)을 생성하시고 우선순위를 1로 설정 및 Chunk ID를 기억하기 쉬운 ID로 설정합니다.
2. 모드(ModActor 및 모드에 포함할 기타 자산) Chunk ID를 위에서 사용한 것과 동일하게 설정하세요.
3. 프로젝트 설정 -> 자산 관리자 로 이동해 설정이 아래와 유사한지 확인하십시오(규칙이 사용자가 만든 기본 자산 레이블과 일치하는지 확인).
4. 포함하는 각 모드 파일에서 모든 Chunk ID가 일치하면 프로젝트를 패키징할 수 있습니다.
   ![활성화](../assets/img/uploads/2024/feb/2024-02-03-palworld/main3/5.png)
5. `pakchunk{Your Chunk ID}-Windows.pakPaks`가 Paks output 폴더에 있을 것입니다. 
   * 이름을 원하는 모드 이름으로 바꾸십시오.

* `Palworld\Pal\Binaries\Win64\Mods\mods.txt` 의 BPModeLoader 가 활성화 되어 있어야 합니다.
  ![활성화](../assets/img/uploads/2024/feb/2024-02-03-palworld/main3/6.png)

  ---
이 포스트는 https://pwmodding.wiki/의 모딩가이드 번역본입니다.