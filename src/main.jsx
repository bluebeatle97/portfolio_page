import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { publishedProjects } from './data/projects.js';

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

const strengths = [
  ['Planning', '아이디어를 화면 구조, 사용자 흐름, 데이터 단위로 정리합니다.'],
  ['Development', 'React 기반 화면과 인터랙션을 실제 동작하는 결과물로 구현합니다.'],
  ['AI Workflow', 'AI 도구를 리소스 제작, 코드 보조, 검증 루틴에 맞게 사용합니다.'],
  ['Iteration', '작게 만들고 확인하면서 완성도를 높이는 방식으로 작업합니다.'],
];

const skills = [
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React']],
  ['Backend / Database', ['MySQL', 'REST API', 'FAST API', 'Node.js']],
  ['AI / Automation', ['OpenAI API', 'Gemini Cli', 'Clode code', 'OpenAI Codex']],
  ['Design / Direction', ['Figma', 'Flow', 'Nano Banana', 'GPT image 2.0']],
  ['Collaboration', ['Notion', 'Git-hub']],
];

const introParagraphs = [
  '기획과 구현 사이를 연결하는 AI 활용형 개발자',
  '23세부터 공백 없이 다양한 조직과 직무를 거쳤습니다. 수많은 사람과 부딪히며 쌓은 현장 감각은 자연스럽게 "이걸 이렇게 만들면 어떨까?"라는 상상으로 이어졌고, 그 아이디어를 기획안에만 묵혀두기 싫어 직접 화면으로 꺼내고 싶어 개발에 뛰어들었습니다. Vanilla JS와 React로 기본기를 다진 뒤, AI API와 자동화 도구를 프로젝트에 붙여보며 기획한 것을 빠르게 화면으로 옮기는 방법을 익혀왔습니다.',
  "팀 프로젝트 'Project Contact'에서 팀장으로서 사회적 고립을 주제로 한 인터랙티브 웹 콘텐츠의 기획과 연출을 온전히 담당했습니다. 스크롤에 따라 3D 요소가 반응하며 심해로 빠져드는 듯한 몰입감을 만들어내는 전체 흐름을 설계했고, 팀원들과 함께 Flow, Grok, Kling 등 다양한 AI 생성 도구로 이미지와 영상 리소스를 제작했습니다.",
  '개발도 주도적으로 참여해 팀원이 구축한 서버·DB 위에서 사용자 응답 데이터를 담을 테이블 구조를 직접 설계하고, API로 들어오는 데이터를 화면 연출에 연결해 선택이 실시간으로 결과에 반영되는 구조를 완성했습니다.',
  "개인 프로젝트 'Color-Fit'은 단순한 퍼스널컬러 진단에서 멈추지 않고, 진단 결과를 SNS에 공유하고 싶게 만드는 바이럴 구조와 실제 제품 추천·광고를 통해 구매까지 이어지는 BM을 직접 설계한 시도였습니다.",
  'LLM API로 진단 결과와 보유 제품 데이터를 분석해 맞춤 화장품을 추천하고, 16타입 아카이브·AI 어드바이징·API 비용 보호 같은 실서비스에 필요한 기능들을 단계별로 구현했습니다. 혼자 개발하는 만큼 OpenAI Codex로 반복 작업 속도를 올리고, n8n으로 워크플로우를 자동화하며 효율을 끌어올렸습니다.',
  '현장에서 얻은 감각으로 기획하고, AI와 자동화를 작업 파트너 삼아 빠르게 검증하며, 실제로 쓸 수 있는 서비스를 만드는 개발자가 되고 싶습니다.'];

const techIcons = {
  HTML: '/assets/icon/HTML5.png',
  CSS: '/assets/icon/CSS3.png',
  JavaScript: '/assets/icon/JavaScript.png',
  'JSON Data': '/assets/icon/JSON.png',
  React: '/assets/icon/React.png',
  Vite: '/assets/icon/Vite.png',
  'Redux Toolkit': '/assets/icon/Redux.png',
  'React Bootstrap': '/assets/icon/React-Bootstrap.png',
  Bootstrap: '/assets/icon/Bootstrap.png',
  Express: '/assets/icon/Express.png',
  'Three.js': '/assets/icon/Three.js.png',
  MySQL: '/assets/icon/MySQL.png',
  'FAST API': '/assets/icon/FastAPI.png',
  'REST API': '/assets/icon/OpenAPI.png',
  'Node.js': '/assets/icon/Node.js.png',
  Figma: '/assets/icon/Figma.png',
  'Git-hub': '/assets/icon/github.webp',
  Notion: '/assets/icon/notion.webp',
  'Nano Banana': '/assets/icon/nanobanana-color.svg',
  'Gemini Cli': '/assets/icon/geminicli-color.svg',
  Flow: '/assets/icon/flow.webp',
  'OpenAI Codex': '/assets/icon/codex-color.svg',
  'Clode code': '/assets/icon/claudecode-color.svg',
  'OpenAI API': '/assets/icon/openai.webp',
};

