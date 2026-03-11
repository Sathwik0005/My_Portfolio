import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__brand">
          <div className="navbar__logo">
            <Code2 size={18} />
          </div>

          <div className="navbar__brand-text">
            <span className="navbar__name">Sathwik Bandari</span>
            <span className="navbar__tag">full stack developer</span>
          </div>
        </a>

        <nav className="navbar__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#academic">Academic</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar__actions">
          <a
            href="https://www.linkedin.com/in/sathwik-bandari/"
            target="_blank"
            rel="noreferrer"
            className="navbar__icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/Sathwik0005"
            target="_blank"
            rel="noreferrer"
            className="navbar__icon-btn"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:bandarisathwik05@gmail.com"
            className="navbar__icon-btn"
            aria-label="Mail"
          >
            <Mail size={18} />
          </a>

          <button className="navbar__resume-btn" type="button">
            <Download size={16} />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}