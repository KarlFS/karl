# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 19 application using standalone components, signals, and the modern application builder. TypeScript strict mode enabled.

## Common Commands

### Development
- `npm start` or `ng serve` - Start dev server at http://localhost:4200/
- `ng serve --open` - Start dev server and open browser automatically

### Building
- `npm run build` - Production build (outputs to `dist/karl/`)
- `ng build --configuration development` - Development build with source maps
- `npm run watch` - Build with file watching for development

### Testing
- `npm test` or `ng test` - Run unit tests with Karma and Jasmine
- Run tests in watch mode by default; press Ctrl+C to stop

### Code Generation
- `ng generate component <name>` - Generate new component
- `ng generate service <name>` - Generate new service
- `ng generate module <name>` - Generate new module
- Other generators: `directive`, `pipe`, `guard`, `interface`, `enum`, `class`

## Architecture

### TypeScript Configuration
- Strict mode enabled (`strict: true` in tsconfig.json)
- Strict template checking enabled
- Target: ES2017, Module: ES2020
- Experimental decorators enabled for Angular

### Styling
- SCSS is the default style language (configured in angular.json)
- Component styles use SCSS files
- Global styles in `src/styles.scss`

### Component Prefix
- Components use `app-` prefix (e.g., `<app-root>`)

### Build Configuration
- Production builds use file replacement for environment files
- Development builds include source maps and skip optimization
- Bundle size budgets: initial max 1MB, component styles max 4KB

## Project Structure

```
src/
├── app/
│   ├── app.component.*          # Root component
│   ├── app.routes.ts            # Route definitions (/, /impressum, /datenschutz)
│   ├── core/
│   │   └── services/
│   │       └── translation.service.ts   # i18n service (DE/HSB/EN)
│   ├── data/
│   │   ├── service-offerings.data.ts    # Static data for offerings section
│   │   └── skill-groups.data.ts         # Static data for skills section
│   ├── layout/
│   │   ├── footer/                      # Site footer
│   │   └── navbar/                      # Navigation bar with language switcher
│   ├── models/
│   │   ├── language.model.ts
│   │   ├── service-offering.model.ts
│   │   └── skill-group.model.ts
│   ├── pages/
│   │   ├── datenschutz/                 # Privacy policy page
│   │   ├── home/                        # Home page (composes sections)
│   │   └── impressum/                   # Legal notice page
│   ├── sections/                        # Home page sections
│   │   ├── about/
│   │   ├── contact/
│   │   ├── offerings/
│   │   ├── skills/
│   │   └── title/
│   └── shared/
│       ├── components/
│       │   ├── k-icon/                  # Custom icon component
│       │   └── obfuscated/              # Anti-scraping obfuscation component (email, VAT ID)
│       └── pipes/
│           └── translate.pipe.ts        # Translation pipe
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles.scss                          # Global styles
└── main.ts
```
