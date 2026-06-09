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
  {
    title: '기획을 구조로 바꾸는 능력',
    text: '아이디어를 사용자 흐름, 화면 구조, 데이터 구조로 구체화합니다.',
  },
  {
    title: 'AI 리소스 연출 능력',
    text: 'AI 이미지, 영상, 스토리보드 도구를 활용해 프로젝트의 시각적 완성도를 높입니다.',
  },
  {
    title: '프론트엔드와 데이터 연결',
    text: 'API 응답과 DB 데이터를 화면 및 인터랙션 흐름에 연결합니다.',
  },
  {
    title: '자동화 기반 생산성',
    text: 'Codex, 프롬프트 엔지니어링, 테스트 하네스 등을 활용해 반복 작업을 줄입니다.',
  },
];

const skills = [
  ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React']],
  ['Backend / Database', ['MySQL', 'REST API', 'FAST API', 'Node.js']],
  ['AI / Automation', ['OpenAI API', 'Gemini Cli', 'Clode code', 'OpenAI Codex']],
  ['Design / Direction', ['Figma', 'Flow', 'Nano Banana', 'GPT image 2.0']],
  ['Collaboration', ['Notion', 'Git-hub']],
];

const workflow = [
  {
    title: '기획',
    text: '아이디어를 사용자 흐름, 화면 구조, 기능 단위로 나눕니다.',
  },
  {
    title: '리소스 제작',
    text: 'AI 이미지, 영상, 스토리보드 리소스를 프로젝트 톤에 맞게 제작합니다.',
  },
  {
    title: '개발',
    text: '화면, 인터랙션, API 데이터 흐름을 실제 서비스 구조로 연결합니다.',
  },
  {
    title: '검증과 개선',
    text: '테스트 하네스와 반복 수정으로 결과물의 안정성과 완성도를 높입니다.',
  },
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
  Express: '/assets/icon/Express.png',
  'Three.js': '/assets/icon/Three.js.png',
  Python: '/assets/icon/Python.png',
  MySQL: '/assets/icon/MySQL.png',
  'FAST API': '/assets/icon/FastAPI.png',
  'REST API': '/assets/icon/OpenAPI.png',
  'Node.js': '/assets/icon/Node.js.png',
  Figma: '/assets/icon/Figma.png',
  'Git-hub': '/assets/icon/GitHub.png',
};

function TechTag({ label }) {
  const iconSrc = techIcons[label];

  return (
    <span className="tag-item">
      {iconSrc && (
        <span className="tag-icon" aria-hidden="true">
          <img src={iconSrc} alt="" loading="lazy" />
        </span>
      )}
      {label}
    </span>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const projects = useMemo(() => publishedProjects, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.35, 0.6] },
    );

    ['home', ...navItems.map((item) => item.id)].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(selectedProject));
  }, [selectedProject]);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero featuredProject={featuredProjects[0]} />
        <AboutSection />
        <StrengthSection />
        <ProjectsSection projects={projects} onOpenProject={setSelectedProject} />
        <WorkflowSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function Header({ activeSection }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Go to home">
        WOOJIN KIM
      </a>
      <nav className="section-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} className={activeSection === item.id ? 'is-active' : ''} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ featuredProject }) {
  const tags = ['AI API', 'Frontend', 'Interactive Web', 'Prompt Engineering', 'Codex', 'Automation', 'MySQL', 'React'];

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">AI 활용형 기획자&개발자 / Product Builder</p>
        <h1>기획과 구현 사이를 연결하는 AI 활용형 개발자</h1>
        <p className="hero-lead">
          웹 서비스 기획부터 인터랙티브 콘텐츠 연출, 프론트엔드 구현, AI API 활용까지
          아이디어를 실제 사용 가능한 결과물로 구체화하는 프로젝트를 만들어 왔습니다.
        </p>
        <div className="tag-list">
          {tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="button ghost" href="#contact">
            연락하기
          </a>
        </div>
      </div>
      <aside className="hero-preview" data-reveal aria-label="Featured project preview">
        <span>Featured</span>
        <img src={featuredProject.thumbnailUrl} alt={`${featuredProject.title} preview`} />
        <strong>{featuredProject.title}</strong>
        <p>{featuredProject.summary}</p>
      </aside>
    </section>
  );
}

