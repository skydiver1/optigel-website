import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustIndicatorsSection from '@/components/TrustIndicatorsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PainReliefAreasSection from '@/components/PainReliefAreasSection';
import BenefitsSection from '@/components/BenefitsSection';
import EasyToUseSection from '@/components/EasyToUseSection';
import StorySection from '@/components/StorySection';
import IngredientsSection from '@/components/IngredientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import UpsellSection from '@/components/UpsellSection';
import MoneyBackGuaranteeSection from '@/components/MoneyBackGuaranteeSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyFooter from '@/components/StickyFooter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicatorsSection />
        <HowItWorksSection />
        <PainReliefAreasSection />
        <BenefitsSection />
        <EasyToUseSection />
        <StorySection />
        <IngredientsSection />
        <TestimonialsSection />
        <PricingSection />
        <UpsellSection />
        <MoneyBackGuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}
