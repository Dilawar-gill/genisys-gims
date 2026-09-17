import { motion } from 'framer-motion';
import { Target, Share2, MessageSquare, CalendarCheck, Globe, Palette, FileText, TrendingUp } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import styles from './ServicesSection.module.css';

const ICONS = { Target, Share2, MessageSquare, CalendarCheck, Globe, Palette, FileText, TrendingUp };

export default function ServicesSection({ preview = false }) {
  const items = preview ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">What We Do</span>
          <h2 className={styles.title}>
            Marketing Services Built for<br />
            <span className="gradient-text">Home-Service Businesses</span>
          </h2>
          <p className={styles.subtitle}>
            From advertising and lead generation to customer support and appointment booking — we handle the complete customer acquisition process.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {items.map(({ id, icon, title, short, color }, i) => {
            const Icon = ICONS[icon];
            return (
              <motion.div
                key={id}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.iconWrap} style={{ '--service-color': color }}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{short}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
