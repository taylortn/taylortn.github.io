import "./App.css";
import profileImage from "./Profile.png";

const skills = [
  "Linux (RHEL)",
  "AWS (EC2, EBS, SSM)",
  "Vulnerability Management",
  "STIG Hardening",
  "RMF / Compliance",
  "Nessus / Splunk / ServiceNow",
];

const skillCloud = [
  "AWS",
  "Linux (RHEL)",
  "Cloud Operations",
  "System Administration",
  "Security Operations",
  "Vulnerability Management",
  "RMF / Compliance",
  "STIG Hardening",
  "Nessus",
  "Splunk",
  "ServiceNow",
  "Documentation",
  "Automation",
  "GitHub Actions",
  "Terraform",
  "Ansible",
  "Google Classroom Management",
  "Digital Learning Support",
  "Training Coordination",
  "Workflow Support",
  "Project Support",
  "Troubleshooting",
];

const projects = [
  {
    title: "AI Cloud Security Remediation Copilot",
    description:
      "DevSecOps dashboard that analyzes Checkov IaC scan reports, prioritizes findings by severity, and provides remediation guidance.",
    tech: ["FastAPI", "React", "Python", "JavaScript", "Checkov", "GitHub Actions"],
    href: "https://github.com/taylortn/ai-cloud-security-copilot",
    featured: true,
  },
  {
    title: "Cloud Linux Automation Lab",
    description:
      "Automated AWS-based Linux environment focused on provisioning, repeatable deployments, and infrastructure support.",
    tech: ["AWS", "Bash", "Terraform"],
    href: "https://github.com/taylortn/cloud-linux-automation-lab",
  },
  {
    title: "DevSecOps Vulnerability Lab",
    description:
      "Hands-on vulnerability management workflow centered on identification, prioritization, remediation, and system hardening.",
    tech: ["VulnMgmt", "Nessus", "Splunk"],
    href: "https://github.com/taylortn/devsecops-vulnerability-lab",
  },
  {
    title: "DevOps CI/CD Pipeline Lab",
    description:
      "Pipeline project using GitHub Actions and Docker to improve deployment consistency and reduce manual effort.",
    tech: ["GitHub Actions", "Docker", "CI/CD"],
    href: "https://github.com/taylortn/devops-cicd-pipeline-lab",
  },
];

const certifications = [
  "Security+ CE",
  "AWS Solutions Architect – Associate",
  "AWS Cloud Practitioner",
  "AWS AI Practitioner",
  "RHCSA (In Progress)",
  "Risk Management Framework (RMF)",
];

const experience = [
  {
    role: "Technical Architecture Specialist",
    org: "Accenture Federal Services | Office of Naval Intelligence",
    dates: "Sept 2023 – Feb 2026",
    points: [
      "Support secure Linux and AWS-hosted environments in mission-focused settings.",
      "Perform patching, troubleshooting, vulnerability remediation, and system hardening.",
      "Manage and maintain Google Classroom environments, including course organization, user access support, content updates, and digital learning design.",
      "Work with tools and processes aligned to secure operations and compliance expectations.",
    ],
  },
  {
    role: "Information System Security Officer (ISSO)",
    org: "Tunuva Technologies / Parsons – NRO",
    dates: "Nov 2022 – Aug 2023",
    points: [
      "Supported continuous monitoring, vulnerability tracking, and remediation efforts.",
      "Maintained documentation and artifacts supporting secure and compliant environments.",
      "Coordinated with technical teams to strengthen security posture and readiness.",
    ],
  },
  {
    role: "Systems Administrator",
    org: "Apex Systems / Leidos – NGA",
    dates: "May 2022 – Oct 2022",
    points: [
      "Installed, configured, and maintained systems in enterprise environments.",
      "Resolved service tickets and supported users across daily operations.",
      "Assisted with system updates, maintenance, and performance improvement efforts.",
    ],
  },
];

const leadershipPoints = [
  "Designed, managed, and maintained Google Classroom environments for intake and member education programs.",
  "Organized digital learning materials, assignments, announcements, testing workflows, and resource sections for new initiates.",
  "Supported intake operations by improving communication, tracking, and documentation across Google Classroom, Google Forms, Google Sheets, and Gmail.",
  "Helped create a structured virtual learning experience for initiates, Big Sisters, and committee leadership.",
  "Maintained digital classroom updates, assignment visibility, access support, and content organization throughout the intake process.",
];

