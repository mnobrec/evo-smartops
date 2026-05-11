import { X, MessageCircle, Mail, Camera } from 'lucide-react'
import { useElementSDK } from '../context/ElementSDKContext'
import { getWhatsAppLink } from '../utils/whatsapp'

export default function ContactModal({ isOpen, onClose }) {
  const { config } = useElementSDK()

  if (!isOpen) return null

  const whatsappLink = getWhatsAppLink(
    config.whatsapp_number || '5571986014066',
    config.whatsapp_message || 'Olá! Gostaria de saber mais sobre a EVO - SmartOps.'
  )

  const email = config.email || 'contato@evo-smartops.com.br'
  const emailSubject = encodeURIComponent('Contato via site EVO')
  const emailBody = encodeURIComponent('Olá, gostaria de informações sobre automação de processos.')
  const mailtoLink = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>

      <div className="relative bg-[#111827] rounded-2xl p-6 w-full max-w-md shadow-2xl animate-fadeInModal glow-neon-blue">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1px]">
            <div className="w-full h-full rounded-2xl bg-[#0B0F19] flex items-center justify-center">
              <MessageCircle size={24} className="text-cyan-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">Fale com um especialista</h3>
          <p className="text-sm text-gray-400 mt-1">Escolha o canal de sua preferência</p>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-green-400/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <MessageCircle size={18} className="text-green-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-medium text-sm">WhatsApp</p>
              <p className="text-gray-400 text-xs">Resposta rápida, atendimento humano</p>
            </div>
            <span className="text-green-400 text-lg">→</span>
          </a>

          <a
            href={mailtoLink}
            onClick={onClose}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Mail size={18} className="text-cyan-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-medium text-sm">E‑mail</p>
              <p className="text-gray-400 text-xs">{email}</p>
            </div>
            <span className="text-cyan-400 text-lg">→</span>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] opacity-60 cursor-not-allowed transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Camera size={18} className="text-purple-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-medium text-sm">Instagram</p>
              <span className="inline-block text-[10px] bg-purple-400/10 text-purple-300 px-2 py-0.5 rounded-full mt-1">
                Em breve
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}