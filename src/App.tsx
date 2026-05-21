import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import './App.css';
import profileImage from './Profile.png';

const skills = [
  'AWS',
  'Linux (RHEL)',
  'Cloud Operations',
  'System Administration',
  'Security Operations',
  'Vulnerability Management',
  'RMF / Compliance',
  'Documentation',
  'Troubleshooting',
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
  'Nessus / Security Center / ServiceNow',
];

const projects = [
  {
    title: 'AI Cloud Security Remediation Copilot',
    description:
      'DevSecOps-focused tool that analyzes scan findings, prioritizes risks, and provides remediation guidance.',
    tech: ['DevSecOps', 'React', 'Python', 'Checkov', 'GitHub Actions'],
    href: 'https://github.com/taylortn/ai-cloud-security-copilot',
    icon: 'lock',
    featured: true,
  },
  {
    title: 'Cloud Linux Automation Lab',
    description:
      'Automated AWS-based Linux environment focused on provisioning, patching, and repeatable operations.',
    tech: ['AWS', 'Bash', 'Terraform'],
    href: 'https://github.com/taylortn/cloud-linux-automation-lab',
    icon: 'cloud',
  },
  {
    title: 'DevSecOps Vulnerability Lab',
    description:
      'Hands-on vulnerability workflow covering identification, remediation, verification, and hardening.',
    tech: ['Nessus', 'Splunk', 'Security'],
    href: 'https://github.com/taylortn/devsecops-vulnerability-lab',
    icon: 'shield',
  },
  {
    title: 'DevOps CI/CD Pipeline Lab',
    description:
      'Pipeline project using GitHub Actions and Docker to improve deployment consistency.',
    tech: ['GitHub Actions', 'Docker', 'CI/CD'],
    href: 'https://github.com/taylortn/devops-cicd-pipeline-lab',
    icon: 'workflow',
  },
];

