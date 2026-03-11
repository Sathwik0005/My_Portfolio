import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Academic from "../Academic/Academic";
import "./HomePage.css";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
      <AnimatedBackground />
      <Navbar />

      <main className="home-page__main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Academic />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}