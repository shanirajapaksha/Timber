import { motion } from 'motion/react';
import { Layers3, Hammer, Sparkles, Check, ChevronRight } from 'lucide-react';
import timberRawMaterialImg from '../assets/images/timber_raw_material_1783420040716.jpg';
import mahoganyDoorImg from '../assets/images/mahogany_door_1783420024855.jpg';
import { navigateTo } from '../navigation';

export default function Services() {
  const categories = [
    {
      id: 'timber-supply',
      title: 'Timber Supply',
      subtitle: 'Premium Construction & Raw Materials',
      icon: <Layers3 className="w-6 h-6 text-brand-amber" />,
      description:
        'Sourcing and preparing finest local and imported wood stocks. Engineered to provide structural stability, durability, and natural aesthetic brilliance for architects and commercial builders.',
      image: timberRawMaterialImg,
      points: [
        'Large, seasonally managed stock of high-grade local timber',
        'Sturdy timber materials tailored specifically for construction load-bearing',
        'Premium plywood boards and related specialized wood products',
        'High-capacity, reliable wholesale supply contracts for developers',
      ],
      badge: 'Certified Material Sourcing',
    },
    {
      id: 'timber-manufacturing',
      title: 'Timber Manufacturing',
      subtitle: 'Bespoke Joinery & Architectural Woodwork',
      icon: <Hammer className="w-6 h-6 text-brand-amber" />,
      description:
        'Custom precision crafting using advanced machinery and experienced joiners. We design, paint, and pre-assemble architectural components that enhance the interior prestige of luxury structures.',
      image: mahoganyDoorImg,
      points: [
        'Custom engineered timber sashes and high-precision window structures',
        'Durable, warp-resistant structural timber frames',
        'Stately main doors, solid bedroom doors, and pivot entrances',
        'Integrated modular kitchens, custom wardrobes, and storage joinery',
        'Bespoke custom-milled wood-based designs and components',
      ],
      badge: 'Artisanal Custom Manufacturing',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-brand-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="services-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-6 bg-brand-copper" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
              WHAT WE DO
            </span>
            <span className="h-[1px] w-6 bg-brand-copper" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-4"
          >
            Precision Millwork & Sourcing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-brand-muted leading-relaxed"
          >
            From raw trunk sourcing to meticulous kiln-drying and detailed hand-assembly, we operate as a full-service supplier and carpentry workshop.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14" id="services-grid">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-brand-cream border border-brand-charcoal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-amber/30 transition-all duration-500 flex flex-col h-full group"
            >
              
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[16/10] bg-brand-clay">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating badge inside image */}
                <div className="absolute top-4 left-4 bg-brand-charcoal/90 backdrop-blur-xs text-brand-cream border border-brand-cream/10 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-amber" />
                  {cat.badge}
                </div>
                
                {/* Gradient blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent pointer-events-none" />
              </div>

              {/* Text Area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-charcoal/5 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-brand-charcoal group-hover:text-brand-copper transition-colors">
                        {cat.title}
                      </h3>
                      <p className="font-mono text-[10px] text-brand-amber uppercase tracking-wider">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>

                  <div className="h-[1px] w-full bg-brand-charcoal/5 mb-6" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {cat.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-charcoal/90">
                        <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-brand-olive/10 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-brand-olive" />
                        </div>
                        <span className="leading-tight font-medium">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-brand-charcoal/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">
                    WELIVITA WORKSHOP
                  </span>
                  <a
                    href="/contact"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateTo('/contact');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal hover:text-brand-copper uppercase tracking-wider group/link transition-colors"
                  >
                    Discuss project
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
