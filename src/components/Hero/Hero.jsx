import { Github, Linkedin, Mail, Zap, Download } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__image-column">
          <div className="hero__flip-card">
            <div className="hero__flip-card-inner">
              <div className="hero__flip-card-front">
                <div className="hero__image-frame">
                  <div className="hero__image-inner">
                    <img
                      src="/profile-placeholder.png"
                      alt="Sathwik Bandari"
                      className="hero__image"
                    />
                  </div>
                </div>
              </div>

              <div className="hero__flip-card-back">
                <div className="hero__quote-card">
                  <p className="hero__quote-mark">“</p>
                  <p className="hero__quote-text">
                    Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.
                  </p>
                  <p className="hero__quote-author">— A. P. J. Abdul Kalam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__content">
          <div className="hero__welcome">WELCOME</div>

          <h1 className="hero__title">
            Hello, I&apos;m
            <span>Sathwik Bandari</span>
          </h1>

          <p className="hero__role">Full Stack Developer</p>

          <p className="hero__description">
            I build modern full stack web applications with clean user experiences,
            scalable backend logic, and practical solutions that turn ideas into real products.
          </p>

          <div className="hero__socials">
            <a
              href="https://github.com/Sathwik0005"
              target="_blank"
              rel="noreferrer"
              className="hero__social-btn"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/sathwik-bandari/"
              target="_blank"
              rel="noreferrer"
              className="hero__social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:bandarisathwik05@gmail.com"
              className="hero__social-btn"
              aria-label="Mail"
            >
              <Mail size={22} />
            </a>
          </div>

          <div className="hero__buttons">
            <button
              type="button"
              className="hero__primary-btn"
              onClick={handleScrollToProjects}
            >
              <Zap size={18} />
              <span>Explore My Work</span>
            </button>

            <button type="button" className="hero__secondary-btn">
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}