const experience = [
{
role: 'National Intake Committee Executive Assistant',
org: 'Sigma Chi Psi Sorority, Incorportated',
dates: 'Sept 2023 – Present',
points: [
  'Manage Google Classroom environments, including access support, content updates, and digital learning design.',
  'Work with tools and processes aligned to secure operations and compliance expectations.',
  'Contribute to documentation, process improvement, and operational support efforts.',
  'Track intake progress, assignment completion, exam status, and participation using Google Sheets and intake trackers.',
  'Support the National Intake Committee with weekly intake operations, communication, documentation, and recap preparation',
  'Respond to initiate questions and provide clear guidance on deadlines, classroom navigation, assignments, and intake expectations.',
  'Assist with organizing intake tasks, workshops, quizzes, good deed submissions, line activities, and final crossover preparation.',
],
},
{
role: 'Technical Architecture Specialist',
org: 'Accenture Federal Services | Office of Naval Intelligence (ONI)',
dates: 'Sept 2023 – Feb 2026',
points: [
  'Support secure Linux and AWS-hosted environments in mission-focused settings.',
  'Perform patching, troubleshooting, vulnerability remediation, and system hardening.',
  ],
},
{
role: 'Information System Security Officer (ISSO)',
org: 'Tunuva Technologies / Parsons – National Reconnaissance Office (NRO)',
dates: 'Feb 2022 – Aug 2023',
points: [
  'Supported continuous monitoring, vulnerability tracking, and remediation efforts.',
  'Maintained documentation and artifacts supporting secure and compliant environments.',
  'Coordinated with technical teams to strengthen security posture and readiness.',
],
},
{
role: 'Systems Administrator',
org: 'Apex Systems / Leidos – National Geospatial-Intelligence Agency (NGA)',
dates: 'May 2019 – Oct 2021',
points: [
  'Installed, configured, and maintained systems in enterprise environments.',
  'Resolved service tickets and supported users across daily operations.',
  'Assisted with system updates, maintenance, and performance improvement efforts.'
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
    href: '/TaNara_Taylor_System_Admin_Resume.pdf',
    icon: 'pdf',
  },
  {
    label: 'ISSO / Cyber Resume',
    note: 'Open or download directly from my hosted files.',
    href: '/TaNara_Taylor_ISSO_Resume.pdf',
    icon: 'pdf',
  },
  {
    label: 'Cloud Operations Resume',
    note: 'Open or download directly from my hosted files.',
    href: '/TaNara_Taylor_Cloud_Operations_Resume.pdf',
    icon: 'pdf',
  },
];

const quickLinks = [
  {
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/taylortanara',
    icon: 'linkedin',
  },
  {
    label: 'GitHub Profile',
    href: 'https://github.com/taylortn',
    icon: 'github',
  },
];

function QuickLinkIcon({ type }: { type: string }) {
  if (type === 'linkedin') return <FaLinkedin />;
  if (type === 'github') return <FaGithub />;
  return <FaFilePdf />;
}

function ProjectIcon({ type }: { type: string }) {
  if (type === 'lock') {
    return (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <rect x="6" y="10" width="12" height="10" rx="2" />
        <path d="M8.5 10V7.8a3.5 3.5 0 0 1 7 0V10" />
        <path d="M12 14v2.5" />
      </svg>
    );
  }

  if (type === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M7.5 18h9.2a4.3 4.3 0 0 0 .4-8.6 6 6 0 0 0-11.2 1.7A3.6 3.6 0 0 0 7.5 18Z" />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M12 3 19 6v5.4c0 4.5-2.9 7.5-7 9.6-4.1-2.1-7-5.1-7-9.6V6Z" />
        <path d="m9.5 12.4 1.6 1.6 3.7-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M8 7h8" />
      <path d="m7.4 8.7 3.4 6.6" />
      <path d="m16.6 8.7-3.4 6.6" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v6h5" />
      <path d="M9 14h6" />
      <path d="M9 18h4" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
      <path d="M6 7v11h11" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M4 7h16v10H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

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
                  href="/TaNara_Taylor_System_Admin_Resume.pdf"
                  className="button button-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  View My Resume
                  <span className="button-icon">
                    <DocumentIcon />
                  </span>
                </a>

                <a href="#projects" className="button button-light">
                  Explore Projects
                  <span className="button-icon">
                    <ExternalIcon />
                  </span>
                </a>

                <a href="#contact" className="button button-rose">
                  Get in Touch
                  <span className="button-icon">
                    <MailIcon />
                  </span>
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-frame">
                <img src={profileImage} alt="Ta'Nara Taylor Professional Photo" />
              </div>

              <div className="floating-monogram" aria-hidden="true">
                <span>TT</span>
              </div>

              <div className="snapshot-card">
                <p className="eyebrow eyebrow-with-star">Professional Snapshot</p>
                <h4>
                  Infrastructure-minded.
                  <br />
                  Security-focused.
                  <br />
                  People-driven.
                </h4>
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
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>About Me</p>
              <h3>Grounded in systems. Growing in cyber.</h3>
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
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Technical Skills</p>
              <h3>Built for secure environments</h3>

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
                <img src="/assets/pink%20globe.png" alt="" />
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
              <img src="/assets/leadership.png" alt="" />
            </div>

            <div className="leadership-content">
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Leadership & Digital Operations</p>
              <h3>Leading with systems. Serving with purpose.</h3>
              <p>
                I combine operational excellence with a heart for people, leading digital
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
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Professional Experience</p>
              <h3>Work that reflects real-world systems support</h3>

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
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Featured Projects</p>
              <h2>Projects that show the hands-on side</h2>

              <div className="project-list">
                {projects.map((project) => (
                  <article key={project.title} className={project.featured ? 'project featured' : 'project'}>
                    <div className="project-icon">
                      <ProjectIcon type={project.icon} />
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
  <div className="container card wide-card certifications-card">
    <div className="certifications-content">
      <p className="eyebrow eyebrow-with-star">
        <span aria-hidden="true">✦</span> Certifications
      </p>

      <h2>Validated knowledge. Ongoing growth.</h2>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <span key={cert}>{cert}</span>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="section contact-section" id="contact">
          <div className="container two-column">
            <article className="card">
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Resume & Downloads</p>
              <h2>Choose the version that fits the conversation.</h2>

              <div className="resume-list">
                {resumeLinks.map((resume) => (
                  <a
  key={resume.label}
  href={resume.href}
  target="_blank"
  rel="noopener noreferrer"
  download
>
  <div className="resume-link-main">
    <FaFilePdf />
    <div>
      <strong>{resume.label}</strong>
      <p>{resume.note}</p>
    </div>
  </div>

  <span>Download ↗</span>
</a>
                ))}

                {quickLinks.map((link) => (
  <a
    key={link.label}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="quick-link"
  >
    <QuickLinkIcon type={link.icon} />
    <span>{link.label}</span>
  </a>
))}
              </div>
            </article>

            <article className="contact-card">
              <p className="eyebrow eyebrow-with-star"><span aria-hidden="true">✦</span>Let&apos;s Connect</p>
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

  <div className="direct-contact-links">
    <a href="mailto:tanara.taylor@yahoo.com">tanara.taylor@yahoo.com</a>
    <a href="https://linkedin.com/in/taylortanara" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/taylortanara
    </a>
    <a href="https://github.com/taylortn" target="_blank" rel="noopener noreferrer">
      github.com/taylortn
    </a>
  </div>
</div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand-monogram" aria-hidden="true">TT</span>
            <p>© 2026 Ta&apos;Nara Taylor</p>
          </div>
          <p>Systems Administrator | Cloud • Security • People ♡</p>
        </div>
      </footer>
    </div>
  );
}
