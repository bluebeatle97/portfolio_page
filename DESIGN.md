# design.md

# 포트폴리오 디자인 및 구조 가이드

## 1. 프로젝트 방향

이 포트폴리오는 1회성 랜딩 페이지가 아니라, 이후 프로젝트를 계속 추가할 수 있는 **프론트엔드 기반 포트폴리오 사이트**로 제작한다.

단, 현재 단계에서는 DB, 관리자 페이지, CMS는 만들지 않는다.
프로젝트 데이터는 `src/data/projects.js` 파일에서 관리하고, 화면은 해당 데이터를 기반으로 자동 렌더링한다.

핵심 목표는 다음과 같다.

> 기획, 연출, 개발, AI 활용 역량을 한 페이지 안에서 자연스럽게 보여주고, 프로젝트 카드를 클릭하면 모달로 상세 내용을 확인할 수 있는 포트폴리오 사이트를 만든다.

---

## 2. 핵심 컨셉

### 메인 메시지

> 기획과 구현 사이를 연결하는 AI 활용형 개발자

### 서브 메시지

> 웹 서비스 기획부터 인터랙티브 콘텐츠 연출, 프론트엔드 구현, AI API 활용까지
> 아이디어를 실제 사용 가능한 결과물로 구체화하는 프로젝트를 만들어 왔습니다.

---

## 3. 디자인 톤앤매너

### 전체 분위기

* 깔끔함
* 실무적
* 가독성 중심
* 과하지 않은 인터랙션
* AI 느낌은 있되 과장되지 않음
* 개발자 포트폴리오의 신뢰감
* 기획자의 구조화 능력

### 색상 방향

* 기본 배경: White / Off-white
* 보조 배경: 아주 연한 Blue / Gray
* 포인트 컬러: Blue 또는 Blue-Purple 계열
* 텍스트: 거의 검정에 가까운 진한 Gray
* 서브 텍스트: 중간 Gray

### 피해야 할 것

* 과한 그라데이션
* 너무 많은 애니메이션
* 네온 느낌 과다 사용
* 카드가 너무 난잡한 디자인
* AI가 쓴 듯한 과장 문구
* 지나치게 추상적인 자기소개

---

## 4. 전체 페이지 구성

메인 페이지는 다음 순서로 구성한다.

1. Header
2. Hero Section
3. About Section
4. Core Strength Section
5. Projects Section
6. Workflow Section
7. Skills Section
8. Contact Section
9. Footer

프로젝트 상세는 별도 페이지로 이동하지 않고, 프로젝트 카드를 클릭하면 모달로 보여준다.

---

# 5. 섹션별 상세 구성

---

## 5-1. Header

### 구성 요소

* 좌측: 이름 또는 로고 텍스트

  * `WOOJIN KIM`
  * 또는 `KIM WOOJIN`
* 우측 메뉴

  * About
  * Projects
  * Workflow
  * Skills
  * Contact

### 디자인

* 상단 고정 또는 기본 상단 배치
* 배경은 흰색 또는 반투명 화이트
* 스크롤 시 살짝 그림자 또는 blur 효과 가능
* 모바일에서는 햄버거 메뉴 또는 간단한 메뉴 축약

---

## 5-2. Hero Section

### 목적

첫 화면에서 내가 어떤 사람인지 명확하게 전달한다.

### 메인 카피

기획과 구현 사이를 연결하는
AI 활용형 개발자

### 서브 카피

웹 서비스 기획부터 인터랙티브 콘텐츠 연출, 프론트엔드 구현, AI API 활용까지
아이디어를 실제 사용 가능한 결과물로 구체화하는 프로젝트를 만들어 왔습니다.

### 키워드 태그

* AI API
* Frontend
* Interactive Web
* Prompt Engineering
* Codex
* Automation
* MySQL
* React

### 버튼

* `프로젝트 보기`
* `연락하기`

### 디자인

* 좌측: 텍스트
* 우측: 프로젝트 미리보기 카드 또는 추상 그래픽
* 텍스트는 크고 명확하게
* 장식은 최소화
* 첫 화면에서 바로 전문성이 느껴지도록 구성

---

## 5-3. About Section

### 섹션 제목

저는 이런 방식으로 프로젝트를 만듭니다

### 본문

