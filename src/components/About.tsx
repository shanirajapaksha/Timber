import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Shield, Users, Clock, Compass } from 'lucide-react';

function Counter({ value, suffix = '', duration = 2 }) {
  const [displayVal, setDisplayVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { damping: 30, stiffness: 60 });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, motionVal, value]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      setDisplayVal(Math.round(latest));
    });
  }, [springVal]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl text-brand-charcoal tracking-tight">
      {displayVal}
      {suffix}
    </span>
  );
}

export default function About() {
  const features = [
    {
      icon: <Clock className="w-5 h-5 text-brand-amber" />,
      title: 'Timely & Professional',
      desc: 'Dedicated to scheduled project handovers and streamlined material dispatch logistics.',
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-amber" />,
      title: 'Certified Material Selection',
      desc: 'Meticulous wood inspection protocols to ensure structural timber grades and moisture accuracy.',
    },
    {
      icon: <Users className="w-5 h-5 text-brand-amber" />,
      title: 'Long-term Relationships',
      desc: 'Collaborating directly with public contractors, premium architects, and homeowners alike.',
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-amber" />,
      title: 'End-to-End Craftsmanship',
      desc: 'Handling everything from select logging to timber kiln drying, profile shaping, and installation.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left - Story */}
          <div className="lg:col-span-6" id="about-story">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-[1px] w-6 bg-brand-copper" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
                  OUR LEGACY
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-6 leading-tight">
                Built on Trust, Quality, <br />
                and Craftsmanship
              </h2>
              <div className="space-y-6 text-brand-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Established in <strong className="text-brand-charcoal font-semibold">2010</strong>, Rupasinghe Timber Works (RTW) has steadily grown from a local supplier into a trusted cornerstone of the Sri Lankan timber industry. Operating out of <strong className="text-brand-charcoal font-semibold">Welivita, Kaduwela</strong>, we specialize in sourcing, processing, and manufacturing premium timber materials.
                </p>
                <p>
                  Our services cater to house builders, private contractors, government building contractors, architects, and the general public. We are driven by a singular philosophy: every cut, plank, and finished product must meet rigorous quality standards before it leaves our facility.
                </p>
                <p>
                  By focusing on professional delivery, precision manufacturing, and transparent, long-term customer relationships, RTW is the preferred partner for complex structural builds and bespoke architectural masterpieces throughout Sri Lanka.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Stats & Bullet Points */}
          <div className="lg:col-span-6 space-y-12" id="about-features">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 sm:gap-8 bg-brand-clay p-8 rounded-2xl text-brand-cream shadow-xl"
            >
              <div className="flex flex-col border-r border-brand-cream/10 pr-4">
                <div className="flex items-baseline gap-1 mb-2 text-brand-amber">
                  <Counter value={2010} suffix="" />
                </div>
                <span className="text-xs uppercase tracking-wider text-brand-cream/60 font-mono">
                  Established Year
                </span>
              </div>
              
              <div className="flex flex-col pl-4">
                <div className="flex items-baseline gap-1 mb-2 text-brand-amber">
                  <Counter value={15} suffix="+" />
                </div>
                <span className="text-xs uppercase tracking-wider text-brand-cream/60 font-mono">
                  Years of Experience
                </span>
              </div>

              <div className="flex flex-col border-r border-brand-cream/10 pr-4 pt-6 border-t">
                <div className="flex items-baseline gap-1 mb-2 text-brand-amber">
                  <Counter value={100} suffix="%" />
                </div>
                <span className="text-xs uppercase tracking-wider text-brand-cream/60 font-mono">
                  Tested Mahogany Quality
                </span>
              </div>

              <div className="flex flex-col pl-4 pt-6 border-t">
                <div className="flex items-baseline gap-1 mb-2 text-brand-amber">
                  <Counter value={4000} suffix="+" />
                </div>
                <span className="text-xs uppercase tracking-wider text-brand-cream/60 font-mono">
                  Planks Kiln-Dried
                </span>
              </div>
            </motion.div>

            {/* Micro Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col gap-3 p-4 rounded-xl border border-brand-charcoal/5 hover:border-brand-amber/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-charcoal/5 flex items-center justify-center transition-colors group-hover:bg-brand-charcoal">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-brand-charcoal">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
