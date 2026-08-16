import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Images, Hammer, Maximize2, X } from 'lucide-react';

import work01 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.31.jpeg';
import work02 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.34 (1).jpeg';
import work03 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.35 (1).jpeg';
import work04 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.36 (1).jpeg';
import work05 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.38 (1).jpeg';
import work06 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.38.jpeg';
import work07 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.40.jpeg';
import work08 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.41.jpeg';
import work09 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.42.jpeg';
import work10 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.45.jpeg';
import work11 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.46.jpeg';
import work12 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.47 (2).jpeg';
import work13 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.48.jpeg';
import work14 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.49.jpeg';
import work15 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.50 (1).jpeg';
import work16 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.51 (1).jpeg';
import work17 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.51.jpeg';
import work18 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.52 (1).jpeg';
import work19 from '../assets/images/WhatsApp Image 2026-07-17 at 15.31.52.jpeg';

const workImages = [
  work01,
  work02,
  work03,
  work04,
  work05,
  work06,
  work07,
  work08,
  work09,
  work10,
  work11,
  work12,
  work13,
  work14,
  work15,
  work16,
  work17,
  work18,
  work19,
].map((src, index) => ({
  id: `work-${index + 1}`,
  src,
  alt: `Rupasinghe Timber Works completed timber project ${index + 1}`,
  featured: index === 0 || index === 7 || index === 15,
}));

export default function WorkGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? null : workImages[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === 0 ? workImages.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === workImages.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal text-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-brand-amber" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-amber font-semibold">
                PROJECT GALLERY
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Our Project Gallery
            </h1>
            <p className="text-sm sm:text-base text-brand-cream/65 leading-relaxed font-light">
              A closer look at completed doors, joinery, frames, and timber finishes handled by the RTW team.
            </p>
          </div>

          <div className="flex items-center gap-4 text-brand-cream/70">
            <div className="h-11 w-11 rounded-lg border border-brand-cream/10 flex items-center justify-center">
              <Hammer className="w-5 h-5 text-brand-amber" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest">Work Photos</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] sm:auto-rows-[190px] gap-3 sm:gap-4">
          {workImages.map((image, index) => (
            <motion.figure
              key={image.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedIndex(index);
                }
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.025, 0.35) }}
              className={[
                'group relative overflow-hidden rounded-lg border border-brand-cream/10 bg-brand-clay cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-brand-amber',
                image.featured ? 'col-span-2 row-span-2' : '',
                index === 8 || index === 19 ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute left-3 right-3 bottom-3 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cream">
                  RTW Work
                </span>
                <span className="h-8 w-8 rounded-md bg-brand-cream/95 text-brand-charcoal flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-brand-cream/55">
          <Images className="w-4 h-4 text-brand-amber" />
          <p className="text-xs sm:text-sm leading-relaxed">
            Real project photographs from Rupasinghe Timber Works installations and production.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[80] bg-brand-charcoal/95 backdrop-blur-sm px-4 py-6 sm:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded project photo"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 h-11 w-11 rounded-lg bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream flex items-center justify-center transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-lg bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              className="max-w-6xl w-full max-h-[86vh] flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
              <div className="flex items-center gap-3 text-brand-cream/70">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  RTW Work Photo {selectedIndex + 1} / {workImages.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-lg bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
