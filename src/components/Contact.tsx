import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle2, Send, MessageSquare, ExternalLink } from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '88fce037-6b96-4ecb-b2ac-8a82b35463e2';
const WHATSAPP_NUMBER = '94772561647';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const CONTACT_EMAIL = 'rupasinghetimberworks@gmail.com';
const MAPS_URL = 'https://www.google.com/maps/search/Rupasinghe%20Timber%20Works/@6.92897339,79.96537472,17z?hl=en';
const MAPS_EMBED_URL = 'https://www.google.com/maps?q=6.92897339%2C79.96537472&z=17&output=embed';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const projectOptions = [
    { value: 'residential', label: 'Doors & Frames' },
    { value: 'commercial', label: 'Commercial Timber Supply' },
    { value: 'joinery', label: 'Bespoke Joinery (Kitchens/Wardrobes)' },
    { value: 'gov', label: 'Government / Contractor Supply' },
    { value: 'other', label: 'Other Timber Products' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Please include details about your request';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const selectedProjectType = projectOptions.find((option) => option.value === formData.projectType)?.label;
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request - ${selectedProjectType ?? 'Timber Project'}`,
          from_name: 'Rupasinghe Timber Works Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: selectedProjectType,
          message: formData.message,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(`Form endpoint responded with ${response.status}`);
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        message: '',
      });

    } catch {
      setSubmitError('We could not send your request right now. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-cream border-t border-brand-charcoal/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side - Info Cards */}
          <div className="lg:col-span-5" id="contact-details">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-brand-copper" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-copper font-semibold">
                GET IN TOUCH
              </span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal mb-6 leading-tight">
              Start Your Next Timber Project with RTW
            </h1>
            
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-10 font-light">
              Connect with our estimating desk today to discuss timber supply schedules, custom pricing, site delivery slots, or bespoke manufacturing requirements.
            </p>

            <div className="space-y-6">
              {/* Address Card */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-5 bg-brand-cream border border-brand-charcoal/5 rounded-2xl transition-all hover:border-brand-amber/40 hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center text-brand-amber flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-muted mb-1 font-mono">
                    OUR OFFICE & WORKSHOP
                  </h4>
                  <p className="text-sm text-brand-charcoal font-medium leading-relaxed">
                    236, Hemawatha, Welivita,<br />Kaduwela, Sri Lanka
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-brand-copper">
                    Open in Google Maps <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>

              {/* Call/WhatsApp Card */}
              <div className="flex gap-4 p-5 bg-brand-cream border border-brand-charcoal/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center text-brand-amber flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-muted mb-1 font-mono">
                    CALL / WHATSAPP DESK
                  </h4>
                  <a href="tel:+94772561647" className="block text-sm text-brand-charcoal font-bold leading-none mb-1 hover:text-brand-copper transition-colors">
                    +94 77 256 16 47
                  </a>
                  <a href="tel:+94714426510" className="block text-xs text-brand-muted font-light hover:text-brand-copper transition-colors">
                    +94 71 44 26 510 (Estimations Hotkey)
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#168a3f] transition-colors hover:bg-[#25D366]/20"
                  >
                    Open WhatsApp <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex gap-4 p-5 bg-brand-cream border border-brand-charcoal/5 rounded-2xl transition-all hover:border-brand-amber/40 hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-charcoal flex items-center justify-center text-brand-amber flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-brand-muted mb-1 font-mono">
                    EMAIL CORRESPONDENCE
                  </h4>
                  <p className="text-sm text-brand-charcoal font-medium break-all group-hover:text-brand-copper transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Custom Interactive Quotation Form */}
          <div className="lg:col-span-7" id="contact-form-wrapper">
            <div className="p-8 md:p-10 bg-brand-cream border border-brand-charcoal/10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-copper to-brand-amber" />
              
              <h3 className="font-display font-bold text-xl text-brand-charcoal mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-copper" />
                Request a Quotation
              </h3>
              <p className="text-xs text-brand-muted mb-8 font-light">
                Fill in details about your project, and our timber specialists will contact you within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    id="quote-request-form"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        autoComplete="name"
                        required
                        className={`w-full px-4 py-3.5 bg-brand-cream border rounded-lg focus:outline-hidden focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-brand-charcoal/20 focus:border-brand-copper focus:ring-brand-copper/20'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="email"
                          required
                          className={`w-full px-4 py-3.5 bg-brand-cream border rounded-lg focus:outline-hidden focus:ring-1 transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500/30'
                              : 'border-brand-charcoal/20 focus:border-brand-copper focus:ring-brand-copper/20'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          autoComplete="tel"
                          required
                          className={`w-full px-4 py-3.5 bg-brand-cream border rounded-lg focus:outline-hidden focus:ring-1 transition-colors ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500/30'
                              : 'border-brand-charcoal/20 focus:border-brand-copper focus:ring-brand-copper/20'
                          }`}
                          placeholder="+94 77 123 4567"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                        Select Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3.5 bg-brand-cream border rounded-lg focus:outline-hidden focus:ring-1 transition-colors ${
                          errors.projectType
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-brand-charcoal/20 focus:border-brand-copper focus:ring-brand-copper/20'
                        }`}
                      >
                        <option value="">-- Choose Category --</option>
                        {projectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-500 text-xs mt-1 font-mono">{errors.projectType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2 font-mono">
                        Describe Your Specifications & Sizes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className={`w-full px-4 py-3.5 bg-brand-cream border rounded-lg focus:outline-hidden focus:ring-1 transition-colors resize-none ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-brand-charcoal/20 focus:border-brand-copper focus:ring-brand-copper/20'
                        }`}
                        placeholder="E.g., Require 15 mahogany frames (90mm x 65mm) and 5 bedroom doors (1.25 inch thick). Please provide drying report."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 font-mono">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <p className="text-red-500 text-xs font-mono" role="alert">
                        {submitError}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 bg-brand-charcoal text-brand-cream font-medium text-xs tracking-widest uppercase rounded-lg hover:bg-brand-copper active:bg-brand-charcoal disabled:bg-brand-muted/40 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-cream border-t-transparent rounded-full animate-spin" />
                          Processing Quotation...
                        </>
                      ) : (
                        <>
                          Send Quote Request
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                    id="form-success-alert"
                  >
                    <div className="w-16 h-16 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <h4 className="font-display font-bold text-2xl text-brand-charcoal mb-3">
                      Quotation Request Received!
                    </h4>
                    
                    <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed mb-8">
                      Thank you for contacting Rupasinghe Timber Works. Your request was emailed successfully, and our team will contact you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-brand-charcoal/5 hover:bg-brand-charcoal/10 text-brand-charcoal text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Spec
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-cream shadow-lg" id="workshop-location">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-charcoal text-brand-amber">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-brand-copper">
                Find Our Workshop
              </span>
              <h3 className="mb-4 font-display text-2xl font-bold text-brand-charcoal">
                Visit Rupasinghe Timber Works
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-muted">
                236, Hemawatha, Welivita, Kaduwela, Sri Lanka
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-cream transition-colors hover:bg-brand-copper"
              >
                Get Directions <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <iframe
              src={MAPS_EMBED_URL}
              title="Rupasinghe Timber Works location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[360px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