const linkLabels = {
  demo: '데모',
  github: 'GitHub',
  presentation: '발표 자료',
  readme: 'README',
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const projects = useMemo(() => publishedProjects, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty(
      '--hero-bg-image',
      `url("${assetUrl(`/assets/img/${theme === 'dark' ? 'blackback.png' : 'whiteback.png'}`)}")`,
    );
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { threshold: [0.45, 0.65, 0.85] },
    );

    ['home', ...navItems.map((item) => item.id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(selectedProject));
  }, [selectedProject]);

  return (
    <>
      <Header activeSection={activeSection} theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="snap-stage">
        <Hero />
        <AboutSection />
        <ProjectsSection projects={projects} onOpenProject={setSelectedProject} />
        <SkillsSection />
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function Header({ activeSection, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Go to home">
        <img src={assetUrl('/assets/img/unnamed.png')} alt="" />
      </a>
      <nav className="section-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} className={activeSection === item.id ? 'is-active' : ''} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="page-panel hero-panel">
      <div className="panel-inner hero-layout">
        <div className="hero-meta hero-meta-left">Personal Works</div>
        <div className="hero-meta hero-meta-right">2026 02 - 06</div>
        <div className="hero-copy">
          <h1>PORTFOLIO</h1>
          <p className="hero-subtitle">Frontend / Product Builder/ Planner</p>
        </div>
        <address className="hero-contact">
          <a href="mailto:bluebeatle97@gmail.com">Email: bluebeatle97@gmail.com</a>
          <a href="https://github.com/bluebeatle97" target="_blank" rel="noreferrer">
            GitHub: github.com/bluebeatle97
          </a>
        </address>
      </div>
      <ScrollCue href="#about" />
    </section>
  );
}

function AboutSection() {
  const profileRef = useRef(null);
  const [profileHeight, setProfileHeight] = useState(0);

  useEffect(() => {
    if (!profileRef.current) return undefined;

    const updateProfileHeight = () => {
      if (profileRef.current) {
        const nextHeight = Number(profileRef.current.getBoundingClientRect().height.toFixed(2));
        setProfileHeight((currentHeight) => (Math.abs(currentHeight - nextHeight) > 0.25 ? nextHeight : currentHeight));
      }
    };

    updateProfileHeight();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateProfileHeight);
      return () => window.removeEventListener('resize', updateProfileHeight);
    }

    const observer = new ResizeObserver(updateProfileHeight);
    observer.observe(profileRef.current);
    window.addEventListener('resize', updateProfileHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateProfileHeight);
    };
  }, []);

  return (
    <section id="about" className="page-panel about-panel">
      <div className="panel-inner">
        <SectionTitle label="About me" />
        <div className="about-grid" style={profileHeight ? { '--about-profile-height': `${profileHeight}px` } : undefined}>
          <aside className="profile-block" ref={profileRef}>
            <div className="portrait-frame">
              <img src={assetUrl('/assets/img/profile.png')} alt="Kim Woojin profile" />
            </div>
            <h2>김우진 / Kim Woojin</h2>
            <p>Frontend / Product Builder/ Planner </p>
            <div className="about-summary">
              <div>
                <p className="eyebrow">Email</p>
                <a className="about-email" href="mailto:bluebeatle97@gmail.com">
                  bluebeatle97@gmail.com
                </a>
              </div>
              <div>
                <p className="eyebrow">GitHub</p>
                <a className="about-github" href="https://github.com/bluebeatle97" target="_blank" rel="noreferrer">
                  github.com/bluebeatle97
                </a>
              </div>
            </div>
          </aside>
          <div className="intro-letter" aria-label="자기소개서">
            <h3></h3>
            {introParagraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'intro-lead' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ScrollCue href="#projects" />
    </section>
  );
}

