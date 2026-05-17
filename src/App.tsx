import './App.css';
import profileImage from './Profile.png';

const skills = [
  'Linux (RHEL)',
  'AWS',
  'Cloud Operations',
  'System Administration',
  'Security Operations',
  'Vulnerability Management',
  'RMF / Compliance',
  'Documentation',
  'Automation',
  'ServiceNow',
  'Google Classroom Management',
  'Digital Learning Support',
  'Training Coordination',
  'Workflow Support',
  'Project Support',
];

const technicalSkills = [
  'Linux (RHEL)',
  'AWS (EC2, EBS, SSM)',
  'Vulnerability Management',
  'STIG Hardening',
  'RMF / Compliance',
  'Nessus / Splunk / ServiceNow',
];

const projects = [
  {
    title: 'AI Cloud Security Remediation Copilot',
    description:
      'DevSecOps-focused tool that analyzes scan findings, prioritizes risks, and provides remediation guidance.',
    tech: ['DevSecOps', 'React', 'Python', 'Checkov', 'GitHub Actions'],
    href: 'https://github.com/taylortn/ai-cloud-security-copilot',
    featured: true,
  },
  {
    title: 'Cloud Linux Automation Lab',
    description:
      'Automated AWS-based Linux environment focused on provisioning, patching, and repeatable operations.',
    tech: ['AWS', 'Bash', 'Terraform'],
    href: 'https://github.com/taylortn/cloud-linux-automation-lab',
  },
  {
    title: 'DevSecOps Vulnerability Lab',
    description:
      'Hands-on vulnerability workflow covering identification, remediation, verification, and hardening.',
    tech: ['Nessus', 'Splunk', 'Security'],
    href: 'https://github.com/taylortn/devsecops-vulnerability-lab',
  },
  {
    title: 'DevOps CI/CD Pipeline Lab',
    description:
      'Pipeline project using GitHub Actions and Docker to improve deployment consistency.',
    tech: ['GitHub Actions', 'Docker', 'CI/CD'],
    href: 'https://github.com/taylortn/devops-cicd-pipeline-lab',
  },
];

const experience = [
  {
    role: 'Technical Architecture Specialist',
    org: 'Accenture Federal Services | Office of Naval Intelligence',
    dates: 'Sept 2023 – Present',
    points: [
      'Support secure Linux and AWS-hosted environments in mission-focused settings.',
      'Perform patching, troubleshooting, vulnerability remediation, and system hardening.',
      'Manage Google Classroom environments, including access support, content updates, and digital learning design.',
      'Work with tools and processes aligned to secure operations and compliance expectations.',
    ],
  },
  {
    role: 'Information System Security Officer (ISSO)',
    org: 'Tunuva Technologies / Parsons – NRO',
    dates: 'Feb 2022 – Aug 2023',
    points: [
      'Supported continuous monitoring, vulnerability tracking, and remediation efforts.',
      'Maintained documentation and artifacts supporting secure and compliant environments.',
      'Coordinated with technical teams to strengthen security posture and readiness.',
    ],
  },
  {
    role: 'Systems Administrator',
    org: 'Apex Systems / Leidos – NGA',
    dates: 'May 2019 – Oct 2021',
    points: [
      'Installed, configured, and maintained systems in enterprise environments.',
      'Resolved service tickets and supported users across daily operations.',
      'Assisted with system updates, maintenance, and performance improvement efforts.',
    ],
  },
];

const leadershipCards = [
  {
    title: 'Google Classroom Management',
    text: 'Designed, managed, and maintained organized learning environments.',
  },
  {
    title: 'Documentation & Process',
    text: 'Created SOPs, runbooks, guides, and repeatable workflows.',
  },
  {
    title: 'Coordination & Communication',
    text: 'Aligned teams, records, assignments, and stakeholders for smoother execution.',
  },
  {
    title: 'Support & Enablement',
    text: 'Provided training, access support, and workflow guidance to users.',
  },
];

const certifications = [
  'Security+ CE',
  'AWS Solutions Architect – Associate',
  'AWS Cloud Practitioner',
  'AWS AI Practitioner',
  'RHCSA (In Progress)',
  'Risk Management Framework (RMF)',
];

