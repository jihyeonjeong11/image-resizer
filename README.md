12/04 시작

https://excalidraw.com/

유저스토리 분석

image resizer

1. image resizer

a. 유저는 페이지에 진입,
a-1. 이미지 버튼을 눌러 파일 선택
a-2. 드래그 앤 드롭으로 이미지 선택
a-3. 화살표 버튼을 누르고 from device(a-1과 동일), from dropbox, from google drive, from URL 을 통해 이미지 선택.

b. 이미지 업로드 시 성공했다면 아래 byte 표시뒤 완료되면 리사이즈 모달 표시
b-2. 실패했을 시, 에러 모달 표시. 이미지는 jpg, jpeg, png, webp 파일만 허용함.
b-3. 성공한다면 메뉴 표시

c. 리사이즈, 크롭, 플립 로테이트
이부분은 이미지로? 영상으로?

여기서부터 다시

eslint 추가 vercel 공식 가이드로 추가함
https://github.com/vercel/style-guide

lint 필수 룰 추가, option값 차후 생각해봄

글로벌 side menu
https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates

tailwinds 테마 설정.
css global reset - tailwinds 기본으로 제공
color - 실제 기능 추가하면서 잡을 예정. 12/07

errorboundary

https://nextjs.org/docs/app/building-your-application/routing/error-handling

expected errors는 추후 서버쪽과 함께 추가

클라쪽 에러는 실제 docs에서 보여주는 ErrorBoundary 예시 타입이 맞지않음

https://dev.to/rajeshkumaryadavdotcom/understanding-error-boundaries-in-nextjs-a-deep-dive-with-examples-fk0
로 클래스기반 컴포넌트를 만듬,

허스키

다커

아래 두개는 좀 있어도..

next 폴더 스트럭쳐 확인하기

12/16

서버 액션

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
https://react.dev/reference/rsc/server-functions

서버 컴포넌트 - Server Components are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app or SSR server.
서버 펑션 - Server Functions are for use in React Server Components.
클라이언트 레이어에서 요청하는 서버의 작업
서버 액션 - Until September 2024, we referred to all Server Functions as “Server Actions”.
서버 펑션의 하나로, form에서 요청하는 action의 형태로 작동함.
서버 뮤테이션 - 서버 액션의 하나. 데이터 뮤테이션에 사용.

웹소켓

https://dev.to/digitalpollution/building-real-time-applications-with-nextjs-134-server-actions-cd4
https://socket.io/how-to/use-with-nextjs

업로드 프로그레스 추가 중..

1. 웹소켓 프로토콜 추가
2. 업로드 시 소켓 연결
3. 서버에서 프로그래스 내려줌
4. 완료

12/17 vercel 에서 안되므로 axios에서 구현함.

1. axios 추가 upload 숫자로 구현 // 구현
2. nextjs 폴더 스트럭쳐로 리팩토링
3. 바 디자인 만들기

에러 모달 만들기
