import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span className="text-xs text-purple-400 font-mono font-medium">CONTATO</span>
        </div>
        <h2 className="fade-up fade-up-d1 text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            eliminar a fricção operacional?
          </span>
        </h2>
        <p className="fade-up fade-up-d2 text-lg text-gray-400 mb-12">
          Converse com um especialista e descubra como automatizar seus processos em menos tempo do que imagina.
        </p>

        <div className="fade-up fade-up-d3 flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="btn-primary relative z-10 bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-xl transition-all text-sm tracking-wide shadow-lg shadow-blue-500/20">
            Falar com especialista
          </button>
          <button className="group flex items-center justify-center gap-2 border border-white/5 hover:border-cyan-400/30 text-gray-400 hover:text-white font-medium px-8 py-4 rounded-xl transition-all text-sm bg-white/[.02] hover:bg-white/[.05]">
            <Phone size={16} className="text-cyan-400" /> WhatsApp
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left fade-up" style={{ animationDelay: '.6s' }}>
          <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
            <Phone size={16} className="text-cyan-400 mb-2" />
            <p className="text-xs text-gray-400">Telefone</p>
            <p className="text-white text-sm">(71) 99999-9999</p>
          </div>
          <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
            <Mail size={16} className="text-cyan-400 mb-2" />
            <p className="text-xs text-gray-400">Email</p>
            <p className="text-white text-sm">contato@evo-smartops.com.br</p>
          </div>
          <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
            <MapPin size={16} className="text-cyan-400 mb-2" />
            <p className="text-xs text-gray-400">Local</p>
            <p className="text-white text-sm">Bahia, Brasil</p>
          </div>
        </div>
      </div>
    </section>
  )
}