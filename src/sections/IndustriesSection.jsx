import { motion } from 'framer-motion';
import { Wind, Thermometer, Flame, Zap, Snowflake, RefreshCw, Activity, Home } from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';
import styles from './IndustriesSection.module.css';

const ICONS = { Wind, Thermometer, Flame, Zap, Snowflake, RefreshCw, Activity, Home };

export default function IndustriesSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Specialization</span>
            <h2 className={styles.title}>
              We Know the<br />
              <span className="gradient-text">Home-Service Industry.</span>
            </h2>
            <p className={styles.body}>
              Genisys understands service-area advertising, seasonal offers, homeowner communication, lead qualification and appointment-based customer acquisition.
            </p>
            <p className={styles.body}>
              Our experience is focused on the businesses that send technicians to homes — the companies that need a steady flow of booked appointments to grow.
            </p>
          </motion.div>

          <div className={styles.right}>
            {INDUSTRIES.map(({ name, icon }, i) => {
              const Icon = ICONS[icon];
              return (
                <motion.div
                  key={name}
                  className={styles.industryItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={styles.industryIcon}>
                    {Icon && <Icon size={18} />}
                  </div>
                  <span className={styles.industryName}>{name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
