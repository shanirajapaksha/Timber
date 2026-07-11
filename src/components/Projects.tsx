import { motion } from 'motion/react';
import { Calendar, MapPin, Building2, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'proj-1',
      client: 'China Railway 25th Bureau Group Corp',
      title: '700 Housing Units at Applewatta',
      scope: 'Supply and installation of 700 bespoke main doors and 1,400 bedroom doors.',
      period: '2025 – Present',
      location: 'Applewatta, Sri Lanka',
      type: 'Government Housing Mega-Project',
    },
    {
      id: 'proj-2',
      client: 'Cinnamon Life City of Dreams',
      title: 'Integrated Resort Kitchen Millwork',
      scope: 'Supply and installation of granite tops and custom plywood base units for luxury kitchens.',
      period: '2020 – 2023',
      location: 'Colombo, Sri Lanka',
      type: 'Premium Hospitality & Residences',
    },
    {
      id: 'proj-3',
      client: 'Tudawe Engineering Services',
      title: 'Defense Headquarters & Multi-Site Timber Works',
      scope: 'Timber works across Defence Headquarters, University of Wayamba, South Beach Resort, and Labour Department.',
      period: 'Ongoing',
      location: 'Multiple Locations, Sri Lanka',
      type: 'Institutional & Academic Works',
    },
    {
      id: 'proj-4',
      client: 'Durdans Hospital',
      title: 'New Wing Architectural Timber Works',
      scope: 'Specialist carpentry, healthcare-grade door sets, and structural timber joinery.',
      period: '2022 – 2024',
      location: 'Colombo 03, Sri Lanka',
      type: 'Healthcare Infrastructure',
    },
    {
      id: 'proj-5',
      client: 'UNI-EFF (PVT) LTD',
      title: 'Open Villa Matara Kakunadura',
      scope: 'Custom structural villa timber cladding, high-ceiling frames, and bespoke joinery.',
      period: '2023',
      location: 'Matara, Southern Province',
      type: 'Luxury Residential',
    },
    {
      id: 'proj-6',
      client: 'Tudawe Brothers (Pvt) Ltd',
      title: 'Lee Hedges Tower',
      scope: 'Bespoke corporate offices fit-out, partition structures, and premium timber frames.',
      period: '2024',
      location: 'Colombo, Sri Lanka',
      type: 'Commercial High-Rise',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="projects-header">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-brand-copper" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
                LANDMARK CONTRACTS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-4">
              Trusted for Sri Lanka’s Flagship Developments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted max-w-sm mt-4 md:mt-0 leading-relaxed font-light">
            From high-volume commercial door installations to bespoke luxury resort joinery, RTW consistently fulfills critical timelines and exacting engineering standards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group bg-brand-cream border border-brand-charcoal/10 rounded-2xl p-8 hover:border-brand-amber/40 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Back ambient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-amber/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] bg-brand-charcoal/5 text-brand-copper font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {proj.period}
                  </span>
                  
                  <span className="font-mono text-[9px] text-brand-muted uppercase tracking-wider">
                    RTW PROJECT
                  </span>
                </div>

                {/* Client & Title */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-xs text-brand-muted font-medium mb-1.5 uppercase tracking-wide">
                    <Building2 className="w-3.5 h-3.5 text-brand-muted" />
                    {proj.client}
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-charcoal leading-snug group-hover:text-brand-copper transition-colors">
                    {proj.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-brand-charcoal/5 my-4" />

                {/* Scope / Work Description */}
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6 font-light">
                  {proj.scope}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-charcoal/5 mt-auto">
                <span className="text-[10px] font-mono text-brand-muted/80 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-amber" />
                  {proj.location}
                </span>
                
                <span className="text-[9px] font-mono font-medium text-brand-olive bg-brand-olive/5 px-2 py-0.5 rounded-sm">
                  {proj.type}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
