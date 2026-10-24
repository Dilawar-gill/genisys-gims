import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { COMPANY } from '../data/siteData';
import styles from './LegalPage.module.css';

export default function PrivacyPage() {
  const year = new Date().getFullYear();
  useSEO({ title: 'Privacy Policy | Genisys International Marketing Solutions' });

  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {year}</p>

        <h2>1. Introduction</h2>
        <p>Genisys International Marketing Solutions ("Genisys", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use and protect information when you visit our website or engage with our services.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information you provide directly, such as your name, email address, phone number, company name and any other information you submit through our contact form. We may also collect standard website analytics data.</p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information you provide to respond to your inquiries, discuss potential services and communicate with you about your business needs. We do not sell your personal information to third parties.</p>

        <h2>4. Data Security</h2>
        <p>We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure.</p>

        <h2>5. Facebook, Instagram and WhatsApp</h2>
        <p>When you message a business we work with on Facebook, Messenger, Instagram or WhatsApp, we may receive your name, profile ID, messages and any booking details you share. We use this only to reply to you and arrange the service you asked for, and we do not sell it. You can ask us to delete it at any time by following our <Link to="/data-deletion">data deletion instructions</Link>.</p>

        <h2>6. Contact</h2>
        <p>If you have questions about this Privacy Policy, please contact us at {COMPANY.address.street}, {COMPANY.address.postal}, {COMPANY.address.country} or by phone at {COMPANY.phone}.</p>
      </div>
    </div>
  );
}
