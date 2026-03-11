import { useState, useEffect } from "react";
import {
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  Code2,
  Heart,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";
import "./Footer.css";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Academic", href: "#academic" },
  { label: "Contact",  href: "#contact"  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sathwik-bandari/",
    icon: Linkedin,
    cls: "footer-social--linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sathwik0005",
    icon: Github,
    cls: "footer-social--github",
  },
  {
    label: "Email",
    href: "mailto:bandarisathwik05@gmail.com",
    icon: Mail,
    cls: "footer-social--email",
  },
];

const TECH_STACK = ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"];

export default function Footer() {
  const [scrollPct, setScrollPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
      setVisible(scrolled > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Scroll progress bar */}
      <div className="footer-progress" style={{ width: `${scrollPct}%` }} />

      <div className="footer__container">

        {/* ── TOP SECTION ── */}
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Code2 size={22} />
              <span>Sathwik Bandari</span>
            </div>
            <p className="footer__tagline">
              Full Stack Developer building modern web experiences with clean code and purposeful design.
            </p>
            <div className="footer__location">
              <MapPin size={13} />
              <span>Sheffield, UK</span>
              <span className="footer__location-dot" />
              <span className="footer__open">Open to work</span>
            </div>
            <div className="footer__socials">
              {SOCIALS.map(({ label, href, icon: Icon, cls }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`footer-social ${cls}`} aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">
              <span className="footer__col-title-bar" />
              Quick Links
            </h4>
            <ul className="footer__links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__link">
                    <span className="footer__link-arrow">›</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer__col">
            <h4 className="footer__col-title">
              <span className="footer__col-title-bar footer__col-title-bar--green" />
              Built With
            </h4>
            <div className="footer__stack">
              {TECH_STACK.map((t) => (
                <span key={t} className="footer__stack-tag">{t}</span>
              ))}
            </div>
            <div className="footer__availability">
              <Sparkles size={13} className="footer__availability-icon" />
              <span>Available for freelance & full-time roles</span>
            </div>
          </div>

          {/* Contact Snippet */}
          <div className="footer__col">
            <h4 className="footer__col-title">
              <span className="footer__col-title-bar footer__col-title-bar--purple" />
              Get In Touch
            </h4>
            <div className="footer__contact-list">
              <a href="mailto:bandarisathwik05@gmail.com" className="footer__contact-item">
                <Mail size={14} />
                <span>bandarisathwik05@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/sathwik-bandari/" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <Linkedin size={14} />
                <span>linkedin.com/in/sathwik-bandari</span>
                <ExternalLink size={11} className="footer__ext" />
              </a>
              <a href="https://github.com/Sathwik0005" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <Github size={14} />
                <span>github.com/Sathwik0005</span>
                <ExternalLink size={11} className="footer__ext" />
              </a>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="footer__divider" />

        {/* ── BOTTOM ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} <span className="footer__copy-name">Sathwik Bandari</span>. All rights reserved.
          </p>
          <p className="footer__made">
            Designed & built with <Heart size={13} className="footer__heart" /> using React.js
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`footer__back-top ${visible ? "footer__back-top--show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
        <svg className="footer__back-top-ring" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="19"
            stroke="rgba(34,211,238,0.25)" strokeWidth="2" fill="none" />
          <circle cx="22" cy="22" r="19"
            stroke="#22d3ee" strokeWidth="2" fill="none"
            strokeDasharray="119.4"
            strokeDashoffset={119.4 - (119.4 * scrollPct) / 100}
            strokeLinecap="round"
            transform="rotate(-90 22 22)" />
        </svg>
      </button>
    </footer>
  );
}