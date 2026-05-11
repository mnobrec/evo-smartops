import { Globe, Link2, BarChart3, Bot, Monitor, Database } from 'lucide-react'

export default function SolutionsSection() {
  const cards = [
    {
      icon: <Globe size={20} className="text-cyan-300/70 group-hover:text-cyan-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-cyan-400/10 to-blue-500/10 group-hover:from-cyan-400/15 group-hover:to-blue-500/15",
      borderHover: "hover:border-cyan-400/20",
      gradient: "from-cyan-400/[0.02]",
      title: "Automação Web",
      description: "Bots inteligentes que extraem dados, preenchem formulários e sincronizam informações entre plataformas web em tempo real.",
      delay: "fade-up-d2"
    },
    {
      icon: <Link2 size={20} className="text-blue-300/70 group-hover:text-blue-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-blue-400/10 to-cyan-400/10 group-hover:from-blue-400/15 group-hover:to-cyan-400/15",
      borderHover: "hover:border-blue-400/20",
      gradient: "from-blue-400/[0.02]",
      title: "Integração de APIs",
      description: "Conecta CRM, ERP, planilhas e sistemas legados. Dados fluem automaticamente com sincronização perfeita, sem intervenção manual.",
      delay: "fade-up-d3"
    },
    {
      icon: <BarChart3 size={20} className="text-violet-300/70 group-hover:text-violet-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-violet-400/10 to-purple-400/10 group-hover:from-violet-400/15 group-hover:to-purple-400/15",
      borderHover: "hover:border-violet-400/20",
      gradient: "from-violet-400/[0.02]",
      title: "Relatórios Inteligentes",
      description: "Consolidados de múltiplas fontes, gerados automaticamente e entregues em formato executivo. Sem esperas ou erros.",
      delay: "fade-up-d4"
    },
    {
      icon: <Bot size={20} className="text-cyan-300/70 group-hover:text-cyan-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-cyan-400/10 to-teal-400/10 group-hover:from-cyan-400/15 group-hover:to-teal-400/15",
      borderHover: "hover:border-cyan-400/20",
      gradient: "from-cyan-400/[0.02]",
      title: "Bots Corporativos",
      description: "Assistentes automáticos que processam pedidos, respondem consultas e executam workflows 24/7 com precisão e escala.",
      delay: "fade-up-d5"
    },
    {
      icon: <Monitor size={20} className="text-blue-300/70 group-hover:text-blue-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-blue-400/10 to-cyan-400/10 group-hover:from-blue-400/15 group-hover:to-cyan-400/15",
      borderHover: "hover:border-blue-400/20",
      gradient: "from-blue-400/[0.02]",
      title: "Automação Desktop",
      description: "RPA que interage com qualquer software legado ou desktop. Inteligência que replica operações humanas com precisão total.",
      delay: "fade-up-d6"
    },
    {
      icon: <Database size={20} className="text-violet-300/70 group-hover:text-violet-300/90 transition-colors" />,
      iconBg: "bg-gradient-to-br from-violet-400/10 to-purple-400/10 group-hover:from-violet-400/15 group-hover:to-purple-400/15",
      borderHover: "hover:border-violet-400/20",
      gradient: "from-violet-400/[0.02]",
      title: "Dados & ETL",
      description: "Pipelines que extraem, transformam e carregam dados. Limpeza, deduplicação e integridade automáticas, sem esforço manual.",
      delay: "fade-up-d7"
    }
  ]

  return (
    <section id="solucoes" className="relative py-24 md:py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/10 bg-cyan-400/[0.05] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-xs text-cyan-400 font-mono font-medium">
              AUTOMAÇÃO INTELIGENTE
            </span>
          </div>

          <h2 className="fade-up fade-up-d1 text-4xl md:text-5xl lg:text-[3rem] font-bold leading-[1.15] text-white tracking-tight max-w-4xl mx-auto">
            Automação inteligente para{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              operações modernas
            </span>
          </h2>

          <p className="fade-up fade-up-d2 mt-6 text-lg text-gray-400/90 leading-relaxed max-w-2xl mx-auto">
            Eliminamos tarefas repetitivas, conectamos sistemas e reduzimos erros. Transformamos processos manuais em fluxos autônomos que escalam com seu negócio.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`fade-up ${card.delay} group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.04] ${card.borderHover} hover:bg-white/[0.03] transition-all duration-400 cursor-default hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.gradient} to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 transition-all duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-[15px] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-400/80 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard visual de fluxos em tempo real */}
        <div className="fade-up mb-20 relative" style={{ animationDelay: '0.6s' }}>
          <div className="relative dash-card rounded-3xl p-8 border border-white/[0.05] hover:border-cyan-400/10 transition-all duration-500 bg-white/[0.01] backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none"></div>
            
            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* Texto e métricas */}
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/[0.04] border border-cyan-400/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/60"></span>
                  <span className="text-xs text-cyan-400 font-mono font-medium">OPERAÇÃO ATIVA</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  Fluxos inteligentes em tempo real
                </h3>
                
                <p className="text-gray-400/80 mb-8 leading-relaxed">
                  Seus processos rodando 24/7 sem intervenção. Cada integração conecta dados, cada automação elimina fricção, cada bot libera sua equipe para o que importa.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                    <p className="text-[11px] text-gray-500 font-mono mb-1">FLUXOS ATIVOS</p>
                    <p className="text-2xl font-bold text-white tracking-tight">847</p>
                    <p className="text-[11px] text-green-400/70 mt-1">+156% vs mês anterior</p>
                  </div>
                  <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                    <p className="text-[11px] text-gray-500 font-mono mb-1">DADOS SINCRONIZADOS</p>
                    <p className="text-2xl font-bold text-white tracking-tight">1.2M</p>
                    <p className="text-[11px] text-green-400/70 mt-1">Integridade: 99.97%</p>
                  </div>
                  <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                    <p className="text-[11px] text-gray-500 font-mono mb-1">ERROS REDUZIDOS</p>
                    <p className="text-2xl font-bold text-white tracking-tight">-89%</p>
                    <p className="text-[11px] text-green-400/70 mt-1">Comparado a processos manuais</p>
                  </div>
                  <div className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                    <p className="text-[11px] text-gray-500 font-mono mb-1">TEMPO ECONOMIZADO</p>
                    <p className="text-2xl font-bold text-white tracking-tight">42k hrs</p>
                    <p className="text-[11px] text-green-400/70 mt-1">Em operações no último ano</p>
                  </div>
                </div>
              </div>

              {/* Gráfico de círculos e conexões */}
              <div className="flex-1 relative h-80 lg:h-96 w-full">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(6,182,212,0.03)" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(59,130,246,0.03)" strokeWidth="1" strokeDasharray="4 6" />
                  <circle cx="200" cy="200" r="36" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.15)" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="26" fill="rgba(6,182,212,0.06)" />
                  <circle cx="200" cy="200" r="16" fill="rgba(6,182,212,0.08)" />
                  <text x="200" y="206" textAnchor="middle" fill="rgba(6,182,212,0.7)" fontSize="12" fontWeight="bold" fontFamily="monospace">AUTO</text>
                  
                  {/* Linhas de conexão animadas */}
                  <line x1="200" y1="200" x2="310" y2="130" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '0s' }} />
                  <line x1="200" y1="200" x2="330" y2="200" stroke="rgba(6,182,212,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '0.3s' }} />
                  <line x1="200" y1="200" x2="310" y2="270" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '0.6s' }} />
                  <line x1="200" y1="200" x2="90" y2="270" stroke="rgba(59,130,246,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '0.9s' }} />
                  <line x1="200" y1="200" x2="70" y2="200" stroke="rgba(6,182,212,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '1.2s' }} />
                  <line x1="200" y1="200" x2="90" y2="130" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" className="conn-line" style={{ animationDelay: '1.5s' }} />
                  
                  {/* Nós externos */}
                  <circle cx="310" cy="130" r="22" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.2)" strokeWidth="1.2" />
                  <text x="310" y="136" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">API 1</text>
                  
                  <circle cx="330" cy="200" r="22" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.2" />
                  <text x="330" y="206" textAnchor="middle" fill="rgba(6,182,212,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">CRM</text>
                  
                  <circle cx="310" cy="270" r="22" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.2" />
                  <text x="310" y="276" textAnchor="middle" fill="rgba(139,92,246,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">DB</text>
                  
                  <circle cx="90" cy="270" r="22" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.2)" strokeWidth="1.2" />
                  <text x="90" y="276" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">ERP</text>
                  
                  <circle cx="70" cy="200" r="22" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.2" />
                  <text x="70" y="206" textAnchor="middle" fill="rgba(6,182,212,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">WEB</text>
                  
                  <circle cx="90" cy="130" r="22" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.2" />
                  <text x="90" y="136" textAnchor="middle" fill="rgba(139,92,246,0.7)" fontSize="10" fontWeight="bold" fontFamily="monospace">BOT</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Frase de impacto */}
        <div className="fade-up max-w-4xl mx-auto" style={{ animationDelay: '0.8s' }}>
          <div className="relative py-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-cyan-400/10 to-transparent"></div>
            <div className="relative flex items-center justify-center">
              <div className="bg-[#0B0F19] px-10 py-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/[0.02] via-transparent to-blue-400/[0.02] rounded-xl pointer-events-none"></div>
                <p className="relative text-center text-xl md:text-2xl font-semibold text-white/90 leading-relaxed tracking-tight">
                  Automação não substitui pessoas.{" "}
                  <span className="text-cyan-300">Elimina desperdício operacional</span>,{" "}
                  liberando equipes para o que gera resultado:{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                    estratégia e crescimento
                  </span>.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-cyan-400/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}