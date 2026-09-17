import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO } from '../data/siteData';
import styles from './TrustSection.module.css';

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.p
          className={styles.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Brands & Projects We've Supported
        </motion.p>
        <div className={styles.logos}>
          {PORTFOLIO.map(({ id, name, url, market, color }, i) => (
            <motion.a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoItem}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <div className={styles.logoPlaceholder} style={{ '--brand-color': color }}>
                <span className={styles.logoInitial}>{name.charAt(0)}</span>
              </div>
              <div className={styles.logoInfo}>
                <span className={styles.logoName}>{name}</span>
                <span className={styles.logoMarket}>{market}</span>
              </div>
              <ExternalLink size={12} className={styles.logoExternal} />
            </motion.a>
          ))}
        </div>
        <p className={styles.note}>
          Replace placeholder logos with actual brand assets — see <code>src/data/siteData.js</code>
        </p>
      </div>
    </section>
  );
}
