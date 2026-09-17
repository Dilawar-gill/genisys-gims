import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, MessageSquare, TrendingUp, MapPin, Bell } from 'lucide-react';
import styles from './HeroDashboard.module.css';

const float = (delay = 0, y = 8) => ({
  animate: {
    y: [0, -y, 0],
    transition: { duration: 3.5 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay },
  },
});

export default function HeroDashboard() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Main dashboard card */}
      <motion.div
        className={styles.mainCard}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div className={styles.cardHeader}>
          <div className={styles.cardDots}>
            <span /><span /><span />
          </div>
          <span className={styles.cardTitle}>Campaign Overview</span>
          <span className={styles.cardBadge}>Live</span>
        </div>

        {/* Stats row */}
        <div className={styles.statsRow}>
          {[
            { label: 'Leads Today', value: '24', trend: '+18%', color: 'var(--color-primary)' },
            { label: 'Appointments', value: '9', trend: '+12%', color: 'var(--color-primary-light)' },
            { label: 'Inquiries', value: '37', trend: '+22%', color: 'var(--color-secondary-light)' },
          ].map(({ label, value, trend, color }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue} style={{ color }}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
              <span className={styles.statTrend}>{trend}</span>
            </div>
          ))}
        </div>

        {/* Chart bars */}
        <div className={styles.chart}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <motion.div
              key={i}
              className={styles.bar}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
              style={{ height: `${h}%`, background: i === 10 ? 'var(--color-primary-light)' : 'rgba(var(--rgb-primary), 0.5)' }}
            />
          ))}
        </div>

        {/* Market tags */}
        <div className={styles.markets}>
          <span className={styles.marketTag}><MapPin size={11} /> Canada</span>
          <span className={styles.marketTag}><MapPin size={11} /> United States</span>
        </div>
      </motion.div>

      {/* Floating card: New Lead */}
      <motion.div
        className={`${styles.floatCard} ${styles.cardLead}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        {...float(0)}
      >
        <div className={styles.floatIcon} style={{ background: 'rgba(var(--rgb-primary), 0.15)', color: 'var(--color-primary)' }}>
          <Bell size={14} />
        </div>
        <div>
          <div className={styles.floatTitle}>New Lead</div>
          <div className={styles.floatSub}>Air Duct Cleaning · Toronto</div>
        </div>
        <span className={styles.floatDot} style={{ background: 'var(--color-primary)' }} />
      </motion.div>

      {/* Floating card: Appointment */}
      <motion.div
        className={`${styles.floatCard} ${styles.cardAppt}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        {...float(0.8)}
      >
        <div className={styles.floatIcon} style={{ background: 'rgba(var(--rgb-primary-light), 0.15)', color: 'var(--color-primary-light)' }}>
          <Calendar size={14} />
        </div>
        <div>
          <div className={styles.floatTitle}>Appointment Booked</div>
          <div className={styles.floatSub}>HVAC Service · Chicago</div>
        </div>
        <CheckCircle2 size={16} style={{ color: 'var(--color-secondary-light)', flexShrink: 0 }} />
      </motion.div>

      {/* Floating card: Message */}
      <motion.div
        className={`${styles.floatCard} ${styles.cardMsg}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        {...float(1.4, 6)}
      >
        <div className={styles.floatIcon} style={{ background: 'rgba(var(--rgb-secondary), 0.15)', color: 'var(--color-secondary-light)' }}>
          <MessageSquare size={14} />
        </div>
        <div>
          <div className={styles.floatTitle}>Lead Qualified</div>
          <div className={styles.floatSub}>Dryer Vent · Vancouver</div>
        </div>
      </motion.div>

      {/* Floating card: Performance */}
      <motion.div
        className={`${styles.floatCard} ${styles.cardPerf}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        {...float(0.4, 5)}
      >
        {/* Gold — the single restrained premium accent on this screen */}
        <div className={styles.floatIcon} style={{ background: 'rgba(var(--rgb-gold), 0.18)', color: 'var(--color-gold-light)' }}>
          <TrendingUp size={14} />
        </div>
        <div>
          <div className={styles.floatTitle}>Campaign Active</div>
          <div className={styles.floatSub}>Meta Ads · Running</div>
        </div>
      </motion.div>
    </div>
  );
}
