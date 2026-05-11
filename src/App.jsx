import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemsSection from './components/ProblemsSection'
import SolutionsSection from './components/SolutionsSection'
import BenefitsSection from './components/BenefitsSection'
import TechSection from './components/TechSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full h-full overflow-auto grid-bg relative">
      <Navbar />
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <BenefitsSection />
      <TechSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App