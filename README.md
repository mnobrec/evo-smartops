# EVO - SmartOps

Transformamos complexidade operacional em vantagem competitiva.

Landing page institucional da **EVO - SmartOps**, especializada em automação inteligente de processos, integração de sistemas e bots corporativos.

Acesse o site: [https://github.com/mnobrec/evo-smartops/](https://mnobrec.github.io/evo-smartops/)

---

## Tecnologias

- React 19 com Vite
- Tailwind CSS 4 (plugin `@tailwindcss/vite`)
- Lucide React (biblioteca de ícones)
- GitHub Actions para deploy automático no GitHub Pages

---

## Funcionalidades

- Design escuro com efeitos de vidro, gradientes e animações CSS
- Navegação suave entre seções (scroll behavior)
- Seções institucionais: Início, Soluções, Benefícios, Tecnologias, Contato
- Dashboard mockup com animações SVG integradas
- Responsivo (mobile-first)
- Meta tags para SEO e Open Graph
- Favicon personalizado

---

## Estrutura de diretórios

```
evo-smartops/
├── .github/workflows/   # Deploy automático
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Componentes das seções
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemsSection.jsx
│   │   ├── SolutionsSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── TechSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── context/          # Gerenciamento de estado
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Executar localmente

```bash
git clone https://github.com/mnobrec/evo-smartops.git
cd evo-smartops
npm install
npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173`.

---

## Build de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados no diretório `dist/`, prontos para deploy em qualquer servidor estático.

---

## Deploy no GitHub Pages

O deploy é realizado automaticamente via GitHub Actions.  
Basta enviar as alterações para a branch `main` e a Action publicará o conteúdo em `gh-pages`.

> Ajuste a propriedade `base` no arquivo `vite.config.js` para o nome correto do repositório.

---

## Licença

Todos os direitos reservados. Projeto de uso exclusivo da **EVO - SmartOps**.
```