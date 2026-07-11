import { motion } from 'motion/react';
import { Building2, Globe2, ShieldAlert, Award, Star, Hammer } from 'lucide-react';

export default function Clients() {
  const clients = [
    { name: 'Tudawe Brothers', icon: <Building2 className="w-5 h-5" />, subtitle: 'Pioneer Construction' },
    { name: 'China Railway 25th Bureau', icon: <Globe2 className="w-5 h-5" />, subtitle: 'Global Engineering' },
    { name: 'Tudawe Engineering Services', icon: <Award className="w-5 h-5" />, subtitle: 'Infrastructure Specialist' },
    { name: 'UNI-EFF', icon: <Star className="w-5 h-5" />, subtitle: 'Property Development' },
    { name: 'Durdans Hospital', icon: <ShieldAlert className="w-5 h-5" />, subtitle: 'Healthcare Leader' },
    { name: 'Cinnamon Life City of Dreams', icon: <Hammer className="w-5 h-5" />, subtitle: 'Elite Leisure Development' },
  ];

  return (
    <section className="py-16 bg-brand-cream border-t border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-brand-muted mb-10">
          PROUDLY PARTNERING WITH SRI LANKA’S REPUTED ENTERPRISES
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center" id="client-logos-grid">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-brand-cream border border-brand-charcoal/5 hover:border-brand-amber/30 rounded-xl transition-all duration-300 hover:shadow-md group cursor-pointer"
            >
              {/* Monochromatic icon emblem */}
              <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 flex items-center justify-center text-brand-muted group-hover:bg-brand-charcoal group-hover:text-brand-amber transition-colors duration-300 mb-3">
                {client.icon}
              </div>

              {/* Client Text Branding */}
              <span className="font-display font-bold text-xs tracking-tight text-brand-charcoal text-center block">
                {client.name}
              </span>
              
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-wider text-center mt-1">
                {client.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
