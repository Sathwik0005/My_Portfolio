import {
  Briefcase,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Building2,
  Rocket,
  Users,
  Zap,
  Trophy,
  Server,
  Presentation,
} from "lucide-react";
import "./Experience.css";

const EXPERIENCE = {
  role: "Full Stack Developer",
  company: "Sria Infotech",
  type: "Internship",
  fullName: "Sria Infotech Pvt Ltd",
  duration: "Jan 2025 – Jun 2025",
  period: "6 months",
  location: "Hyderabad, Telangana, India",
  mode: "On-site",
  project: "NxDesk",
  projectDesc: "A production-ready ticketing & workflow management tool",
  stack: ["React.js", "Django", "Python", "REST APIs", "Git"],
  summary:
    "Led end-to-end development of NxDesk, a ticketing tool built with React.js and Django, and successfully delivered a production-ready MVP within 6 months.",
  highlights: [
    {
      icon: Zap,
      color: "#22d3ee",
      bg: "rgba(34,211,238,0.1)",
      border: "rgba(34,211,238,0.2)",
      stat: "40%",
      statLabel: "Faster ticket creation",
      text: "Collaborated with the product team to redesign the ticket workflow, reducing ticket creation time by simplifying it from 8 required fields to 2 essential ones.",
    },
    {
      icon: Rocket,
      color: "#22c55e",
      bg: "rgba(34,197,94,0.1)",
      border: "rgba(34,197,94,0.2)",
      stat: "30%",
      statLabel: "Faster page load",
      text: "Improved application performance through modular, reusable React components and optimized rendering strategies.",
    },
    {
      icon: Users,
      color: "#8b5cf6",
      bg: "rgba(139,92,246,0.1)",
      border: "rgba(139,92,246,0.2)",
      stat: "3",
      statLabel: "Devs mentored",
      text: "Mentored 3 junior developers on Claude AI prompt engineering and development workflows, enabling them to contribute to live NxDesk modules within 2 weeks.",
    },
    {
      icon: Server,
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.1)",
      border: "rgba(245,158,11,0.2)",
      stat: "MVP",
      statLabel: "Deployed solo",
      text: "Independently deployed NxDesk on the client server, ensuring stability, reliability, and compliance with company deployment policies.",
    },
    {
      icon: Presentation,
      color: "#22d3ee",
      bg: "rgba(34,211,238,0.1)",
      border: "rgba(34,211,238,0.15)",
      stat: "CEO",
      statLabel: "Appreciation",
      text: "Presented the tech stack during client demos and received CEO appreciation for full project ownership including development, mentoring, and delivery.",
    },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="exp-section__container">

        {/* Header */}
        <div className="exp-section__header">
          <p className="exp-section__eyebrow">Work Experience</p>
          <h2 className="exp-section__title">Experience</h2>
          <p className="exp-section__subtitle">
            Where I've applied my skills in real-world, production environments.
          </p>
        </div>

        {/* Main card */}
        <div className="exp-card">

          {/* Animated glow blob */}
          <div className="exp-card__glow" />

          {/* ── TOP: Role + Meta ── */}
          <div className="exp-card__top">

            {/* Company badge */}
            <div className="exp-company-badge">
              <div className="exp-company-badge__icon">
                <Building2 size={22} />
              </div>
              <div>
                <p className="exp-company-badge__name">{EXPERIENCE.fullName}</p>
                <span className="exp-company-badge__type">{EXPERIENCE.type}</span>
              </div>
            </div>

            {/* Role title */}
            <div className="exp-card__role-block">
              <h3 className="exp-card__role">{EXPERIENCE.role}</h3>
              <div className="exp-card__meta">
                <span className="exp-meta-pill exp-meta-pill--cyan">
                  <Calendar size={12} />
                  {EXPERIENCE.duration}
                </span>
                <span className="exp-meta-pill exp-meta-pill--green">
                  <Briefcase size={12} />
                  {EXPERIENCE.period}
                </span>
                <span className="exp-meta-pill exp-meta-pill--muted">
                  <MapPin size={12} />
                  {EXPERIENCE.location} · {EXPERIENCE.mode}
                </span>
              </div>
            </div>

          </div>

          {/* ── PROJECT SPOTLIGHT ── */}
          <div className="exp-project">
            <div className="exp-project__label">
              <Star size={13} />
              Key Project
            </div>
            <div className="exp-project__content">
              <span className="exp-project__name">{EXPERIENCE.project}</span>
              <span className="exp-project__sep">—</span>
              <span className="exp-project__desc">{EXPERIENCE.projectDesc}</span>
            </div>
            <div className="exp-project__stack">
              {EXPERIENCE.stack.map((t) => (
                <span key={t} className="exp-stack-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── SUMMARY ── */}
          <p className="exp-summary">{EXPERIENCE.summary}</p>

          {/* ── HIGHLIGHTS GRID ── */}
          <div className="exp-highlights">
            <h4 className="exp-highlights__title">
              <Trophy size={15} />
              Key Contributions
            </h4>
            <div className="exp-highlights__grid">
              {EXPERIENCE.highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="exp-highlight-card"
                    style={{
                      "--h-color": h.color,
                      "--h-bg": h.bg,
                      "--h-border": h.border,
                      animationDelay: `${i * 0.08}s`,
                    }}
                  >
                    {/* Icon + Stat */}
                    <div className="exp-highlight-card__top">
                      <div className="exp-highlight-card__icon-wrap">
                        <Icon size={17} style={{ color: h.color }} />
                      </div>
                      <div className="exp-highlight-card__stat-block">
                        <span className="exp-highlight-card__stat" style={{ color: h.color }}>
                          {h.stat}
                        </span>
                        <span className="exp-highlight-card__stat-label">{h.statLabel}</span>
                      </div>
                    </div>
                    <p className="exp-highlight-card__text">{h.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Timeline stub — hints at "more coming" */}
        <div className="exp-timeline-stub">
          <div className="exp-timeline-stub__line" />
          <div className="exp-timeline-stub__end">
            <Rocket size={14} />
            <span>More experience on the way…</span>
          </div>
        </div>

      </div>
    </section>
  );
}