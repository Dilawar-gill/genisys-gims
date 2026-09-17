import { motion } from 'framer-motion';
import { TIMELINE } from '../data/siteData';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Genisys</span>
            <h2 className={styles.title}>
              Marketing Experience Built Around<br />
              <span className="gradient-text">Real Service Businesses.</span>
            </h2>
            <p className={styles.body}>
              Genisys International Marketing Solutions has been operating since 2019, supporting companies that serve customers in Canada and the United States.
            </p>
            <p className={styles.body}>
              Our focus is the home-service industry — businesses that send technicians to homes and depend on a consistent flow of booked appointments. We understand how these businesses work, what their customers ask, and what it takes to turn an advertising campaign into a full calendar.
            </p>
            <p className={styles.body}>
              We handle the complete customer acquisition process: from building and running advertising campaigns, to managing customer inquiries, qualifying leads and booking appointments.
            </p>
          </motion.div>

          {/* Acquisition flow */}
          <motion.div
            className={styles.flow}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              'Advertising',
              'Lead Generation',
              'Customer Communication',
              'Qualification',
              'Appointment Booking',
              'Follow-Up',
              'Growth',
            ].map((step, i) => (
              <motion.div
                key={step}
                className={styles.flowStep}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className={styles.flowDot} />
                <span className={styles.flowLabel}>{step}</span>
                {i < 6 && <div className={styles.flowArrow}>↓</div>}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className={styles.timeline}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className={styles.timelineTitle}>Company Timeline</h3>
          <div className={styles.timelineItems}>
            {TIMELINE.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDot} />
                  <div>
                    <div className={styles.timelineItemTitle}>{title}</div>
                    <div className={styles.timelineItemDesc}>{desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
