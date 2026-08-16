import { motion } from 'motion/react';

export default function Clients() {
  const clients = [
    { name: 'Tudawe Brothers', logo: '/client-logos/tudawe-brothers.png', subtitle: 'Pioneer Construction', logoClass: 'max-h-10' },
    { name: 'China Railway 25th Bureau', logo: '/client-logos/china-railway-25th-bureau.svg', subtitle: 'Global Engineering', logoClass: 'max-h-14' },
    { name: 'Tudawe Engineering Services', logo: '/client-logos/tudawe-engineering.png', subtitle: 'Infrastructure Specialist', logoClass: 'max-h-14' },
    { name: 'UNI-EFF', logo: '/client-logos/uni-eff.svg', subtitle: 'Property Development', logoClass: 'max-h-12' },
    { name: 'Durdans Hospital', logo: '/client-logos/durdans-hospital.jpg', subtitle: 'Healthcare Leader', logoClass: 'max-h-14' },
    { name: 'Cinnamon Life City of Dreams', logo: '/client-logos/cinnamon-life.png', subtitle: 'Elite Leisure Development', logoClass: 'max-h-16' },
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
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex min-h-48 flex-col items-center justify-center p-5 bg-brand-cream border border-brand-charcoal/5 hover:border-brand-amber/30 rounded-xl transition-all duration-300 hover:shadow-md group"
            >
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className={`max-w-full w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 ${client.logoClass}`}
                />
              </div>

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
