# task.md

# Codex 작업 지시서

## 목표

프론트엔드 기반 포트폴리오 사이트를 제작한다.

이 사이트는 DB나 관리자 페이지 없이 동작한다.
프로젝트 데이터는 `src/data/projects.js`에서 관리하고, 프로젝트 카드를 클릭하면 모달로 상세 정보를 보여준다.

현재 구현 목표는 다음과 같다.

1. 깔끔한 포트폴리오 메인 페이지 제작
2. 프로젝트 데이터 기반 카드 렌더링
3. 프로젝트 카드 클릭 시 상세 모달 표시
4. 반응형 레이아웃 구현
5. 이후 프로젝트를 쉽게 추가할 수 있는 구조 설계

---

## 기술 기준

현재 프로젝트 상태에 맞춰 React 또는 Next.js 구조로 구현한다.
새 프로젝트라면 React + Vite 기준으로 구성해도 된다.

필수 조건:

* DB 사용 금지
* 관리자 페이지 구현 금지
* 프로젝트 데이터는 `src/data/projects.js`에서 관리
* 프로젝트 카드는 데이터 기반으로 자동 렌더링
* 프로젝트 상세는 모달로 표시
* 모바일 반응형 필수
* 디자인은 깔끔하고 실무적인 포트폴리오 느낌 유지

---

## 페이지 구성

메인 페이지는 다음 섹션으로 구성한다.

1. Header
2. HeroSection
3. AboutSection
4. StrengthSection
5. ProjectsSection
6. WorkflowSection
7. SkillsSection
8. ContactSection
9. Footer

---

## 구현해야 할 컴포넌트

### Layout

* `Header.jsx`
* `Footer.jsx`

### Sections

* `HeroSection.jsx`
* `AboutSection.jsx`
* `StrengthSection.jsx`
* `ProjectsSection.jsx`
* `WorkflowSection.jsx`
* `SkillsSection.jsx`
* `ContactSection.jsx`

### Project

* `ProjectGrid.jsx`
* `ProjectCard.jsx`
* `ProjectModal.jsx`

### UI

* `Button.jsx`
* `Tag.jsx`
* `SectionTitle.jsx`

UI 컴포넌트는 필요에 따라 생략하거나 통합해도 된다.
다만 프로젝트 관련 컴포넌트는 반드시 분리한다.

---

## 데이터 구조

`src/data/projects.js` 파일을 만들고 프로젝트 데이터를 배열로 관리한다.

프로젝트 객체는 다음 필드를 기준으로 한다.

```js
{
  id: string,
  title: string,
  slug: string,
  summary: string,
  description: string,
  role: string,
  period: string,
  thumbnailUrl: string,
  imageUrls: string[],
  techStack: string[],
  features: string[],
  process: string[],
  challenges: [
    {
      title: string,
      solution: string
    }
  ],
  results: string[],
  links: {
    demo: string,
    github: string,
    presentation: string,
    readme: string
  },
  featured: boolean,
  status: "published" | "draft",
  sortOrder: number
}
```

`status`가 `"published"`인 프로젝트만 사용자 화면에 표시한다.
`featured`가 `true`인 프로젝트를 우선 노출한다.
`sortOrder` 기준으로 정렬한다.

---

## 프로젝트 카드 요구사항

프로젝트 카드는 다음 정보를 보여준다.

* 썸네일
* 프로젝트명
* 한 줄 설명
* 역할
* 기술 태그
* 상세 보기 유도

카드를 클릭하면 해당 프로젝트의 상세 모달을 연다.

hover 시 다음 정도의 인터랙션만 적용한다.

* 카드 살짝 위로 이동
* 그림자 강조
* 썸네일 살짝 확대

---

## 프로젝트 모달 요구사항

`ProjectModal`은 선택된 프로젝트 데이터를 받아 상세 정보를 표시한다.

모달에 포함할 내용:

* 프로젝트명
* 요약 설명
* 대표 이미지
* 프로젝트 개요
* 기간
* 나의 역할
* 기술 스택
* 주요 기능
* 구현 과정
* 어려웠던 점과 해결 방식
* 결과 및 배운 점
* 관련 링크
* 추가 이미지 갤러리

