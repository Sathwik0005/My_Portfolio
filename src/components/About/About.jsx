import { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Coffee,
  Heart,
  Lightbulb,
  MapPin,
  Music,
  Puzzle,
  Sparkles,
  Star,
  Trophy,
  Camera,
  CalendarDays,
  Target,
  Rocket,
  Medal,
} from "lucide-react";
import "./About.css";

const tabItems = {
  skills: {
    title: "Skills & Technologies",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "MySQL",
      "Python",
      "Django",
      "Tailwind CSS",
      "Git & GitHub",
      "DSA",
    ],
  },
  interests: {
    title: "Interests & Hobbies",
    list: [
      {
        icon: Music,
        title: "Music",
        text: "Lo-fi beats while coding",
        colorClass: "purple",
      },
      {
        icon: Camera,
        title: "Photography",
        text: "Capturing moments",
        colorClass: "cyan",
      },
      {
        icon: Puzzle,
        title: "Gaming",
        text: "Strategy & puzzle games",
        colorClass: "green",
      },
      {
        icon: Lightbulb,
        title: "Innovation",
        text: "Always thinking of new ideas",
        colorClass: "purple",
      },
    ],
  },
  key: {
    title: "Key Achievements",
    list: [
      {
        icon: Award,
        title: "Presidential Recognition",
        text: "Recognized for academic excellence",
        colorClass: "purple",
      },
      {
        icon: Trophy,
        title: "Hackathon Participation",
        text: "Built solutions under pressure",
        colorClass: "green",
      },
      {
        icon: Star,
        title: "Project Showcases",
        text: "Presented practical full stack work",
        colorClass: "cyan",
      },
      {
        icon: Sparkles,
        title: "Continuous Growth",
        text: "Always learning and improving",
        colorClass: "green",
      },
    ],
  },
  core: {
    title: "Core Values",
    list: [
      {
        icon: Brain,
        title: "Continuous Learning",
        text: "Always curious, always growing",
        colorClass: "cyan",
      },
      {
        icon: Lightbulb,
        title: "Problem Solving",
        text: "Breaking complex challenges into solutions",
        colorClass: "green",
      },
      {
        icon: Sparkles,
        title: "Innovation",
        text: "Creating impact through technology",
        colorClass: "purple",
      },
      {
        icon: Heart,
        title: "Community",
        text: "Sharing knowledge and helping others",
        colorClass: "cyan",
      },
    ],
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");
  const activeContent = tabItems[activeTab];

  return (
    <section id="about" className="about-section">
      <div className="about-section__container">
        {/* Header */}
        <div className="about-section__header">
          <p className="about-section__eyebrow">About Me</p>
          <h2 className="about-section__title">Who I Am</h2>
          <p className="about-section__subtitle">
            A quick introduction to who I am, what I build, and where I am
            headed.
          </p>
        </div>

        <div className="about-section__layout">
          {/* ── LEFT CARD ── */}
          <div className="about-card">
            {/* Profile */}
            <div className="about-card__profile">
              <div className="about-card__image-wrap">
                <img
                  src="/profile-placeholder.png"
                  alt="Sathwik Bandari"
                  className="about-card__image"
                />
              </div>
              <div className="about-card__intro">
                <h3 className="about-card__name">Sathwik Bandari</h3>
                <p className="about-card__role">Full Stack Developer</p>
                <p className="about-card__availability">
                  <span className="about-card__status-dot" />
                  Available for opportunities
                </p>
              </div>
            </div>

            <div className="about-card__divider" />

            {/* Quick Facts */}
            <div className="about-card__facts">
              <div className="about-card__facts-title">
                <Sparkles size={14} />
                <span>Quick Facts</span>
              </div>
              <div className="about-card__facts-grid">
                <div className="about-fact">
                  <CalendarDays
                    size={15}
                    className="about-fact__icon about-fact__icon--cyan"
                  />
                  <div>
                    <p className="about-fact__label">Started Coding</p>
                    <p className="about-fact__value about-fact__value--cyan">
                      2022
                    </p>
                  </div>
                </div>
                <div className="about-fact">
                  <MapPin
                    size={15}
                    className="about-fact__icon about-fact__icon--green"
                  />
                  <div>
                    <p className="about-fact__label">Based in</p>
                    <p className="about-fact__value about-fact__value--green">
                      Sheffield, Uk
                    </p>
                  </div>
                </div>
                <div className="about-fact">
                  <Star
                    size={15}
                    className="about-fact__icon about-fact__icon--purple"
                  />
                  <div>
                    <p className="about-fact__label">Fav Language</p>
                    <p className="about-fact__value about-fact__value--purple">
                      Python
                    </p>
                  </div>
                </div>
                <div className="about-fact">
                  <Rocket
                    size={15}
                    className="about-fact__icon about-fact__icon--cyan"
                  />
                  <div>
                    <p className="about-fact__label">Current Focus</p>
                    <p className="about-fact__value about-fact__value--cyan">
                      Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-card__divider" />

            {/* Tabs */}
            <div className="about-card__tabs">
              {[
                { key: "skills", Icon: Brain, label: "Skills" },
                { key: "interests", Icon: Heart, label: "Interests" },
                { key: "key", Icon: Trophy, label: "Achieved" },
                { key: "core", Icon: Star, label: "Values" },
              ].map(({ key, Icon, label }) => (
                <button
                  key={key}
                  type="button"
                  className={`about-tab ${activeTab === key ? "about-tab--active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="">
              <h4 className="about-card__panel-title">{activeContent.title}</h4>

              {activeTab === "skills" && (
                <div className="about-card__tags">
                  {activeContent.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}

              {activeTab !== "skills" && (
                <div className="about-card__list">
                  {activeContent.list.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="about-list-item">
                        <div
                          className={`about-list-item__icon about-list-item__icon--${item.colorClass}`}
                        >
                          <Icon size={14} />
                        </div>
                        <div className="about-list-item__content">
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="about-card__stats">
              <div className="about-stat">
                <Medal
                  size={22}
                  className="about-stat__icon about-stat__icon--cyan"
                />
                <span className="about-stat__number about-stat__number--cyan">
                  10+
                </span>
                <span className="about-stat__label">Certificates</span>
              </div>
              <div className="about-stat">
                <Code2
                  size={22}
                  className="about-stat__icon about-stat__icon--green"
                />
                <span className="about-stat__number about-stat__number--green">
                  5+
                </span>
                <span className="about-stat__label">Major Projects</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT CONTENT ── */}
          <div className="about-content">
            <p className="about-content__lead">
              I'm Sathwik Bandari — a developer focused on building modern,
              responsive, and practical web applications with clean user
              experiences and reliable backend systems.
            </p>

            <div className="about-content__highlight">
              <p>While others just browse interfaces, I build them.</p>
              <p>
                While others see screens, I see products, systems, and
                solutions.
              </p>
            </div>

            <p className="about-content__text">
              My interest in development comes from the process of turning ideas
              into real products. I enjoy working across both frontend and
              backend, designing interfaces that feel smooth and building
              systems that are structured, scalable, and useful.
            </p>

            <p className="about-content__text about-content__text--strong">
              I like building tech with clarity, speed, and purpose.
            </p>

            <p className="about-content__text">
              Right now, I am strengthening my skills in full stack development,
              improving project quality, and working toward opportunities where
              I can contribute, learn fast, and grow as an engineer.
            </p>

            <div className="about-content__journey">
              <h3>This is my journey —</h3>
              <p>
                Built with consistency, curiosity, and a strong focus on growth.
              </p>
            </div>

            <div className="about-content__goals">
              <div className="about-goal-card">
                <div className="about-goal-card__header">
                  <Target
                    size={16}
                    className="about-goal-card__icon about-goal-card__icon--cyan"
                  />
                  <h4>Current Mission</h4>
                </div>
                <p>
                  Building better full stack projects and improving
                  problem-solving skills for real-world development roles.
                </p>
              </div>
              <div className="about-goal-card">
                <div className="about-goal-card__header">
                  <MapPin
                    size={16}
                    className="about-goal-card__icon about-goal-card__icon--green"
                  />
                  <h4 className="about-goal-card__title">Next Goal</h4>
                </div>
                <p>
                  Contribute to impactful products, improve backend depth, and
                  grow into a strong software engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
