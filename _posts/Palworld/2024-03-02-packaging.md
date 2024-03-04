---
date: 2024-03-01 00:01:10
layout: post
title: 팰월드 모드 제작법15
subtitle: UE5에서 모드 패키징
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

# UE5에서 모드 패키징 
*****
이 포스트는 해당 문서의 도움을 받았습니다
>https://www.abbiedoobie.com/2023/10/13/modding-robocop-rogue-city-and-other-ue-5-games/

![런치](../assets/img/uploads/2024/mar/1.png)
언리얼 엔진 5.11을 켭니다.

새 프로젝트를 만드는 방법은 다음과 같습니다: 
`게임(Game) -> 빈 프로젝트(Blank Project)`를 선택한 후, 프로젝트 이름을 `Pal`로 정확히 지정합니다. 
(프로젝트 이름이 'Pal'로 지정되어야 모드가 로드됩니다!) 프로젝트의 기본 설정은 다음과 같이 유지됩니다:
* `Blueprint`
* Target Platform: `Desktop`
* Starter Content: `unchecked`
* Raytracing: `unchecked`
![런치](../assets/img/uploads/2024/mar/2.png)

화면 상단의 `Platforms`을 클릭한 후, 'Packaging Settings`을 클릭하십시오.
![플랫폼](../assets/img/uploads/2024/mar/3.png)

`Use Io Store`를 선택 해제하고 `Generate Chunks`를 선택하십시오.
![스토어](../assets/img/uploads/2024/mar/4.png)

검색 창에 `Cook everything`을 입력한 후 `Cook everything in the project content directory (…)`를 선택하십시오.
![쿡](../assets/img/uploads/2024/mar/5.png)


FModel의 폴더 구조와 `mathcing`하는 폴더 구조를 만들어야 합니다. 
Content Browser가 이미 `Content`에서 시작하기 때문에 `Pal\Content\`를 무시하십시오. 
예를 들어, Depresso 모델, 본문 텍스처 및 눈 텍스처를 수정했으므로 이러한 파일에 도달할 수 있는 폴더 구조를 만들어야 합니다.
![구조](../assets/img/uploads/2024/mar/6.png)
![gif](../assets/img/uploads/2024/mar/7.gif)

이제 수정된 파일을 해당하는 폴더에 모두 넣으십시오. 
가능하다면, 한 폴더에 들어가는 파일을 한 번에 모두 넣으십시오. 그런 다음 "Import All"을 클릭하고, FBX 가져오기 오류를 닫으십시오.![gif](../assets/img/uploads/2024/mar/8.gif)

현재 텍스처가 제대로 표시되지 않는 이유는 투명한 소재를 수동으로 설정해주어야 하기 때문입니다. 
일반적으로 투명한 텍스처(눈, 입 등)가 있는 소재(구)를 더블 클릭하여 열고, Blend Mode를 Translucent로 변경하고 A(알파)를 투명도(Opacity)에 연결하십시오.
![구조](../assets/img/uploads/2024/mar/9.png)

필요한 모든 소재에 대해 해당 작업을 수행한 후, 모든 변경 사항을 저장해야 합니다. 
이를 위해 우측 하단에 있는 "저장(Save)" 버튼을 클릭하십시오.

![구조](../assets/img/uploads/2024/mar/10.png)

원본 FModel에서 사용된 이름과 정확히 동일한 이름을 가진 모든 파일을 사용해야 합니다.

예를 들어:
* **DeprivedDepresso**는 **SK_NegativeKoala**가 되어야 합니다.
* **DeprivedDepresso_PhysicsAsset**은 **PA_NegativeKoala_PhysicsAsset**이 되어야 합니다.
* **DeprivedDepresso_Skeleton**은 **SK_NegativeKoala_Skeleton**이 되어야 합니다.


또한 SK_NegativeKoala_Skeleton은 원래 다른 폴더에 있었으므로 새 폴더를 만들고 현재 위치에서 이를 이동해야 합니다. 항상 경로와 파일 이름이 매우 중요하다는 점을 염두에 두십시오.
![경로](../assets/img/uploads/2024/mar/11.png)

![브라우저](../assets/img/uploads/2024/mar/12.png)

모든 작업을 완료한 후, 모든 변경 사항을 저장하세요. 이를 위해 오른쪽 하단에있는 "저장(Save)" 버튼을 클릭하십시오.
그런 다음 Content 폴더로 돌아가서 마우스를 오른쪽으로 클릭하고 Miscellaneous를 호버하신 후, Data Asset을 클릭하십시오
![데이타에셋](../assets/img/uploads/2024/mar/13.png)

**PrimaryAssetLabel**을 선택하세요.
![선택](../assets/img/uploads/2024/mar/14.png)

데이터 에셋을 "Label_YourModName"으로 이름짓으십시오. 예를 들어, "Label_DeprivedDepresso"로 이름을 지정할 수 있습니다. 그런 다음 해당 데이터 에셋을 더블 클릭하여 열고 다음과 같은 변경 사항을 적용하십시오:

- 우선순위(Priority)를 1 이상으로 설정합니다.
- 청크 ID(Chunk ID)를 1000 이상으로 설정합니다. 이는 최종 모드 .pak에서 다른 .pak 파일과 구별하는 데 도움이 될 것입니다.
- Cook Rule을 항상 쿡(Always Cook)로 설정합니다.
- 내 디렉토리에 있는 에셋(Label Assets in My Directory)을 확인합니다.

모든 변경 사항을 저장한 후, 하단 오른쪽에 있는 "저장(Save)" 버튼을 클릭하십시오. 그런 다음 Platforms로 이동하여 Windows를 선택한 후, Shipping을 클릭하십시오. 그리고 다시 Platforms로 돌아가서 Windows를 선택하고 Package Project를 클릭하십시오. 이렇게 하면 모드가 패키징되기 시작합니다. 패키징에는 시간이 걸리므로 차를 마시며 기다리십시오!
![뚱코알라](../assets/img/uploads/2024/mar/15.png)

패키징이 완료되면 "Windows"라는 폴더가 생성될 것입니다. 해당 폴더로 이동하여 다음 경로를 따라 들어가십시오: `Windows -> Pal -> Content -> Paks. Paks` 폴더에는 일반적으로 두 개의 .pak 파일이 있을 것입니다. 하나는 `pakchunk0-Windows`이고, 다른 하나는 사용자의 `.pak` 파일일 것입니다. 
Chunk ID를 1000으로 설정했기 때문에 제 .pak 파일은 보통 pakchunk1000-Windows입니다. 이제 게임의 로컬 파일로 이동해야 합니다.
![로컬파일](../assets/img/uploads/2024/mar/16.png)
단순히 .pak 파일을 `D:\Palworld\Pal\Content\Paks`로 복사하고, 해당 파일의 이름을 YourModName_P로 변경하십시오. 그러면 모드가 로드됩니다. (당신의 .pak 파일 이름은 "_P"로 끝나야만 로드됩니다. 그렇지 않으면 로드되지 않습니다.) 이제 Palworld를 시작하고, 여러분의 아름다운 창작물을 즐기십시오.

## 문제 및 해결책
문제가 발생하고 해결책을 찾은 경우, Discord에서 kurama0에게 DM을 보내주시면 해당 문제와 해결책을 여기에 추가할 수 있습니다!