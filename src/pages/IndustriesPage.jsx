import { useSEO } from '../hooks/useSEO';
import IndustriesSection from '../sections/IndustriesSection';
import WorkflowSection from '../sections/WorkflowSection';
import CTASection from '../sections/CTASection';
import PageHero from '../components/PageHero';

export default function IndustriesPage() {
  useSEO({
    title: 'Industries | Genisys International — Air Duct, HVAC & Home Services',
    description: 'Genisys International specializes in marketing for air duct cleaning, HVAC, dryer vent cleaning, furnace services and other home-service businesses across Canada and the USA.',
  });

  return (
    <>
      <PageHero
        label="Industries"
        title="We Know the Home-Service Industry."
        subtitle="Specialized marketing experience for duct cleaning, HVAC and related home-service businesses across Canada and the United States."
      />
      <IndustriesSection />
      <WorkflowSection />
      <CTASection />
    </>
  );
}