동작 요구사항:

* 닫기 버튼 제공
* ESC 키로 닫기
* 모달 외부 클릭 시 닫기
* 모달 열림 시 body scroll 방지
* 모달 내부 내용이 길면 내부 스크롤
* 모바일에서는 풀스크린에 가까운 형태

접근성:

* 모달에 `role="dialog"` 적용
* `aria-modal="true"` 적용
* 닫기 버튼에 명확한 aria-label 적용

---

## 디자인 요구사항

### 전체

* 흰색 또는 밝은 배경
* 블루 계열 포인트 컬러
* 가독성 높은 폰트 크기
* 섹션 간 여백 충분히 확보
* 너무 과한 애니메이션 금지

### Hero

* 메인 카피가 가장 먼저 눈에 들어와야 함
* 우측에는 프로젝트 미리보기 카드 또는 추상 그래픽 배치 가능
* 모바일에서는 세로 정렬

### Project

* 카드 디자인은 깔끔하게
* 썸네일 비율 통일
* 태그는 pill 형태
* 모달은 정보가 많아도 읽기 쉽게 섹션을 나눔

---

## 기본 문구

### Hero 메인 카피

기획과 구현 사이를 연결하는
AI 활용형 개발자

### Hero 서브 카피

웹 서비스 기획부터 인터랙티브 콘텐츠 연출, 프론트엔드 구현, AI API 활용까지
아이디어를 실제 사용 가능한 결과물로 구체화하는 프로젝트를 만들어 왔습니다.

### About 본문

저는 아이디어를 기획안에만 남겨두기보다, 실제 화면과 기능으로 구현하는 과정에 관심을 가지고 작업해 왔습니다.
기획, 연출, 개발을 분리된 과정으로 보기보다 하나의 흐름으로 연결하고, AI와 자동화 도구를 활용해 반복 작업을 줄이며 결과물을 빠르게 구체화하는 방식으로 프로젝트를 진행합니다.

---

## 작업 순서

1. 기본 폴더 구조 정리
2. `src/data/projects.js` 생성
3. Header / Footer 구현
4. HeroSection 구현
5. AboutSection 구현
6. StrengthSection 구현
7. ProjectsSection 구현
8. ProjectGrid / ProjectCard 구현
9. ProjectModal 구현
10. WorkflowSection 구현
11. SkillsSection 구현
12. ContactSection 구현
13. 반응형 스타일 정리
14. 모달 접근성 및 닫기 동작 구현
15. 최종 디자인 정리

---

## 주의사항

* 프로젝트 상세 페이지 라우팅은 만들지 않는다.
* DB 연결은 하지 않는다.
* 관리자 페이지는 만들지 않는다.
* 프로젝트 데이터는 하드코딩된 JSX가 아니라 `projects.js`에서 관리한다.
* 프로젝트를 추가할 때 컴포넌트 코드를 수정하지 않아도 되도록 만든다.
* 이미지 경로는 `public/images/projects/` 기준으로 관리한다.
* 텍스트는 과장하지 않고 자연스럽게 작성한다.
* AI 활용 역량은 “AI로 대충 만들었다”가 아니라 “기획, 리소스 제작, 개발 검증에 활용했다”는 방향으로 표현한다.

---

## 완료 기준

다음 조건을 만족하면 1차 완료로 본다.

* 메인 페이지가 정상적으로 렌더링된다.
* 프로젝트 카드가 `projects.js` 데이터를 기반으로 표시된다.
* 프로젝트 카드를 클릭하면 모달이 열린다.
* 모달에서 프로젝트 상세 내용이 표시된다.
* 모달 닫기 동작이 정상 작동한다.
* 모바일에서도 레이아웃이 깨지지 않는다.
* Project Contact 2026과 Color-Fit 데이터가 등록되어 있다.

---

## Update - 2026-06-09

