# 🚀 Claude Code Project Guide: Next.js Boilerplate

## 📋 Project Overview

This is a production-ready Next.js 15+ project built on the **[Next.js Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)** template, featuring modern web development best practices and comprehensive tooling.

### 🔧 Core Technologies
- **Framework**: Next.js 15.4+ with App Router
- **Language**: TypeScript 5.8+ (strict mode)
- **Styling**: Tailwind CSS 4.1+
- **Database**: DrizzleORM with PGlite (dev) / PostgreSQL (prod)
- **Authentication**: Clerk
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Linting**: ESLint (Antfu config) + Prettier
- **Monitoring**: Sentry + Arcjet Security

### 🎯 Project Philosophy
- **Developer Experience First**: Comprehensive tooling and automation
- **Type Safety**: Strict TypeScript configuration with advanced checks
- **Clean Code**: Consistent patterns and conventions
- **Performance**: Optimized builds and runtime performance
- **Security**: Built-in security measures and monitoring

---

## 🏗️ Project Architecture

### Directory Structure
```
├── .github/                 # GitHub Actions workflows
├── .storybook/             # Storybook configuration
├── .vscode/                # VS Code settings
├── migrations/             # Database migrations
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── [locale]/       # Internationalized routes
│   │   │   ├── (auth)/     # Protected routes group
│   │   │   └── (marketing)/ # Public routes group
│   │   ├── global-error.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/         # Reusable React components
│   │   └── analytics/      # Analytics components
│   ├── libs/               # Third-party configurations
│   ├── locales/            # i18n translations
│   ├── models/             # Database schemas (Drizzle)
│   ├── styles/             # Global styles
│   ├── templates/          # Page templates
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── validations/        # Zod validation schemas
├── tests/
│   ├── e2e/                # Playwright E2E tests
│   └── integration/        # Integration tests
└── [config files]         # Various configuration files
```

### Route Organization

#### App Router Groups
- **`(auth)`**: Protected routes requiring authentication
  - `/dashboard` - User dashboard
  - `/user-profile` - Profile management
  - `/sign-in`, `/sign-up` - Authentication pages

- **`(marketing)`**: Public-facing routes
  - `/` - Homepage
  - `/about` - About page
  - `/portfolio` - Portfolio/services
  - `/api/counter` - API routes

#### Key Files
- **`layout.tsx`**: Root layout with providers
- **`middleware.ts`**: Route protection and i18n
- **`instrumentation.ts`**: Sentry and monitoring setup

---

## 📦 Development Stack

### Environment Management
```typescript
// src/libs/Env.ts - Type-safe environment variables
export const Env = createEnv({
  server: {
    ARCJET_KEY: z.string().optional(),
    CLERK_SECRET_KEY: z.string().min(1),
    DATABASE_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  }
});
```

### Database Schema (DrizzleORM)
```typescript
// src/models/Schema.ts - Database models
export const counterSchema = pgTable('counter', {
  id: serial('id').primaryKey(),
  count: integer('count').default(0),
  updatedAt: timestamp('updated_at', { mode: 'date' })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
```

### Configuration Files
- **`AppConfig.ts`**: Main app configuration (name, locales, etc.)
- **`next.config.ts`**: Next.js configuration with plugins
- **`tsconfig.json`**: Strict TypeScript configuration
- **`eslint.config.mjs`**: Comprehensive linting rules

---

## 🔄 Development Workflow

### Essential Scripts
```bash
# Development
npm run dev                  # Start development server with database
npm run dev:next            # Start only Next.js (no database)
npm run dev:spotlight       # Start Sentry development monitoring

# Database
npm run db:generate         # Generate database migrations
npm run db:studio          # Open database studio

# Quality Assurance
npm run lint               # Run ESLint
npm run lint:fix           # Fix auto-fixable linting issues
npm run check:types        # TypeScript type checking
npm run check:deps         # Check unused dependencies
npm run check:i18n         # Validate translations

# Testing
npm run test               # Run unit tests (Vitest)
npm run test:e2e           # Run E2E tests (Playwright)
npm run storybook          # Run Storybook
npm run storybook:test     # Test Storybook components

# Build & Deploy
npm run build              # Production build
npm run build-stats       # Build with bundle analyzer
npm run start              # Start production server
npm run lighthouse         # Performance audit
```

