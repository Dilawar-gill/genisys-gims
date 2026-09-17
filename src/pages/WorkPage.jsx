import { useSEO } from '../hooks/useSEO';
import PortfolioSection from '../sections/PortfolioSection';
import CTASection from '../sections/CTASection';
import PageHero from '../components/PageHero';

export default function WorkPage() {
  useSEO({
    title: 'Our Work | Genisys International Marketing Solutions',
    description: 'A selection of home-service businesses Genisys International has supported across Canada and the United States.',
  });

  return (
    <>
      <PageHero
        label="Our Work"
        title="Brands & Projects We've Supported."
        subtitle="A selection of home-service businesses we've worked with across Canada and the United States."
      />
      <PortfolioSection />
      <CTASection />
    </>
  );
}
