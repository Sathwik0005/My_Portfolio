import "./Skills.css";

/* ─────────────────────────────────────────────
   SKILL DATA — using Simple Icons SVG paths
   Brand colors kept authentic
───────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "languages",
    label: "Programming Languages",
    accent: "#22d3ee",
    skills: [
      {
        name: "JavaScript",
        color: "#F7DF1E",
        bg: "rgba(247,223,30,0.1)",
        border: "rgba(247,223,30,0.25)",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "Python",
        color: "#3776AB",
        bg: "rgba(55,118,171,0.1)",
        border: "rgba(55,118,171,0.3)",
        icon: "https://cdn.simpleicons.org/python/3776AB",
      },
    ],
  },
  {
    id: "web",
    label: "Web Technologies",
    accent: "#22c55e",
    skills: [
      {
        name: "HTML5",
        color: "#E34F26",
        bg: "rgba(227,79,38,0.1)",
        border: "rgba(227,79,38,0.25)",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        color: "#1572B6",
        bg: "rgba(21,114,182,0.1)",
        border: "rgba(21,114,182,0.3)",
        icon: "https://cdn.simpleicons.org/css3/1572B6",
      },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
        bg: "rgba(6,182,212,0.1)",
        border: "rgba(6,182,212,0.25)",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "React.js",
        color: "#61DAFB",
        bg: "rgba(97,218,251,0.08)",
        border: "rgba(97,218,251,0.25)",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Node.js",
        color: "#339933",
        bg: "rgba(51,153,51,0.1)",
        border: "rgba(51,153,51,0.25)",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      {
        name: "Express.js",
        color: "#ffffff",
        bg: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.15)",
        icon: "https://cdn.simpleicons.org/express/ffffff",
      },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    accent: "#8b5cf6",
    skills: [
      {
        name: "MySQL",
        color: "#4479A1",
        bg: "rgba(68,121,161,0.1)",
        border: "rgba(68,121,161,0.3)",
        icon: "https://cdn.simpleicons.org/mysql/4479A1",
      },
      {
        name: "PostgreSQL",
        color: "#4169E1",
        bg: "rgba(65,105,225,0.1)",
        border: "rgba(65,105,225,0.25)",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "MongoDB",
        color: "#47A248",
        bg: "rgba(71,162,72,0.1)",
        border: "rgba(71,162,72,0.25)",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    accent: "#f59e0b",
    skills: [
      {
        name: "Git",
        color: "#F05032",
        bg: "rgba(240,80,50,0.1)",
        border: "rgba(240,80,50,0.25)",
        icon: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "GitHub",
        color: "#ffffff",
        bg: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.15)",
        icon: "https://cdn.simpleicons.org/github/ffffff",
      },
      {
        name: "VS Code",
        color: "#007ACC",
        bg: "rgba(0,122,204,0.1)",
        border: "rgba(0,122,204,0.25)",
        icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      },
      {
        name: "Postman",
        color: "#FF6C37",
        bg: "rgba(255,108,55,0.1)",
        border: "rgba(255,108,55,0.25)",
        icon: "https://cdn.simpleicons.org/postman/FF6C37",
      },
      {
        name: "Vercel",
        color: "#ffffff",
        bg: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.15)",
        icon: "https://cdn.simpleicons.org/vercel/ffffff",
      },
    ],
  },
];

function SkillCard({ skill }) {
  return (
    <div
      className="skill-card"
      style={{
        "--skill-color": skill.color,
        "--skill-bg": skill.bg,
        "--skill-border": skill.border,
      }}
    >
      <div className="skill-card__icon-wrap">
        <img
          src={skill.icon}
          alt={skill.name}
          className="skill-card__icon"
          loading="lazy"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      <span className="skill-card__name">{skill.name}</span>
    </div>
  );
}

function CategoryBlock({ cat, index }) {
  return (
    <div
      className="skills-category"
      style={{ "--cat-accent": cat.accent, animationDelay: `${index * 0.1}s` }}
    >
      <div className="skills-category__header">
        <span
          className="skills-category__dot"
          style={{ background: cat.accent, boxShadow: `0 0 10px ${cat.accent}` }}
        />
        <h3 className="skills-category__label" style={{ color: cat.accent }}>
          {cat.label}
        </h3>
        <div className="skills-category__line" style={{ background: `linear-gradient(90deg, ${cat.accent}40, transparent)` }} />
      </div>

      <div className="skills-category__grid">
        {cat.skills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__container">

        <div className="skills-section__header">
          <p className="skills-section__eyebrow">What I Work With</p>
          <h2 className="skills-section__title">Skills & Technologies</h2>
          <p className="skills-section__subtitle">
            The tools and technologies I use to build modern, full-stack web applications.
          </p>
        </div>

        <div className="skills-layout">
          {CATEGORIES.map((cat, i) => (
            <CategoryBlock key={cat.id} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}