저는 아이디어를 기획안에만 남겨두기보다, 실제 화면과 기능으로 구현하는 과정에 관심을 가지고 작업해 왔습니다.
기획, 연출, 개발을 분리된 과정으로 보기보다 하나의 흐름으로 연결하고, AI와 자동화 도구를 활용해 반복 작업을 줄이며 결과물을 빠르게 구체화하는 방식으로 프로젝트를 진행합니다.

### 카드 구성

#### 1. Planning

* 사용자 흐름 설계
* 콘텐츠 구조 설계
* 화면 구성 기획
* 프로젝트 방향성 정리

#### 2. Development

* 프론트엔드 구현
* API 데이터 연결
* DB 구조 설계 참여
* 반응형 UI 구현

#### 3. AI Workflow

* AI 이미지·영상 리소스 제작
* LLM API 활용
* Codex 기반 개발 보조
* 테스트 하네스 기반 검증

---

## 5-4. Core Strength Section

### 섹션 제목

제가 결과물을 만드는 방식

### 카드 1

#### 기획을 구조로 바꾸는 능력

아이디어를 사용자 흐름, 화면 구조, 데이터 구조로 구체화합니다.

### 카드 2

#### AI 리소스 연출 능력

AI 이미지, 영상, 스토리보드 도구를 활용해 프로젝트의 시각적 완성도를 높입니다.

### 카드 3

#### 프론트엔드와 데이터 연결 능력

API 응답과 DB 데이터를 화면 및 인터랙션 흐름에 연결합니다.

### 카드 4

#### 자동화 기반 생산성

Codex, 프롬프트 엔지니어링, 테스트 하네스 등을 활용해 반복 작업을 줄이고 구현 속도를 높입니다.

### 디자인

* 2x2 카드 레이아웃
* 모바일에서는 1열
* 각 카드에 아이콘 또는 심플한 심볼 사용
* 문장은 짧고 명확하게

---

## 5-5. Projects Section

### 섹션 제목

Featured Projects

### 목적

대표 프로젝트를 카드 형태로 보여주고, 클릭하면 모달로 상세 정보를 확인할 수 있도록 한다.

### 동작 방식

* 프로젝트 데이터는 `src/data/projects.js`에서 가져온다.
* `featured: true`인 프로젝트를 먼저 보여준다.
* 카드 클릭 시 `ProjectModal`이 열린다.
* 모달 내부에서 프로젝트 상세 정보를 표시한다.
* 별도 상세 페이지 이동은 하지 않는다.

### 프로젝트 카드에 표시할 정보

* 썸네일 이미지
* 프로젝트명
* 한 줄 설명
* 나의 역할
* 주요 기술 태그
* `View Detail` 버튼 또는 클릭 유도 문구

### 모달에 표시할 정보

* 프로젝트명
* 대표 이미지
* 프로젝트 개요
* 문제 정의
* 목표
* 나의 역할
* 주요 기능
* 사용 기술
* 구현 과정
* 어려웠던 점과 해결 방식
* 결과 및 배운 점
* 데모 링크
* GitHub 링크
* 발표자료 또는 README 링크

### 모달 디자인

* 데스크톱: 화면 중앙 팝업형 모달
* 모바일: 거의 풀스크린에 가까운 모달
* 배경 dim 처리
* ESC 또는 닫기 버튼으로 닫기
* 모달 내부 스크롤 허용
* 정보가 길어도 깔끔하게 보이도록 섹션 구분
* 링크 버튼은 하단에 고정 또는 마지막 섹션에 배치

---

## 5-6. Workflow Section

### 섹션 제목

AI를 활용해 작업 속도와 완성도를 높이는 방식

### 구성

#### 1. 기획

* 아이디어 정리
* 사용자 흐름 구성
* 화면 구조 초안 작성
* 기능 단위 분해

#### 2. 리소스 제작

* 이미지 프롬프트 작성
* 영상 프롬프트 작성
* 스토리보드 제작
* 반복 수정 및 방향성 조정

#### 3. 개발

* Codex 기반 기능 구현
* 작업 단위 분리
* 테스트 하네스 적용
* 오류 수정 및 리팩토링

#### 4. 개선

* 구현 결과 검토
* UI/UX 수정
* 데이터 흐름 정리
* 기능 확장 가능성 고려

### 디자인

