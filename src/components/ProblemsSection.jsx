import { FileSpreadsheet, Copy, Unplug, Hourglass, RotateCw, Users } from 'lucide-react'

export default function ProblemsSection() {
  const cards = [
    {
      icon: <FileSpreadsheet size={20} className="text-red-300/70 group-hover:text-red-300/90 transition-colors" />,
      iconBg: "bg-red-500/[0.06] group-hover:bg-red-500/[0.08]",
      borderHover: "hover:border-red-500/20",
      gradient: "from-red-500/[0.02]",
      title: "Relatórios manuais",
      description: "Horas consolidadas em planilhas. Dados copiados entre sistemas. Insights que deveriam ser instantâneos viram espera.",
      stat: "~20h/semana perdidas por analista",
      statColor: "text-red-300/60",
      delay: "fade-up-d2"
    },
    {
      icon: <Copy size={20} className="text-orange-300/70 group-hover:text-orange-300/90 transition-colors" />,
      iconBg: "bg-orange-500/[0.06] group-hover:bg-orange-500/[0.08]",
      borderHover: "hover:border-orange-500/20",
      gradient: "from-orange-500/[0.02]",
      title: "Digitação e retrabalho",
      description: "Transferência manual entre plataformas. Duplicação de registros. Erros que se acumulam e viram retrabalho constante.",
      stat: "+40% de erros em processos manuais",
      statColor: "text-orange-300/60",
      delay: "fade-up-d3"
    },
    {
      icon: <Unplug size={20} className="text-amber-300/70 group-hover:text-amber-300/90 transition-colors" />,
      iconBg: "bg-amber-500/[0.06] group-hover:bg-amber-500/[0.08]",
      borderHover: "hover:border-amber-500/20",
      gradient: "from-amber-500/[0.02]",
      title: "Sistemas desconectados",
      description: "Ferramentas que não se integram. Dados fragmentados. Falta de visibilidade unificada e sincronia manual.",
      stat: "Informações inconsistentes entre setores",
      statColor: "text-amber-300/60",
      delay: "fade-up-d4"
    },
    {
      icon: <Hourglass size={20} className="text-yellow-300/70 group-hover:text-yellow-300/90 transition-colors" />,
      iconBg: "bg-yellow-500/[0.06] group-hover:bg-yellow-500/[0.08]",
      borderHover: "hover:border-yellow-500/20",
      gradient: "from-yellow-500/[0.02]",
      title: "Ciclos operacionais lentos",
      description: "Fluxos de aprovação travados. Etapas que levam dias. Gargalos que impactam prazos e capacidade de entrega.",
      stat: "Ciclo operacional até 300% mais longo",
      statColor: "text-yellow-300/60",
      delay: "fade-up-d5"
    },
    {
      icon: <RotateCw size={20} className="text-lime-300/70 group-hover:text-lime-300/90 transition-colors" />,
      iconBg: "bg-lime-500/[0.06] group-hover:bg-lime-500/[0.08]",
      borderHover: "hover:border-lime-500/20",
      gradient: "from-lime-500/[0.02]",
      title: "Retrabalho constante",
      description: "Correções manuais, reprocessamento de dados e tarefas refeitas que não agregam valor estratégico ao negócio.",
      stat: "35% do tempo operacional é retrabalho",
      statColor: "text-lime-300/60",
      delay: "fade-up-d6"
    },
    {
      icon: <Users size={20} className="text-emerald-300/70 group-hover:text-emerald-300/90 transition-colors" />,
      iconBg: "bg-emerald-500/[0.06] group-hover:bg-emerald-500/[0.08]",
      borderHover: "hover:border-emerald-500/20",
      gradient: "from-emerald-500/[0.02]",
      title: "Equipes sobrecarregadas",
      description: "Times presos em tarefas mecânicas. Sem tempo para análise, inovação ou planejamento. Talento subutilizado.",
      stat: "Custo: burnout e rotatividade",
      statColor: "text-emerald-300/60",
      delay: "fade-up-d7"
    }
  ]

  return (
    <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/10 bg-red-500/[0.03] mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400/60"></span>
            <span className="text-xs text-red-300/80 font-medium tracking-wide font-mono">
              GARGALOS OPERACIONAIS
            </span>
          </div>

          <h2 className="fade-up fade-up-d1 text-4xl md:text-5xl lg:text-[3rem] font-bold leading-[1.15] text-white tracking-tight max-w-4xl mx-auto">
            Processos manuais{" "}
            <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
              drenam eficiência
            </span>{" "}
            e limitam escala.
          </h2>

          <p className="fade-up fade-up-d2 mt-6 text-lg text-gray-400/90 leading-relaxed max-w-2xl mx-auto">
            Tarefas repetitivas, sistemas desconectados e retrabalho consomem recursos que deveriam estar focados em estratégia e crescimento.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`fade-up ${card.delay} group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.04] ${card.borderHover} hover:bg-white/[0.03] transition-all duration-400 cursor-default hover:-translate-y-1`}
            >
              {/* Gradiente hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.gradient} to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400`}></div>
              
              <div className="relative z-10">
                {/* Ícone */}
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 transition-all duration-300`}>
                  {card.icon}
                </div>
                
                <h3 className="text-white font-semibold mb-2 text-[15px] tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-400/80 text-sm leading-relaxed">
                  {card.description}
                </p>
                
                <div className="mt-5 pt-4 border-t border-white/[0.03]">
                  <p className={`text-[11px] ${card.statColor} font-mono tracking-wide`}>
                    {card.stat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase de impacto */}
        <div className="fade-up max-w-4xl mx-auto" style={{ animationDelay: '0.8s' }}>
          <div className="relative py-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-red-400/10 to-transparent"></div>
            <div className="relative flex items-center justify-center">
              <div className="bg-[#0B0F19] px-10 py-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.02] via-transparent to-amber-500/[0.02] rounded-xl pointer-events-none"></div>
                <p className="relative text-center text-xl md:text-2xl font-semibold text-white/90 leading-relaxed tracking-tight">
                  Ineficiência operacional{" "}
                  <span className="text-red-300/80">não é apenas custo</span>.{" "}
                  É{" "}
                  <span className="text-red-200/90">limitação de crescimento</span>,{" "}
                  <span className="text-amber-300/80">risco competitivo</span>{" "}
                  e recurso drenado do que realmente importa:{" "}
                  <span className="bg-gradient-to-r from-red-300 to-amber-300 bg-clip-text text-transparent font-bold">
                    estratégia e execução
                  </span>.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-red-400/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}