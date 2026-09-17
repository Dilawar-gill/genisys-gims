import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from './MarketsSection.module.css';

export default function MarketsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Map visual */}
          <motion.div
            className={styles.mapVisual}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.mapCard}>
              <div className={styles.mapBg} aria-hidden="true">
                {/* Stylized grid representing North America */}
                <svg viewBox="0 0 400 300" className={styles.mapSvg} aria-hidden="true">
                  <defs>
                    <radialGradient id="glow1" cx="40%" cy="35%" r="30%">
                      <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0 }} />
                    </radialGradient>
                    <radialGradient id="glow2" cx="55%" cy="60%" r="25%">
                      <stop offset="0%" style={{ stopColor: 'var(--color-primary-light)', stopOpacity: 0.25 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--color-primary-light)', stopOpacity: 0 }} />
                    </radialGradient>
                  </defs>
                  {/* Grid lines */}
                  {[0,1,2,3,4,5,6,7,8,9].map(i => (
                    <line key={`h${i}`} x1="0" y1={i*33} x2="400" y2={i*33} style={{ stroke: 'rgba(var(--rgb-primary), 0.08)' }} strokeWidth="1"/>
                  ))}
                  {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                    <line key={`v${i}`} x1={i*33} y1="0" x2={i*33} y2="300" style={{ stroke: 'rgba(var(--rgb-primary), 0.08)' }} strokeWidth="1"/>
                  ))}
                  {/* Glow areas */}
                  <ellipse cx="160" cy="105" rx="80" ry="60" fill="url(#glow1)" />
                  <ellipse cx="220" cy="180" rx="70" ry="55" fill="url(#glow2)" />
                  {/* Canada marker */}
                  <circle cx="160" cy="105" r="6" style={{ fill: 'var(--color-primary)' }} opacity="0.9"/>
                  <circle cx="160" cy="105" r="14" style={{ fill: 'var(--color-primary)' }} opacity="0.15"/>
                  <circle cx="160" cy="105" r="22" style={{ fill: 'var(--color-primary)' }} opacity="0.07"/>
                  {/* USA marker */}
                  <circle cx="220" cy="180" r="6" style={{ fill: 'var(--color-primary-light)' }} opacity="0.9"/>
                  <circle cx="220" cy="180" r="14" style={{ fill: 'var(--color-primary-light)' }} opacity="0.15"/>
                  <circle cx="220" cy="180" r="22" style={{ fill: 'var(--color-primary-light)' }} opacity="0.07"/>
                  {/* Connection line */}
                  <line x1="160" y1="105" x2="220" y2="180" style={{ stroke: 'rgba(var(--rgb-primary), 0.3)' }} strokeWidth="1.5" strokeDasharray="4 4"/>
                </svg>
              </div>
              <div className={styles.mapMarkers}>
                <div className={styles.marker} style={{ top: '28%', left: '38%' }}>
                  <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                  <span>Canada</span>
                </div>
                <div className={styles.marker} style={{ top: '55%', left: '52%' }}>
                  <MapPin size={14} style={{ color: 'var(--color-primary-light)' }} />
                  <span>United States</span>
                </div>
              </div>
              <div className={styles.originBadge}>
                <MapPin size={12} />
                <span>Based in Karachi, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label section-label-light">Our Markets</span>
            <h2 className={styles.title}>
              Built in Pakistan.<br />
              <span className="gradient-text gradient-text-bright">Focused on North American Markets.</span>
            </h2>
            <p className={styles.body}>
              From our operations in Karachi, Genisys International supports service businesses targeting customers throughout Canada and the United States.
            </p>
            <p className={styles.body}>
              Our experience with North American home-service companies gives us practical knowledge of localized advertising, homeowner communication, service-area targeting, seasonal promotions and appointment-based businesses.
            </p>
            <div className={styles.markets}>
              <div className={styles.marketItem}>
                <div className={styles.marketFlag} style={{ background: 'linear-gradient(135deg, #FF0000, #CC0000)' }}>🇨🇦</div>
                <div>
                  <div className={styles.marketName}>Canada</div>
                  <div className={styles.marketDesc}>Ontario, BC, Alberta & more</div>
                </div>
              </div>
              <div className={styles.marketItem}>
                <div className={styles.marketFlag} style={{ background: 'linear-gradient(135deg, #002868, #BF0A30)' }}>🇺🇸</div>
                <div>
                  <div className={styles.marketName}>United States</div>
                  <div className={styles.marketDesc}>Nationwide service-area targeting</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