- Portfolio layout was revised into fixed full-screen sections with vertical scroll snapping on desktop.
- Mobile layout now falls back to normal scrolling for easier reading.
- Visual direction was simplified to solid light/dark themes with a lime green signature color.
- Added a theme toggle in the fixed header.
- Projects still render from `src/data/projects.js` and open details in a modal.
- Project cards now use a looping rail-style slider with four visible card instances.

## Update - 2026-06-10

- Added `sinla_01` and `LotteHotelEShopCopy` to `src/data/projects.js`.
- Applied `sinla_S.PNG` and `lotte_S.PNG` as project thumbnails.
- Updated project modal section labels to Korean.
- Added exact icon mappings for `JSON Data` and `Bootstrap`.

## Update - 2026-06-10 - Visual Assets and About Copy

- Applied `blackback.png` and `whiteback.png` as theme-specific hero background images.
- Replaced the header brand text with `unnamed.png`.
- Replaced the About profile placeholder with `profile.png`.
- Revised About into profile/email/representative skills and self-introduction content.
- Tuned font sizes, line-height, paragraph width, and Korean line wrapping for readability.

## Update - 2026-06-10 - Hero and About Layout

- Revised the hero section into a spacious portfolio cover layout with top meta text, a large `PORTFOLIO` title, and bottom contact links.
- Matched the About self-introduction box height to the adjacent profile block using the measured profile height.
- Increased the spacing between the About title and content grid.

## Update - 2026-06-10 - Section Simplification and Project Controls

- Removed Workflow and Contact from the rendered landing page flow.
- Kept the page structure focused on Hero, About, Projects, and Skills.
- Added manual looping arrow controls to the project slider.
- Moved project homepage and GitHub links into the modal title area.
- Applied the hero typography direction more consistently across the site.

## Update - 2026-06-10 - GitHub Pages and Modal Polish

- Added Vite `base: '/portfolio_page/'` for the GitHub Pages repository path.
- Configured production builds to output into `docs/` for `master / docs` Pages deployment.
- Moved the original portfolio plan document to root `portfolio-plan.md` so `docs/` can be used only for deployment output.
- Changed the default theme to light mode for new visitors.
- Revised project modal scrolling, thumbnail sizing, date-row links, and one-line desktop title behavior.
- Removed the green hover glow from project cards and kept a glass-like reflection effect.

## Update - 2026-06-10 - Project Card Link Layout

- Separated project card thumbnails from title/content so titles are emphasized below the image instead of overlaying it.
- Added direct project links on thumbnails for homepage and GitHub.
- Styled modal homepage/GitHub buttons with the signature green color.
- Moved the modal close control into a dedicated top action bar.
- Restored whole-card click behavior for opening project modals while keeping thumbnail external links separate.
- Added Vite and GitHub icons to the thumbnail quick-link buttons.
- Revised project card titles to use bold black text instead of the signature color.
- Changed project thumbnails to `contain` on a white background so images are not cropped.
- Tightened project card height and rail spacing so cards fill the section without top/bottom empty padding.
- Reversed the theme toggle button colors so light mode shows a black `Dark` button with white text.
- Switched project quick-link labeling from URL matching to `data-link-type` so GitHub Pages demo URLs still display as Live Site.
- Replaced CSS pseudo-element link icons with real inline `<img>` icons on both project cards and modal title links.

## Update - 2026-06-11 - Project Link Icon Fix

- Scoped the project thumbnail image selector to the direct thumbnail image so quick-link icons are not positioned as full thumbnail overlays.
- Added fixed icon sizing and nowrap link text for Live Site and GitHub buttons in project cards and modal title links.

## Update - 2026-06-11 - Signature Color

- Added `#d4e88a` as the signature color for non-text green accents.
- Updated project controls, link buttons, soft accent backgrounds, scroll cue, and modal link glow to use the signature color while preserving existing text accent colors.

## Update - 2026-06-11 - Button Text Contrast

- Fixed the dark-mode theme toggle so the `Light` label remains dark on its light button background.
- Forced project quick-link button labels to dark text so shared project-card span styles do not fade the Live Site and GitHub labels.
