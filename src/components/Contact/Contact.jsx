import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Download,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const text = `Hi Sathwik! My name is ${form.name}.\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`;
    const url = `https://wa.me/447300329931?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">

        {/* Header */}
        <div className="contact-section__header">
          <h2 className="contact-section__title">Let's Connect</h2>
          <p className="contact-section__subtitle">
            Ready to collaborate, discuss opportunities, or just have a great conversation?
          </p>
        </div>

        {/* Main grid */}
        <div className="contact-grid">

          {/* ── LEFT: WhatsApp Form ── */}
          <div className="contact-card contact-form-card">
            <div className="contact-form-card__heading">
              <MessageCircle size={20} className="contact-form-card__icon" />
              <span>Send WhatsApp Message</span>
            </div>

            <div className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__field">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hello!"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                />
              </div>

              <button className="contact-form__submit" onClick={handleWhatsApp}>
                <MessageCircle size={18} />
                Send via WhatsApp
              </button>
            </div>
          </div>

          {/* ── RIGHT: Profile + Info + Social ── */}
          <div className="contact-right">

            {/* Profile card */}
            <div className="contact-card contact-profile-card">
              <div className="contact-profile__avatar-wrap">
                <img
                  src="/profile-placeholder.png"
                  alt="Sathwik Bandari"
                  className="contact-profile__avatar"
                />
                <span className="contact-profile__dot" />
              </div>
              <h3 className="contact-profile__name">Sathwik Bandari</h3>
              <p className="contact-profile__status">Available for opportunities</p>
              <div className="contact-profile__actions">
                <a href="/resume.pdf" download className="contact-btn contact-btn--green">
                  <Download size={15} />
                  Resume
                </a>
                <a href="mailto:bandarisathwik05@gmail.com" className="contact-btn contact-btn--outline">
                  <Mail size={15} />
                  Mail Me
                </a>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="contact-card contact-info-card">
              <h4 className="contact-info-card__title">Get In Touch</h4>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-item__icon contact-info-item__icon--cyan">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="contact-info-item__label">Email</span>
                    <span className="contact-info-item__value">bandarisathwik05@gmail.com</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-item__icon contact-info-item__icon--green">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="contact-info-item__label">Phone</span>
                    <span className="contact-info-item__value">+44 7300 329931</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-item__icon contact-info-item__icon--purple">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="contact-info-item__label">Location</span>
                    <span className="contact-info-item__value">Sheffield, UK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div className="contact-card contact-social-card">
              <h4 className="contact-social-card__title">Follow Me</h4>
              <div className="contact-social-list">
                <a
                  href="https://www.linkedin.com/in/sathwik-bandari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn contact-social-btn--linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/Sathwik0005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn contact-social-btn--github"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}