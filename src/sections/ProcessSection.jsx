import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/siteData';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
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
          <span className="section-label">How We Work</span>
          <h2 className={styles.title}>
            A Clear Process from<br />
            <span className="gradient-text">Day One.</span>
          </h2>
        </motion.div>

        <div className={styles.steps}>
          {PROCESS_STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={styles.stepNum}>{num}</div>
              <div className={styles.stepLine} aria-hidden="true" />
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
