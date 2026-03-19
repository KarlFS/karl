# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 13 application generated with Angular CLI 13.0.2. Standard single-page application setup with TypeScript strict mode enabled.

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
