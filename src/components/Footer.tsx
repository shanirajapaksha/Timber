import { Layers, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About RTW', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-rtw' },
    { name: 'Projects', href: '#projects' },
    { name: 'Credentials', href: '#quality' },
    { name: 'Specifications', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-clay text-brand-cream border-t border-brand-cream/10 pt-20 pb-8 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-cream/10">
          {/* Logo & Intro */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-3 group" id="footer-logo">
              <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-clay transition-transform duration-300 group-hover:scale-105">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-brand-cream block leading-none">
                  RUPASINGHE
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-amber block mt-1">
                  Timber Works
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-brand-cream/60 leading-relaxed max-w-sm font-light">
              Trusted Sri Lankan timber supplier and manufacturer since 2010. Crafting and installing high-end mahogany doors, frames, sashes, and architectural millwork across Sri Lanka.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-brand-amber">
              <span>ESTD. 2010</span>
              <span>•</span>
              <span>WELIVITA, KADUWELA</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-6">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-amber font-mono">
              QUICK SECTIONS
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm text-brand-cream/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-amber transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop hours & contacts */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-amber font-mono">
              WORKSHOP HOURS & ACCESS
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-brand-cream/70 font-light">
              <p className="flex justify-between border-b border-brand-cream/5 pb-2">
                <span>Monday – Friday</span>
                <span className="text-brand-cream font-medium">8:00 AM – 5:00 PM</span>
              </p>
              <p className="flex justify-between border-b border-brand-cream/5 pb-2">
                <span>Saturday</span>
                <span className="text-brand-cream font-medium">8:00 AM – 2:00 PM</span>
              </p>
              <p className="flex justify-between text-brand-cream/40">
                <span>Sunday & Holidays</span>
                <span className="text-brand-cream/40">Closed</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-brand-cream/40 font-mono text-center sm:text-left">
            © 2026 RUPASINGHE TIMBER WORKS. ALL RIGHTS RESERVED. <br className="sm:hidden" />
            DEVELOPED FOR MAXIMUM CONSTRUCTION ENDURANCE.
          </p>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-cream/5 hover:bg-brand-cream/10 text-brand-cream text-xs rounded-full border border-brand-cream/10 transition-colors cursor-pointer"
            id="footer-back-to-top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
