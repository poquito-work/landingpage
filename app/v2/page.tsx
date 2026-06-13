import Navigation      from './components/Navigation'
import HeroSection     from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection  from './components/PricingSection'
import LoginSection    from './components/LoginSection'
import FAQSection      from './components/FAQSection'
import CTASection      from './components/CTASection'
import Footer          from './components/Footer'

export default function V2Home() {
  return (
    <main style={{ background: '#143322', overflowX: 'hidden' }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <LoginSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
