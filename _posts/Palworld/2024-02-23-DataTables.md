---
date: 2024-02-23 00:01:10
layout: post
title: 팰월드 모드 제작법10
subtitle: 데이타테이블
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

# 데이타 테이블
*****
데이터 테이블은 정보의 모든 흥미로운 부분을 담고 있습니다. 
때로는 그것들을 검색하거나 정확히 어떤 정보가 저장되어 있는지 알고 싶을 때가 있습니다. 
따라서 그것들을 찾는 방법을 알아야 합니다. 일반적으로 할 일은 검색하고자 하는 문자열을 찾아서 VSCode에서 헤더 파일을 검색하는 것처럼 해당 폴더를 검색하는 것입니다.

매우 간단한 예를 들면, 내 가전 제품 모드에서 팰들이 전기 히터와 상호 작용하지 않도록 제어한 방법은 `AssignDefineDataId` 속성을 할당할 수 없는 값으로 변경하는 것이었습니다.
그 값을 어떻게 할당해야 하는지를 파악한 방법은 무엇이었을까요?

저는 빠르게 `DataTables`에서 원래 ID인 `ElectricHeater_0`을 검색했습니다. 이를 통해 모든 할당 가능한 ID 목록이 있는 `DT_MapObjectAssignData`로 이동했습니다. 그런 다음 할당할 수 없는 것을 찾아보았고 다행히도 `PalStorage_0`를 찾았습니다. `PalStorage_0`에는 `EPalWorkSuitability::None`이 있습니다. 히터의 작업 작업의 `AssignDefineDataId`를 `PalStorage_0`으로 변경함으로써, 팰들은 더 이상 해당 히터에서 작업하거나 할당되지 않습니다.

이것이 필요한 정보를 얻기 위해 DT(데이터 테이블)를 검색하는 방법의 간단하고 간결한 예제입니다.

>**Note**
현재는 `DataTables`를 읽기만 할 수 있습니다. 수정 기능은 곧 출시될 예정이며, 희망적으로 UE4SS 3.1에서 제공될 것입니다. 
`DataTable` 개발 로그를 읽으면 관련 배경 정보를 더 얻을 수 있습니다.