function ProjectsSection({ projects, onOpenProject }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const visibleProjects = projects.length
    ? Array.from({ length: Math.min(3, Math.max(projects.length, 3)) }, (_, offset) => projects[(slideIndex + offset) % projects.length])
    : [];

  const moveSlide = (direction) => {
    if (projects.length <= 1) return;
    setSlideIndex((currentIndex) => (currentIndex + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="page-panel projects-panel">
      <div className="panel-inner">
        <div className="projects-heading">
          <SectionTitle label="Projects" />
          <div className="project-controls" aria-label="Project slider controls">
            <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous project">
              ←
            </button>
            <button type="button" onClick={() => moveSlide(1)} aria-label="Next project">
              →
            </button>
          </div>
        </div>
        <div className="project-rail" aria-label="Featured projects">
          <div className="project-track">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${slideIndex}-${index}`}
                project={project}
                instanceId={index}
                onClick={() => onOpenProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
      <ScrollCue href="#skills" />
    </section>
  );
}

function ProjectCard({ project, instanceId, onClick }) {
  const quickLinks = Object.entries(project.links).filter(([label, url]) => ['demo', 'github'].includes(label) && Boolean(url));
  const quickLinkIcons = {
    demo: '/assets/icon/Vite.png',
    github: '/assets/icon/github.svg',
  };

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;

    event.currentTarget.style.setProperty('--pointer-x', `${x}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`);
    event.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
    event.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '50%');
    event.currentTarget.style.setProperty('--rotate-x', '0deg');
    event.currentTarget.style.setProperty('--rotate-y', '0deg');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className="project-card holo-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-testid={`project-card-${project.slug}-${instanceId}`}
    >
      <div className="project-thumb">
        <img src={assetUrl(project.thumbnailUrl)} alt={`${project.title} thumbnail`} />
        {quickLinks.length > 0 && (
          <div className="project-quick-links" aria-label={`${project.title} external links`}>
            {quickLinks.map(([label, url]) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={label}
                data-link-type={label}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                <img src={assetUrl(quickLinkIcons[label])} alt="" aria-hidden="true" loading="lazy" />
                <span>{label === 'demo' ? 'Live Site' : 'GitHub'}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="project-card-content">
        <span className="project-year">{project.period}</span>
        <h3>{project.title}</h3>
        <p>{project.role}</p>
        <span>{project.summary}</span>
        <div className="tag-list compact">
          {project.techStack.slice(0, 4).map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <button className="project-detail-button" type="button" onClick={onClick}>
          상세보기
        </button>
      </div>
    </article>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="page-panel skills-panel">
      <div className="panel-inner">
        <SectionTitle label="Skills" />
        <div className="skills-grid">
          {skills.map(([group, items]) => (
            <article className="skill-card" key={group}>
              <h3>{group}</h3>
              <div className="tag-list">
                {items.map((item) => (
                  <TechTag key={item} label={item} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ label, subtitle }) {
  return (
    <div className="section-title">
      <h2>{label}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function InfoBlock({ title, children }) {
  return (
    <section className="info-block">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function TechTag({ label }) {
  const iconSrc = techIcons[label];

  return (
    <span className="tag-item">
      {iconSrc && <img src={assetUrl(iconSrc)} alt="" aria-hidden="true" loading="lazy" />}
      {label}
    </span>
  );
}

function ScrollCue({ href }) {
  return (
    <a className="scroll-cue" href={href} aria-label="Scroll to next section">
      <span />
    </a>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const links = Object.entries(project.links).filter(([, url]) => Boolean(url));
  const titleLinks = links.filter(([label]) => ['demo', 'github'].includes(label));
  const detailLinks = links.filter(([label]) => !['demo', 'github'].includes(label));
  const titleLinkIcons = {
    demo: '/assets/icon/Vite.png',
    github: '/assets/icon/github.svg',
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-action-bar">
          <span>Project Detail</span>
          <button className="modal-close-control" type="button" onClick={onClose} aria-label="프로젝트 상세 모달 닫기">
            닫기
          </button>
        </div>
        <button className="modal-close" type="button" onClick={onClose} aria-label="프로젝트 상세 모달 닫기">
          닫기
        </button>
        <div className="modal-hero">
          <img src={assetUrl(project.thumbnailUrl)} alt={`${project.title} 대표 이미지`} />
          <div className="modal-heading">
            <div className="modal-meta-row">
              <p className="eyebrow">{project.period}</p>
              {titleLinks.length > 0 && (
                <div className="modal-title-links" aria-label="프로젝트 주요 링크">
                  {titleLinks.map(([label, url]) => (
                    <a
                      className="button signature"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      key={label}
                      data-link-type={label}
                    >
                      <img src={assetUrl(titleLinkIcons[label])} alt="" aria-hidden="true" loading="lazy" />
                      <span>{label === 'demo' ? 'Live Site' : 'GitHub'}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-title-row">
              <h2 id="project-modal-title">{project.title}</h2>
            </div>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="modal-content">
          <ModalBlock title="역할">
            <p>{project.role}</p>
          </ModalBlock>
          <ModalBlock title="기술 스택">
            <div className="tag-list">
              {project.techStack.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </ModalBlock>
          <ModalList title="주요 기능" items={project.features} />
          <ModalList title="구현 과정" items={project.process} />
          <ModalBlock title="어려웠던 점과 해결 방식">
            <div className="challenge-list">
              {project.challenges.map((challenge) => (
                <article key={challenge.title}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.solution}</p>
                </article>
              ))}
            </div>
          </ModalBlock>
          <ModalList title="결과 및 배운 점" items={project.results} />
          {detailLinks.length > 0 && (
            <ModalBlock title="관련 링크">
              <div className="modal-links">
                {detailLinks.map(([label, url]) => (
                  <a className="button ghost" href={url} target="_blank" rel="noreferrer" key={label}>
                    {linkLabels[label] || label}
                  </a>
                ))}
              </div>
            </ModalBlock>
          )}
        </div>
      </section>
    </div>
  );
}

function ModalBlock({ title, children }) {
  return (
    <section className="modal-block">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function ModalList({ title, items }) {
  return (
    <ModalBlock title={title}>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ModalBlock>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