### Git Workflow
```bash
# Conventional commits enforced
npm run commit             # Interactive commit helper

# Pre-commit hooks (Lefthook)
- ESLint check
- TypeScript check
- Test execution
- Formatting
```

---

## 🧪 Testing Strategy

### Unit Testing (Vitest)
```typescript
// Example: src/utils/Helpers.test.ts
import { describe, expect, it } from 'vitest';

describe('Helper functions', () => {
  it('should format string correctly', () => {
    expect(formatString('test')).toBe('Test');
  });
});
```

### E2E Testing (Playwright)
```typescript
// Example: tests/e2e/Sanity.check.e2e.ts
import { expect, test } from '@playwright/test';

test('should display homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Il Tuo Progetto');
});
```

### Component Testing (Storybook)
```typescript
// Example: src/templates/BaseTemplate.stories.tsx
export default {
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};
```

---

## 🎨 Code Style & Best Practices

### TypeScript Standards
- **Strict Mode**: All strict checks enabled
- **No Any**: Avoid `any` type, use `unknown` instead
- **Null Safety**: `strictNullChecks` enforced
- **Unused Variables**: `noUnusedLocals` and `noUnusedParameters`
- **Type Definitions**: Use `type` instead of `interface`

### React/Next.js Conventions
```typescript
// Component naming: PascalCase
export const UserProfile = () => { };

// Hook naming: camelCase with 'use' prefix
export const useUserData = () => { };

// File naming: PascalCase for components, camelCase for utilities
// UserProfile.tsx, userHelpers.ts
```

### ESLint Rules (Antfu Config)
```javascript
// Key rules enforced:
'react/prefer-destructuring-assignment': 'off',
'style/brace-style': ['error', '1tbs'],
'ts/consistent-type-definitions': ['error', 'type'],
'node/prefer-global/process': 'off',
```

### Import Organization
```typescript
import { NextPage } from 'next';
// 1. Node modules
import React from 'react';

import { BaseTemplate } from '@/templates/BaseTemplate';
// 2. Internal imports (absolute paths)
import { AppConfig } from '@/utils/AppConfig';

// 3. Relative imports
import './styles.css';
```

---

## 🔒 Security & Performance

### Security Features
- **Arcjet**: Bot detection and rate limiting
- **CSRF Protection**: Built-in Next.js protection
- **Environment Validation**: Type-safe env vars with T3 Env
- **Secure Headers**: Configured in `next.config.ts`

### Performance Optimizations
- **Bundle Analysis**: Built-in analyzer (`npm run build-stats`)
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Optimized caching strategies

### Monitoring
- **Sentry**: Error tracking and performance monitoring
- **Checkly**: Uptime monitoring
- **PostHog**: Analytics (optional)
- **Better Stack**: Logging (optional)

---

## 🌍 Internationalization (i18n)

### Configuration
```typescript
// src/libs/I18n.ts
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../locales/${locale}.json`)).default
}));
```

### Usage
```jsx
import { useTranslations } from 'next-intl';

export const Component = () => {
  const t = useTranslations('namespace');
  return <h1>{t('title')}</h1>;
};
```

### Supported Locales
- English (`en`) - Default
- French (`fr`)
- Easily extensible via `AppConfig.ts`

---

## 🚀 Deployment & Production

### Environment Setup
```bash
# Required environment variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx
DATABASE_URL=postgresql://xxx

# Optional services
ARCJET_KEY=ajkey_xxx
SENTRY_AUTH_TOKEN=xxx
BETTER_STACK_SOURCE_TOKEN=xxx
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Build successful (`npm run build`)
- [ ] Tests passing (`npm run test` + `npm run test:e2e`)
- [ ] Type checking clean (`npm run check:types`)
- [ ] Linting clean (`npm run lint`)
- [ ] Performance audit acceptable (`npm run lighthouse`)

### Recommended Platforms
- **Vercel**: Optimal Next.js support
- **Netlify**: Alternative with good Next.js support
- **Railway/Render**: For database + hosting together

