import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  Tag,
  Layers,
  Zap,
  Target,
  CheckCircle2,
  Globe,
} from "lucide-react";
import "./Projects.css";

/* ─────────────────────────────────────────────
   PROJECT DATA  (replace content as needed)
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Full Stack App",
    tagline: "End-to-end shopping platform with auth, cart & payments",
    date: "Jan 2025 – Present",
    status: "live",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    videoDemo: null, // replace with your video URL or local path
    liveUrl: "https://your-site.com",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    overview:
      "A complete e-commerce solution built from scratch. Handles user authentication, product browsing, cart management, and order tracking with a clean, responsive UI.",
    challenge:
      "Building a scalable cart system that syncs across sessions without performance degradation.",
    solution:
      "Implemented a hybrid cart — localStorage for guests, MongoDB for authenticated users — with real-time sync on login.",
    features: [
      "JWT-based authentication & protected routes",
      "Dynamic product filtering & search",
      "Persistent cart with guest-to-user merge",
      "Order history & status tracking",
      "Fully responsive mobile-first design",
    ],
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    tagline: "Socket-powered messaging with rooms and notifications",
    date: "Oct 2024 – Dec 2024",
    status: "live",
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    videoDemo: null,
    liveUrl: "https://your-chat-app.com",
    tags: ["React.js", "Socket.io", "Node.js", "Express.js", "MongoDB"],
    overview:
      "A real-time messaging platform supporting multiple chat rooms, direct messages, online presence indicators, and browser notifications.",
    challenge:
      "Managing WebSocket connections efficiently at scale while keeping the UI reactive without unnecessary re-renders.",
    solution:
      "Used Socket.io rooms with a Redux-style context for local state, batching incoming messages to reduce render cycles.",
    features: [
      "Real-time messaging via WebSockets",
      "Public & private chat rooms",
      "Online/offline presence indicators",
      "Message read receipts",
      "Browser push notifications",
    ],
  },
  {
    id: 3,
    title: "Developer Portfolio v2",
    tagline: "Animated personal portfolio with dynamic sections",
    date: "Mar 2025",
    status: "live",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    videoDemo: null,
    liveUrl: "https://your-portfolio.com",
    tags: ["React.js", "CSS Animations", "Lucide Icons", "Vite"],
    overview:
      "This portfolio itself — designed and built with a focus on smooth animations, a dark space-themed aesthetic, and clean component architecture.",
    challenge:
      "Creating a design that feels premium and personal without relying on heavy UI libraries.",
    solution:
      "Built every component from scratch using pure CSS animations, custom glassmorphism cards, and a consistent cyan/green/purple color system.",
    features: [
      "Animated landing with parallax intro",
      "Interactive About section with tab panels",
      "Project modal with video demo support",
      "Responsive across all screen sizes",
      "Deployed on Vercel with CI/CD",
    ],
  },
];

/* ─────────────────────────────────────────────
   STATUS BADGE
───────────────────────────────────────────── */
function StatusBadge({ status }) {
  const map = {
    live:        { label: "Live",        cls: "badge--green"  },
    "in-progress":{ label: "In Progress", cls: "badge--cyan"   },
    archived:    { label: "Archived",    cls: "badge--purple" },
  };
  const { label, cls } = map[status] || map.live;
  return <span className={`proj-badge ${cls}`}>{label}</span>;
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  return (
    <article className="proj-card" onClick={() => onClick(project)}>
      <div className="proj-card__thumb">
        <img src={project.thumbnail} alt={project.title} loading="lazy" />
        <div className="proj-card__overlay">
          <Globe size={28} />
          <span>View Project</span>
        </div>
        <div className="proj-card__date">
          <Calendar size={12} />
          <span>{project.date}</span>
        </div>
      </div>

      <div className="proj-card__body">
        <div className="proj-card__top">
          <StatusBadge status={project.status} />
        </div>
        <h3 className="proj-card__title">{project.title}</h3>
        <p className="proj-card__tagline">{project.tagline}</p>

        <div className="proj-card__tags">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="proj-card__tags-more">+{project.tags.length - 4}</span>
          )}
        </div>
      </div>

      <div className="proj-card__footer" onClick={(e) => e.stopPropagation()}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card__live-btn"
        >
          <Globe size={13} />
          Live Demo
          <ExternalLink size={12} />
        </a>
        <span className="proj-card__detail-hint">Click card for details →</span>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   MODAL DETAIL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);

  /* lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  /* reset scroll on project change */
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project.id]);

  return (
    <div className="proj-modal-backdrop" onClick={onClose}>
      <div className="proj-modal" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="proj-modal__close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* Nav arrows */}
        {hasPrev && (
          <button className="proj-modal__nav proj-modal__nav--prev" onClick={onPrev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
        )}
        {hasNext && (
          <button className="proj-modal__nav proj-modal__nav--next" onClick={onNext} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        )}

        {/* Scrollable content */}
        <div className="proj-modal__scroll" ref={scrollRef}>

          {/* LEFT — media */}
          <div className="proj-modal__left">
            <div className="proj-modal__media">
              {project.videoDemo ? (
                <video
                  ref={videoRef}
                  src={project.videoDemo}
                  controls
                  className="proj-modal__video"
                  poster={project.thumbnail}
                />
              ) : (
                <div className="proj-modal__thumb-wrap">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="proj-modal__play-hint">
                    <Play size={32} />
                    <span>Demo video coming soon</span>
                  </div>
                </div>
              )}

              {/* Live link overlay on hover */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-modal__live-btn"
              >
                <Globe size={16} />
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Tags */}
            <div className="proj-modal__tags">
              <Tag size={13} className="proj-modal__tags-icon" />
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — details */}
          <div className="proj-modal__right">
            <div className="proj-modal__header">
              <StatusBadge status={project.status} />
              <span className="proj-modal__date">
                <Calendar size={12} /> {project.date}
              </span>
            </div>

            <h2 className="proj-modal__title">{project.title}</h2>
            <p className="proj-modal__tagline">{project.tagline}</p>

            <div className="proj-modal__divider" />

            {/* Overview */}
            <div className="proj-modal__block">
              <div className="proj-modal__block-label">
                <Layers size={14} />
                <span>Overview</span>
              </div>
              <p>{project.overview}</p>
            </div>

            {/* Challenge */}
            <div className="proj-modal__block">
              <div className="proj-modal__block-label proj-modal__block-label--red">
                <Target size={14} />
                <span>The Challenge</span>
              </div>
              <p>{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="proj-modal__block">
              <div className="proj-modal__block-label proj-modal__block-label--green">
                <Zap size={14} />
                <span>The Solution</span>
              </div>
              <p>{project.solution}</p>
            </div>

            {/* Features */}
            <div className="proj-modal__block">
              <div className="proj-modal__block-label proj-modal__block-label--cyan">
                <CheckCircle2 size={14} />
                <span>Key Features</span>
              </div>
              <ul className="proj-modal__features">
                {project.features.map((f) => (
                  <li key={f}>
                    <span className="proj-modal__feat-dot" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  const open  = (p) => setSelected(p);
  const close = () => setSelected(null);

  const idx     = selected ? PROJECTS.findIndex((p) => p.id === selected.id) : -1;
  const goPrev  = () => idx > 0 && setSelected(PROJECTS[idx - 1]);
  const goNext  = () => idx < PROJECTS.length - 1 && setSelected(PROJECTS[idx + 1]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__container">

        {/* Header */}
        <div className="projects-section__header">
          <p className="projects-section__eyebrow">Featured Work</p>
          <h2 className="projects-section__title">My Projects</h2>
          <p className="projects-section__subtitle">
            A showcase of what I've built — click any card to explore the full details.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={open} />
          ))}
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={idx > 0}
          hasNext={idx < PROJECTS.length - 1}
        />
      )}
    </section>
  );
}