import { GraduationCap, BookOpen, Trophy, Star, CheckCircle2 } from "lucide-react";
import "./Academic.css";

/* ─────────────────────────────────────────────
   DATA — 4 milestones
───────────────────────────────────────────── */
const MILESTONES = [
  {
    id: 1,
    side: "left",
    icon: Trophy,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.15)",
    title: "10th SSC Board",
    subtitle: "Successfully cleared secondary education with excellent academic performance",
    score: "95.0%",
    rank: "—",
    grade: "A+",
    year: "2022",
    yearLabel: "2022",
    achievement: "95.0% ★",
    badge: null,
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    accentColor: "#22d3ee",
    dotColor: "#22d3ee",
  },
  {
    id: 2,
    side: "right",
    icon: Star,
    iconColor: "#22d3ee",
    iconBg: "rgba(34,211,238,0.15)",
    title: "12th HSC Board",
    subtitle: "Completed higher secondary with focus on Science stream (PCM)",
    score: "97.0%",
    rank: "—",
    grade: "A+",
    year: "2022–2024",
    yearLabel: "2022–2024",
    achievement: "97.0% ★",
    badge: null,
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    accentColor: "#22d3ee",
    dotColor: "#22d3ee",
  },
  {
    id: 3,
    side: "left",
    icon: GraduationCap,
    iconColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.15)",
    title: "B.Tech — Computer Science",
    subtitle: "Pursuing undergraduate degree in Computer Science & Engineering",
    score: "8.5 CGPA",
    rank: "Top 10%",
    grade: "A",
    year: "2024–2028",
    yearLabel: "2024–2028",
    achievement: "8.5 CGPA ★",
    badge: "🎓 Ongoing",
    subjects: ["Data Structures", "Algorithms", "DBMS", "Web Dev", "OS"],
    accentColor: "#8b5cf6",
    dotColor: "#8b5cf6",
  },
  {
    id: 4,
    side: "right",
    icon: BookOpen,
    iconColor: "#22c55e",
    iconBg: "rgba(34,197,94,0.15)",
    title: "M.Tech — Computer Science",
    subtitle: "Planned postgraduate specialisation in advanced computing",
    score: "—",
    rank: "—",
    grade: "—",
    year: "Future",
    yearLabel: "Future",
    achievement: "Planned ★",
    badge: "📅 Upcoming",
    subjects: ["Machine Learning", "Cloud Computing", "Research", "AI"],
    accentColor: "#22c55e",
    dotColor: "#22c55e",
  },
];

function StatBox({ label, value, highlight }) {
  return (
    <div className="acad-stat">
      <span className="acad-stat__label">{label}</span>
      <span className={`acad-stat__value ${highlight ? "acad-stat__value--highlight" : ""}`}>
        {value}
      </span>
    </div>
  );
}

function MilestoneCard({ m }) {
  const Icon = m.icon;
  return (
    <div className={`acad-entry acad-entry--${m.side}`}>

      {/* ── LEFT side card ── */}
      {m.side === "left" && (
        <>
          <div className="acad-card" style={{ "--accent": m.accentColor }}>
            {/* Header */}
            <div className="acad-card__header">
              <div className="acad-card__icon-wrap" style={{ background: m.iconBg }}>
                <Icon size={20} style={{ color: m.iconColor }} />
              </div>
              <div>
                <div className="acad-card__title-row">
                  <h3 className="acad-card__title">{m.title}</h3>
                  <CheckCircle2 size={16} className="acad-card__check" />
                </div>
                <p className="acad-card__subtitle">{m.subtitle}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="acad-card__stats">
              <StatBox label="Score" value={m.score} highlight />
              <StatBox label="Rank" value={m.rank} />
              <StatBox label="Grade" value={m.grade} />
              <StatBox label="Year" value={m.year} highlight />
            </div>

            {/* Badge */}
            {m.badge && (
              <div className="acad-card__badge" style={{ borderColor: m.accentColor, color: m.accentColor }}>
                {m.badge}
              </div>
            )}

            {/* Subjects */}
            <div className="acad-card__subjects-label">Key Subjects/Skills:</div>
            <div className="acad-card__subjects">
              {m.subjects.map((s) => (
                <span key={s} className="acad-subject">{s}</span>
              ))}
            </div>
          </div>

          {/* Connector line to timeline */}
          <div className="acad-connector acad-connector--left" />

          {/* Year badge center */}
          <div className="acad-year-badge" style={{ "--accent": m.accentColor }}>
            <span className="acad-year-badge__year" style={{ color: m.accentColor }}>{m.yearLabel}</span>
            <span className="acad-year-badge__sub">Achievement Unlocked</span>
            <span className="acad-year-badge__val" style={{ color: m.accentColor }}>▸ {m.achievement}</span>
          </div>
        </>
      )}

      {/* ── RIGHT side card ── */}
      {m.side === "right" && (
        <>
          {/* Year badge center */}
          <div className="acad-year-badge" style={{ "--accent": m.accentColor }}>
            <span className="acad-year-badge__year" style={{ color: m.accentColor }}>{m.yearLabel}</span>
            <span className="acad-year-badge__sub">Achievement Unlocked</span>
            <span className="acad-year-badge__val" style={{ color: m.accentColor }}>▸ {m.achievement}</span>
          </div>

          {/* Connector line to timeline */}
          <div className="acad-connector acad-connector--right" />

          <div className="acad-card" style={{ "--accent": m.accentColor }}>
            {/* Header */}
            <div className="acad-card__header">
              <div className="acad-card__icon-wrap" style={{ background: m.iconBg }}>
                <Icon size={20} style={{ color: m.iconColor }} />
              </div>
              <div>
                <div className="acad-card__title-row">
                  <h3 className="acad-card__title">{m.title}</h3>
                  <CheckCircle2 size={16} className="acad-card__check" />
                </div>
                <p className="acad-card__subtitle">{m.subtitle}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="acad-card__stats">
              <StatBox label="Score" value={m.score} highlight />
              <StatBox label="Rank" value={m.rank} />
              <StatBox label="Grade" value={m.grade} />
              <StatBox label="Year" value={m.year} highlight />
            </div>

            {/* Badge */}
            {m.badge && (
              <div className="acad-card__badge" style={{ borderColor: m.accentColor, color: m.accentColor }}>
                {m.badge}
              </div>
            )}

            {/* Subjects */}
            <div className="acad-card__subjects-label">Key Subjects/Skills:</div>
            <div className="acad-card__subjects">
              {m.subjects.map((s) => (
                <span key={s} className="acad-subject">{s}</span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Timeline dot */}
      <div className="acad-dot" style={{ background: m.dotColor, boxShadow: `0 0 12px ${m.dotColor}, 0 0 24px ${m.dotColor}40` }} />
    </div>
  );
}

export default function Academic() {
  return (
    <section id="academic" className="acad-section">
      <div className="acad-section__container">

        {/* Header */}
        <div className="acad-section__header">
          <h2 className="acad-section__title">Academic Journey</h2>
          <p className="acad-section__subtitle">
            From school excellence to engineering mastery — my educational milestones with performance metrics
          </p>
        </div>

        {/* Timeline */}
        <div className="acad-timeline">
          {/* Vertical line */}
          <div className="acad-timeline__line" />

          {MILESTONES.map((m) => (
            <MilestoneCard key={m.id} m={m} />
          ))}
        </div>

      </div>
    </section>
  );
}