---
date: 2024-02-21 00:01:00
layout: post
title: "[스프링부트 시리즈14] URL 프리픽스 알아보기 "
subtitle:  
description: 
image: 
  'assets/img/uploads/2024/feb/2024-02-02-springboot-structure/title.jpg'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-02-springboot-structure/p_title.jpg'
category: springboot
tags:  [ intelliJ, springboot, devlog, repository ]
author: sammy
paginate: true
---
# URL 프리픽스 알아보기
*****
이제 질문 상세 페이지에서 답변을 입력할 수 있도록 프로그램을 만들어 볼 것이다. 이와 같은 내용을 배우기 전에 `QuestionController.java`의 URL 매핑을 잠시 살펴보자

현재 `QuestionController.java`에는 다음 2개의 URL이 매핑되어 있다.

1. `@GetMapping("/question/list")`
2. `@GetMapping(value = "/question/detail/{id}")`

> URL 매핑 시 value 매개 변수 생략가능.

URL의 프리픽스가 모두 `/question`으로 시작한다는 것을 알 수 있다. 
프리픽스(prefix)란 URL의 접두사 또는 시작 부분을 가리키는 말로, 
`QuestionController`에 속하는 URL 매핑은 항상 `/question` 프리픽스로 시작하도록 설정할 수 있다. `QuestionController` 클래스명 위에 다음과 같이 `@RequestMapping("/question")` 애너테이션을 추가하고, 
메서드 단위에서는 `/question`을 생략하고 그 뒷부분만을 적으면 된다.

이 내용을 바탕으로 다음과 같이 `QuestionController.java`를 수정해 보자.  
>[파일명:/question/QuestionController.java]

```java
(... 생략 ...)
import org.springframework.web.bind.annotation.RequestMapping;
(... 생략 ...)

@RequestMapping("/question")
@RequiredArgsConstructor
@Controller
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/list")
    public String list(Model model) {
        (... 생략 ...)
    }

    @GetMapping(value = "/detail/{id}")
    public String detail(Model model, @PathVariable("id") Integer id) {
        (... 생략 ...)
    }
}
```
`list` 메서드의 URL 매핑은 `/list`이지만 `@RequestMapping` 애너테이션에서 이미 `/question` URL을 매핑했기 때문에 /`question` + `/list`가 되어 최종 URL 매핑은 `/question/list`가 된다. 
그러므로 이와 같이 수정하면 기존과 완전히 동일하게 URL 매핑이 이루어진다.
다만, 앞으로 `QuestionController.java`에서 URL을 매핑할 때 반드시 `/question`으로 시작한다는 것을 기억해 두자.

> 사실 `RequestMapping`을 통한 URL 프리픽스는 선택 사항이다. 여기서는 프리픽스를 사용하는 것이 더 편리하기 때문에 다룬 것이다. 다른 프로젝트를 진행할 때는 컨트롤러의 성격에 맞게 프리픽스 사용 여부를 결정하자.
