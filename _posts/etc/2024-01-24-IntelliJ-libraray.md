---
date: 2024-01-24
layout: post
title: 인텔리J에 외부 라이브러리 추가하는 법
subtitle: 인텔리J를 IDE로서 외부 라이브러리를 사용해보자
description: >-
image: 
  'assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ_title.png'
optimized_image:    
  'assets/img/uploads/2024/jan/2024-01-24-intelliJ/p_IntelliJ_title.png'
category: etc
tags:  [ intelliJ, SQLight ]
author: sammy
paginate: true
---

# 자바로 SQLight를 쓰려면?

## JDBC란 ?  

- JDBC 는 Java DataBase Connectivity 의 약자.
- 자바 코드로 데이터베이스 프로그래밍을 하기 위한 라이브러리.
- API는 JDK에서 제공하지만 직접 프로그래밍을 하려면 JDBC드라이버가 필요함.
- 일반적으로 압축 파일 Jar 로 제공되며 IDE에 외부 라이브러리로 추가 할 수 있음.
- 인텔리J를 사용해 SQLite JDBC를 다운 받아 추가해보도록 하자.
- 아래 링크를 통해 Assets 항목의 sqlite-jdbc-3.45.0.0.jar 파일을 [다운로드](https://github.com/xerial/sqlite-jdbc/releases/tag/3.45.0.0)
  

# 인텔리J에서 자바 프로젝트에 쓰일 외부 라이브러리 추가하기

## 1. File -> Project Structure  
  * ![image1](../assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ1.png)

## 2. Module -> Java Project -> Dependencies
  * ![image2](../assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ2.png)
   
## 3. + button -> JARs or 디렉토리    
  * ![image3](../assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ3.png)
     
## 4. 추가할 JAR 라이브러리를 디스크에서 선택
  * ![image4](../assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ4.png)
     
## 5. 확인 버튼을 눌러 적용
  * ![image5](../assets/img/uploads/2024/jan/2024-01-24-intelliJ/IntelliJ5.png)
