import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import JourneyTimeline from './components/JourneyTimeline';
import GithubContributions from './components/GithubContributions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary text-text-primary min-h-screen relative overflow-hidden select-none">
      {/* Global Interactive Elements */}
      <ParticleBackground />

      {/* Main Pages */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <JourneyTimeline />
      <GithubContributions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
