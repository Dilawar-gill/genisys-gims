import { useSEO } from '../hooks/useSEO';
import ContactSection from '../sections/ContactSection';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  useSEO({
    title: 'Contact | Genisys International Marketing Solutions',
    description: 'Get in touch with Genisys International to discuss marketing services for your home-service business.',
  });

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Discuss Your Business."
        subtitle="Tell us about your business and what you're looking to achieve. We'll get back to you promptly."
        dark
      />
      <ContactSection />
    </>
  );
}
