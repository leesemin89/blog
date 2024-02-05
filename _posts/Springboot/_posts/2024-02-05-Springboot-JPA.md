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
* SQL 쿼리문과 ORM 코드를 보면, Question이라는 테이블에 id,subject,contect라는 열이 있다고 가정합니다.
* id | subject | content
  ---|---|---
    1|안녕하세요|가입인사드립니다.
    2|질문있습니다|ORM이 뭔가요?
    ...|...|...
* SQL 쿼리를 사용해 question 테이블에 데이터를 저장하려면 다음과 같습니다.
  ```SQL
  insert into question(id, subject, content) values (1, '안녕하세요', '가입인사드립니다');
  insert into question(id, subject, content) values (2, '질문있습니다', 'ORM이 뭔가요?');
  ```
ORM 코드를 사용해 위의 SQL 쿼리를 대체할 수 있습니다.  
```java
    Question q1 = new Question();
    q1.setId(1);
    q1.setSubject("안녕하세요");
    q1.setContent("가입인사드립니다");
    this.questionRepository.save(q1);

    Question q2 = new Question();
    q2.setId(2);
    q2.setSubject("질문있습니다");
    q2.setContent("ORM이 뭔가요?");
    this.questionRepository.save(q2);
```
 * 데이터를 관리하는데 쓰는 ORM의 자바클래스를 엔티티(Entity) 라고 하며 데이터베이스의 테이블과 매핑되는 자바 클래스입니다.
 * ORM을 사용하면 MySQL,오라클 DB, MS SQL 등 DBMS의 종류에 관계없이 일관된 자바코드를 사용해 유지보수가 쉬워지며, 코드 내부에서 안정적인 SQL 쿼리문을 자동작성하므로 통일된 쿼리문을 작성할 수 있습니다.

# JPA는 뭔가요?
스프링부트는 JPA(java Persistance API)를 사용해 ORM 표준으로 사용합니다.
JPA는 인터페이스의 모음으로서 이 인터페이스를 구현할 실제 클래스가 필요합니다.
JPA를 구현한 실제클래스는 대표적으로 하이버네이트(Hibernate)가 있으며, 하이버네이트는 JPA의 인터페이스를 구현한 실제 클래스이자 자바의 ORM 프레임워크로서 스프링부트에서 DB관리를 쉽게 하도록 도와줍니다. 

# H2 데이터베이스 설치하기
JPA를 사용하기 위해선 DB를 먼저 설치해야 하는데 여기에서는 간편한 H2 데이터베이스를 사용합니다. 
* H2 데이터베이스는 자바기반의 경량 DBMS입니다.
* 실무 개발에서는 더 규모있고 굵직한 MySQL 등을 사용합니다.

1. `build.grade` 파일에 다음과 같이 입력해 H2 데이터베이스를 설치합니다.
```java
dependencies { 
  implementation 'org.springframework.boot:spring-boot-starter-web' 
  testImplementation 'org.springframework.boot:spring-boot-starter-test'
  developmentOnly 'org.springframework.boot:spring-boot-devtools' 
  compileOnly 'org.projectlombok:lombok' 
  annotationProcessor 'org.projectlombok:lombok'
  runtimeOnly 'com.h2database:h2'
}
```
