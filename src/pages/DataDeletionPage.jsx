import { useSEO } from '../hooks/useSEO';
import { COMPANY } from '../data/siteData';
import styles from './LegalPage.module.css';

export default function DataDeletionPage() {
  const year = new Date().getFullYear();
  useSEO({ title: 'Data Deletion Instructions | Genisys International Marketing Solutions' });

  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        <h1>Data Deletion Instructions</h1>
        <p className={styles.updated}>Last updated: {year}</p>

        <h2>1. What this page covers</h2>
        <p>Genisys International Marketing Solutions ("Genisys", "we", "us") runs Buzz CRM, an internal tool we use to answer customers who contact the businesses we work with through Facebook, Messenger, Instagram or WhatsApp. This page explains how you can ask us to delete the information we hold about you.</p>

        <h2>2. What information we may hold</h2>
        <p>When you message one of our client pages, we may store your name, your public profile name and ID on that platform, the messages you sent, and any contact or booking details you shared with us, such as your phone number, email address, service address and appointment date.</p>

        <h2>3. How to request deletion</h2>
        <p>Send a request by email to <a href={`mailto:${COMPANY.email}?subject=Data%20deletion%20request`}>{COMPANY.email}</a> with the subject "Data deletion request", or by phone or WhatsApp to <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>.</p>
        <p>Please include the name you used and the page, phone number or email address you contacted us from, so we can find your records.</p>

        <h2>4. What happens next</h2>
        <p>We will confirm that we received your request within 7 days and delete your information from our systems within 30 days. If we must keep a record for a legal or accounting reason, such as an invoice for work already done, we will tell you what we kept and why.</p>

        <h2>5. Removing our access on Facebook</h2>
        <p>You can also remove any app's access to your Facebook account at any time: open Facebook, go to Settings &amp; privacy, then Settings, then Apps and websites, choose the app and select Remove.</p>

        <h2>6. Contact</h2>
        <p>Genisys International Marketing Solutions, {COMPANY.address.street}, {COMPANY.address.postal}, {COMPANY.address.country}. Phone {COMPANY.phone}. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
      </div>
    </div>
  );
}
