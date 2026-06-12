import Navigation    from '@/components/Navigation'
import HeroSection   from '@/components/HeroSection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import LoginSection  from '@/components/LoginSection'
import FAQSection    from '@/components/FAQSection'
import CTASection    from '@/components/CTASection'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <LoginSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
