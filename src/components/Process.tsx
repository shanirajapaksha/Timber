import { motion } from 'motion/react';
import { Layers, Thermometer, Shield, Drill, Paintbrush, Hammer, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      no: '01',
      title: 'Material Selection',
      desc: 'Meticulously inspecting and selecting high-grade logs at regional forests to verify optimum grain alignment and density.',
      icon: <Layers className="w-5 h-5" />,
    },
    {
      no: '02',
      title: 'Timber Drying',
      desc: 'Seasoning and drying wood in controlled kilns to lower the moisture content down to the ideal 10%–15% range.',
      icon: <Thermometer className="w-5 h-5" />,
    },
    {
      no: '03',
      title: 'Chemical Treatment',
      desc: 'Thoroughly treating wood with boron chemical systems to prevent dry-wood termites, fungal decay, and boring insects.',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      no: '04',
      title: 'Precision Manufacturing',
      desc: 'Milling, profiling, and assembling frames, doors, sashes, and bespoke structures using exact industrial joinery machinery.',
      icon: <Drill className="w-5 h-5" />,
    },
    {
      no: '05',
      title: 'Sayerlack Finishing',
      desc: 'Applying premium JAT Sayerlack water-based coatings to enhance the natural mahogany grain while providing moisture shielding.',
      icon: <Paintbrush className="w-5 h-5" />,
    },
    {
      no: '06',
      title: 'Site Installation',
      desc: 'Deploying our skilled site carpentry teams to align, fit, and secure the custom assemblies perfectly at the project site.',
      icon: <Hammer className="w-5 h-5" />,
    },
    {
      no: '07',
      title: 'Final Quality Check',
      desc: 'A comprehensive post-installation inspection checking alignments, hinge friction, seal tight-fits, and finish smoothness.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-cream relative">
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-brand-amber/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-xl mb-20" id="process-header">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-brand-copper" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
              OUR WORKFLOW
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-4">
            How We Execute Excellence
          </h2>
          
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
            An overview of the complete, quality-controlled lifecycle that our timber passes through from raw woodland selection to on-site assembly.
          </p>
        </div>

        {/* Process Roadmap / Timeline Layout */}
        <div className="relative border-l border-brand-charcoal/10 ml-4 md:ml-8 space-y-12 max-w-4xl" id="process-timeline">
          {steps.map((step, idx) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline dot anchor */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-brand-cream border-2 border-brand-charcoal/20 group-hover:border-brand-copper flex items-center justify-center transition-all duration-300 shadow-sm">
                <span className="font-mono text-[10px] font-bold text-brand-muted group-hover:text-brand-copper">
                  {step.no}
                </span>
              </div>

              {/* Step Card Content */}
              <div className="p-6 md:p-8 bg-brand-cream border border-brand-charcoal/5 group-hover:border-brand-amber/30 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-brand-charcoal/5 text-brand-charcoal flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-brand-amber transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Text */}
                <div className="flex-grow">
                  <span className="font-mono text-[9px] text-brand-amber uppercase tracking-widest block mb-1">
                    PHASE {step.no}
                  </span>
                  
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-charcoal mb-2 group-hover:text-brand-copper transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
