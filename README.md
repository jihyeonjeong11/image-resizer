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
