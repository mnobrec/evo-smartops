import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-[#0B0F19] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
              EVO - SmartOps
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automação inteligente para operações modernas. Eliminamos fricção operacional e liberamos sua equipe para o que importa.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-cyan-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400" />
                contato@evo-smartops.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                Bahia, Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} EVO - SmartOps. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Transformando complexidade em vantagem competitiva.</p>
        </div>
      </div>
    </footer>
  )
}