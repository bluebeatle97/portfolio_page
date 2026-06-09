
// src/data/projects.js

export const projects = [
  {
    id: "project-contact-2026",
    title: "Project Contact 2026",
    slug: "project-contact-2026",
    summary: "사회적 고립을 주제로 한 스크롤 기반 인터랙티브 웹 콘텐츠",
    description:
      "Project Contact 2026은 사회적 고립과 연결을 주제로 한 인터랙티브 웹 콘텐츠입니다. 사용자는 스크롤과 선택형 인터랙션을 통해 이야기를 따라가고, 마지막에는 자신의 응답 결과를 확인할 수 있습니다.",
    role: "Project Lead / Planning & Direction / AI Resource Direction / Frontend Data Flow",
    period: "2026",
    thumbnailUrl: "/assets/project-identity.svg",
    imageUrls: [
      "/assets/project-identity.svg",
      "/assets/project-editorial.svg",
      "/assets/project-archive.svg"
    ],
    techStack: [
      "JavaScript",
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Express",
      "MySQL2",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
      "Matter.js"
    ],
    features: [
      "스크롤 기반 인터랙티브 스토리텔링",
      "사용자 선택형 인터랙션",
      "주관식 응답 입력",
      "응답 기반 결과 분석",
      "관련 콘텐츠 추천",
      "응원 메시지 기능",
      "AI 기반 이미지 및 영상 리소스 제작"
    ],
    process: [
      "사회적 고립이라는 주제를 사용자 경험 중심의 웹 콘텐츠로 재구성",
      "장면별 흐름과 사용자 인터랙션 구조 설계",
      "스토리보드, 이미지, 영상 리소스를 AI 도구를 활용해 제작",
      "React/Vite 기반 프론트엔드 화면과 스크롤 인터랙션 구성",
      "Express 서버, controller/service/repository 구조와 MySQL 데이터 흐름 참여",
      "LLM service와 사용자 응답 기반 결과 흐름을 화면 연출과 연결"
    ],
    challenges: [
      {
        title: "제한된 팀 리소스 안에서 시각적 완성도 확보",
        solution:
          "AI 이미지와 영상 생성 도구를 활용해 필요한 리소스를 직접 제작하고, 프로젝트 분위기에 맞도록 반복 수정했습니다."
      },
      {
        title: "기획 의도를 실제 데이터 흐름과 연결",
        solution:
          "사용자 응답, 선택지, 장면 메타데이터를 분리해 설계하고, API 응답이 프론트엔드 결과 화면에 반영되도록 구조를 정리했습니다."
      }
    ],
    results: [
      "기획, 연출, AI 리소스 제작, 데이터 흐름 설계까지 프로젝트 전반을 주도적으로 경험했습니다.",
      "단순 정보 전달이 아니라 사용자가 직접 흐름에 참여하는 인터랙티브 콘텐츠 구조를 구현했습니다.",
      "AI 도구를 단순 생성이 아니라 시각적 연출과 제작 효율을 높이는 방식으로 활용했습니다."
    ],
    links: {
      demo: "https://rlaalswl88-beep.github.io/projectcontact2026/",
      github: "https://github.com/rlaalswl88-beep/projectcontact2026",
      presentation: "",
      readme: ""
    },
    featured: true,
    status: "published",
    sortOrder: 1
  },
  {
    id: "color-fit",
    title: "Color-Fit",
    slug: "color-fit",
    summary: "LLM API 기반 맞춤형 뷰티 진단 및 상품 추천 서비스",
    description:
      "Color-Fit은 사용자의 진단 결과와 파우치 데이터를 바탕으로 LLM API가 분석 결과를 생성하고, 이를 맞춤형 뷰티 상품 추천과 구매 흐름으로 연결하는 서비스입니다.",
    role: "Solo Developer / AI API Integration / Product Flow Design",
    period: "2026",
    thumbnailUrl: "/assets/project-dashboard.svg",
    imageUrls: [
      "/assets/project-dashboard.svg",
      "/assets/project-archive.svg",
      "/assets/project-editorial.svg"
    ],
    techStack: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "React Router",
      "React Bootstrap",
      "Swiper",
      "gh-pages"
    ],
    features: [
      "AI 진단",
      "16타입 아카이브",
      "파우치 분석",
      "AI Advisor",
      "맞춤형 상품 추천",
      "구매 전환 흐름",
      "API 비용 보호 구조"
    ],
    process: [
      "AI 기반 뷰티 진단 서비스 구조 설계",
      "사용자 입력 데이터와 진단 결과 데이터 흐름 정리",
      "LLM API를 활용한 분석 및 추천 응답 구조 구현",
      "AI Advisor 기능 설계 및 응답 흐름 구성",
      "Codex를 활용해 반복 구현 속도 향상",
      "테스트 하네스를 적용해 기능 단위 검증"
    ],
    challenges: [
      {
        title: "AI 응답을 단순 출력이 아닌 서비스 흐름으로 연결",
        solution:
          "진단 결과, 파우치 분석, 추천 상품 흐름을 분리해 설계하고 사용자의 입력이 구매 전환 퍼널까지 이어지도록 구조화했습니다."
      },
      {
        title: "1인 개발에서 많은 기능을 안정적으로 구현",
        solution:
          "Codex를 활용해 기능 단위를 빠르게 구현하고, 테스트 하네스를 통해 결과를 검증하며 작업 효율과 안정성을 높였습니다."
      }
    ],
    results: [
      "LLM API를 실제 서비스 기능과 연결하는 경험을 쌓았습니다.",
      "진단, 분석, 추천, 구매 흐름이 이어지는 AI 기반 서비스 구조를 설계했습니다.",
      "1인 개발 과정에서 Codex와 테스트 하네스를 활용해 개발 효율을 높였습니다."
    ],
    links: {
      demo: "",
      github: "",
      presentation: "",
      readme: ""
    },
    featured: true,
    status: "published",
    sortOrder: 2
  }
];

export const publishedProjects = projects
  .filter((project) => project.status === "published")
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const featuredProjects = publishedProjects.filter(
  (project) => project.featured
);
