import { motion } from 'framer-motion';
import styles from './PageHero.module.css';

export default function PageHero({ label, title, subtitle, dark = false }) {
  return (
    <section className={`${styles.hero} ${dark ? styles.dark : ''}`}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow} />
      </div>
      <div className={`container ${styles.inner}`}>
        {label && (
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
