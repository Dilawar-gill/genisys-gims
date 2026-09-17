import { useSEO } from '../hooks/useSEO';
import ServicesSection from '../sections/ServicesSection';
import WorkflowSection from '../sections/WorkflowSection';
import ProcessSection from '../sections/ProcessSection';
import CTASection from '../sections/CTASection';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  useSEO({
    title: 'Services | Genisys International Marketing Solutions',
    description: 'Meta Ads, lead generation, social media management, customer support, appointment booking, website development and marketing strategy for home-service businesses.',
  });

  return (
    <>
      <PageHero
        label="Our Services"
        title="Marketing Services Built for Home-Service Businesses."
        subtitle="From advertising and lead generation to customer support and appointment booking — we handle the complete customer acquisition process."
      />
      <ServicesSection />
      <WorkflowSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
