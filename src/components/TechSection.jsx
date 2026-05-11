const technologies = [
  { name: "Python", color: "from-yellow-400 to-yellow-500" },
  { name: "APIs REST", color: "from-green-400 to-cyan-400" },
  { name: "Selenium", color: "from-green-500 to-emerald-500" },
  { name: "RPA", color: "from-blue-400 to-blue-500" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Bots Telegram/WhatsApp", color: "from-cyan-400 to-blue-500" },
  { name: "SQL", color: "from-orange-400 to-orange-500" },
  { name: "ETL", color: "from-purple-400 to-purple-500" },
]

export default function TechSection() {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span className="text-xs text-blue-400 font-mono font-medium">STACK TECNOLÓGICO</span>
        </div>
        <h2 className="fade-up fade-up-d1 text-4xl md:text-5xl font-bold text-white mb-6">
          Tecnologias que{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            potencializam a automação
          </span>
        </h2>
        <p className="fade-up fade-up-d2 text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          Utilizamos as ferramentas mais modernas para conectar, automatizar e escalar seus processos com segurança.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <div key={i} className={`fade-up fade-up-d${Math.min(i,7)} group relative`}>
              <div className={`bg-gradient-to-r ${tech.color} p-[1px] rounded-full`}>
                <div className="bg-[#0B0F19] rounded-full px-5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.05] transition-colors">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}