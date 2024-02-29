---
date: 2024-02-29 00:01:10
layout: post
title: 팰월드 모드 제작법12
subtitle: 루아 베이직
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
# 에셋 스와핑
*****
## 필요한 도구 소개
****
이 가이드는 KURAMAAA0가 작성했습니다.

### 자산 스왑을 만드는 방법

이 가이드는 팰월드를 위한 자산 스왑 모드를 만드는 방법에 대해 안내합니다. 
이 가이드를 읽은 후에는 Rigged 3D 자산(예: Pals 또는 NPC), 아이템, 무기 또는 모든 객체와 같은 정적 3D 자산, Pal 텍스처, 플레이어 텍스처 또는 월드 텍스처와 같은 텍스처, 그리고 아이콘이나 HUD 요소와 같은 이미지를 자산 스왑으로 생성할 수 있어야 합니다.

### 필요한 도구:
1. 게임 파일을 탐색하고 내보내기 위해 FModel 사용
  `Palworld Mappings files` [다운로드](https://github.com/KURAMAAA0/PalModding/raw/main/Assset%20Swap%20Guide/Mappings.usmap), Palworld에서 FModel을 사용하기 위해 필요함
2. 최종 모드를 패키징하기 위해 언리얼 엔진 5.1.1
   Palworld가 사용하는 버전과 일치하는 버전인 5.1.1을 선택해야 합니다.
3. 3D 모델을 편집하고 내보내기 위해 Blender 사용
  게임 파일을 Blender로 가져오기 위해 DarklightGames의 psk/psa importer (https://github.com/DarklightGames/io_scene_psk_psa/releases) 사용

시작합니다.

## 시작하기
*****
먼저 FModel을 열어보세요. 디렉토리 선택기 창이 열릴 것입니다. 팰월드가 첫 번째 드롭다운 목록에 없는 경우 감지되지 않은 게임을 추가하려면 교환 화살표 기호를 클릭하세요.
![Fmodel](../assets\img\uploads\2024\feb\palworldmodingproject\2024-02-29-AssetSwapping\1.png)

이름을 `Palworld`로 지정하십시오 (또는 원하는대로 지정하셔도 됩니다. 중요하지 않습니다.) 
기본적으로 `C:\Program Files (x86)\Steam\steamapps\common\Palworld\`에 위치한 Palworld 실행 파일 디렉토리로 디렉토리를 변경하십시오. 해당 디렉토리를 찾을 수 없는 경우 `Steam 라이브러리로 이동하여 -> 마우스 오른쪽 버튼 클릭 -> Palworld -> 관리 -> 로컬 파일 찾아보기`를 선택하고 해당 경로를 디렉토리 섹션에 복사하십시오.

확인을 클릭하고 FModel 설정으로 이동하십시오. `Output Directory`를 쉽게 찾을 수 있는 곳으로 변경하십시오. 
`GAME` 섹션에서 `UE 버전`을 `GAME_UE5_1`로 변경하십시오. `ADVANCED` 섹션에서 `Local Mapping File`을 선택하고 `Mapping File Path`를 이전에 다운로드한 [Palworld 매핑 파일](https://github.com/KURAMAAA0/PalModding/raw/main/Assset%20Swap%20Guide/Mappings.usmap)로 변경하십시오.

설정의 왼쪽에 있는 `Models` 탭을 클릭하십시오. `Model Export Directory`를 쉽게 찾을 수 있는 곳으로 변경하십시오. 
`Mesh Format`를 `ActorX (psk / pskx)`로 변경하십시오. `Texture Format`를 `PNG`으로 변경하십시오. `Ok`를 클릭하고 FModel을 다시 시작하십시오.

*****
이제 게임 파일을 자유롭게 탐색하고 내보낼 수 있습니다! 내보낼 파일을 찾으려면 가이드의 다음 섹션 중 하나로 이동하십시오:

* [Exporting and modifying 3D assets (Pals, items, etc..)](https://pwmodding.wiki/docs/asset-swapping/ExportingModifying3DAssets)
* [[WIP] Exporting and replacing 3D assets (Pals, items, etc..)](https://pwmodding.wiki/docs/asset-swapping/ExportingReplacing3DAssets)
* [[WIP] Exporting and modifying 2D assets (Icons, HUD elements, images)](https://pwmodding.wiki/docs/asset-swapping/ExportingModifying2DAssets)
* 애니메이션은 가능한지 확실하지 않습니다. 아직 시도해보지 않았습니다. 진행 중인 작업입니다.