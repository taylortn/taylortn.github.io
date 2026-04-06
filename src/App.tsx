import "./App.css";

const skills = [
  "Linux (RHEL)",
  "AWS (EC2, EBS, SSM)",
  "Vulnerability Management",
  "STIG Hardening",
  "RMF / Compliance",
  "Nessus / Splunk / ServiceNow",
];

const projects = [
  {
    title: "Cloud Linux Automation Lab",import "./App.css";

const skills = [
  "Linux (RHEL)",
  "AWS (EC2, EBS, SSM)",
  "Vulnerability Management",
  "STIG Hardening",
  "RMF / Compliance",
  "Nessus / Splunk / ServiceNow",
];

const projects = [
  {
    title: "Cloud Linux Automation Lab",
    description:
      "Automated AWS-based Linux environment focused on provisioning, repeatable deployments, and infrastructure support.",
    href: "https://github.com/taylortn/cloud-linux-automation-lab",
  },
  {
    title: "DevSecOps Vulnerability Lab",
    description:
      "Hands-on vulnerability management workflow centered on identification, prioritization, remediation, and system hardening.",
    href: "https://github.com/taylortn/devsecops-vulnerability-lab",
  },
  {
    title: "DevOps CI/CD Pipeline Lab",
    description:
      "Pipeline project using GitHub Actions and Docker to improve deployment consistency and reduce manual effort.",
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
    role: "Systems Administrator",
    org: "Accenture Federal Services | Office of Naval Intelligence",
    dates: "Sept 2023 – Present",
    points: [
      "Support secure Linux and AWS-hosted environments in mission-focused settings.",
      "Perform patching, troubleshooting, vulnerability remediation, and system hardening.",
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
          <a href="#top" className="brand">
            Ta&apos;Nara Taylor
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
        <div className="hero-glow hero-glow-bottom"></div>

        <div className="container hero-grid">
          <div className="hero-text fade-in-up">
            <div className="pill">
              Systems Administrator • Security-Focused • TS/SCI with CI Poly
            </div>
            <h1>Ta&apos;Nara Taylor</h1>
            <p className="hero-description">
              I support secure Linux and AWS environments with a focus on
              patching, hardening, vulnerability remediation, and operational
              stability in high-security spaces.
            </p>

            <div className="hero-buttons">
              <a
                className="button button-dark"
                href="https://raw.githubusercontent.com/taylortn/taylortn/root/resume/Tanara_Taylor_System_Admin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a
                className="button button-light"
                href="https://linkedin.com/in/taylortanara"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="profile-panel fade-in-up delay-1">
            <div className="profile-photo-wrap">
              <img
  src="https://taylortn.github.io/assets/Profile.png"
  alt="Ta'Nara Taylor Professional Photo"
  className="profile-photo"
/>
            </div>
            <div className="profile-card">
              <h2>Professional Snapshot</h2>
              <p>
                Systems administration, vulnerability remediation, security
                operations support, and secure cloud-hosted infrastructure.
              </p>
              <div className="mini-tags">
                <span>Linux</span>
                <span>AWS</span>
                <span>Security</span>
                <span>Compliance</span>
              </div>
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
              <a
                key={project.title}
                href={project.href}
                className={`card project-card fade-in-up delay-${index}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-label">GitHub Project</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-link">View project →</span>
              </a>
            ))}
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

    description:
      "Automated AWS-based Linux environment focused on provisioning, repeatable deployments, and infrastructure support.",
    href: "https://github.com/taylortn/cloud-linux-automation-lab",
  },
  {
    title: "DevSecOps Vulnerability Lab",
    description:
      "Hands-on vulnerability management workflow centered on identification, prioritization, remediation, and system hardening.",
    href: "https://github.com/taylortn/devsecops-vulnerability-lab",
  },
  {
    title: "DevOps CI/CD Pipeline Lab",
    description:
      "Pipeline project using GitHub Actions and Docker to improve deployment consistency and reduce manual effort.",
    href: "https://github.com/taylortn/devops-cicd-pipeline-lab",
  },
];

const links = [
  {
    label: "Systems Administrator Resume",
    href: "https://raw.githubusercontent.com/taylortn/taylortn/main/resume/Tanara_Taylor_System_Admin_Resume.pdf",
  },
  {
    label: "LinkedIn Profile",
    href: "https://linkedin.com/in/taylortanara",
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/taylortn",
  },
];

export default function App() {
  return (
    <div className="site">
      <section className="hero">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
        <div className="hero-glow hero-glow-bottom"></div>

        <div className="container hero-grid">
          <div className="hero-text">
            <div className="pill">
              Systems Administrator • Security-Focused • TS/SCI with CI Poly
            </div>
            <h1>Ta&apos;Nara Taylor</h1>
            <p className="hero-description">
              I support secure Linux and AWS environments with a focus on
              patching, hardening, vulnerability remediation, and operational
              stability in high-security spaces.
            </p>

            <div className="hero-buttons">
              <a
                className="button button-dark"
                href="https://github.com/taylortn/taylortn/tree/main/resume"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a
                className="button button-light"
                href="https://linkedin.com/in/taylortanara"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="card snapshot-card">
            <div className="snapshot-header">
              <h2>Quick Snapshot</h2>
              <span className="badge">Active Growth</span>
            </div>

            <div className="snapshot-box snapshot-purple">
              <p className="box-title">Core Focus</p>
              <p>
                Systems administration, vulnerability remediation, security
                operations support, and cloud-hosted infrastructure.
              </p>
            </div>

            <div className="snapshot-box snapshot-green">
              <p className="box-title">Current Direction</p>
              <p>
                Growing deeper into cybersecurity and incident response while
                building on strong systems and compliance experience.
              </p>
            </div>

            <div className="snapshot-box snapshot-gold">
              <p className="box-title">Environment Strength</p>
              <p>
                Secure Linux and AWS environments, patching workflows, STIG
                hardening, RMF alignment, and issue remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="card">
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

          <div className="card">
            <p className="eyebrow eyebrow-green">Technical Skills</p>
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

      <section className="section section-tight">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow eyebrow-gold">Featured Work</p>
              <h2>Projects that show the hands-on side</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="card project-card"
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-label">GitHub Project</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-link">View project →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div className="card">
            <p className="eyebrow eyebrow-purple">Resume & Links</p>
            <h2>Everything important in one place</h2>

            <div className="links-list">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="link-row"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <span>Open ↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="card dark-card">
            <p className="eyebrow eyebrow-gold-light">Currently Working On</p>
            <ul className="dark-list">
              <li>
                Strengthening vulnerability management using Nessus and security
                monitoring tools.
              </li>
              <li>
                Improving patching and hardening across Linux environments.
              </li>
              <li>
                Preparing for RHCSA while continuing to deepen security
                operations knowledge.
              </li>
            </ul>

            <div className="contact-box">
              <p className="box-title">Let&apos;s Connect</p>
              <p>tanara.taylor@yahoo.com</p>
              <p>linkedin.com/in/taylortanara</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
