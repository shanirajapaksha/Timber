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

const WHATSAPP_URL = 'https://wa.me/94772561647';
const SITE_URL = 'https://rupasinghetimber.com';

const PAGE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Rupasinghe Timber Works | Timber Supplier & Manufacturer Sri Lanka',
    description: 'Premium timber doors, frames, sashes, joinery and custom manufacturing for homes, contractors and architects across Sri Lanka from our Kaduwela workshop.',
  },
  '/about': {
    title: 'About Rupasinghe Timber Works | Kaduwela, Sri Lanka',
    description: 'Learn about Rupasinghe Timber Works, our timber craftsmanship, trusted industry partnerships and manufacturing experience in Kaduwela since 2010.',
  },
  '/services': {
    title: 'Timber Products & Joinery Services | Rupasinghe Timber Works',
    description: 'Explore custom timber doors, frames, sashes, architectural joinery, commercial timber supply and precision millwork services in Sri Lanka.',
  },
  '/why-rtw': {
    title: 'Why Choose RTW | Quality Timber Manufacturing Sri Lanka',
    description: 'Choose Rupasinghe Timber Works for dependable supply, documented timber quality, skilled craftsmanship and precise manufacturing for Sri Lankan projects.',
  },
  '/projects': {
    title: 'Timber Projects in Sri Lanka | Rupasinghe Timber Works',
    description: 'View landmark residential, hospitality, healthcare and commercial timber projects completed by Rupasinghe Timber Works across Sri Lanka.',
  },
  '/gallery': {
    title: 'Timber Work Gallery | Doors, Frames & Joinery by RTW',
    description: 'Browse real project photographs of timber doors, frames, joinery, workshop production and completed installations by Rupasinghe Timber Works.',
  },
  '/quality': {
    title: 'Timber Quality & Specifications | Rupasinghe Timber Works',
    description: 'Review the timber quality controls, material specifications, moisture standards and manufacturing details used by Rupasinghe Timber Works.',
  },
  '/process': {
    title: 'Our Timber Manufacturing Process | Rupasinghe Timber Works',
    description: 'See how Rupasinghe Timber Works manages timber selection, preparation, precision manufacturing, quality checks and project delivery.',
  },
  '/contact': {
    title: 'Contact Rupasinghe Timber Works | Kaduwela Workshop',
    description: 'Contact Rupasinghe Timber Works in Welivita, Kaduwela for timber supply, custom joinery, project quotations, workshop directions and WhatsApp enquiries.',
  },
};

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

  useEffect(() => {
    const seo = PAGE_SEO[pathname] ?? PAGE_SEO['/'];
    const isKnownPage = Boolean(PAGE_SEO[pathname]);
    const canonicalUrl = `${SITE_URL}${isKnownPage && pathname !== '/' ? pathname : '/'}`;

    const setMetaContent = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
    };

    document.title = seo.title;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', seo.description);
    setMetaContent('meta[name="robots"]', isKnownPage ? 'index, follow' : 'noindex, follow');
    setMetaContent('meta[property="og:title"]', seo.title);
    setMetaContent('meta[property="og:description"]', seo.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', seo.title);
    setMetaContent('meta[name="twitter:description"]', seo.description);
  }, [pathname]);

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

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rupasinghe Timber Works on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        id="floating-whatsapp-link"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.73.98 1-3.64-.24-.37a9.82 9.82 0 0 1-1.51-5.26A9.86 9.86 0 0 1 12.05 2a9.84 9.84 0 0 1 6.98 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.89-9.87 9.89m8.4-18.32A11.8 11.8 0 0 0 12.06 0C5.5 0 .16 5.35.16 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.26-1.64a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.35 11.9-11.92 0-3.18-1.25-6.17-3.5-8.43" />
        </svg>
      </a>

      {/* Brand Footer & Operating Hours */}
      <Footer />
    </div>
  );
}
