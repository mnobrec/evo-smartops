import { MessageCircle, Check, Bot, FileText, Zap } from 'lucide-react'
import { useElementSDK } from '../context/ElementSDKContext'

export default function Hero() {
  const { config } = useElementSDK()

  const headline = config.headline
  const subheadline = config.subheadline
  const ctaPrimary = config.cta_primary
  const ctaSecondary = config.cta_secondary

  // Divide o headline para destacar as últimas duas palavras
  const words = headline.split(' ')
  const lastTwo = words.slice(-2).join(' ')
  const rest = words.slice(0, -2).join(' ')

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
        
        {/* LADO ESQUERDO: TEXTO */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="fade-up fade-up-d1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-g"></span>
            <span className="text-xs text-cyan-400 font-medium tracking-wide font-mono">
              AUTOMAÇÃO OPERACIONAL
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-d2 text-4xl md:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] text-white text-glow tracking-tight">
            {rest}{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {lastTwo}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="fade-up fade-up-d3 mt-5 text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
            {subheadline}
          </p>

          {/* Botões */}
          <div className="fade-up fade-up-d4 mt-8 flex flex-col sm:flex-row gap-3">
            <button className="btn-primary relative z-10 bg-blue-500 hover:bg-blue-600 text-white font-medium px-7 py-3 rounded-xl transition-all text-sm tracking-wide shadow-lg shadow-blue-500/20">
              {ctaPrimary}
            </button>
            <button className="group flex items-center justify-center gap-2 border border-white/5 hover:border-cyan-400/30 text-gray-400 hover:text-white font-medium px-7 py-3 rounded-xl transition-all text-sm bg-white/[.02] hover:bg-white/[.05] backdrop-blur-sm">
              <MessageCircle size={16} className="text-cyan-400 group-hover:text-cyan-400 transition-colors" />
              {ctaSecondary}
            </button>
          </div>

          {/* Checks */}
          <div className="fade-up mt-8 flex items-center gap-5 text-xs text-gray-400" style={{ animationDelay: '.7s' }}>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-cyan-400" /> Sem mensalidade
            </span>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-cyan-400" /> Entrega rápida
            </span>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-cyan-400" /> Suporte dedicado
            </span>
          </div>
        </div>

        {/* LADO DIREITO: DASHBOARD MOCKUP */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl fade-up fade-up-d3 relative">
          {/* Linhas de conexão decorativas (SVG de fundo) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 420" fill="none">
            <line x1="130" y1="100" x2="300" y2="160" className="conn-line" stroke="rgba(6,182,212,.25)" strokeWidth="1.5" />
            <line x1="300" y1="200" x2="420" y2="280" className="conn-line" stroke="rgba(59,130,246,.2)" strokeWidth="1.5" style={{ animationDelay: '1s' }} />
            <line x1="140" y1="260" x2="280" y2="320" className="conn-line" stroke="rgba(139,92,246,.2)" strokeWidth="1.5" style={{ animationDelay: '2s' }} />
            <circle cx="130" cy="100" r="3" fill="#06B6D4" className="pulse-g" />
            <circle cx="300" cy="160" r="3" fill="#3B82F6" className="pulse-g" style={{ animationDelay: '.5s' }} />
            <circle cx="420" cy="280" r="3" fill="#8B5CF6" className="pulse-g" style={{ animationDelay: '1s' }} />
            <circle cx="140" cy="260" r="3" fill="#06B6D4" className="pulse-g" style={{ animationDelay: '1.5s' }} />
          </svg>

          <div className="relative z-10">
            {/* Card principal do dashboard */}
            <div className="dash-card rounded-2xl p-5 glow-cyan float">
              {/* Cabeçalho do card */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider">DASHBOARD · LIVE</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 font-mono">LAT 12ms</span>
                  <span className="w-2 h-2 rounded-full bg-green-400 pulse-g"></span>
                </div>
              </div>

              {/* Gráfico de barras + linha */}
              <div className="relative h-24 mb-4">
                {/* Barras de fundo */}
                <div className="flex items-end gap-2 h-full absolute inset-0 z-0">
                  <div className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/5 rounded-t-md" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-cyan-400/40 to-cyan-400/5 rounded-t-md" style={{ height: '65%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/5 rounded-t-md" style={{ height: '50%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-purple-500/40 to-purple-500/5 rounded-t-md" style={{ height: '85%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-cyan-400/40 to-cyan-400/5 rounded-t-md" style={{ height: '70%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-blue-500/40 to-blue-500/5 rounded-t-md" style={{ height: '55%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-cyan-400/40 to-cyan-400/5 rounded-t-md" style={{ height: '92%' }}></div>
                  <div className="flex-1 bg-gradient-to-t from-purple-500/40 to-purple-500/5 rounded-t-md" style={{ height: '60%' }}></div>
                </div>
                {/* Linha animada do gráfico */}
                <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 240 96" preserveAspectRatio="none">
                  <path d="M0,60 L30,40 L60,55 L90,18 L120,30 L150,12 L180,25 L210,8 L240,35" fill="none" stroke="rgba(6,182,212,.5)" strokeWidth="2" strokeLinecap="round" strokeDasharray="120 120" strokeDashoffset="120" style={{ animation: 'dash 2s linear forwards' }} />
                </svg>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span>
              </div>

              {/* Métricas */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-white/[.02] rounded-lg p-3 border border-white/5 hover:bg-white/[.04] transition-colors">
                  <p className="text-[10px] text-gray-500 font-mono">PROCESSOS</p>
                  <p className="text-lg font-bold text-white mt-1">2.847</p>
                  <p className="text-[10px] text-green-400">+23%</p>
                </div>
                <div className="bg-white/[.02] rounded-lg p-3 border border-white/5 hover:bg-white/[.04] transition-colors">
                  <p className="text-[10px] text-gray-500 font-mono">ECONOMIA</p>
                  <p className="text-lg font-bold text-cyan-400 mt-1">R$48k</p>
                  <p className="text-[10px] text-green-400">+31%</p>
                </div>
                <div className="bg-white/[.02] rounded-lg p-3 border border-white/5 hover:bg-white/[.04] transition-colors">
                  <p className="text-[10px] text-gray-500 font-mono">UPTIME</p>
                  <p className="text-lg font-bold text-purple-400 mt-1">99.9%</p>
                  <p className="text-[10px] text-green-400">estável</p>
                </div>
              </div>
            </div>

            {/* Cards flutuantes ao redor */}
            <div className="absolute -top-3 -right-3 dash-card rounded-xl p-3 float-slow" style={{ animationDelay: '.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Bot size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Bot ativo</p>
                  <p className="text-xs font-semibold text-white">Processando</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-3 dash-card rounded-xl p-3 float-slow" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                  <FileText size={14} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Relatório</p>
                  <p className="text-xs font-semibold text-white">Gerado ✓</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-5 dash-card rounded-xl p-3 float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Zap size={14} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">API</p>
                  <p className="text-xs font-semibold text-white">Sincronizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}