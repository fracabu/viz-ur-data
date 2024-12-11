import HeroSection from '@/components/sections/hero';
import CategoriesSection from '@/components/sections/categories';
import PricingSection from '@/components/sections/pricing';
import TestimonialsSection from '@/components/sections/testimonials';
import AboutSection from '@/components/sections/about'; // Nuova sezione

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection /> {/* Sezione About */}
      <CategoriesSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
