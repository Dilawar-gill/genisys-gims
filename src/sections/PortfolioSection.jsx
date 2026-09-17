import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import { PORTFOLIO } from '../data/siteData';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection({ preview = false }) {
  const items = preview ? PORTFOLIO : PORTFOLIO;

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
          <span className="section-label">Our Work</span>
          <h2 className={styles.title}>
            Brands & Projects<br />
            <span className="gradient-text">We've Supported</span>
          </h2>
          <p className={styles.subtitle}>
            A selection of home-service businesses we've worked with across Canada and the United States.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {items.map(({ id, name, url, market, industry, services, color }, i) => (
            <motion.div
              key={id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Browser frame placeholder */}
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.browserUrl}>{url.replace('https://', '')}</div>
                </div>
                <div className={styles.browserContent} style={{ '--card-color': color }}>
                  {/* Placeholder visual */}
                  <div className={styles.placeholderLogo}>
                    <span>{name.charAt(0)}</span>
                  </div>
                  <div className={styles.placeholderLines}>
                    <div className={styles.placeholderLine} style={{ width: '60%' }} />
                    <div className={styles.placeholderLine} style={{ width: '80%' }} />
                    <div className={styles.placeholderLine} style={{ width: '45%' }} />
                  </div>
                  <p className={styles.placeholderNote}>
                    Replace with actual screenshot
                  </p>
                </div>
              </div>

              {/* Card info */}
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <div className={styles.brandMark} style={{ background: color }}>
                    {name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.cardName}>{name}</h3>
                    <div className={styles.cardMeta}>
                      <MapPin size={11} />
                      <span>{market}</span>
                      <span className={styles.dot}>·</span>
                      <span>{industry}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.tags}>
                  {services.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitLink}
                >
                  Visit Website
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
