import { motion } from 'motion/react';
import { Calendar, ClipboardCheck, Truck, Building2, Wrench, FlameKindling } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Calendar className="w-5 h-5 text-brand-amber" />,
      title: 'Trusted Since 2010',
      description:
        'Over 15 years of uninterrupted service supplying timber materials and custom products to clients nationwide from Kaduwela.',
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-brand-amber" />,
      title: 'Material Selection Quality Control',
      description:
        'Each mahogany log and timber block undergoes strict grading, inspection, and certification processes for optimal density.',
    },
    {
      icon: <Truck className="w-5 h-5 text-brand-amber" />,
      title: 'Timely & Professional Delivery',
      description:
        'Equipped with our own transport logistics to fulfill delivery schedules without delays, respecting building timetables.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-brand-amber" />,
      title: 'Multifaceted Project Experience',
      description:
        'A strong portfolio completing contracts for individual luxury homes, private companies, and prestigious government ministries.',
    },
    {
      icon: <Wrench className="w-5 h-5 text-brand-amber" />,
      title: 'Manufacturing & On-Site Installation',
      description:
        'We do not just ship wood. Our expert carpentry teams install frames, sashes, and major entry doors right at your building site.',
    },
    {
      icon: <FlameKindling className="w-5 h-5 text-brand-amber" />,
      title: 'Scientific Drying & Boron Treatment',
      description:
        'Our timber goes through thorough chemical boron treatment and moisture reduction processes to prevent decay, termites, and warp.',
    },
  ];

  return (
    <section id="why-rtw" className="py-24 bg-brand-clay text-brand-cream relative overflow-hidden">
      {/* Decorative vector shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-copper/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Head Area */}
        <div className="max-w-2xl mb-20" id="why-rtw-header">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-6 bg-brand-amber" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-amber font-semibold">
              WHY PARTNER WITH US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream mb-4"
          >
            Reliability Engineered Into Every Plank
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-brand-cream/70 leading-relaxed font-light"
          >
            We bridges the gap between traditional woodworking mastery and rigorous modern quality documentation, making us a top-tier choice for construction professionals.
          </motion.p>
        </div>

        {/* Bento/Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-rtw-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 bg-brand-cream/[0.03] border border-brand-cream/10 hover:border-brand-amber/30 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-brand-cream/5 flex items-center justify-center mb-6 transition-all group-hover:bg-brand-amber group-hover:text-brand-charcoal">
                  <div className="transition-transform group-hover:scale-110">
                    {card.icon}
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-lg text-brand-cream mb-3 group-hover:text-brand-amber transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-brand-cream/60 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="w-full h-[1px] bg-brand-cream/5 mt-8 group-hover:bg-brand-amber/20 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
