import { motion } from 'motion/react';
import { FileText, CheckCircle, HelpCircle, ShieldCheck } from 'lucide-react';

export default function Quality() {
  const documents = [
    {
      id: 'doc-1',
      title: 'University of Moratuwa Testing',
      type: 'Fire Resistance Assessment Report',
      description:
        'Official, lab-tested fire resistance documentation evaluating a tested mahogany timber sample block for safety assurance.',
      status: 'Documentation Available on Request',
    },
    {
      id: 'doc-2',
      title: 'Industrial Technology Institute (ITI)',
      type: 'Laboratory Structural Assessment',
      description:
        'Standardized material density and durability report verifying physical performance criteria of supplied timber.',
      status: 'Test Reports Available',
    },
    {
      id: 'doc-3',
      title: 'Timber Moisture Drying Reports',
      type: 'Kiln Seasoning Control Sheets',
      description:
        'We provide detailed moisture-level reading logs for every batch of kiln-dried lumber to assure structural stability.',
      status: 'Provided with Every Order',
    },
  ];

  return (
    <section id="quality" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-olive/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left - Credibility Statement */}
          <div className="lg:col-span-5" id="quality-info">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-brand-copper" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
                LAB-TESTED CREDIBILITY
              </span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-6 leading-tight">
              Backed by Rigorous Scientific Testing
            </h1>
            
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6 font-normal">
              At Rupasinghe Timber Works, we don’t expect you to take our word for our timber’s quality. We hold actual technical documentation validating the structural integrity, load performance, and physical parameters of our materials.
            </p>
            
            <p className="text-sm text-brand-muted leading-relaxed mb-8">
              Every client, contractor, and architect can verify these credentials to satisfy building inspectors, engineering boards, and safety compliance authorities. We keep clean records of:
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-olive/10 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-brand-olive" />
                </div>
                <p className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Verified mahogany timber sample testing
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-olive/10 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-brand-olive" />
                </div>
                <p className="text-xs sm:text-sm text-brand-charcoal font-medium">
                  Official third-party institutional testing
                </p>
              </div>
            </div>
          </div>

          {/* Right - Document List Grid */}
          <div className="lg:col-span-7 space-y-6" id="quality-documents">
            <h3 className="font-mono text-[10px] tracking-widest text-brand-muted uppercase mb-2">
              TECHNICAL REPORTS & CERTIFICATES
            </h3>
            
            {documents.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-brand-cream border border-brand-charcoal/10 hover:border-brand-amber/30 rounded-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start shadow-xs hover:shadow-md"
              >
                {/* Document Icon Graphic */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-charcoal flex items-center justify-center text-brand-amber">
                  <FileText className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-display font-bold text-base text-brand-charcoal">
                      {doc.title}
                    </h4>
                    <span className="font-mono text-[9px] font-bold text-brand-olive bg-brand-olive/10 px-2 py-0.5 rounded-sm uppercase tracking-wide self-start sm:self-center">
                      {doc.status}
                    </span>
                  </div>
                  
                  <p className="text-xs font-mono text-brand-amber uppercase tracking-wider mb-2">
                    {doc.type}
                  </p>
                  
                  <p className="text-xs text-brand-muted leading-relaxed font-light">
                    {doc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
