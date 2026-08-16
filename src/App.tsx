import { useEffect, useMemo, useState } from 'react';
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
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setPathname(window.location.pathname);

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('app:navigate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('app:navigate', handleRouteChange);
    };
  }, []);

  const page = useMemo(() => {
    switch (pathname) {
      case '/':
        return <Hero />;
      case '/about':
        return (
          <>
            <About />
            <Clients />
          </>
        );
      case '/services':
        return <Services />;
      case '/why-rtw':
        return <WhyChooseUs />;
      case '/projects':
        return <Projects />;
      case '/gallery':
        return <WorkGallery />;
      case '/quality':
        return (
          <>
            <Quality />
            <Specs />
          </>
        );
      case '/process':
        return <Process />;
      case '/contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-amber selection:text-brand-charcoal" id="rtw-app">
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className={pathname === '/' ? undefined : 'pt-20'}>{page}</main>

      {/* Brand Footer & Operating Hours */}
      <Footer />
    </div>
  );
}
