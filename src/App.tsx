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
