import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkGallery from './components/WorkGallery';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Quality from './components/Quality';
import Specs from './components/Specs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-amber selection:text-brand-charcoal" id="rtw-app">
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner with floating cards */}
        <Hero />

        {/* Client Partner Logo Band */}
        <Clients />

        {/* Company History & Story Section */}
        <About />

        {/* What We Do - Timber Supply & Timber Manufacturing */}
        <Services />

        {/* Why Choose RTW Highlights */}
        <WhyChooseUs />

        {/* Recently Completed Work Photos */}
        <WorkGallery />

        {/* Key Projects Showcase Grid */}
        <Projects />

        {/* Quality, ITI Testing & Credibility reports */}
        <Quality />

        {/* Technical Specification Schedule */}
        <Specs />

        {/* Animated Process Phase Steps */}
        <Process />

        {/* Interactive Quote Request & Contact Info */}
        <Contact />
      </main>

      {/* Brand Footer & Operating Hours */}
      <Footer />
    </div>
  );
}
