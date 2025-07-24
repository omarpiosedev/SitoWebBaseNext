# Progetto Base per Landing Page - Next.js 15

Un progetto starter minimale per creare landing pages moderne con Next.js, Tailwind CSS e TypeScript.

<p align="center">
  <img
    src="public/assets/images/nextjs-starter-banner.png?raw=true"
    alt="Next.js Landing Page Starter"
    style="max-width: 100%; height: auto;"
  />
</p>

🚀 **Starter template per landing pages** con Next.js 15, Tailwind CSS 4 e TypeScript. Focalizzato sulla semplicità e performance per creare landing pages efficaci e moderne.

## ✨ Caratteristiche Principali

**Core Technologies:**
- ⚡ [Next.js 15](https://nextjs.org) con App Router
- 🔥 [TypeScript](https://www.typescriptlang.org) per type safety
- 💎 [Tailwind CSS 4](https://tailwindcss.com) per styling moderno
- ✅ React 19 in strict mode

**Qualità e Sviluppo:**
- 📏 ESLint con configurazione avanzata per code quality
- 💖 Prettier per code formatting consistente
- 🚓 Commitlint per commit messages standardizzati
- 🧪 Testing setup con Vitest e Playwright (opzionale)
- 📊 Bundle analyzer per ottimizzazione performance

**Features Integrate:**
- 🤖 SEO ottimizzato con metadata e Open Graph
- 🗺️ Sitemap.xml and robots.txt generati automaticamente
- 💨 Performance ottimizzate con Next.js 15
- 📱 Design responsive con Tailwind CSS
- 🎯 Configurazione VSCode inclusa

## 🎯 Ideale Per

- Landing pages aziendali
- Pagine di prodotto
- Portfolio personali
- Pagine di coming soon
- Siti marketing semplici
- Prototipi rapidi

## 🚀 Quick Start

### Requisiti
- Node.js 20+ e npm

### Installazione

```bash
git clone https://github.com/omarpiosedev/SitoWebBaseNext.git my-landing-page
cd my-landing-page
npm install
```

### Sviluppo Locale

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) per vedere il tuo progetto.

### Build di Produzione

```bash
npm run build
npm run start
```

## 📁 Struttura Progetto

```
.
├── README.md                   # Questo file
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout principale
│   │   ├── page.tsx            # Homepage
│   │   ├── robots.ts           # SEO robots
│   │   └── sitemap.ts          # SEO sitemap
│   ├── components/             # Componenti React riutilizzabili
│   ├── styles/                 # Stili globali
│   └── utils/                  # Utility functions
├── public/                     # Assets statici
├── next.config.ts              # Configurazione Next.js
└── tailwind.config.ts          # Configurazione Tailwind
```

## 🎨 Personalizzazione

### File Chiave da Personalizzare:

1. **`src/app/page.tsx`** - La tua homepage
2. **`src/app/layout.tsx`** - Layout e metadata globali
3. **`src/utils/AppConfig.ts`** - Configurazioni del sito
4. **`public/favicon.ico`** - Il tuo favicon
5. **`public/assets/images/`** - Le tue immagini

### Metadata e SEO:

Aggiorna i metadata nel file `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Il Mio Sito - Landing Page',
  description: 'Descrizione della tua landing page',
};
```

## 🛠️ Comandi Disponibili

### Development
```bash
npm run dev          # Avvia development server
npm run build        # Build di produzione
npm run start        # Avvia production server
```

### Code Quality
```bash
npm run lint         # Controllo ESLint
npm run lint:fix     # Fix automatico ESLint
npm run check:types  # Controllo TypeScript
```

### Utilities
```bash
npm run build-stats  # Analisi bundle size
npm run clean        # Pulizia cache e build
```

## 🎯 Ottimizzazioni Performance

Il progetto include:
- **Next.js 15**: App Router ottimizzato
- **React 19**: Performance migliorata
- **Tailwind CSS**: CSS ottimizzato e tree-shaken
- **Bundle Analyzer**: Per monitorare dimensioni bundle
- **SEO**: Sitemap e robots.txt automatici

## 🔧 Configurazioni Avanzate (Opzionali)

Il progetto include configurazioni enterprise opzionali che possono essere abilitate:

- **Security**: Arcjet per bot protection
- **Monitoring**: Sentry per error tracking
- **Analytics**: PostHog per user analytics
- **Testing**: Playwright per E2E testing

Consulta i file di configurazione in `src/libs/` per i dettagli.

## 📚 Risorse Utili

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)

## 🤝 Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue o pull request.

## 📄 Licenza

MIT License - vedi [LICENSE](LICENSE) per dettagli.

---

**Buona creazione della tua landing page! 🚀**

Per supporto o domande, apri una [issue](https://github.com/omarpiosedev/SitoWebBaseNext/issues) nel repository.