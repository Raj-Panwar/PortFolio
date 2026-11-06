
import React, { useState } from 'react';
import {
    Mail,
    ArrowUpRight,
    Terminal,
    Code2,
    Briefcase,
    GraduationCap,
    Command,
    X
} from 'lucide-react';

const projects = [
    {
        name: 'SkipQ',
        tag: 'Multi-tenant SaaS · Spring Boot · React',
        desc: 'A college stationery and print-order platform. Students place stationery and print orders online, receive a token and track the queue; college admins manage their own catalog and orders.',
        highlights: [
            'College-scoped student and admin accounts',
            'JWT authentication and role-aware authorization',
            'Token allocation with rollover and wait-time estimation',
            'Order lifecycle and student/admin notifications',
            'Spring Data JPA, MySQL and Flyway migrations'
        ],
        stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Flyway'],
        link: 'https://github.com/Raj-Panwar/SkipQ'
    },
    {
        name: 'AI Code Reviewer',
        tag: 'Generative AI · Full Stack',
        desc: 'A full-stack AI code review assistant that returns structured feedback to help developers understand and improve their code.',
        highlights: [
            'Code quality and security vulnerability analysis',
            'Bug classification and explanation',
            'Big-O asymptotic complexity analysis',
            'Mentor-style recommendations for improvement',
            'Backend test suite with 21 passing tests at the last recorded run'
        ],
        stack: ['React', 'Node.js', 'TypeScript', 'Google GenAI'],
        link: 'https://github.com/Raj-Panwar/AICode-Reviewer'
    },
    {
        name: 'GigShield AI',
        tag: 'AI · InsurTech',
        desc: 'A gig-worker insurance platform concept exploring how technology can make insurance workflows more accessible for people working in the gig economy.',
        highlights: [
            'Flask backend foundation',
            'React Native mobile application',
            'AI-assisted insurance experience concept'
        ],
        stack: ['Python', 'Flask', 'AI/ML', 'React Native'],
        link: '#'
    }
];

const skills = [
    'Java',
    'C++',
    'Python',
    'JavaScript',
    'React',
    'Spring Boot',
    'Spring Security',
    'MySQL',
    'JWT',
    'Git & GitHub',
    'AWS',
    'Generative AI'
];

const commands = {
    help: 'Available commands: about, skills, projects, achievements, contact, funfact, clear',
    about: 'I am Raj Panwar, a B.Tech CSE (AI & ML) student at GL Bajaj, Greater Noida. I enjoy building practical software, backend systems and AI-powered tools.',
    skills: 'Java · C++ · Python · JavaScript · React · Spring Boot · MySQL · AWS · Generative AI',
    projects: 'SkipQ | AI Code Reviewer | GigShield AI — scroll to the Projects section to explore them.',
    achievements: 'Google Gemini Student Ambassador (GSA) 2026; AWS Student Builder Campus Leader; Judge on the evaluation panel at AgentsX 2026 — AI Engineering Exhibition.',
    contact: 'Email: rajpanwar@example.com | GitHub: github.com/Raj-Panwar',
    funfact: 'I like turning everyday campus problems into software products. That is how SkipQ started.',
    clear: '__CLEAR__'
};

/* GitHub logo */
function GitHubIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.13 3.2 1.6.1-.73.4-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.24-5.11 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
    );
}

/* LinkedIn logo */
function LinkedInIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.1 18.9H5.1V9.25h3v9.65ZM6.6 7.93a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48Zm12.3 10.97h-3v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48v4.78h-3V9.25h2.88v1.32h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.29Z" />
        </svg>
    );
}

