import { motion } from 'framer-motion';
import { WHY_GENISYS } from '../data/siteData';
import styles from './WhySection.module.css';

export default function WhySection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Why Genisys</span>
          <h2 className={styles.title}>
            Why Businesses Work<br />
            <span className="gradient-text">With Genisys.</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {WHY_GENISYS.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              className={`${styles.item} ${i === 0 ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={styles.itemTitle}>{title}</h3>
              <p className={styles.itemDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
