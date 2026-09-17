import { motion } from 'framer-motion';
import { WORKFLOW_STEPS } from '../data/siteData';
import styles from './WorkflowSection.module.css';

export default function WorkflowSection() {
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
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Process</span>
          <h2 className={styles.title}>
            From Advertising to<br />
            <span className={styles.titleAccent}>Appointment Booking.</span>
          </h2>
          <p className={styles.subtitle}>
            A structured process that takes your business from running ads to having confirmed appointments on your calendar.
          </p>
        </motion.div>

        {/* Desktop: horizontal connected steps */}
        <div className={styles.stepsDesktop}>
          {WORKFLOW_STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {i < WORKFLOW_STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <motion.div
                    className={styles.connectorLine}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  />
                  <div className={styles.connectorArrow}>›</div>
                </div>
              )}
              <div className={styles.stepNum}>{num}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className={styles.stepsMobile}>
          {WORKFLOW_STEPS.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              className={styles.mobileStep}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className={styles.mobileLeft}>
                <div className={styles.mobileNum}>{num}</div>
                {i < WORKFLOW_STEPS.length - 1 && <div className={styles.mobileLine} />}
              </div>
              <div className={styles.mobileContent}>
                <h3 className={styles.mobileTitle}>{title}</h3>
                <p className={styles.mobileDesc}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
