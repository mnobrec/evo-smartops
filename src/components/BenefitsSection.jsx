import { TrendingUp, ShieldCheck, Clock, Users2 } from 'lucide-react'

const benefits = [
  {
    icon: <TrendingUp size={24} className="text-green-400" />,
    title: "Eficiência operacional",
    desc: "Processos até 10x mais rápidos, com execução 24/7 e zero erros manuais."
  },
  {
    icon: <ShieldCheck size={24} className="text-blue-400" />,
    title: "Confiabilidade",
    desc: "Automações com 99.9% de uptime e integridade de dados garantida."
  },
  {
    icon: <Clock size={24} className="text-cyan-400" />,
    title: "Time-to-Value reduzido",
    desc: "Projetos entregues em semanas, não meses. Resultados visíveis no primeiro mês."
  },
  {
    icon: <Users2 size={24} className="text-purple-400" />,
    title: "Equipes liberadas",
    desc: "Seu time foca em estratégia, enquanto bots cuidam do operacional repetitivo."
  }
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative py-24 md:py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/20 bg-green-400/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            <span className="text-xs text-green-400 font-mono font-medium">BENEFÍCIOS</span>
          </div>
          <h2 className="fade-up fade-up-d1 text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              transformam operações
            </span>
          </h2>
          <p className="fade-up fade-up-d2 text-lg text-gray-400 max-w-2xl mx-auto">
            Mais do que automação: entregamos eficiência, redução de custos e escalabilidade para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className={`fade-up fade-up-d${i+2} group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.04] hover:border-green-400/20 hover:bg-white/[0.03] transition-all duration-400`}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}