const resumeLinks = [
  {
    label: 'Systems Administrator Resume',
    note: 'Open or download directly from my hosted files.',
    href: 'https://raw.githubusercontent.com/taylortn/taylortn/root/resume/T_Taylor Resume.pdf',
  },
  {
    label: 'ISSO / Cyber Resume',
    note: 'Open or download directly from my hosted files.',
    href: 'https://raw.githubusercontent.com/taylortn/taylortn/root/resume/Taylor%20Resume%20ISSO.pdf',
  },
];

const quickLinks = [
  {
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/taylortanara',
  },
  {
    label: 'GitHub Profile',
    href: 'https://github.com/taylortn',
  },
];

export default function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#top" className="brand-lockup" aria-label="Ta'Nara Taylor home">
            <span className="brand-monogram" aria-hidden="true">TT</span>
            <span>Ta&apos;Nara Taylor</span>
          </a>

          <div className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Let&apos;s Connect <span aria-hidden="true">✦</span>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Systems Administrator • Cloud • Security Focused</p>

              <h1>
                Ta&apos;Nara
                <br />
                Taylor <span aria-hidden="true">✦</span>
              </h1>

              <p className="script-line">Building secure systems. Empowering people.</p>

              <p className="hero-description">
                I build, support, and secure cloud and infrastructure environments while
                bringing structure, documentation, and operational discipline to every system I touch.
              </p>

              <ul className="focus-list" aria-label="Professional focus areas">
                <li>Systems Administration</li>
                <li>Cloud Operations</li>
                <li>Security Operations</li>
                <li>DevSecOps</li>
                <li>Digital Learning Support</li>
              </ul>

              <div className="hero-actions">
                <a
                  href="/T_Taylor Resume.pdf"
                  className="button button-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                  <span className="button-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M7 3h7l5 5v13H7z" />
                      <path d="M14 3v6h5" />
                      <path d="M9 14h6" />
                      <path d="M9 18h4" />
                    </svg>
                  </span>
                </a>

                <a href="#projects" className="button button-light">
                  Explore Projects
                  <span className="button-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M7 17 17 7" />
                      <path d="M10 7h7v7" />
                      <path d="M6 7v11h11" />
                    </svg>
                  </span>
                </a>

                <a href="#contact" className="button button-rose">
                  Get in Touch
                  <span className="button-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M4 7h16v10H4z" />
                      <path d="m4 8 8 6 8-6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-frame">
                <img src={profileImage} alt="Ta'Nara Taylor Professional Photo" />
              </div>

              <div className="floating-monogram" aria-hidden="true">TT</div>

              <div className="snapshot-card">
                <p className="eyebrow">Professional Snapshot</p>
                <h2>
                  Infrastructure-minded.
                  <br />
                  Security-focused. People-driven.
                </h2>
                <p>
                  I bridge systems, security, and support to create reliable, scalable,
                  and human-centered environments.
                </p>

                <div className="mini-tags">
                  <span>Linux</span>
                  <span>AWS</span>
                  <span>Security</span>
                  <span>Compliance</span>
                  <span>Documentation</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-column">
            <article className="card">
              <p className="eyebrow">About Me</p>
              <h2>Grounded in systems. Growing in cyber.</h2>
              <p>
                I bring hands-on experience across Linux administration, AWS support,
                patch management, vulnerability remediation, and secure operations.
                My background also includes ISSO-aligned work supporting continuous
                monitoring, RMF processes, and compliance-focused environments.
              </p>
              <p>
                My goal is simple: keep systems stable, secure, and operational while
                continuing to grow into stronger cybersecurity and incident response work.
              </p>
            </article>

            <article className="card" id="skills">
              <p className="eyebrow">Technical Skills</p>
              <h2>Built for secure environments</h2>

              <div className="skills-grid">
                {technicalSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="skills-world-section" aria-label="Skills world">
          <div className="container skills-world-grid">
            <div className="skills-world-copy">
              <p className="eyebrow eyebrow-with-star">
                <span aria-hidden="true">✦</span>
                My Skills World
              </p>
              <h2>
                A world of skills.
                <br />
                Built for impact.
              </h2>
              <p>
                From cloud to compliance, operations to documentation, these skills support
                everything I create and every system I support.
              </p>
              <p className="signature">Ta&apos;Nara Taylor</p>
            </div>

            <div className="skills-orbit" aria-hidden="true">
              <div className="globe">
                <span>
                  Skills
                  <br />
                  <small>World</small>
                </span>
              </div>

              <div className="orbit-tags">
                {skills.map((skill, index) => (
                  <span key={skill} className={`orbit-tag tag-${index + 1}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section leadership-section" id="leadership">
          <div className="container leadership-card">
            <div className="leadership-image" aria-hidden="true">
              <span>Purpose</span>
              <span>People</span>
              <span>Process</span>
            </div>

            <div className="leadership-content">
              <p className="eyebrow">Leadership & Digital Operations</p>
              <h2>Leading with systems. Serving with purpose.</h2>
              <p>
                I combine operational excellence with a heart for people—leading digital
                learning initiatives, documentation, coordination, and support that drive clarity and results.
              </p>

              <div className="leadership-grid">
                {leadershipCards.map((card) => (
                  <article key={card.title} className="small-card">
                    <span aria-hidden="true">✦</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section split-section">
          <div className="container split-grid">
            <section className="card" id="experience">
              <p className="eyebrow">Professional Experience</p>
              <h2>Work that reflects real-world systems support</h2>

              <div className="timeline">
                {experience.map((job) => (
                  <article key={`${job.role}-${job.org}`} className="timeline-item">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="meta">{job.org}</p>
                    </div>
                    <span className="date-pill">{job.dates}</span>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="card" id="projects">
              <p className="eyebrow">Featured Projects</p>
              <h2>Projects that show the hands-on side</h2>

              <div className="project-list">
                {projects.map((project) => (
                  <article key={project.title} className={project.featured ? 'project featured' : 'project'}>
                    <div className="project-icon" aria-hidden="true">
                      {project.featured ? '▣' : '◇'}
                    </div>

                    <div>
                      <div className="project-heading">
                        <h3>{project.title}</h3>
                        {project.featured && <span>Featured</span>}
                      </div>
                      <p>{project.description}</p>

                      <div className="tech-list">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>

                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container card wide-card">
            <div>
              <p className="eyebrow">Certifications</p>
              <h2>Validated knowledge. Ongoing growth.</h2>
              <div className="cert-grid">
                {certifications.map((cert) => (
                  <span key={cert}>{cert}</span>
                ))}
              </div>
            </div>

            <div className="quote-card" aria-hidden="true">
              <span>Discipline</span>
              <span>Clarity</span>
              <span>Excellence</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container two-column">
            <article className="card">
              <p className="eyebrow">Resume & Downloads</p>
              <h2>Choose the version that fits the conversation.</h2>

              <div className="resume-list">
                {resumeLinks.map((resume) => (
                  <a key={resume.label} href={resume.href} target="_blank" rel="noopener noreferrer">
                    <div>
                      <strong>{resume.label}</strong>
                      <p>{resume.note}</p>
                    </div>
                    <span>Download ↗</span>
                  </a>
                ))}

                {quickLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    <strong>{link.label}</strong>
                    <span>Open ↗</span>
                  </a>
                ))}
              </div>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Let&apos;s Connect</p>
              <h2>Let&apos;s start the conversation.</h2>

              <form
                action="mailto:tanara.taylor@yahoo.com"
                method="post"
                encType="text/plain"
                className="contact-form"
              >
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input type="email" name="email" placeholder="Your Email" />
                </div>
                <textarea name="message" placeholder="Your Message" rows={6}></textarea>
                <button type="submit">Send Message ✈</button>
              </form>

              <div className="direct-contact">
                <strong>Direct Contact</strong>
                <span>tanara.taylor@yahoo.com</span>
                <span>linkedin.com/in/taylortanara</span>
                <span>github.com/taylortn</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="brand-monogram" aria-hidden="true">TT</span>
          <p>© 2026 Ta&apos;Nara Taylor</p>
          <p>Systems Administrator | Cloud • Security • People ♡</p>
        </div>
      </footer>
    </div>
  );
}
