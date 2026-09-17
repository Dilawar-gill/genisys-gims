import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../data/siteData';
import HeroDashboard from './HeroDashboard';
import styles from './HeroSection.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const TRUST_ITEMS = [
  'Serving Businesses Since 2019',
  'Canada & USA Market Experience',
  'Home-Service Marketing Specialists',
];

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background elements */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
        <div className={styles.bgGrid} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Copy */}
        <div className={styles.copy}>
          <motion.div {...fadeUp(0.1)} className={styles.badge}>
            <span className={styles.badgeDot} />
            Digital Marketing for Home-Service Businesses
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className={styles.headline}>
            We Help Home-Service Businesses{' '}
            <span className="gradient-text gradient-text-bright">Generate Leads, Book Jobs & Grow.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className={styles.subtext}>
            Genisys International Marketing Solutions helps duct cleaning, HVAC and other home-service businesses across Canada and the United States generate customer inquiries, manage leads, schedule appointments and strengthen their digital presence.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className={styles.actions}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className={styles.trust}>
            {TRUST_ITEMS.map((item) => (
              <div key={item} className={styles.trustItem}>
                <CheckCircle2 size={15} className={styles.trustIcon} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Dashboard visual */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroDashboard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
