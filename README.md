# SitoWebBaseNext - Template Base per Progetti Next.js 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15+" />
  <img src="https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5+" />
  <img src="https://img.shields.io/badge/Tailwind-4+-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4+" />
  <img src="https://img.shields.io/badge/Ready-Production-green?style=for-the-badge" alt="Production Ready" />
</p>

Un template pulito e moderno per iniziare rapidamente nuovi progetti Next.js con tutte le migliori configurazioni già incluse. Perfetto per sviluppatori che vogliono concentrarsi sulle funzionalità senza perdere tempo nella configurazione iniziale.

## ✨ Caratteristiche Principali

### 🏗️ Framework & Stack Tecnologico
- **Next.js 15+** con App Router e React 19
- **TypeScript** con configurazione strict per type safety
- **Tailwind CSS 4** per styling moderno e responsive
- **DrizzleORM** con database locale PGlite per sviluppo

### 🔐 Autenticazione & Sicurezza
- **Clerk** per autenticazione completa (sign-up, sign-in, MFA, social auth)
- **Arcjet** per protezione bot e sicurezza web application firewall
- **Sentry** per monitoraggio errori in produzione

### 🧪 Testing & Qualità Codice
- **Vitest** per unit testing con browser mode
- **Playwright** per E2E testing multi-browser
- **Storybook** per sviluppo componenti UI
- **ESLint** con configurazione Antfu + regole Next.js, A11Y, Testing

### 🌍 Internazionalizzazione & Accessibilità
- **next-intl** per supporto multi-lingua (en, fr configurate)
- **Crowdin** integration per gestione traduzioni
- Configurazioni accessibility-first con test automatizzati

### 🚀 DevOps & Deployment
- **GitHub Actions** workflows preconfigurati
- **Commitlint** + **Lefthook** per conventional commits
- **Semantic Release** per rilasci automatici
- **Bundle Analyzer** per ottimizzazione performance

### 📊 Monitoraggio & Analytics
- **Sentry** per error monitoring con Spotlight per sviluppo
- **PostHog** per analytics (opzionale)
- **Better Stack** per log management
- **Checkly** per monitoring as code

## 🚀 Quick Start

```bash
# Clona questo template
git clone https://github.com/omarpiosedev/SitoWebBaseNext.git my-project

cd my-project

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) per vedere il progetto. Il database locale è già configurato e pronto all'uso!

## 📁 Struttura Progetto

```
src/
├── app/                    # Next.js App Router
│   └── [locale]/          # Routing internazionalizzato
├── components/            # Componenti React riutilizzabili
├── libs/                  # Configurazioni librerie (Clerk, i18n, env)
├── locales/              # File di traduzione
├── models/               # Schema database (Drizzle ORM)
├── templates/            # Template layout
├── utils/                # Funzioni di utilità
└── validations/          # Schema di validazione Zod

public/                   # Asset statici
tests/                    # Test E2E e integrazione
migrations/               # Migrazioni database
```

## 📖 Guide & Documentazione

### 🎯 Per Sviluppatori
- **[CLAUDE.md](CLAUDE.md)** - Documentazione completa per Claude Code AI
- **[GUIDASETUP.md](GUIDASETUP.md)** - Guida completa personalizzazione progetto

### 🛠️ Configurazione Base
1. **Environment**: Copia `.env` in `.env.local` e configura le variabili
2. **Database**: Il progetto usa PGlite per sviluppo locale (no setup richiesto)
3. **Autenticazione**: Configura Clerk per auth completa
4. **Deploy**: Configura provider cloud per produzione

## 🧑‍💻 Comandi Sviluppo

```bash
# Sviluppo
npm run dev              # Avvia dev server con database locale
npm run dev:spotlight    # Avvia Sentry Spotlight per debug

# Build & Deploy  
npm run build           # Build produzione
npm start               # Avvia server produzione
npm run build-stats     # Analizza bundle size

# Database
npm run db:generate     # Genera migrazioni
npm run db:studio       # Apri Drizzle Studio

# Testing
npm run test            # Unit tests con Vitest
npm run test:e2e        # E2E tests con Playwright
npm run storybook       # UI development

# Code Quality
npm run lint            # ESLint check
npm run lint:fix        # Fix automatico errori
npm run check:types     # TypeScript type checking
npm run check:i18n      # Validazione traduzioni

# Git & Release
npm run commit          # Commit interattivo con Commitizen
```

## 🎨 Personalizzazione

Il progetto è progettato per essere facilmente personalizzabile:

- **Branding**: Modifica `src/utils/AppConfig.ts` per nome, descrizione e configurazioni
- **Styling**: Personalizza theme in `src/templates/BaseTemplate.tsx`
- **Database**: Aggiorna schema in `src/models/Schema.ts`
- **Componenti**: Aggiungi componenti in `src/components/`

Consulta **[GUIDASETUP.md](GUIDASETUP.md)** per una guida completa in 8 fasi.

## 🔧 Stack Tecnologico Completo

<details>
<summary><b>Clicca per vedere la lista completa</b></summary>

### Core Framework
- Next.js 15+ con App Router
- React 19 con Strict Mode
- TypeScript 5+ con configurazione strict

### Styling & UI
- Tailwind CSS 4 con PostCSS
- Headless UI components ready
- Responsive design mobile-first

### Database & Backend
- DrizzleORM (PostgreSQL/SQLite/MySQL compatible)
- PGlite per sviluppo locale
- Type-safe database operations

### Authentication & Security
- Clerk (auth completa + social providers)
- Arcjet (bot protection + WAF)
- T3 Env per validazione environment variables

### Testing
- Vitest con browser mode
- Playwright multi-browser E2E
- Storybook per UI components
- Testing Library per component testing

### Code Quality & Linting
- ESLint con Antfu config
- Prettier per code formatting
- Lefthook per git hooks
- Commitlint per conventional commits

### Monitoring & Analytics
- Sentry per error monitoring
- Spotlight per local development
- PostHog per analytics
- Better Stack per logs

### Deployment & CI/CD
- GitHub Actions workflows
- Semantic Release
- Dependabot per aggiornamenti
- Bundle analyzer

### Development Tools
- VSCode configuration ottimizzata
- Drizzle Studio per database
- Hot reload e fast refresh
- Source maps per debugging

</details>

## 🤝 Contributi

Questo è un template base pensato per essere forkato e personalizzato. Sentiti libero di:
- Forkare per i tuoi progetti
- Suggerire miglioramenti
- Segnalare bug o problemi
- Condividere le tue personalizzazioni

## 📄 Licenza

MIT License - vedi [LICENSE](LICENSE) per dettagli.

## 🙏 Riconoscimenti

Questo template è basato su [Next.js Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) di [Ixartz](https://github.com/ixartz) - un eccellente punto di partenza che abbiamo pulito e personalizzato per creare una base generica e riutilizzabile.

---

<p align="center">
  <b>Inizia subito il tuo prossimo progetto Next.js! 🚀</b>
</p>

<p align="center">
  Creato con ❤️ per la community italiana degli sviluppatori
</p>