---

## 🛠️ Claude Code Guidelines

### When Working on This Project

#### 🎯 Always Follow These Rules:

1. **Read Configuration First**: Always check `AppConfig.ts` for project settings
2. **Respect File Structure**: Follow the established directory organization
3. **Use Absolute Imports**: Prefer `@/` imports over relative paths
4. **Type Safety**: Never use `any`, always define proper types
5. **Test Coverage**: Add tests for new functionality
6. **i18n Compliance**: Update translations when adding user-facing text
7. **Environment Validation**: Add new env vars to `src/libs/Env.ts`

#### 📋 Before Making Changes:

1. **Check existing patterns** in similar files
2. **Validate TypeScript** with `npm run check:types`
3. **Run linting** with `npm run lint`
4. **Test functionality** with `npm run test`
5. **Update documentation** if needed

#### 🔧 When Adding Features:

1. **Components**: Place in `src/components/` with proper naming
2. **Pages**: Use App Router structure in `src/app/`
3. **API Routes**: Place in `src/app/[locale]/(marketing)/api/`
4. **Database Changes**: Update `src/models/Schema.ts` + run migrations
5. **Utilities**: Add to `src/utils/` with proper tests
6. **Validations**: Use Zod schemas in `src/validations/`

#### 🎨 Styling Guidelines:

1. **Use Tailwind Classes**: Avoid custom CSS when possible
2. **Responsive Design**: Always consider mobile-first approach
3. **Consistent Spacing**: Use Tailwind spacing scale
4. **Accessibility**: Ensure WCAG compliance (handled by jsx-a11y plugin)

#### 🧪 Testing Requirements:

```typescript
// Storybook: src/components/Component.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
// E2E tests: tests/e2e/Feature.e2e.ts
import { expect, test } from '@playwright/test';

// Unit tests: src/components/Component.test.tsx
import { render, screen } from '@testing-library/react';

import { expect, it } from 'vitest';
```

#### 🔄 Git Workflow:

1. **Use Conventional Commits**: `feat:`, `fix:`, `docs:`, etc.
2. **Branch Naming**: `feature/description` or `fix/description`
3. **Pre-commit Hooks**: Will run automatically (Lefthook)
4. **Pull Request**: Ensure all checks pass

#### 🚨 Common Pitfalls to Avoid:

- ❌ Using `any` type
- ❌ Importing components without proper paths
- ❌ Adding dependencies without updating documentation
- ❌ Skipping environment variable validation
- ❌ Not testing i18n functionality
- ❌ Ignoring ESLint warnings
- ❌ Hardcoding configuration values
- ❌ Breaking existing API contracts

---

## 📚 Quick Reference

### Key Files to Modify:
- **`src/utils/AppConfig.ts`**: Project name, locales, basic config
- **`src/locales/en.json`**: English translations
- **`src/models/Schema.ts`**: Database schema
- **`.env.local`**: Local environment variables (not tracked by git)

### Essential Commands:
```bash
npm run dev         # Start development
npm run db:studio   # Database management
npm run lint:fix    # Fix code style
npm run check:types # Type checking
npm run test        # Unit tests
npm run build       # Production build
```

### Troubleshooting:
- **Port 5432 in use**: Stop local PostgreSQL or change DB config
- **Type errors**: Run `npm run check:types` for details
- **Build fails**: Check `npm run lint` and fix issues
- **Tests fail**: Check `npm run test` for specific failures

### External Resources:
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [DrizzleORM Documentation](https://orm.drizzle.team)
- [Clerk Documentation](https://clerk.com/docs)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)

---

## 🎯 Project Status

**Current State**: ✅ Clean slate with professional base
- ✅ All demo content removed
- ✅ Generic branding applied
- ✅ Navigation simplified
- ✅ Ready for customization

**Next Steps**:
1. Customize `AppConfig.ts` with your project details
2. Update translations in `src/locales/`
3. Add your content to homepage
4. Extend database schema as needed
5. Implement your specific features

---

*This project follows the Next.js Boilerplate template conventions and best practices. Always maintain these standards when extending functionality.*