function App() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'Welcome to RAJ.SYS v1.0',
        'Type "help" to explore this portfolio.'
    ]);

    const run = (e) => {
        e.preventDefault();

        const q = input.trim().toLowerCase();

        if (!q) return;

        setHistory((h) =>
            q === 'clear'
                ? []
                : [
                    ...h,
                    `visitor@raj:~$ ${q}`,
                    commands[q] || `Command not found: ${q}. Type "help" for available commands.`
                ]
        );

        setInput('');
    };

    return (
        <>
            <header className="nav">
                <a className="brand" href="#home">
                    <span className="brand-mark">R</span>
                    RAJ<span className="muted">.PANWAR</span>
                </a>

                <nav>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#achievements">Achievements</a>
                </nav>

                <a className="nav-cta" href="#contact">
                    Let's connect <ArrowUpRight size={15} />
                </a>
            </header>

            <main id="home">
                {/* HERO */}
                <section className="hero">
                    <div className="hero-copy">
                        <div className="eyebrow">
                            <span className="pulse" />
                            AVAILABLE FOR INTERNSHIP OPPORTUNITIES
                        </div>

                        <h1>
                            Building things
                            <br />
                            that <span className="gradient">make a difference.</span>
                        </h1>

                        <p className="lead">
                            Hey, I'm <b>Raj Panwar</b> — a developer, problem solver and
                            AI/ML enthusiast turning ideas into useful products.
                        </p>

                        <div className="actions">
                            <a className="btn primary" href="#projects">
                                Explore my work <ArrowUpRight size={17} />
                            </a>

                            <a
                                className="btn secondary"
                                href="https://github.com/Raj-Panwar"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon /> GitHub
                            </a>
                        </div>

                        {/* SOCIAL LINKS WITH BRAND LOGOS */}
                        <div className="socials">
                            <a
                                href="https://github.com/Raj-Panwar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                <GitHubIcon />
                                github.com/Raj-Panwar
                            </a>

                            <a
                                href="https://www.linkedin.com/in/raj-panwar-801657329"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                            >
                                <LinkedInIcon />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* PROFILE CARD */}
                    <div className="hero-card">
                        <div className="card-top">
                            <span>PROFILE_OVERVIEW.exe</span>
                            <span className="dots">● ● ●</span>
                        </div>

                        <div className="avatar">
                            RP
                            <span className="avatar-orbit">✳</span>
                        </div>

                        <h3>Raj Panwar</h3>
                        <p className="muted">Software Developer · Student</p>

                        <div className="stat-grid">
                            <div>
                                <b>8.68</b>
                                <small>CGPA*</small>
                            </div>
                            <div>
                                <b>3+</b>
                                <small>Projects</small>
                            </div>
                            <div>
                                <b>2028</b>
                                <small>Graduation</small>
                            </div>
                        </div>

                        <div
                            className="terminal-hint"
                            onClick={() => setOpen(true)}
                        >
                            <Terminal size={16} />
                            <span>
                                <b>There's more beneath the surface.</b>
                                <small>Click to open the secret terminal ↗</small>
                            </span>
                            <Command size={17} />
                        </div>
                    </div>

                    <div className="scroll-note">
                        SCROLL TO EXPLORE <span>↓</span>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="section">
                    <div className="section-label">01 / ABOUT ME</div>

                    <div className="section-grid">
                        <h2>
                            Curious mind.
                            <br />
                            <span className="gradient">Builder mindset.</span>
                        </h2>

                        <div>
                            <p className="body-copy">
                                I'm pursuing a B.Tech in Computer Science and Engineering
                                (AI & ML) at GL Bajaj Institute of Technology and Management.
                                I love understanding how systems work, solving problems with
                                data structures and algorithms, and building full-stack
                                applications that solve real problems.
                            </p>

                            <p className="body-copy">
                                My interests sit at the intersection of backend engineering,
                                cloud technologies and applied AI. I enjoy understanding
                                systems end to end: API design, authentication, database
                                modeling, edge cases and user experience. I learn best by
                                building, shipping, testing and improving.
                            </p>

                            <div className="chips">
                                <span>Greater Noida, India</span>
                                <span>CSE · AI & ML</span>
                                <span>Class of 2028</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="section">
                    <div className="section-label">02 / TECH SUPERPOWERS</div>

                    <h2>
                        Tools I use to <span className="gradient">build.</span>
                    </h2>

                    <p className="sub">
                        A growing toolkit for engineering useful, reliable products.
                    </p>

                    <div className="skill-grid">
                        {skills.map((s, i) => (
                            <div className="skill" key={s}>
                                <span className="skill-num">
                                    0{i + 1}
                                </span>
                                <b>{s}</b>
                                <span className="skill-arrow">↗</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="section">
                    <div className="section-label">03 / SELECTED PROJECTS</div>

                    <h2>
                        Things I've <span className="gradient">built.</span>
                    </h2>

                    <p className="sub">Learning by shipping real projects.</p>

                    <div className="project-grid">
                        {projects.map((p, i) => (
                            <article className="project" key={p.name}>
                                <div className="project-head">
                                    <span>PROJECT_0{i + 1}</span>
                                    <Code2 size={19} />
                                </div>

                                <h3>{p.name}</h3>
                                <div className="project-tag">{p.tag}</div>
                                <p>{p.desc}</p>

                                {p.highlights && (
                                    <div className="project-highlights">
                                        <b>Key features</b>
                                        {p.highlights.map((h) => (
                                            <div key={h}>↳ {h}</div>
                                        ))}
                                    </div>
                                )}

                                <div className="tags">
                                    {p.stack.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>

                                <a
                                    className="project-link"
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View project <ArrowUpRight size={16} />
                                </a>
                            </article>
                        ))}
                    </div>
                </section>


                {/* ACHIEVEMENTS */}
                <section id="achievements" className="section">
                    <div className="section-label">04 / MILESTONES</div>

                    <h2>
                        Learning, leading & <span className="gradient">growing.</span>
                    </h2>

                    <p className="sub">
                        Experiences, leadership roles and milestones along my journey.
                    </p>

                    <div className="achievement-grid">

                        {/* AWS */}
                        <article className="achievement-card">
                            <div className="achievement-top">
                                <div className="achievement-logo aws-logo">
                                    <svg viewBox="0 0 80 48" role="img" aria-label="AWS logo">
                                        <text x="4" y="29" fontSize="29" fontWeight="700"
                                            fontFamily="Arial, sans-serif" fill="currentColor">aws</text>
                                        <path d="M12 36 Q39 48 67 34"
                                            fill="none" stroke="#E89B36" strokeWidth="3"
                                            strokeLinecap="round" />
                                        <path d="M62 31 L68 34 L62 38"
                                            fill="none" stroke="#E89B36" strokeWidth="2"
                                            strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span className="achievement-category">CAMPUS LEADERSHIP</span>
                            </div>

                            <div className="achievement-content">
                                <span className="achievement-organization">Amazon Web Services</span>
                                <h3>AWS Student Builder Campus Leader</h3>
                                <p>
                                    Supporting student learning and engagement around AWS Builder
                                    Center, helping peers discover cloud technologies and developer
                                    opportunities.
                                </p>
                            </div>

                            <div className="achievement-bottom">
                                <span className="achievement-status">Leadership</span>
                                <span className="achievement-arrow">↗</span>
                            </div>
                        </article>

                        {/* GOOGLE GEMINI */}
                        <article className="achievement-card">
                            <div className="achievement-top">
                                <div className="achievement-logo gemini-logo">
                                    <svg viewBox="0 0 48 48" role="img" aria-label="Gemini-inspired sparkle">
                                        <defs>
                                            <linearGradient id="geminiGradient" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#4285F4" />
                                                <stop offset="50%" stopColor="#9B72CB" />
                                                <stop offset="100%" stopColor="#D96570" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M24 2 C27 15 33 21 46 24 C33 27 27 33 24 46 C21 33 15 27 2 24 C15 21 21 15 24 2Z"
                                            fill="url(#geminiGradient)"
                                        />
                                    </svg>
                                </div>
                                <span className="achievement-category">AMBASSADOR PROGRAM</span>
                            </div>

                            <div className="achievement-content">
                                <span className="achievement-organization">Google · Gemini</span>
                                <h3>Google Gemini Student Ambassador</h3>
                                <p>
                                    Represented Google Gemini in the student community, explored
                                    Google AI tools and created awareness and engagement around
                                    generative AI.
                                </p>
                            </div>

                            <div className="achievement-bottom">
                                <span className="achievement-status">GSA 2026</span>
                                <span className="achievement-arrow">↗</span>
                            </div>
                        </article>

                        {/* AGENTSX */}
                        <article className="achievement-card">
                            <div className="achievement-top">
                                <div className="achievement-logo simple-logo">
                                    <span>AX</span>
                                </div>
                                <span className="achievement-category">EVALUATION PANEL</span>
                            </div>

                            <div className="achievement-content">
                                <span className="achievement-organization">AgentsX 2026</span>
                                <h3>AI Engineering Exhibition Judge</h3>
                                <p>
                                    Served on the evaluation panel, reviewing student projects
                                    and contributing to the assessment of AI engineering
                                    demonstrations.
                                </p>
                            </div>

                            <div className="achievement-bottom">
                                <span className="achievement-status">Judge</span>
                                <span className="achievement-arrow">↗</span>
                            </div>
                        </article>

                        {/* EDUCATION */}
                        <article className="achievement-card">
                            <div className="achievement-top">
                                <div className="achievement-logo simple-logo">
                                    <GraduationCap size={29} />
                                </div>
                                <span className="achievement-category">EDUCATION</span>
                            </div>

                            <div className="achievement-content">
                                <span className="achievement-organization">GL Bajaj Institute of Technology and Management</span>
                                <h3>B.Tech — CSE (AI & ML)</h3>
                                <p>
                                    Pursuing Computer Science and Engineering with a focus on
                                    Artificial Intelligence and Machine Learning.
                                </p>
                            </div>

                            <div className="achievement-bottom">
                                <span className="achievement-status">2024 — 2028</span>
                                <span className="achievement-arrow">↗</span>
                            </div>
                        </article>

                    </div>
                </section>


                {/* CONTACT */}
<section id="contact" className="section contact">
  <div className="section-label">05 / CONTACT</div>

  <h2>
    Have an idea? Let's <span className="gradient">build it.</span>
  </h2>

  <p className="sub">
    Open to internships, collaborations and interesting engineering
    problems.
  </p>

  <div className="contact-actions">

    <a
      href="mailto:raj.panwar1608@gmail.com?subject=Portfolio%20Enquiry"
      className="contact-btn"
    >
      <Mail size={18} />
      <span>Get in Touch</span>
      <ArrowUpRight size={16} />
    </a>

    <a
      href="mailto:raj.panwar1608@gmail.com"
      className="email-link"
    >
      <Mail size={20} />
      <span>raj.panwar1608@gmail.com</span>
    </a>

    <a
      className="btn secondary"
      href="https://github.com/Raj-Panwar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon /> GitHub
    </a>

  </div>
</section>
            </main>

            <footer>
                © 2026 Raj Panwar
                <span>Designed & built with curiosity.</span>
            </footer>

            {!open && (
                <button
                    className="floating-terminal"
                    onClick={() => setOpen(true)}
                    aria-label="Open secret terminal"
                >
                    <Terminal size={19} />
                    <span>psst... try me</span>
                </button>
            )}

            {open && (
                <div
                    className="terminal-overlay"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="terminal-window"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="terminal-bar">
                            <span>
                                <Terminal size={15} />
                                RAJ.SYS — INTERACTIVE TERMINAL
                            </span>

                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close terminal"
                            >
                                <X size={17} />
                            </button>
                        </div>

                        <div className="terminal-body">
                            {history.map((line, i) => (
                                <div
                                    className={
                                        line.startsWith('visitor@') ? 'cmd-line' : 'output'
                                    }
                                    key={i}
                                >
                                    {line}
                                </div>
                            ))}

                            <form onSubmit={run}>
                                <span>visitor@raj:~$</span>
                                <input
                                    autoFocus
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="type a command..."
                                    aria-label="Terminal command"
                                />
                            </form>
                        </div>

                        <div className="terminal-foot">
                            TIP: TRY <b>help</b>, <b>projects</b>, <b>funfact</b> OR{' '}
                            <b>achievements</b>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
