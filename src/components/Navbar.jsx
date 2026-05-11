import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useElementSDK } from '../context/ElementSDKContext'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { config } = useElementSDK()

  const brandName = config.brand_name
  const ctaText = config.cta_primary

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <nav className="glass-nav fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {brandName}
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-sm text-gray-400 hover:text-white transition-colors">Início</a>
            <a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="text-sm text-gray-400 hover:text-white transition-colors">Soluções</a>
            <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="text-sm text-gray-400 hover:text-white transition-colors">Benefícios</a>
            <a href="#tecnologias" onClick={(e) => scrollToSection(e, 'tecnologias')} className="text-sm text-gray-400 hover:text-white transition-colors">Tecnologias</a>
            <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-sm text-gray-400 hover:text-white transition-colors">Contato</a>
          </div>
          <div className="hidden md:block">
            <button className="btn-primary relative z-10 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
              {ctaText}
            </button>
          </div>
          <button className="md:hidden text-gray-300 hover:text-white transition-colors" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu fixed top-0 right-0 w-72 h-full z-50 bg-[#0B0F19]/95 backdrop-blur-xl border-l border-white/5 flex flex-col p-8 pt-20 ${mobileOpen ? 'open' : ''}`}>
        <button className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
          <X size={24} />
        </button>
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">Início</a>
        <a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">Soluções</a>
        <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">Benefícios</a>
        <a href="#tecnologias" onClick={(e) => scrollToSection(e, 'tecnologias')} className="text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">Tecnologias</a>
        <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">Contato</a>
        <button className="btn-primary bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg mt-6 relative z-10">
          {ctaText}
        </button>
      </div>
    </>
  )
}