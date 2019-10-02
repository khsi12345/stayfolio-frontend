이 프로젝트는 wecode3기 2차 프로젝트 we_r_bnb팀의 결과물입니다.

최신 트렌드로 여행, 스포츠, 레져 등이 늘어남에 따라 집 밖에서 활동했을 때 머무를 수 있는  
stay 공간이 필요 및 수요 증가.  
많은 사용자가 있을것으로 생각된 stayfolio를 Clone 한 we_r_bnb

프로젝트 기술  
JS / react / styled-components / scss / react-router / CRUD(axios) / react-helmet  
react-responsive-carousel / react-router / redux / react-redux / EC2 / AWS

convention  
esLint(airbnb) / prettier

component에 대해 이해하고 구분 및 적용  
초기 css style의 통일성을 위해 styled-components에서 제공해주는 styled-reset 적용

공통적으로 사용되는 함수는 Util 폴더에 모듈화해서 사용  
api 호출 함수들 Util 폴더에 service.js에 모듈화해서 사용

package.json 파일에 scripts에 NODE_PATH 설정하고 import 할 때 절대 경로 사용

주요 Page는

회원가입 : 회원가입을 하는 페이지  
로그인 : 로그인을 하는 페이지 / 페이스북 소셜 로그인 기능  
메인 : 매거진, 픽에서 보여주는 데이터를 부분적으로 보여주는 페이지 / slick 라이브러리로 slider 적용  
어바웃 : stayfolio를 소개하는 글, youtube 동영상을 보여주는 페이지 / iframe 사용  
픽 : 사용자가 머무게 될 stay들을 보여주는 페이지 / item 이미지에 애니메이션 적용, 간단한 pagination 적용  
픽 상세 : stay의 상세 정보를 보여주는 페이지 / react-responsive-carousel 라이브러리로 slider 적용, comment 기능, 카카오 맵 기능  
부킹 : 머무르기로 결정한 stay를 예약하는 페이지 / moment.js 적용, react-date 적용, redux 적용

주요 기능은

페이스북 소셜 로그인 : 페이스북 계정 or 핸드폰 번호로 입력해서 로그인 가능  
comment : comment 작성, 수정, 삭제 가능 / 작성 시간 표시 / 로그인
카카오 맵 : stay 좌표 데이터를 사용해 stay 위치를 표시  
부킹 : 사용자에게 달력 view 제공, stay 예약 가능, 예약 완료 시 알림 토스트 기능  
페이지네이션 : 픽 페이지 하단에 페이지 버튼을 클릭하면 새로운 stay들을 보여주는 기능  
슬라이더 : 라이브러리를 사용해서 slider 기능 구현  
custom.scss : 라이브러리를 사용했는데 스타일 수정이 필요하여 custom.scss를 생성하여 적용
