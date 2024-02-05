---
date: 2024-02-05 00:02:00
layout: post
title: "[스프링부트 시리즈6]JPA로 DB 사용하기"
subtitle: 데이터베이스 사용하는 방법.
description: 
image: 
  https://github.com/leesemin89/blog/blob/master/img/2024-02-02-springboot-structure/title.jpg?raw=true
optimized_image:    
  https://github.com/leesemin89/blog/blob/master/img/2024-02-02-springboot-structure/p_title.jpg?raw=true
category: devlog
tags:
    - devlog
    - intelliJ
    - Springboot
    - devtool    
  
author: sammy
paginate: true
---

# JPA로 DB 사용하기
SBB는 방문자가 질문이나 답변을 남길 수 있는 게시판 서비스입니다. 방문자가 글을 작성하면 데이터가 생성되는데 이런 데이터를 작성하려면 저장 및 조회 등의 기능을 구현해야 합니다.  
대부분의 웹 서비스들은 이를 관리하기 위해 DB를 사용하는데 DB 관리는 SQL이라는 언어를 통해서 이루어지지만 DB는 자바를 이해하지 못합니다.  
따라서 ORM(Object Relation Mapping)이라는 툴을 사용해 자바 문법으로 직접 DB를 다룰 수 있습니다.

## ORM, JPA 이해하기
* ORM이란 DB의 테이블을 자바 클래스로 만들어 관리할 수 있습니다.
* SQL 쿼리문과 ORM 코드를 비교해봅시다.
* id | subject | content
  ---|---|---
    1|안녕하세요|가입인사드립니다.
    2|질문있습니다|ORM이 뭔가요?
    ...|...|...