* 타임라인 형태 추천
* 또는 4단계 프로세스 카드
* 과한 애니메이션 없이 부드러운 등장 효과 정도만 사용

---

## 5-7. Skills Section

### 섹션 제목

Skills

### Frontend

* HTML
* CSS
* JavaScript
* React
* Responsive Web
* Interactive UI

### Backend / Database

* Python
* MySQL
* REST API
* DB Table Design
* Data Flow Design

### AI / Automation

* OpenAI API
* LLM API Integration
* Prompt Engineering
* OpenAI Codex
* Test Harness
* Workflow Automation

### Design / Direction

* Storyboard
* AI Image Direction
* AI Video Direction
* UX Flow
* Content Planning
* Presentation Design

### Collaboration

* Project Planning
* Team Direction
* Documentation
* Git-based Collaboration

---

## 5-8. Contact Section

### 섹션 제목

Contact

### 문장

기획과 구현 사이를 연결하는 프로젝트에 관심이 있습니다.
AI와 자동화 도구를 활용해 아이디어를 빠르게 검증하고 실제 서비스로 만드는 일을 계속해 나가고 싶습니다.

### 포함 요소

* 이름
* 이메일
* GitHub
* 이력서 PDF
* 프로젝트 데모 링크
* 기타 링크

---

# 6. 프로젝트 데이터 관리 원칙

현재 단계에서는 DB를 구축하지 않는다.
관리자 페이지도 만들지 않는다.

프로젝트 정보는 `src/data/projects.js`에서 배열 형태로 관리한다.

프로젝트를 추가하고 싶을 때는 다음 작업만 진행한다.

1. `public/images/projects/프로젝트명/` 폴더에 이미지 추가
2. `src/data/projects.js`에 프로젝트 객체 추가
3. 배포

이 구조를 유지하면 DB 없이도 프로젝트를 계속 추가할 수 있다.

---

# 7. 컴포넌트 구성

권장 컴포넌트 구조는 다음과 같다.

```txt
src/
├─ data/
│  └─ projects.js
│
├─ components/
│  ├─ layout/
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  │
│  ├─ sections/
│  │  ├─ HeroSection.jsx
│  │  ├─ AboutSection.jsx
│  │  ├─ StrengthSection.jsx
│  │  ├─ ProjectsSection.jsx
│  │  ├─ WorkflowSection.jsx
│  │  ├─ SkillsSection.jsx
│  │  └─ ContactSection.jsx
│  │
│  ├─ project/
│  │  ├─ ProjectGrid.jsx
│  │  ├─ ProjectCard.jsx
│  │  └─ ProjectModal.jsx
│  │
│  └─ ui/
│     ├─ Button.jsx
│     ├─ SectionTitle.jsx
│     └─ Tag.jsx
│
├─ App.jsx
└─ main.jsx
```

---

# 8. 반응형 기준

### Desktop

* 최대 콘텐츠 폭: 1120px ~ 1200px
* Hero는 2단 구성 가능
* 프로젝트 카드는 2열 또는 3열
* 모달은 화면의 70~80% 너비

### Tablet

* 프로젝트 카드 2열
* Hero는 세로 배치 가능

### Mobile

* 모든 섹션 1열
* 프로젝트 카드 1열
* 모달은 거의 풀스크린
* 텍스트 크기 과도하게 작아지지 않게 유지
* 버튼 터치 영역 충분히 확보

---

# 9. 애니메이션 기준

애니메이션은 과하게 사용하지 않는다.

허용:

* 섹션 fade-in
* 카드 hover
* 모달 open/close transition
* 버튼 hover
* 태그 hover 정도

지양:

* 과한 3D 회전
* 너무 빠른 움직임
* 의미 없는 인터랙션
* 스크롤을 방해하는 애니메이션

---

# 10. 최종 목표

이 포트폴리오는 단순히 예쁜 페이지가 아니라,
내가 어떤 방식으로 프로젝트를 만들고 문제를 해결하는지 보여주는 페이지여야 한다.

가장 중요한 메시지는 다음과 같다.

> 저는 AI를 잘 쓰는 사람이 아니라,
> AI를 활용해 기획, 리소스 제작, 개발, 검증 과정을 연결하고
> 실제로 동작하는 결과물을 만드는 사람입니다.
