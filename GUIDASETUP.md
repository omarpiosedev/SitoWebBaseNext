# 🚀 Guida Setup: Personalizza il Template Next.js Boilerplate

Questa guida ti aiuterà a trasformare il template Next.js Boilerplate generico nel tuo progetto personalizzato, seguendo un approccio metodico e progressivo.

## 📋 Panoramica del Template

Il template include:
- ✅ **Next.js 15** con App Router
- ✅ **Tailwind CSS 4** per lo styling
- ✅ **TypeScript** per la type safety
- ✅ **Clerk** per l'autenticazione utenti
- ✅ **Database locale PGlite** (già funzionante)
- ✅ **Internazionalizzazione** (inglese/francese)
- ✅ **Tool di sviluppo** completi (ESLint, Prettier, Testing)

## 🎯 FASE 1: Configurazione Base del Progetto

### 1.1 Personalizza AppConfig.ts

**📁 File:** `src/utils/AppConfig.ts`

```typescript
// PRIMA - Configurazione template:
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};

// DOPO - La tua configurazione:
export const AppConfig = {
  name: 'Il Nome del Tuo Progetto',
  locales: ['it', 'en'], // O le lingue che preferisci
  defaultLocale: 'it', // O la tua lingua principale
  localePrefix,
};
```

**🔧 Azioni richieste:**
- Cambia `name` con il nome del tuo progetto
- Modifica `locales` con le lingue che vuoi supportare
- Imposta `defaultLocale` come lingua principale

### 1.2 Configura Variables d'Ambiente di Sviluppo

**📁 File:** `.env`

```bash
# CAMBIA: Il commento iniziale
# FIXME: Configure environment variables for your project

# MANTIENI: Queste impostazioni per il development (le chiavi test funzionano)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVsYXhlZC10dXJrZXktNjcuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=your_clerk_secret_key

# PERSONALIZZA: Se hai servizi specifici
NEXT_PUBLIC_POSTHOG_KEY=
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/postgres
```

**🔧 Azioni richieste:**
- Aggiorna il commento con il nome del tuo progetto
- Le chiavi Clerk sono funzionali per development - cambiale solo quando vai in produzione

### 1.3 Configura Environment di Produzione

**📁 File:** `.env.production`

```bash
# FIXME: Configure environment variables for production

# CAMBIA: URL del tuo sito
NEXT_PUBLIC_APP_URL=https://il-tuo-sito.com

# AGGIORNA: Configurazioni di monitoraggio
CHECKLY_EMAIL_ADDRESS=tua-email@example.com
CHECKLY_PROJECT_NAME=Il Nome del Tuo Progetto
CHECKLY_LOGICAL_ID=il-tuo-progetto-id
```

**🔧 Azioni richieste:**
- Sostituisci l'URL demo con il tuo dominio futuro
- Aggiorna email e nome progetto per il monitoraggio

### 1.4 Crea File Sicuri per Chiavi Segrete

**📁 File:** `.env.local` (DA CREARE)

```bash
# File .env.local (NON tracciato da Git - per chiavi segrete)

# Quando configurerai Clerk in produzione:
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxx
# CLERK_SECRET_KEY=sk_live_xxxxxxxxx

# Altre chiavi segrete future:
# ARCJET_KEY=ajkey_xxxxxxxxx
# SENTRY_AUTH_TOKEN=xxxxxxxxx
# BETTER_STACK_SOURCE_TOKEN=xxxxxxxxx
```

## 🎨 FASE 2: Personalizzazione Visiva e Branding

### 2.1 Sostituisci Icone e Favicon

**📁 Directory:** `/public/`

**🔧 File da sostituire:**
- `favicon.ico` - Icona principale del browser (32x32px)
- `favicon-16x16.png` - Versione piccola (16x16px)
- `favicon-32x32.png` - Versione media (32x32px)
- `apple-touch-icon.png` - Per dispositivi Apple (180x180px)

