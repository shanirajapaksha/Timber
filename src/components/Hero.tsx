import { motion } from 'motion/react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  const floatingCards = [
    {
      icon: <Calendar className="w-5 h-5 text-brand-amber" />,
      text: 'Since 2010',
      delay: 0.2,
      position: 'top-8 -left-8',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-amber" />,
      text: '15-Yr Warranty',
      delay: 0.4,
      position: 'bottom-20 -left-12',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-amber" />,
      text: 'Architects\' Choice',
      delay: 0.6,
      position: 'top-1/4 -right-8',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-brand-amber" />,
      text: 'Tested Quality',
      delay: 0.8,
      position: 'bottom-8 right-4',
    },
  ];

  // Referencing the generated image from our assets folder
  const heroImgSrc = "/src/assets/images/hero_timber_works_1783420008237.jpg";

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-brand-cream"
    >
      {/* Background elegant gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-amber/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-olive/5 blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,18,18,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,18,18,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center"
            id="hero-content"
          >
            {/* Top Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="h-[1px] w-8 bg-brand-copper" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
                RUPASINGHE TIMBER WORKS
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal tracking-tight leading-[1.1] mb-6"
            >
              Premium Timber <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-copper to-brand-amber">
                Solutions
              </span> for <br />
              Modern Construction
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-muted font-normal max-w-xl leading-relaxed mb-10"
            >
              Trusted timber supply and custom manufacturing for homes, contractors, architects, and landmark projects across Sri Lanka. Built on quality and trust.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-charcoal text-brand-cream font-medium text-sm tracking-wider uppercase rounded-lg hover:bg-brand-copper transition-all duration-300 shadow-lg shadow-brand-charcoal/10 hover:shadow-brand-copper/20"
                id="hero-btn-explore"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-charcoal/20 text-brand-charcoal font-medium text-sm tracking-wider uppercase rounded-lg hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-300"
                id="hero-btn-quote"
              >
                Request a Quote
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Beautiful Render Visual with floating widgets */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0" id="hero-media-wrapper">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 border border-brand-amber/20 rounded-2xl scale-102 pointer-events-none" />

              {/* Main Image Frame with elegant shadow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="overflow-hidden rounded-2xl bg-brand-clay shadow-2xl border-4 border-brand-cream relative aspect-video md:aspect-[4/3] lg:aspect-[1.1]"
              >
                <img
                  src={heroImgSrc}
                  alt="Premium architectural wooden interior with clean lines"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Credential Cards */}
              {floatingCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6, type: 'spring' }}
                  className={`absolute ${card.position} hidden sm:flex items-center gap-2.5 px-4 py-3 bg-brand-cream/95 backdrop-blur-md rounded-xl shadow-lg border border-brand-charcoal/5 pointer-events-none hover:border-brand-amber/40 transition-colors`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-charcoal/5 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="font-display font-bold text-xs tracking-tight text-brand-charcoal">
                    {card.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