const resumeLinks = [
  {
    label: "📄 Systems Administrator Resume",
    href: "https://raw.githubusercontent.com/taylortn/taylortn/root/resume/Tanara_Taylor_System_Admin_Resume.pdf",
  },
  {
    label: "🔐 ISSO / Cyber Resume",
    href: "https://raw.githubusercontent.com/taylortn/taylortn/root/resume/Taylor%20Resume%20ISSO.pdf",
  },
];

const quickLinks = [
  {
    label: "💼 LinkedIn Profile",
    href: "https://linkedin.com/in/taylortanara",
  },
  {
    label: "💻 GitHub Profile",
    href: "https://github.com/taylortn",
  },
];

export default function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#top" className="brand-lockup" aria-label="Ta'Nara Taylor home">
            <span className="brand-monogram" aria-hidden="true">
              <span className="brand-letter">T</span>
              <span className="brand-letter">T</span>
            </span>
            <span>Ta&apos;Nara Taylor</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#leadership">Leadership</a>
            <a href="#skills-world">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          <span>Let&apos;s Connect</span>
          <span className="nav-cta-icon" aria-hidden="true">✦</span>
        </a>
      </div>
    </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
        <div className="hero-glow hero-glow-bottom"></div>

        <div className="container hero-grid">
          <div className="hero-text fade-in-up">
            <div className="hero-kicker">
  <span>Systems Administrator</span>
  <span className="hero-dot">•</span>
  <span>Cloud</span>
  <span className="hero-dot">•</span>
  <span>Security Focused</span>
</div>
            <h1>Ta&apos;Nara<br />Taylor <span aria-hidden="true" className="hero-spark">✦</span></h1>
            <p className="hero-description">
              I build, support, and secure cloud and infrastructure environments while bringing
              structure, documentation, and operational discipline to every system I touch.
            </p>

            <p className="hero-subline">Building secure systems. Empowering people.</p>

            <div className="hero-buttons">
              <a
                className="button button-dark"
                href="https://github.com/taylortn/ai-cloud-security-copilot"
                target="_blank"
                rel="noopener noreferrer"
              >
                View AI Security Project
              </a>
              <a
                className="button button-light"
                href="https://raw.githubusercontent.com/taylortn/taylortn/root/resume/Tanara_Taylor_System_Admin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                className="button button-gold"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="profile-panel hero-profile portrait-stage polished-portrait fade-in-up delay-1">
            <div className="portrait-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
            <div className="profile-photo-wrap">
              <img
  src={profileImage}
  alt="Ta'Nara Taylor Professional Photo"
  className="profile-photo"
