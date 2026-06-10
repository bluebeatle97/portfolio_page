export const projects = [
  {
    id: 'project-contact-2026',
    title: '고립,그리고 연결',
    slug: 'project-contact-2026',
    summary: '사회적 고립을 주제로 한 인터랙티브 웹 콘텐츠',
    description:
      '사회적 고립과 관계 회복을 주제로 한 AI 기반 인터랙티브 설문/분석 플랫폼입니다.사용자는 선택형 내러티브 설문에 참여하고, 응답 데이터는 MySQL DB에 저장됩니다. 이후 GPT 기반 분석을 통해 개인 결과 리포트를 제공하며, 전체 참여자의 응답은 통계 시각화, 채팅, 3D 인터랙션 콘텐츠로 확장됩니다.',
    role: '팀장 / 기획자 / 연출자 / B,C컨텐츠 전담 개발 ',
    period: '2026.04 ~ 2026.05',
    thumbnailUrl: '/assets/img/con_M.PNG',
    imageUrls: ['/assets/project-identity.svg', '/assets/project-editorial.svg', '/assets/project-archive.svg'],
    techStack: [
      'JavaScript',
      'React',
      'Vite',
      'Redux Toolkit',
      'React Router',
      'Express',
      'MySQL',
      'Three.js',
      'React Three Fiber',
      'GSAP',
    ],
    features: [
      '스크롤 기반 스토리 진행',
      '사용자 선택 인터랙션',
      '응답 기반 결과 화면',
      '3D/모션 콘텐츠 구성',
      '쿠키 기반 개인화 설문',
      '실시간 익명 채팅방',
    ],
    process: [
      '주제를 사용자 경험 중심의 콘텐츠 흐름으로 재구성',
      '화면별 스토리와 인터랙션 구조 설계',
      'React/Vite 기반 화면 구현',
      'Express와 MySQL 데이터 흐름 참여',
      'LLM 기반 설문 분석 결과 화면 연결',
    ],
    challenges: [
      {
        title: '기획 의도를 실제 데이터 흐름과 연결',
        solution:
          '사용자 응답, 선택지, 화면 메타 데이터를 분리해 관리하고 API 응답이 결과 화면에 자연스럽게 반영되도록 구조를 정리했습니다.',
      },
      {
        title: '시각적 몰입감과 정보 전달의 균형',
        solution:
          '스크롤 장면 전환과 카드형 정보 구조를 함께 사용해 콘텐츠가 과하게 복잡해지지 않도록 조정했습니다.',
      },
    ],
    results: [
      '기획, 연출, 프론트엔드 구현, 데이터 흐름 설계를 함께 경험했습니다.',
      '사용자가 직접 흐름에 참여하는 인터랙티브 콘텐츠 구조를 구현했습니다.',
      'AI와 자동화 도구를 제작 효율을 높이는 방식으로 활용했습니다.',
    ],
    links: {
      demo: 'https://projectcontact2026.onrender.com/',
      github: 'https://github.com/rlaalswl88-beep/projectcontact2026',
      presentation: '',
      readme: '',
    },
    featured: true,
    status: 'published',
    sortOrder: 1,
  },
  {
    id: 'color-fit',
    title: 'Color-Fit',
    slug: 'color-fit',
    summary: 'LLM API 기반 맞춤형 뷰티 진단 및 상품 추천 서비스',
    description:
      'ColorFit은 사용자가 업로드한 얼굴 이미지를 기반으로 16가지 퍼스널컬러 타입을 진단하고, 타입별 컬러 아카이브와 보유 화장품 분석, AI 상담 챗봇까지 제공하는 웹 서비스입니다. 사용자는 AI 진단을 통해 자신의 타입을 확인하고, 16타입 아카이브에서 컬러 특성을 이해한 뒤, My Pouch 기능으로 보유 제품과 퍼스널컬러의 적합도를 분석할 수 있습니다. 또한 모든 페이지에서 접근 가능한 ColorFit 챗봇을 통해 진단 결과와 파우치 분석 맥락을 기반으로 추가 상담을 받을 수 있습니다.',
    role: '1인 개발자 / 기획자 / 웹디자인',
    period: '2026.04 ~ 2026.05',
    thumbnailUrl: '/assets/img/color_fit_Sum.PNG',
    imageUrls: ['/assets/project-dashboard.svg', '/assets/project-archive.svg', '/assets/project-editorial.svg'],
    techStack: ['React', 'JavaScript', 'Redux Toolkit', 'React Router', 'React Bootstrap', 'Swiper', 'gh-pages'],
    features: [
      'AI 퍼스널 컬러 진단',
      '퍼스널 컬러 결과 카드',
      '개인형 파우치 진단',
      '맞춤형 상품 추천',
      '구매 전환 흐름',
    ],
    process: [
      'AI 기반 뷰티 진단 서비스 구조 설계',
      '사용자 입력 데이터와 진단 결과 데이터 흐름 정리',
      'LLM API 분석 및 추천 응답 구조 구현',
      'React 기반 UI와 상태 흐름 구성',
      'Codex를 활용한 반복 구현 및 기능 단위 검증',
    ],
    challenges: [
      {
        title: 'AI 응답을 서비스 흐름으로 연결',
        solution:
          '진단 결과, 분석 설명, 추천 상품 흐름을 분리해 설계하고 사용자의 입력부터 추천 결과까지 이어지도록 구성했습니다.',
      },
      {
        title: '1인 개발 범위 안에서 기능 안정화',
        solution:
          '기능 단위를 작게 나누고 구현 후 확인하는 방식으로 전체 흐름의 안정성을 높였습니다.',
      },
    ],
    results: [
      'LLM API를 실제 서비스 기능과 연결하는 경험을 쌓았습니다.',
      '진단, 분석, 추천, 구매 전환이 이어지는 AI 기반 서비스 구조를 설계했습니다.',
      '반복 구현과 검증 흐름을 통해 개발 효율을 높였습니다.',
    ],
    links: {
      demo: 'https://color-fit.pages.dev/',
      github: 'https://github.com/bluebeatle97/color_fit',
      presentation: '',
      readme: '',
    },
    featured: true,
    status: 'published',
    sortOrder: 2,
  },
  {
    id: 'sinla-01',
    title: '신라면세점 클론',
    slug: 'sinla-01',
    summary: 'JavaScript와 JSON 데이터를 활용한 쇼핑몰 UI 클론',
    description:
      '신라면세점 페이지를 참고해 제작한 정적 웹 클론 프로젝트입니다. 상품, 브랜드, 내비게이션, 슬라이더 데이터를 JSON 파일로 분리하고 JavaScript로 화면에 렌더링하며 쇼핑몰형 UI 구조를 구현했습니다.',
    role: '1인 개발자 / 기획자 / 웹디자인',
    period: '2026.03',
    thumbnailUrl: '/assets/img/sinla_S.PNG',
    imageUrls: ['/assets/img/sinla_S.PNG'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'JSON Data'],
    features: [
      '쇼핑몰 메인 화면 클론',
      '브랜드/상품 데이터 JSON 분리',
      '내비게이션 및 슬라이더 데이터 렌더링',
      '정적 웹 기반 UI 구성',
      '상품 카드형 레이아웃 구현',
    ],
    process: [
      '원본 쇼핑몰 화면의 주요 섹션과 정보 구조 분석',
      'HTML과 CSS 기반으로 레이아웃 및 반응형 구조 작성',
      '브랜드, 상품, 아이콘, 슬라이더 데이터를 JSON 파일로 분리',
      'JavaScript로 데이터 기반 UI 렌더링 흐름 구현',
      '이미지와 카드 구조를 정리해 쇼핑몰형 화면 완성',
    ],
    challenges: [
      {
        title: '정적 페이지에서 JSON 데이터를 파싱하여 관리',
        solution:
          '상품, 브랜드, 내비게이션 데이터를 JSON 파일로 나누어 관리하고 JavaScript 렌더링 로직과 화면 구조를 분리했습니다.',
      },
      {
        title: '복잡한 쇼핑몰 레이아웃 재현',
        solution:
          '섹션별 역할을 나누고 반복되는 카드 UI를 데이터 기반으로 구성해 유지보수하기 쉬운 구조로 정리했습니다.',
      },
    ],
    results: [
      '정적 웹에서도 데이터 기반 화면 구성이 가능하도록 구조를 설계했습니다.',
      '쇼핑몰 UI의 정보 구조와 카드형 상품 리스트 흐름을 구현했습니다.',
      'HTML/CSS/JavaScript 기본기와 JSON 데이터 활용 경험을 쌓았습니다.',
    ],
    links: {
      demo: 'https://bluebeatle97.github.io/sinla_01/',
      github: 'https://github.com/bluebeatle97/sinla_01',
      presentation: '',
      readme: '',
    },
    featured: true,
    status: 'published',
    sortOrder: 3,
  },
  {
    id: 'lotte-hotel-e-shop-copy',
    title: '롯데호텔 E-Shop 클론',
    slug: 'lotte-hotel-e-shop-copy',
    summary: 'React 기반 호텔 e-shop UI 클론 및 상품 탐색 화면',
    description:
      '롯데호텔 E-Shop 화면을 참고해 제작한 React 기반 쇼핑몰 클론 프로젝트입니다. React Router로 페이지 흐름을 구성하고 Redux Toolkit으로 상태를 관리하며, React Bootstrap과 Swiper를 활용해 상품 탐색 UI를 구현했습니다.',
    role: '1인 개발자 / 기획자 / 웹디자인',
    period: '2026.03 ~ 2026.04',
    thumbnailUrl: '/assets/img/lotte_S.PNG',
    imageUrls: ['/assets/img/lotte_S.PNG'],
    techStack: [
      'React',
      'JavaScript',
      'Redux Toolkit',
      'React Router',
      'React Bootstrap',
      'Bootstrap',
      'Swiper',
      'gh-pages',
    ],
    features: [
      'React 기반 쇼핑몰 UI 클론',
      'React Router 기반 페이지 이동',
      'Redux Toolkit 상태 관리',
      'React Bootstrap UI 구성',
      'Swiper 기반 상품/배너 슬라이드',
      'GitHub Pages 배포 설정',
    ],
    process: [
      '원본 e-shop 화면의 상품 탐색 구조와 주요 UI 패턴 분석',
      'React 컴포넌트 단위로 화면 구조 분리',
      'React Router로 페이지 흐름 구성',
      'Redux Toolkit과 React Redux로 상태 관리 흐름 작성',
      'React Bootstrap과 Swiper로 카드, 배너, 슬라이드 UI 구현',
    ],
    challenges: [
      {
        title: '쇼핑몰 화면의 반복 UI를 React 구조로 분리',
        solution:
          '상품 카드, 섹션, 슬라이더 영역을 컴포넌트 단위로 나누고 상태와 화면 표현을 분리했습니다.',
      },
      {
        title: '여러 라이브러리 조합의 UI 일관성 유지',
        solution:
          'React Bootstrap을 기본 UI 토대로 사용하고 Swiper 영역은 레이아웃 규칙을 맞춰 전체 화면 톤을 정리했습니다.',
      },
    ],
    results: [
      'React 기반 쇼핑몰 클론 구조와 페이지 이동 흐름을 구현했습니다.',
      'Redux Toolkit을 활용한 상태 관리 경험을 쌓았습니다.',
      'React Bootstrap, Swiper 등 UI 라이브러리를 조합해 화면 완성도를 높였습니다.',
    ],
    links: {
      demo: 'https://bluebeatle97.github.io/LotteHotelEShopCopy',
      github: 'https://github.com/bluebeatle97/LotteHotelEShopCopy',
      presentation: '',
      readme: '',
    },
    featured: true,
    status: 'published',
    sortOrder: 4,
  },
];

export const publishedProjects = projects
  .filter((project) => project.status === 'published')
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const featuredProjects = publishedProjects.filter((project) => project.featured);