function AboutSection() {
  const cards = [
    ['Planning', ['사용자 흐름 설계', '콘텐츠 구조 설계', '화면 구성 기획', '프로젝트 방향성 정리']],
    ['Development', ['프론트엔드 구현', 'API 데이터 연결', 'DB 구조 설계 참여', '반응형 UI 구현']],
    ['AI Workflow', ['AI 이미지·영상 리소스 제작', 'LLM API 활용', 'Codex 기반 개발 보조', '테스트 하네스 기반 검증']],
  ];

  return (
    <section id="about" className="about-section section-shell">
      <SectionTitle eyebrow="About" title="저는 이런 방식으로 프로젝트를 만듭니다." />
      <p className="section-lead" data-reveal>
        아이디어를 기획안에만 남겨두기보다 실제 화면과 기능으로 구현하는 과정에 관심을 가지고 작업해 왔습니다.
        기획, 연출, 개발을 하나의 흐름으로 연결하고 AI와 자동화 도구를 활용해 반복 작업을 줄입니다.
      </p>
      <div className="three-column-grid">
        {cards.map(([title, items]) => (
          <article className="info-card" key={title} data-reveal>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function StrengthSection() {
  return (
    <section id="strengths" className="strength-section section-shell">
      <SectionTitle eyebrow="Core Strength" title="제가 결과물을 만드는 방식" />
      <div className="strength-grid">
        {strengths.map((strength, index) => (
          <article className="strength-card" key={strength.title} data-reveal>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{strength.title}</h3>
            <p>{strength.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection({ projects, onOpenProject }) {
  return (
    <section id="projects" className="projects-section section-shell">
      <SectionTitle eyebrow="Featured Projects" title="프로젝트 카드를 클릭하면 상세 내용을 볼 수 있습니다." />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => onOpenProject(project)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <button
      className="project-card"
      type="button"
      onClick={onClick}
      data-testid={`project-card-${project.slug}`}
      data-reveal
    >
      <span className="project-status">{project.period}</span>
      <img src={project.thumbnailUrl} alt={`${project.title} thumbnail`} />
      <div className="project-card-body">
        <p>{project.role}</p>
        <h3>{project.title}</h3>
        <span>{project.summary}</span>
        <div className="tag-list compact">
          {project.techStack.slice(0, 5).map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <strong>View Detail</strong>
      </div>
    </button>
  );
}

function WorkflowSection() {
  return (
    <section id="workflow" className="workflow-section section-shell">
      <SectionTitle eyebrow="Workflow" title="AI를 활용해 작업 속도와 완성도를 높이는 방식" />
      <div className="workflow-grid">
        {workflow.map((step, index) => (
          <article className="workflow-step" key={step.title} data-reveal>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="skills-section section-shell">
      <SectionTitle eyebrow="Skills" title="기술 스택은 사용 맥락과 함께 보여줍니다." />
      <div className="skills-grid">
        {skills.map(([group, items]) => (
          <article className="skill-card" key={group} data-reveal>
            <h3>{group}</h3>
            <div className="tag-list compact">
              {items.map((item) => (
                <TechTag key={item} label={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>기획과 구현 사이를 연결하는 프로젝트에 관심이 있습니다.</h2>
        <p>
          AI와 자동화 도구를 활용해 아이디어를 빠르게 검증하고 실제 서비스로 만드는 일을 계속해 나가고 싶습니다.
        </p>
      </div>
      <div className="contact-actions" data-reveal>
        <a className="button primary" href="mailto:hello@example.com">
          Email
        </a>
        <a className="button ghost" href="https://github.com/bluebeatle97" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
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
          <ModalBlock title="나의 역할">
            <p>{project.role}</p>
          </ModalBlock>
          <ModalBlock title="기술 스택">
            <div className="tag-list compact">
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
          {project.imageUrls.length > 0 && (
            <ModalBlock title="이미지 갤러리">
              <div className="modal-gallery">
                {project.imageUrls.map((imageUrl) => (
                  <img key={imageUrl} src={imageUrl} alt={`${project.title} screen`} />
                ))}
              </div>
            </ModalBlock>
          )}
          {links.length > 0 && (
            <ModalBlock title="관련 링크">
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

function Footer() {
  return <footer className="site-footer section-shell">© 2026 Woojin Kim Portfolio</footer>;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
