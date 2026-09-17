import { useSEO } from '../hooks/useSEO';
import AboutSection from '../sections/AboutSection';
import WhySection from '../sections/WhySection';
import MarketsSection from '../sections/MarketsSection';
import CTASection from '../sections/CTASection';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  useSEO({
    title: 'About Genisys International | Home Service Marketing Agency',
    description: 'Learn about Genisys International Marketing Solutions — a digital marketing and customer acquisition agency operating since 2019, supporting home-service businesses across Canada and the USA.',
  });

  return (
    <>
      <PageHero
        label="About Us"
        title="Marketing Experience Built Around Real Service Businesses."
        subtitle="Operating since 2019, supporting home-service businesses across Canada and the United States."
      />
      <AboutSection />
      <WhySection />
      <MarketsSection />
      <CTASection />
    </>
  );
}
