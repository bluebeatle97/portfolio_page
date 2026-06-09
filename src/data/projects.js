export const projects = [
  {
    id: 'project-contact-2026',
    title: 'Project Contact',
    slug: 'project-contact-2026',
    summary: '사회적 고립을 주제로 한 스크롤 기반 인터랙티브 웹 콘텐츠',
    description:
      '사회적 고립과 관계 회복을 주제로 한 AI 기반 인터랙티브 설문/분석 플랫폼입니다.사용자는 선택형 내러티브 설문에 참여하고, 응답 데이터는 MySQL DB에 저장됩니다. 이후 GPT 기반 분석을 통해 개인 결과 리포트를 제공하며, 전체 참여자의 응답은 통계 시각화, 채팅, 3D 인터랙션 콘텐츠로 확장됩니다.',
    role: 'Project Lead / Planning & Direction / Frontend Data Flow',
    period: '2026',
    thumbnailUrl: '/assets/img/con_M.PNG',
    imageUrls: ['/assets/project-identity.svg', '/assets/project-editorial.svg', '/assets/project-archive.svg'],
    techStack: [
      'JavaScript',
      'React',
      'Vite',
      'Redux Toolkit',
      'React Router',
      'Express',
      'MySQL2',
      'Three.js',
      'React Three Fiber',
      'GSAP',
      'Framer Motion',
      'Matter.js',
    ],
    features: [
      '스크롤 기반 스토리 진행',
      '사용자 선택 인터랙션',
      '응답 기반 결과 화면',
      '3D/모션 콘텐츠 구성',
      '관련 콘텐츠 추천 흐름',
    ],
    process: [
      '주제를 사용자 경험 중심의 콘텐츠 흐름으로 재구성',
      '화면별 스토리와 인터랙션 구조 설계',
      'React/Vite 기반 화면 구현',
      'Express와 MySQL 데이터 흐름 참여',
      'LLM 서비스와 응답 기반 결과 화면 연결',
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
      demo: 'https://rlaalswl88-beep.github.io/projectcontact2026/',
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
      'Color-Fit은 사용자의 진단 결과와 퍼스널 컬러 데이터를 바탕으로 LLM API가 분석 결과를 생성하고, 맞춤형 뷰티 상품 추천 흐름으로 연결하는 서비스입니다.',
    role: 'Solo Developer / AI API Integration / Product Flow Design',
    period: '2026',
    thumbnailUrl: '/assets/project-dashboard.svg',
    imageUrls: ['/assets/project-dashboard.svg', '/assets/project-archive.svg', '/assets/project-editorial.svg'],
    techStack: ['React', 'JavaScript', 'Redux Toolkit', 'React Router', 'React Bootstrap', 'Swiper', 'gh-pages'],
    features: [
      'AI 진단',
      '퍼스널 컬러 결과',
      'AI Advisor',
      '맞춤형 상품 추천',
      '구매 전환 흐름',
      'API 비용 보호 구조',
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
      demo: '',
      github: '',
      presentation: '',
      readme: '',
    },
    featured: true,
    status: 'published',
    sortOrder: 2,
  },
];

export const publishedProjects = projects
  .filter((project) => project.status === 'published')
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const featuredProjects = publishedProjects.filter((project) => project.featured);
