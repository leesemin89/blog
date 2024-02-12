---
date: 2024-02-10 00:02:10
layout: post
title: 팰월드 모드 제작법5
subtitle: 루아모드 구조에 대해 알아보자
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

