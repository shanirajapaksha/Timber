import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why RTW', href: '#why-rtw' },
    { name: 'Projects', href: '#projects' },
    { name: 'Quality & Specs', href: '#quality' },
    { name: 'Process', href: '#process' },
  ];

  const removeUrlHash = () => {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string, closeMobileMenu = false) => {
    event.preventDefault();

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    }

    removeUrlHash();

    if (closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/5 shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(event) => handleNavClick(event, '#')} className="flex items-center gap-3 group" id="nav-logo">
            <div className="w-10 h-10 rounded-lg bg-brand-charcoal flex items-center justify-center text-brand-amber transition-transform duration-300 group-hover:scale-105">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-charcoal block leading-none">
                RUPASINGHE
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-muted block mt-1">
                Timber Works
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="nav-desktop-menu">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="relative text-sm font-medium text-brand-charcoal/80 hover:text-brand-charcoal transition-colors duration-200 py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-charcoal hover:bg-brand-copper text-brand-cream font-medium text-xs tracking-wider uppercase rounded-full transition-all duration-300"
              id="nav-cta"
            >
              Request Quote
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, '#contact')}
              className="px-4 py-2 bg-brand-charcoal text-brand-cream text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-brand-copper transition-colors"
            >
              Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-brand-charcoal hover:text-brand-copper transition-colors"
              aria-label="Open menu"
              id="nav-mobile-toggle"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-xs z-50 lg:hidden"
              id="mobile-nav-backdrop"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-brand-cream shadow-2xl z-50 lg:hidden p-8 flex flex-col justify-between"
              id="mobile-nav-panel"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-brand-copper" />
                    <span className="font-display font-bold text-base uppercase tracking-wider text-brand-charcoal">
                      RTW TIMBER
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-brand-charcoal hover:text-brand-copper transition-colors"
                    aria-label="Close menu"
                    id="mobile-nav-close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href, true)}
                      className="text-lg font-medium text-brand-charcoal hover:text-brand-copper transition-colors duration-200 border-b border-brand-charcoal/5 pb-2 block"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={(event) => handleNavClick(event, '#contact', true)}
                  className="w-full text-center block py-4 bg-brand-charcoal hover:bg-brand-copper text-brand-cream uppercase font-bold tracking-wider text-xs rounded-lg transition-colors"
                >
                  Request a Quote
                </a>
                <p className="text-center text-[10px] text-brand-muted mt-4 font-mono">
                  SINCE 2010 • WELIVITA, KADUWELA
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
