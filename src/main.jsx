import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { publishedProjects } from './data/projects.js';

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
  '저는 아이디어를 기획안에만 남겨두기보다, 실제 화면과 기능으로 구현하는 과정에 관심을 가지고 작업해 왔습니다. 웹 구조와 프론트엔드 구현의 기본기를 익히기 위해 Vanilla JS와 React 기반의 클론 코딩을 진행했고, 이후에는 AI API와 자동화 도구를 프로젝트에 적용하면서 기획, 리소스 제작, 개발 과정을 더 빠르게 연결하는 방법을 고민했습니다.',
  '팀 프로젝트 Project Contact에서는 사회적 고립을 주제로 한 인터랙티브 웹 콘텐츠의 기획과 연출을 맡았습니다. 사용자가 스크롤과 선택을 통해 이야기를 따라가고, 마지막에는 자신의 응답 결과를 확인할 수 있도록 전체 흐름을 설계했습니다. 이 과정에서 장면 구성과 스토리보드를 직접 만들고, 필요한 이미지와 영상 리소스는 AI 도구를 활용해 제작하며 콘텐츠의 분위기를 조정했습니다.',
  '개발 과정에서도 필요한 부분을 직접 맡았습니다. 팀원이 구축한 서버와 DB 환경 위에서 사용자 응답, 선택지, 콘텐츠 데이터를 저장하기 위한 테이블 구조를 설계했고, API로 전달되는 데이터를 프론트엔드 화면과 시각적 연출에 연결했습니다. 이를 통해 사용자의 입력과 선택이 결과 화면과 콘텐츠 흐름에 반영되도록 구현했습니다.',
  '개인 프로젝트 Color-Fit에서는 AI를 뷰티 서비스에 적용했습니다. 사용자의 진단 결과와 파우치 데이터를 기반으로 LLM API가 분석 결과를 생성하고, 이를 맞춤형 화장품 추천과 구매 흐름으로 연결하는 구조를 만들었습니다. 진단, 16타입 아카이브, 파우치 분석, AI 어드바이징, API 비용 보호 등 실제 서비스에 필요한 기능을 나누어 구현하며, 단순한 데모가 아니라 서비스 형태로 동작하는 결과물을 목표로 했습니다.',
  '1인 개발 과정에서는 OpenAI Codex를 활용해 반복적인 구현 작업의 속도를 높였고, 프롬프트를 세분화하거나 테스트 하네스를 적용하면서 결과물을 검증하는 방식도 함께 익혔습니다. AI를 단순히 대신 만들어주는 도구로 보기보다, 제가 설계한 방향을 빠르게 실험하고 수정할 수 있게 해주는 작업 파트너로 활용해 왔습니다.',
  '저는 기획, 연출, 개발을 따로 떨어진 과정으로 보기보다 하나의 흐름으로 연결해 결과물을 만드는 데 강점이 있습니다. 앞으로도 AI와 자동화 도구를 활용해 아이디어를 빠르게 검증하고, 실제 사용자가 경험할 수 있는 서비스로 구현하는 개발자가 되고 싶습니다.',
];

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
  'Git-hub': '/assets/icon/GitHub.png',
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
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const projects = useMemo(() => publishedProjects, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
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
        <img src="/assets/img/unnamed.png" alt="" />
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
              <img src="/assets/img/profile.png" alt="Kim Woojin profile" />
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
            <h3>자기소개서</h3>
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

  return (
    <button
      className="project-card holo-card"
      type="button"
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      data-testid={`project-card-${project.slug}-${instanceId}`}
    >
      <div className="project-thumb">
        <img src={project.thumbnailUrl} alt={`${project.title} thumbnail`} />
      </div>
      <div className="project-card-content">
        <span className="project-year">{project.period}</span>
        <p>{project.role}</p>
        <h3>{project.title}</h3>
        <span>{project.summary}</span>
        <div className="tag-list compact">
          {project.techStack.slice(0, 4).map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </button>
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
      {iconSrc && <img src={iconSrc} alt="" aria-hidden="true" loading="lazy" />}
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

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="프로젝트 상세 모달 닫기">
          닫기
        </button>
        <div className="modal-hero">
          <img src={project.thumbnailUrl} alt={`${project.title} 대표 이미지`} />
          <div className="modal-heading">
            <p className="eyebrow">{project.period}</p>
            <div className="modal-title-row">
              <h2 id="project-modal-title">{project.title}</h2>
              {titleLinks.length > 0 && (
                <div className="modal-title-links" aria-label="프로젝트 주요 링크">
                  {titleLinks.map(([label, url]) => (
                    <a className="button ghost" href={url} target="_blank" rel="noreferrer" key={label}>
                      {label === 'demo' ? '홈페이지' : 'GitHub'}
                    </a>
                  ))}
                </div>
              )}
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
