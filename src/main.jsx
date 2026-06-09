import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { featuredProjects, publishedProjects } from './data/projects.js';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
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

const workflow = [
  ['01', 'Frame', '문제와 사용자의 흐름을 먼저 정리하고 페이지의 역할을 나눕니다.'],
  ['02', 'Build', '작동 가능한 화면을 빠르게 만들고 필요한 데이터 구조를 연결합니다.'],
  ['03', 'Refine', '인터랙션, 문장, 반응형 흐름을 실제 사용 기준으로 다듬습니다.'],
  ['04', 'Ship', '검증 가능한 단위로 정리해 배포와 다음 확장이 가능하게 만듭니다.'],
];

const techIcons = {
  HTML: '/assets/icon/HTML5.png',
  CSS: '/assets/icon/CSS3.png',
  JavaScript: '/assets/icon/JavaScript.png',
  React: '/assets/icon/React.png',
  Vite: '/assets/icon/Vite.png',
  'Redux Toolkit': '/assets/icon/Redux.png',
  'React Bootstrap': '/assets/icon/React-Bootstrap.png',
  Express: '/assets/icon/Express.png',
  'Three.js': '/assets/icon/Three.js.png',
  MySQL: '/assets/icon/MySQL.png',
  'FAST API': '/assets/icon/FastAPI.png',
  'REST API': '/assets/icon/OpenAPI.png',
  'Node.js': '/assets/icon/Node.js.png',
  Figma: '/assets/icon/Figma.png',
  'Git-hub': '/assets/icon/GitHub.png',
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
        <Hero featuredProject={featuredProjects[0]} />
        <AboutSection />
        <ProjectsSection projects={projects} onOpenProject={setSelectedProject} />
        <WorkflowSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function Header({ activeSection, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Go to home">
        WJ
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

function Hero({ featuredProject }) {
  return (
    <section id="home" className="page-panel hero-panel">
      <div className="panel-inner hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>Portfolio</h1>
          <p className="lead">
            화면 구조, 인터랙션, 데이터 흐름을 정리하고 실제로 동작하는 동적 웹 결과물까지 구현합니다.
          </p>
        </div>

      </div>
      <ScrollCue href="#about" />
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="page-panel about-panel">
      <div className="panel-inner">
        <SectionTitle label="About me" />
        <div className="about-grid">
          <aside className="profile-block">
            <div className="portrait-frame" aria-hidden="true">
              <span>WJ</span>
            </div>
            <h2>Kim Woojin</h2>
            <p>Frontend / Product Builder/ planner </p>
            <a href="mailto:hello@example.com">bluebeatle97@gmail.com</a>
          </aside>
          <div className="about-details">
            <InfoBlock title="Character">
              명확한 구조를 좋아하고, 아이디어를 빠르게 화면으로 검증하는 과정에 강점이 있습니다.
            </InfoBlock>
            <InfoBlock title="Direction">
              과한 장식보다 읽히는 구성, 반복 가능한 프로젝트 구조, 실제 사용 흐름을 우선합니다.
            </InfoBlock>
            <InfoBlock title="Strength">
              {strengths.map(([title, text]) => (
                <article key={title} className="mini-card">
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </InfoBlock>
          </div>
        </div>
      </div>
      <ScrollCue href="#projects" />
    </section>
  );
}

function ProjectsSection({ projects, onOpenProject }) {
  const galleryProjects =
    projects.length >= 3 ? projects : Array.from({ length: 3 }, (_, index) => projects[index % projects.length]);
  const loopProjects = projects.length > 3 ? [...galleryProjects, ...galleryProjects] : galleryProjects;

  return (
    <section id="projects" className="page-panel projects-panel">
      <div className="panel-inner">
        <SectionTitle label="Projects" subtitle="썸네일 중심의 프로젝트 카드가 화면을 채우고, 클릭하면 상세 정보가 확장됩니다." />
        <div className="project-rail" aria-label="Featured projects">
          <div className={`project-track ${projects.length > 3 ? 'is-looping' : ''}`}>
            {loopProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                instanceId={index}
                onClick={() => onOpenProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
      <ScrollCue href="#workflow" />
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

function WorkflowSection() {
  return (
    <section id="workflow" className="page-panel workflow-panel">
      <div className="panel-inner">
        <SectionTitle label="Workflow" subtitle="스크롤마다 하나의 작업 관점이 넘어가듯 읽히도록 단계를 압축했습니다." />
        <div className="workflow-list">
          {workflow.map(([number, title, text]) => (
            <article key={title} className="workflow-item">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <ScrollCue href="#skills" />
    </section>
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
      <ScrollCue href="#contact" />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="page-panel contact-panel">
      <div className="panel-inner contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          
        </div>
        <div className="contact-actions">
          <a className="button primary" href="bluebeatle97@gmil.com">
            Email
          </a>
          <a className="button ghost" href="https://github.com/bluebeatle97" target="_blank" rel="noreferrer">
            GitHub
          </a>
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
          Close
        </button>
        <div className="modal-hero">
          <img src={project.thumbnailUrl} alt={`${project.title} 대표 이미지`} />
          <div>
            <p className="eyebrow">{project.period}</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="modal-content">
          <ModalBlock title="Role">
            <p>{project.role}</p>
          </ModalBlock>
          <ModalBlock title="Tech Stack">
            <div className="tag-list">
              {project.techStack.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </ModalBlock>
          <ModalList title="Features" items={project.features} />
          <ModalList title="Process" items={project.process} />
          <ModalBlock title="Challenges">
            <div className="challenge-list">
              {project.challenges.map((challenge) => (
                <article key={challenge.title}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.solution}</p>
                </article>
              ))}
            </div>
          </ModalBlock>
          <ModalList title="Results" items={project.results} />
          {links.length > 0 && (
            <ModalBlock title="Links">
              <div className="modal-links">
                {links.map(([label, url]) => (
                  <a className="button ghost" href={url} target="_blank" rel="noreferrer" key={label}>
                    {label}
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
