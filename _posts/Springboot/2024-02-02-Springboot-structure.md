---
date: 2024-02-02 00:00:10
layout: post
title: "[스프링부트 시리즈4]스프링부트 프로젝트 구조 이해하기"
subtitle: 스프링부트를 사용한 프로젝트 구조는 어떻게 되어있을까?
description: 
image: 
  https://github.com/leesemin89/blog/blob/master/img/2024-02-02-springboot-structure/title.jpg?raw=true
optimized_image:    
  https://github.com/leesemin89/blog/blob/master/img/2024-02-02-springboot-structure/p_title.jpg?raw=true
category: [Springboot]
tags:
author: sammy
paginate: true
---


# 스프링부트 프로젝트 구조 이해하기

![구조](https://github.com/leesemin89/blog/blob/master/img/2024-02-02-springboot-structure/1.png?raw=true)

## src/main/java 디렉터리 살펴보기
- src/main/java 디렉터리는 자바 파일을 저장하는 공간입니다.

## com.mysite.sbb 패키지
- SBB의 자바 파일을 저장하는 공간입니다. 
- 스프링부트의 컨트롤러 및 폼, DTO, 엔티티 등의 자바 파일을 저장합니다.

## SbbApplication.java 파일
- 스프링부트에서 시작을 담당하는 파일입니다.
- `프로젝트명 + Application.java` 파일이 각 프로젝트의 시작을 담당하는 파일명이 됩니다. 
- 스프링부트 프로젝트 생성 시 프로젝트 명을 sbb로 하면 sbbApplication.java 파일이 자동생성 됩니다.  

```
package com.mysite.sbb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SbbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SbbApplication.class, args);
	}
}
```  
SbbApplication 클래스는 반드시 @SpringbootApplication 애너테이션이 적용되어 있어야만 합니다.  
이 애너테이션을 통해 스프링부트 애플리케이션이 시작됩니다.

## src/main/resource 디렉터리 살펴보기
- src/main/resource 디렉터리는 자바 파일을 제외한 HTML, CSS, JS, 환경 파일 등을 저장합니다.

## template 디렉터리 살펴보기
- src/main/resource 디렉터리의 하위 디렉터리인 템플릿 디렉터리에는 템플릿파일을 저장합니다.
- 템플릿 파일은 자바 코드를 삽입할 수 있는 HTML 형식의 파일로서, 스프링부트에서 생성한 자바 객체를 HTML 형태로 출력합니다.
- 템플릿에는 SBB 게시판 서비스에 필요한 질문 목록, 질문 상세 등의 웹페이지를 구성하는 HTML 파일을 저장합니다.

## static 디렉터리 살펴보기
- static 디렉터리에는 sbb 프로젝트의 스타일시트I(css), 자바스크립트(js), 이미지(jpg, png등)을 저장합니다.

## application.properties 파일 
- application.properties 파일은 sbb 프로젝트의 환경설정 파일입니다. 
- 환경 변수, db 설정 등을 저장합니다.

## src/test/java 디렉터리 살펴보기
- sbb 프로젝트에서 작성한 파일을 테스트하는 코드를 저장하는 공간입니다.
- JUnit과 스프링부트의 테스트 도구를 사용해 서버를 실행하지 않고도 src/main/java 디렉터리의 코드를 테스트 할 수 있습니다.

 * JUnit은 테스트코드를 작성 및 실행할 때 쓰이는 자바 테스트 프레임워크입니다.

## build.gradle.kts 파일 살펴보기
- `build.gradle.kts`는 그레이들이 사용하는 환경파일로 프로젝트에 필요한 플러그인과 라이브러리를 설치하기 위한 내용을 작성합니다.
  