import { motion } from 'motion/react';
import { Ruler, Shield, Sparkles, Layers, Landmark } from 'lucide-react';

export default function Specs() {
  const specs = [
    {
      icon: <Layers className="w-4 h-4 text-brand-copper" />,
      label: 'Frame Timber Type',
      val: 'Mahogany & Teak (Tested Sample Documentation)',
    },
    {
      icon: <Ruler className="w-4 h-4 text-brand-copper" />,
      label: 'Frame Size (After Planing)',
      val: '90mm x 65mm',
    },
    {
      icon: <Ruler className="w-4 h-4 text-brand-copper" />,
      label: 'Door Thickness',
      val: '1.25 inches / 32mm',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-brand-copper" />,
      label: 'Paint Product Brand',
      val: 'JAT Sayerlack',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-brand-copper" />,
      label: 'Finish Type',
      val: 'Water-Based Premium Finish',
    },
    {
      icon: <Shield className="w-4 h-4 text-brand-copper" />,
      label: 'Chemical Treatment',
      val: 'Boron Treated (anti-warp & anti-decay)',
    },
    {
      icon: <Shield className="w-4 h-4 text-brand-copper" />,
      label: 'Warranty Period',
      val: 'Mahogany Timber = 15 Years',
    },
    {
      icon: <Ruler className="w-4 h-4 text-brand-copper" />,
      label: 'Timber Moisture Level',
      val: '10% – 15% (Kiln-Dried Quality)',
    },
  ];

  return (
    <section className="py-24 bg-brand-clay text-brand-cream border-t border-brand-cream/5 relative overflow-hidden">
      {/* Decorative vector grid backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,251,250,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,251,250,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16" id="specs-header">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-6 bg-brand-amber" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-amber font-semibold">
              TECHNICAL SCHEDULING
            </span>
            <span className="h-[1px] w-6 bg-brand-amber" />
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream mb-4">
            Material Specifications
          </h2>
          
          <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed max-w-xl mx-auto">
            Standard millwork specifications applied to our custom mahogany timber frames and manufactured doors to guarantee maximum lifetime.
          </p>
        </div>

        {/* Blueprint Style Spec Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-brand-cream/[0.02] border border-brand-cream/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
          id="specs-sheet"
        >
          {/* Header Banner */}
          <div className="px-6 py-4 bg-brand-cream/[0.04] border-b border-brand-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-mono text-[10px] tracking-widest text-brand-amber font-bold uppercase">
              MAHOGANY & TEAK PRODUCTS SCHEDULING SPEC SHEET
            </span>
            <span className="font-mono text-[9px] text-brand-cream/40">
              ID: RTW-TS-2026-V1
            </span>
          </div>

          {/* List of Specs */}
          <div className="divide-y divide-brand-cream/10">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-brand-cream/[0.02] transition-colors"
              >
                {/* Left - Label */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-cream/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-display text-xs sm:text-sm font-semibold text-brand-cream/95">
                    {item.label}
                  </span>
                </div>

                {/* Right - Value */}
                <div className="sm:text-right">
                  <span className="font-mono text-xs sm:text-sm text-brand-amber font-medium bg-brand-cream/5 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-sm inline-block">
                    {item.val}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer banner */}
          <div className="px-6 py-4 bg-brand-cream/[0.02] border-t border-brand-cream/10 text-center">
            <p className="text-[10px] text-brand-cream/40 font-mono">
              Custom sizes, alternate timber species, and personalized treatment specs are available upon architect consultation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
