import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from '../components/SocialIcons';
import { COMPANY, WHATSAPP_URL } from '../data/siteData';
import styles from './ContactSection.module.css';

// DEVELOPER NOTE:
// To enable form submissions, set the VITE_FORM_ENDPOINT environment variable
// to your Formspree (https://formspree.io) or Web3Forms (https://web3forms.com) endpoint.
// Example: VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
// Without this variable, the form will display a configuration notice.

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const SERVICES_OPTIONS = [
  'Meta Ads & Lead Generation',
  'Social Media Management',
  'Customer Support & Lead Handling',
  'Appointment Booking',
  'Website Design & Development',
  'Branding & Creative Design',
  'Content Marketing',
  'Marketing Strategy',
  'Multiple Services',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: '', company: '', email: '', phone: '',
    country: '', businessType: '', website: '', service: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error | no-endpoint

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setStatus('no-endpoint');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Get In Touch</span>
            <h2 className={styles.title}>Let's Discuss Your Business.</h2>
            <p className={styles.subtitle}>
              Tell us about your business and what you're looking to achieve. We'll get back to you promptly.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><MapPin size={16} /></div>
                <div>
                  <div className={styles.contactLabel}>Address</div>
                  <div className={styles.contactValue}>
                    {COMPANY.address.street}<br />
                    {COMPANY.address.area}<br />
                    {COMPANY.address.city}<br />
                    {COMPANY.address.postal}, {COMPANY.address.country}
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Phone size={16} /></div>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <a href={`tel:${COMPANY.phone}`} className={styles.contactValue}>{COMPANY.phone}</a>
                </div>
              </div>
            </div>

            <div className={styles.social}>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.whatsapp}`} aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <CheckCircle2 size={40} style={{ color: 'var(--color-secondary-light)' }} />
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {status === 'no-endpoint' && (
                  <div className={styles.notice}>
                    <strong>Developer Note:</strong> Set <code>VITE_FORM_ENDPOINT</code> in your <code>.env</code> file to enable form submissions (Formspree or Web3Forms).
                  </div>
                )}
                {status === 'error' && (
                  <div className={styles.errorMsg}>Something went wrong. Please try again or contact us via WhatsApp.</div>
                )}

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="John Smith" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="country">Country</label>
                    <input id="country" name="country" type="text" value={form.country} onChange={handleChange} placeholder="Canada / United States" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="businessType">Business Type</label>
                    <input id="businessType" name="businessType" type="text" value={form.businessType} onChange={handleChange} placeholder="e.g. Air Duct Cleaning" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://yourwebsite.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {SERVICES_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you're looking to achieve..." />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'} style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'submitting' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
