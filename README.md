# TEKLA_Initial

북유럽 감성의 라이프스타일 브랜드 'Tekla'에서 영감을 받아 제작한 반응형 웹 UI 클론 프로젝트입니다.

## 프로젝트 소개

모바일 환경에 적합한 간단한 브랜드 사이트를 구성해보며 UI 설계와 컴포넌트 구조화를 연습한 프로젝트입니다.

- 온보딩 흐름을 포함한 로고 애니메이션과 질문 기반 Step UI 구성
- 홈 화면에서는 제품 카드와 배너, 추천 제품 등으로 콘텐츠를 구성
- 제품 상세 페이지에선 이미지 슬라이더 및 관련 제품 리스트 구현
- `Splash` 및 `Step Navigation` UI는 직접 디자인했고, 간단한 인터랙션도 넣어보았습니다

## 기술 스택

- Next.js (App Router)
- TypeScript
- Framer Motion
- CSS Modules
- json-server (API 서버, Railway 사용)
- Vercel (배포)

## 데모

[https://tekla-initial.vercel.app](https://tekla.vercel.app/)
※ 최초 방문 시 온보딩 화면과 스텝네비게이션(2가지 선택시 다음화면 진입)이 나타나며, 이후에는 바로 홈으로 진입합니다.

## 폴더 구조

이 프로젝트는 작은 규모지만, 실무에서 사용하는 방식처럼 **역할별로 컴포넌트를 세분화**해 폴더를 구성했습니다.
이런 구조를 통해 유지보수성과 가독성을 고려한 구조 설계를 연습해보고자 했습니다.

components/
├── common/ # 공통 UI 요소 (버튼, 헤더, 푸터 등)
├── home/ # 홈 화면 구성 요소
├── ProductDetail/ # 제품 상세 페이지 관련 컴포넌트
├── onboarding/ # 온보딩 및 Step 선택 UI
└── layouts/ # 전체 레이아웃 틀 (예: MobileLayout 등)

pages/
├── index.tsx # 홈 페이지
├── products/[id]/index.tsx # 제품 상세 페이지 (동적 라우팅)
└── onboarding/
├── splash/index.tsx # 스플래시 화면
└── steps/index.tsx # 스텝 네비게이션

styles/
└── globals.css # 전역 스타일

## 참고

- 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다.
- 모든 UI는 직접 설계하고, 기본적인 상태 관리 및 사용자 흐름 구현에 중점을 두었습니다.
- json-server를 활용한 Mock API와 Vercel 환경변수 설정을 통해 배포 환경까지 구성하였습니다.