/>
            </div>

            <div className="profile-card polished">
              <p className="eyebrow eyebrow-green">Professional Snapshot</p>
              <h2>Infrastructure-minded. Security-focused.</h2>
              <p className="profile-summary">
                Systems administration, cloud operations, vulnerability remediation, and workflow
                ownership for secure, well-documented environments.
              </p>

                            <div className="mini-tags">
                <span>Linux</span>
                <span>AWS</span>
                <span>Security</span>
                <span>Compliance</span>
                <span>Documentation</span>
              </div>
              <div className="signature-line">Cloud-ready. Security-aware. Detail-led.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container two-column">
          <div className="card fade-in-up">
            <p className="eyebrow eyebrow-purple">About Me</p>
            <h2>Grounded in systems. Growing in cyber.</h2>
            <p className="body-text">
              I bring hands-on experience across Linux administration, AWS
              support, patch management, vulnerability remediation, and secure
              operations. My background also includes ISSO-aligned work
              supporting continuous monitoring, RMF processes, and
              compliance-focused environments.
            </p>
            <p className="body-text">
              My goal is simple: keep systems stable, secure, and operational
              while continuing to grow into stronger cybersecurity and incident
              response work.
            </p>
          </div>

          <div className="card fade-in-up delay-1" id="skills">
            <p className="eyebrow eyebrow-green">Technical Skills</p>
            <h2>Built for secure environments</h2>
                        <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <section className="section skills-world-section" id="skills-world">
        <div className="container skills-world-grid">
          <div className="skills-world-copy fade-in-up">
            <p className="eyebrow eyebrow-gold">My Skills World</p>
            <h2>A world of skills. Built for impact.</h2>
            <p className="body-text">
              From cloud to compliance, operations to documentation, these skills support
              the way I build, troubleshoot, secure, and organize every environment I touch.
            </p>
            <p className="signature-line large-signature">Ta&apos;Nara Taylor</p>
          </div>

          <div className="skills-orbit-wrap fade-in-up delay-1" aria-label="Skills cloud">
            <div className="skills-globe">
              <div className="globe-shine"></div>
              <div className="globe-ring ring-one"></div>
              <div className="globe-ring ring-two"></div>
              <div className="globe-ring ring-three"></div>
              <span className="globe-core-text">Skills<br /><small>World</small></span>
            </div>

            <div className="orbit-tags">
              {skillCloud.map((skill, index) => (
                <span key={skill} className={`orbit-tag tag-${index + 1}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section leadership-section" id="leadership">
        <div className="container">
          <div className="card leadership-card fade-in-up">
            <div className="leadership-header">
              <div>
                <p className="eyebrow eyebrow-gold">Leadership & Digital Operations</p>
                <h2>Platform administration beyond the server room</h2>
              </div>
              <div className="role-badge">
                <span>National Intake Committee Executive Assistant</span>
                <strong>Sigma Chi Psi Sorority, Incorporated</strong>
              </div>
            </div>

            <p className="leadership-summary">
              This work reflects operational ownership across digital learning systems, intake
              coordination, documentation, access support, and repeatable virtual training workflows.
            </p>

            <div className="leadership-grid">
              {leadershipPoints.map((point) => (
                <div key={point} className="operation-item">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <div className="section-header fade-in-up">
            <div>
              <p className="eyebrow eyebrow-purple">Featured Experience</p>
              <h2>Work that reflects real-world systems support</h2>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <div key={item.role + item.org} className={`card experience-card fade-in-up delay-${index}`}>
                <div className="experience-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-org">{item.org}</p>
                  </div>
                  <span className="experience-dates">{item.dates}</span>
                </div>
                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="projects">
        <div className="container">
          <div className="section-header fade-in-up">
            <div>
              <p className="eyebrow eyebrow-gold">Featured Work</p>
              <h2>Projects that show the hands-on side</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card project-card ${project.featured ? "featured" : ""} fade-in-up delay-${index}`}
              >
                <div className="project-top">
                  <div className="project-label">GitHub Project</div>
                  {project.featured && <div className="featured-badge">Featured</div>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.tech && (
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                )}

                <div className="project-actions">
                  <a
                    className="button button-dark"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="building">
        <div className="container">
          <div className="card fade-in-up">
            <p className="eyebrow eyebrow-purple">What I’m Building Toward</p>
            <h2>Focus areas</h2>
            <div className="building-grid">
              <div className="building-item">Cloud Engineering</div>
              <div className="building-item">DevSecOps</div>
              <div className="building-item">Vulnerability Management</div>
              <div className="building-item">AI-assisted security workflows</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="container">
          <div className="card fade-in-up">
            <p className="eyebrow eyebrow-purple">Certifications</p>
            <h2>Validated knowledge. Ongoing growth.</h2>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <div key={cert} className="cert-card">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="card fade-in-up">
            <p className="eyebrow eyebrow-purple">Resume Download</p>
            <h2>Choose the version that fits the conversation</h2>

            <div className="resume-card-list">
              {resumeLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="resume-download-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="resume-card-title">{item.label}</span>
                    <p className="resume-card-text">
                      Open or download directly from my hosted files.
                    </p>
                  </div>
                  <span className="resume-open">Download ↗</span>
                </a>
              ))}
            </div>

            <div className="links-list">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="link-row"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.label}</span>
                  <span>Open ↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="card dark-card fade-in-up delay-1" id="contact">
            <p className="eyebrow eyebrow-gold-light">Contact Me</p>
            <h2 className="dark-heading">Let&apos;s start the conversation</h2>

            <form
              className="contact-form"
              action="mailto:tanara.taylor@yahoo.com"
              method="post"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
              ></textarea>
              <button type="submit" className="button button-gold">
                Send Message
              </button>
            </form>

            <div className="contact-box">
              <p className="box-title">Direct Contact</p>
              <p>tanara.taylor@yahoo.com</p>
              <p>linkedin.com/in/taylortanara</p>
              <p>github.com/taylortn</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Ta&apos;Nara Taylor</p>
          <p>Systems Administrator | Security-Focused</p>
        </div>
      </footer>
    </div>
  );
}

