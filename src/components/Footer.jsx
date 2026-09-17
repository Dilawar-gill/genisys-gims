import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';
import { COMPANY, WHATSAPP_URL } from '../data/siteData';
import genisysLogo from '../assets/images/genisys-logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="Genisys International Marketing Solutions">
              <span className={styles.logoPlate}>
                <img
                  className={styles.logoImg}
                  src={genisysLogo}
                  alt="Genisys International Marketing Solutions"
                  width="2398"
                  height="1792"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </Link>
            <p className={styles.tagline}>
              Helping home-service businesses generate customer inquiries, manage leads and strengthen their digital presence.
            </p>
            <div className={styles.social}>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                <FacebookIcon size={18} />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                <InstagramIcon size={18} />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <LinkedinIcon size={18} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/services">Lead Generation</Link></li>
              <li><Link to="/services">Meta Ads</Link></li>
              <li><Link to="/services">Social Media</Link></li>
              <li><Link to="/services">Customer Support</Link></li>
              <li><Link to="/services">Web Development</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Industries</h4>
            <ul className={styles.colLinks}>
              <li><Link to="/industries">Air Duct Cleaning</Link></li>
              <li><Link to="/industries">HVAC</Link></li>
              <li><Link to="/industries">Dryer Vent Cleaning</Link></li>
              <li><Link to="/industries">Furnace Services</Link></li>
              <li><Link to="/industries">Home Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={14} />
                <span>Karachi, Pakistan</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} />
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Genisys International Marketing Solutions. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
