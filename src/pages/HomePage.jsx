import { useSEO } from '../hooks/useSEO';
import HeroSection from '../sections/HeroSection';
import TrustSection from '../sections/TrustSection';
import ServicesSection from '../sections/ServicesSection';
import WorkflowSection from '../sections/WorkflowSection';
import IndustriesSection from '../sections/IndustriesSection';
import PortfolioSection from '../sections/PortfolioSection';
import WhySection from '../sections/WhySection';
import MarketsSection from '../sections/MarketsSection';
import ProcessSection from '../sections/ProcessSection';
import CTASection from '../sections/CTASection';

export default function HomePage() {
  useSEO({
    title: 'Genisys International | Home Service Marketing Agency',
    description: 'Genisys International helps duct cleaning, HVAC and home-service businesses across Canada and the USA with lead generation, Meta Ads, customer support, appointment booking, websites and social media marketing.',
  });

  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection preview />
      <WorkflowSection />
      <IndustriesSection />
      <PortfolioSection preview />
      <WhySection />
      <MarketsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
