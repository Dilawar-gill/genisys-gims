import { useSEO } from '../hooks/useSEO';
import { COMPANY } from '../data/siteData';
import styles from './LegalPage.module.css';

export default function TermsPage() {
  const year = new Date().getFullYear();
  useSEO({ title: 'Terms & Conditions | Genisys International Marketing Solutions' });

  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <h1>Terms & Conditions</h1>
        <p className={styles.updated}>Last updated: {year}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing the Genisys International Marketing Solutions website, you agree to these Terms & Conditions. If you do not agree, please do not use this website.</p>

        <h2>2. Services</h2>
        <p>Genisys International Marketing Solutions provides digital marketing, lead generation, customer support and related services. Specific terms for any engagement are agreed upon separately in writing.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics and design, is the property of Genisys International Marketing Solutions and may not be reproduced without permission.</p>

        <h2>4. Limitation of Liability</h2>
        <p>Genisys International Marketing Solutions is not liable for any indirect, incidental or consequential damages arising from the use of this website or our services.</p>

        <h2>5. Governing Law</h2>
        <p>These terms are governed by the laws of Pakistan.</p>

        <h2>6. Contact</h2>
        <p>For questions about these Terms, contact us at {COMPANY.address.street}, {COMPANY.address.postal}, {COMPANY.address.country}.</p>
      </div>
    </div>
  );
}
