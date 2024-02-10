---
date: 2024-02-09
layout: post
title: 지킬 블로그 로컬호스트 구동문제
subtitle:  bash를 사용해 로컬호스트 서버를 작동했을때 문제해결
image: 
  '../assets/img/uploads/2024/feb/2024-02-09-localhost/title.png'
optimized_image:    
  'assets/img/uploads/2024/feb/2024-02-09-localhost/p_title.png'
category: [ blog ]
tags: [ locahost, Blog ]
author: sammy
paginate: true
---

# 지킬 블로그 로컬호스트 서버 구동시 발생한 문제해결

## _config.yml의 baseURL 과 URL 올바른 설정.
최근 이 블로그에서 로컬호스트 서버를 구동해 `127.0.0.1` 로 접속해 프리뷰를 할 경우 작동이 되거나 안되거나 하는 등의 문제가 발생했기 때문에 이 포스트를 따로 작성합니다.

1. _config.yml 파일을 아래와 같이 설정합니다.
    * baseurl에는 이 블로그 경로가 `github/blog` 이므로 `/blog`를 설정합니다.
    * url에는 내 블로그의 주소를 설정합니다. 

    * ![config](../assets/img/uploads/2024/feb/2024-02-09-localhost/main/1.config.png)

이렇게 설정하면 bash 에서 이러한 에러메시지를 뿜습니다.

2. 이 블로그의 원 제작자가 설정해둔 경로가 달라졌기 때문에 에러메시지가 발생한 부분을 찾아 앞에 `/blog`를 붙여해 올바른 경로를 만듭니다.
    * ![배쉬](../assets/img/uploads/2024/feb/2024-02-09-localhost/main/2.bash.png)
    * ![에러](../assets/img/uploads/2024/feb/2024-02-09-localhost/main/3.address.png)

