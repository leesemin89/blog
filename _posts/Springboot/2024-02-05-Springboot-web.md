---
date: 2024-02-05 00:01:00
layout: post
title: "[스프링부트 시리즈5]간단한 웹 프로그램 제작하기"
subtitle: 간단한 웹 프로그램을 만들어보자.
description: 
image: 
  '../assets/img/uploads/2024/feb/2024-02-02-springboot-structure/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-02-springboot-structure/p_title.jpg'
category: [Springboot]
tags:
author: sammy
paginate: true
---

# 간단한 웹 프로그램 만들기

웹브라우저에서 `http://localhost:8080/sbb` 요청시 'Welcome to SBB.' 라는 문장 출력되도록 만들기.
## URL 매핑과 컨트롤러 이해하기

1. 인텔리제이의 로컬서버 구동하기
  * 컨트롤러의 로컬서버 구동법이 기억나지 않는다면 -> [바로가기](https://leesemin89.github.io/blog/SpringBoot/#%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-%EB%A7%8C%EB%93%A4%EA%B8%B0)
2. `http://localhost:8080/sbb` 페이지 요청하기
  * ![404](../assets/img/uploads/2024/feb/2024-02-05-web/1.whitelabel.png)
  로컬서버가 구동중이지만 로컬호스트 연결 요청시 페이지를 찾을 수 없다는 404 오류가 발생합니다.

## 컨트롤러를 만들어 URL 매핑하기
클라이언트 요청 발생시 서버역할의 스프링부트가 응답해야하기 때문에 URL이 스프링부트에 매핑되어있어야 합니다.
따라서 스프링부트에 URL 매핑을 하는 도구가 바로 컨트롤러입니다.
1. src/main/java 디렉터리의 `com.mysite.sbb` 패키지에 `MainController.java` 파일 작성하기
  * MainController 클래스에 `@Controller` 애너테이션을 적용하면 MainController 클래스는 스프링부트의 컨트롤러가 됩니다.
  * index 메서드의 `@GetMapping` 애너테이션을 적용하면 URL(/sbb)와의 매핑이 됩니다.
  * 웹 브라우저 요청 시 스프링부트가 매핑된 메서드를 찾아 실행합니다.
  * 즉, 웹 브라우저가 `http://localhost:8080/sbb` 요청을 보내면 MainController 클래스가 /sbb와 매핑되는 index를 찾아 실행합니다.
  * `@GetMapping`에는 도메인명과 포트를 적지 않습니다.  
2. 다시 `http://localhost:8080/sbb` URL을 요청을 보내기
  * ![500](..\img\2024\feb\2024-02-05-web\2.whitelabel500.png)
  * 이번에 발생하는 오류는 404 가 아닌 500 오류코드가 발생합니다.
  * index 메서드가 원래 URL과 매핑된 메서드는 결과값을 리턴해야 하지만 아무 값도 리턴되지 않아 발생한 것입니다.
  * 즉, 오류를 해결하려면 결과값을 리턴해야 합니다.
  * 콘솔 로그를 살펴보면 index 메서드가 실행한 System.out.println("index")가 실행되어 index라는 문자열이 출력되었으므로, index 메서드가 호출된 것을 확인할 수 있습니다. 
  * ![로그](..\img\2024\feb\2024-02-05-web\3.indexlog.png) 
3. 아래와 같이 MainController.java를 수정하기  
  ```java
    package com.mysite.sbb;

    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.ResponseBody;

    @Controller
    public class MainController {

        @GetMapping("/sbb")
        @ResponseBody
        public String index() {
            return "index";
        }
    }
  ```
  * 'index'라는 문자열을 브라우저에 출력하기위해 index 메서드의 리턴 자료형을 String을 변경하고, 문자열 'index'를 리턴했습니다.
  * @ResponseBody 애너테이션은 URL 요청에 대한 응답으로 문자열을 리턴하라는 의미입니다.
  * 만약, @ResponseBody 애너테이션이 없다면 스프링부트는 'index' 문자열을 리턴하지 않고, 대신 index라는 이름의 템플릿파일을 찾게 됩니다.
4. 오류가 해결되었다면 다시 웹 브라우저에서 `http://localhost:8080/sbb` URL을 호출해보기
  * ![인덱스](..\img\2024\feb\2024-02-05-web\4.index.png)
5. MainController.java를 수정해 'Welcome to SBB.' 출력하기
   ```java
   package com.mysite.sbb;
    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.ResponseBody;

    @Controller
    public class MainController {

        @GetMapping("/sbb")
        @ResponseBody
        public String index() {
            return "Welcome to SBB.";
        }
    }
   ```
6. 브라우저에서 변경된 문자열의 출력확인하기
  * ![문장](..\img\2024\feb\2024-02-05-web\5.returntxt.png)