**💡 Suggerimenti:**
- Usa il logo del tuo brand o un'icona rappresentativa
- Strumenti: [Favicon.io](https://favicon.io/), [RealFaviconGenerator](https://realfavicongenerator.net/)
- Formati: ICO per favicon.ico, PNG per gli altri

### 2.2 Personalizza Template Base

**📁 File:** `src/templates/BaseTemplate.tsx`

Il template mostra automaticamente `AppConfig.name` nell'header, ma puoi personalizzare:
- Layout dell'header
- Stili del footer
- Struttura generale della pagina

**🔧 Aree personalizzabili:**
- Riga 16-19: Header e descrizione principale
- Riga 39-56: Footer con copyright e links

### 2.3 Configura Traduzioni e Contenuti

**📁 File:** `src/locales/en.json` (e crea altri per le tue lingue)

```json
{
  "RootLayout": {
    "home_link": "Home",
    "about_link": "Chi Siamo", // Personalizza i menu
    "counter_link": "Demo", // Sostituisci con le tue pagine
    "portfolio_link": "Portfolio", // O "Servizi", "Prodotti", etc.
    "sign_in_link": "Accedi",
    "sign_up_link": "Registrati"
  },
  "BaseTemplate": {
    "description": "La descrizione del tuo progetto", // CAMBIA QUESTO
    "made_with": "Made with <author></author>."
  },
  "Index": {
    "meta_title": "Il tuo sito - Titolo SEO", // CAMBIA QUESTO
    "meta_description": "Descrizione SEO del tuo sito" // CAMBIA QUESTO
  }
}
```

**🔧 Se aggiungi l'italiano, crea:** `src/locales/it.json`

## 📄 FASE 3: Contenuti Specifici del Tuo Progetto

### 3.1 Homepage Personalizzata

**📁 File:** `src/app/[locale]/(marketing)/page.tsx`

**🔧 Azioni richieste:**
1. **Leggi il file** per capire la struttura attuale
2. **Sostituisci** i contenuti demo con le informazioni del tuo progetto:
   - Hero section con il tuo messaggio principale
   - Sezioni caratteristiche del tuo business
   - Call-to-action specifiche
3. **Rimuovi/sostituisci** la sezione sponsors con i tuoi partner (se applicabile)

### 3.2 Pagina About Personalizzata

**📁 File:** `src/app/[locale]/(marketing)/about/page.tsx`

**🔧 Sostituisci con:**
- Storia del tuo progetto/azienda
- Missione e valori
- Team e competenze
- Informazioni di contatto

### 3.3 Adatta Sezione Portfolio/Servizi

**📁 Directory:** `src/app/[locale]/(marketing)/portfolio/`

**🔧 Opzioni:**
- **Mantieni come Portfolio:** Se mostri lavori/progetti
- **Trasforma in Servizi:** Per servizi offerti
- **Cambia in Prodotti:** Per e-commerce o catalogo
- **Rinomina:** Cambia nome cartella e routes se necessario

### 3.4 Gestisci la Pagina Counter/Demo

**📁 File:** `src/app/[locale]/(marketing)/counter/page.tsx`

**🔧 Opzioni:**
- **Mantieni:** Come demo funzionalità database
- **Trasforma:** In una funzionalità utile (es. form contatti, prenotazioni)
- **Rimuovi:** Se non serve, elimina riferimenti nel menu

## 🔐 FASE 4: Configurazione Autenticazione (Opzionale)

### 4.1 Setup Clerk per Utenti Registrati

**🔧 Quando configurare Clerk:**
- Se hai bisogno di utenti registrati
- Per funzionalità riservate (dashboard, profili)
- Per sistemi di prenotazione/ordini

**🔧 Procedura:**
1. Vai su [clerk.com](https://clerk.com) e crea account
2. Crea nuova applicazione con il nome del tuo progetto
3. Copia le chiavi in `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxx
CLERK_SECRET_KEY=sk_live_xxxxxxxxx
```

### 4.2 Personalizza Dashboard Utenti

**📁 File:** `src/app/[locale]/(auth)/dashboard/page.tsx`

**🔧 Personalizza in base al tuo progetto:**
- Dashboard clienti
- Pannello amministrazione
- Area riservata con contenuti specifici

## 🗃️ FASE 5: Database e Schema Dati

### 5.1 Analizza Schema Attuale

**📁 File:** `src/models/Schema.ts`

Il template include una tabella `counter` di esempio.

### 5.2 Progetta il Tuo Schema

**🔧 Esempi di tabelle comuni:**

```typescript
// Esempio: Sistema di contatti
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Esempio: Prodotti/servizi
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: numeric('price', { precision: 10, scale: 2 }),
  category: varchar('category', { length: 100 }),
  available: boolean('available').default(true),
});

// Esempio: Prenotazioni
export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  customerEmail: varchar('customer_email', { length: 255 }),
  date: timestamp('booking_date'),
  status: varchar('status', { length: 50 }).default('pending'),
  notes: text('notes'),
});
```

### 5.3 Genera Migrazioni Database

**🔧 Dopo ogni modifica al schema:**

```bash
npm run db:generate
```

Questo crea automaticamente file di migrazione in `/migrations/`.

## 🚀 FASE 6: Testing e Sviluppo

### 6.1 Test del Progetto Locale

**🔧 Comandi essenziali:**

```bash
# Avvia server di sviluppo
npm run dev

# Esplora database
npm run db:studio

# Esegui tutti i test
npm run test

# Test end-to-end
npm run test:e2e

# Verifica linting
npm run lint
```

### 6.2 Verifica Funzionalità Base

**✅ Checklist di test:**
- [ ] Nome progetto appare correttamente
- [ ] Database locale funziona (testa pagina counter/demo)
- [ ] Autenticazione Clerk funziona (se configurata)
- [ ] Navigazione tra pagine OK
- [ ] Traduzioni mostrano contenuto corretto
- [ ] Build di produzione completa: `npm run build`

## 🎨 FASE 7: Personalizzazione Stili e Assets

### 7.1 Personalizza Stili Globali

**📁 File:** `src/styles/global.css`

**🔧 Personalizzazioni comuni:**
- Colori del brand (modifica variabili CSS)
- Font personalizzati
- Stili componenti specifici
- Responsive design per il tuo contenuto

### 7.2 Gestisci Assets e Immagini

**📁 Directory:** `/public/assets/images/`

**🔧 Azioni:**
- Rimuovi immagini demo del template
- Aggiungi immagini del tuo progetto
- Ottimizza per web (formato WebP raccomandato)
- Organizza in sottocartelle logiche

### 7.3 Aggiorna Componenti Demo

**📁 Directory:** `src/components/`

**🔧 File da personalizzare/rimuovere:**
- `Sponsors.tsx` - Sostituisci con i tuoi partner o rimuovi
- `DemoBadge.tsx` - Rimuovi se non serve
- `DemoBanner.tsx` - Rimuovi se non serve
- Altri componenti demo specifici

## 🌐 FASE 8: Preparazione Produzione

### 8.1 Scelta Hosting e Database

**🔧 Opzioni raccomandate:**

**Hosting:**
- **Vercel** - Integrazione Next.js ottimale
- **Netlify** - Alternativa solida
- **Sevalla** - Hosting + database insieme

**Database produzione:**
- **Prisma Postgres** (raccomandato dal template)
- **Planetscale** (con Vercel)
- **Neon** - PostgreSQL serverless

### 8.2 Configurazione Servizi Opzionali

**🔧 Servizi da configurare solo se necessari:**

- **Sentry** - Monitoraggio errori in produzione
- **PostHog** - Analytics comportamento utenti
- **Better Stack** - Logging avanzato
- **Checkly** - Monitoring uptime del sito
- **Arcjet** - Sicurezza e rate limiting

### 8.3 Configurazione CI/CD

Il template include già configurazioni GitHub Actions in `.github/workflows/`.

**🔧 Verifica e personalizza:**
- Nomi dei job e descrizioni
- Variabili d'ambiente nei secrets GitHub
- Branch di deployment (default: `main`)

## ✅ CHECKLIST FINALE PERSONALIZZAZIONE

### 🚨 Essenziali (Da Fare Subito):
- [ ] ✏️ Modificato nome in `AppConfig.ts`
- [ ] 🎨 Sostituito favicon e icone del browser
- [ ] 🌍 Configurato lingue desiderate
- [ ] 📝 Personalizzato contenuto homepage
- [ ] 📄 Aggiornato pagina About con le tue informazioni
- [ ] 🔗 Modificato/rimosso sezione portfolio in base al progetto
- [ ] 🗑️ Rimosso contenuti demo non rilevanti
- [ ] ✅ Testato funzionamento con `npm run dev`

### 🎯 Importanti (Prima del Deploy):
- [ ] 🔐 Configurato Clerk se serve autenticazione
- [ ] 🗃️ Modificato schema database per le tue necessità
- [ ] 📱 Testato responsive design su dispositivi mobili
- [ ] 🌐 Configurato URL produzione in `.env.production`
- [ ] 🧪 Eseguito tutti i test: `npm run test` e `npm run test:e2e`
- [ ] 📦 Verificato build produzione: `npm run build`

### 🔧 Avanzate (Per Ottimizzazione):
- [ ] 🎨 Personalizzato stili e colori brand
- [ ] 📸 Ottimizzato immagini per performance
- [ ] 🌐 Configurato servizi monitoraggio produzione
- [ ] 📊 Configurato analytics
- [ ] 🔒 Implementato misure sicurezza aggiuntive
- [ ] 🚀 Configurato CDN e ottimizzazioni performance

## 🚀 Comandi per Iniziare

```bash
# 1. Installa dipendenze (se non già fatto)
npm install

# 2. Avvia sviluppo locale
npm run dev

# 3. In un altro terminale, esplora database
npm run db:studio

# 4. Quando ready, build per produzione
npm run build
```

## 📚 Risorse Utili

- **Documentazione Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Clerk Auth:** [clerk.com/docs](https://clerk.com/docs)
- **Drizzle ORM:** [orm.drizzle.team](https://orm.drizzle.team)
- **Deployment Guides:** Vedi README.md per guide specifiche piattaforme

## 🆘 Problemi Comuni

### Database non si avvia
```bash
# Verifica che PGlite funzioni
npm run db-server:file
```

### Build fallisce
```bash
# Controlla errori TypeScript
npm run check:types

# Verifica linting
npm run lint
```

### Clerk non funziona
- Verifica chiavi in `.env.local`
- Controlla configurazione dominio su clerk.com

---

**🎯 PROSSIMO PASSO:** Inizia modificando `src/utils/AppConfig.ts`, poi testa con `npm run dev`!

Seguendo questa guida in ordine, trasformerai il template generico nel tuo progetto personalizzato mantenendo tutte le funzionalità avanzate pre-configurate.
