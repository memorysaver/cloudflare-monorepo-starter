# Web Application

A modern full-stack web application built with TanStack Start, Tailwind CSS v4, and shadcn/ui, optimized for Cloudflare Workers.

## Features

- ⚡ **TanStack Start** - Modern full-stack React framework with SSR
- 🎨 **Tailwind CSS v4** - Latest version with PostCSS integration
- 🎯 **shadcn/ui** - Beautiful, accessible component library
- ☁️ **Cloudflare Workers** - Serverless edge runtime
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in theme support
- 🔧 **TypeScript** - Full type safety
- 🧪 **Vitest** - Fast unit testing
- 📦 **Monorepo Ready** - Workspace dependencies

## Architecture

### Directory Structure

```
apps/web/
├── src/                      # Source code (using src/ instead of app/)
│   ├── components/           # React components
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utility functions
│   ├── routes/              # TanStack Router pages
│   ├── styles/              # CSS and styling
│   └── test/                # Test files
├── components.json          # shadcn/ui configuration
├── postcss.config.ts        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── wrangler.jsonc           # Cloudflare Workers configuration
└── tsconfig.json            # TypeScript configuration
```

### Technology Stack

- **Framework**: TanStack Start v1.131.44
- **Styling**: Tailwind CSS v4.1.13 with PostCSS
- **Components**: shadcn/ui with Radix UI primitives
- **Build Tool**: Vite v6.3.4
- **Runtime**: Cloudflare Workers with Node.js compatibility
- **Testing**: Vitest with Cloudflare Workers pool

## Configuration Details

### Tailwind CSS v4 with PostCSS

This project uses Tailwind CSS v4 with the new PostCSS plugin architecture:

```typescript
// postcss.config.ts
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**Key differences from Tailwind v3:**

- Uses `@tailwindcss/postcss` instead of standalone plugin
- CSS import: `@import 'tailwindcss' source('../')`
- Enhanced performance and build optimization
- Native CSS nesting support

### shadcn/ui Integration

Configured to work with our `src/` directory structure:

```json
{
  "style": "new-york",
  "tailwind": {
    "css": "src/styles/app.css",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Server-Side Rendering (SSR)

Full SSR is configured with:

- Server-rendered HTML with complete content
- CSS properly linked and optimized
- Client-side hydration for interactivity
- SEO-friendly meta tags and structured data

### Cloudflare Workers Optimization

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    tanstackStart({
      target: 'cloudflare-module',
      customViteReactPlugin: true,
    }),
  ],
})
```

## Development

### Getting Started

```bash
# Install dependencies
just install

# Start development server
just dev
# or for this specific app
bun turbo -F web dev

# The app will be available at http://localhost:3000
```

### Available Scripts

```bash
# Development
just dev                    # Start development server
bun turbo -F web dev       # Start specific app

# Building
just build                 # Build all apps
bun turbo -F web build     # Build specific app

# Testing
just test                  # Run all tests
bun turbo -F web test      # Test specific app

# Code Quality
just check                 # Run all checks (deps, lint, types, format)
just fix                   # Fix all issues automatically

# Deployment
just deploy                # Deploy all apps
bun turbo -F web deploy    # Deploy specific app
```

### Adding Components

```bash
# Add shadcn/ui components
npx shadcn@canary add button
npx shadcn@canary add card
npx shadcn@canary add dialog

# Components will be added to src/components/ui/
```

## Styling

### Custom CSS Variables

The app includes comprehensive CSS variables for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 9% 10%;
  /* ... and many more */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode variants */
}
```

### Custom Utilities

Additional utility classes for common patterns:

```css
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.masonry-grid {
  /* Responsive masonry layout */
  columns: 2; /* md: 2, lg: 3, xl: 4 */
  column-gap: 1rem;
}
```

## Deployment

### Cloudflare Workers

The app is optimized for Cloudflare Workers deployment:

```bash
# Deploy to Cloudflare Workers
just deploy

# Or using wrangler directly
bun wrangler deploy .output/server/index.mjs --assets .output/public
```

### Build Output

```
.output/
├── public/              # Static assets
│   ├── assets/         # CSS and JS bundles
│   └── _headers        # Cloudflare headers
└── server/             # Server-side code
    └── index.mjs       # Workers entry point
```

## Best Practices

### Component Development

1. **Use shadcn/ui components** as base building blocks
2. **Extend with Tailwind classes** for custom styling
3. **Follow TypeScript strict mode** for type safety
4. **Write tests** for complex components

### Styling Guidelines

1. **Prefer Tailwind utilities** over custom CSS
2. **Use CSS variables** for theme-able values
3. **Follow mobile-first** responsive design
4. **Maintain consistent spacing** using Tailwind scale

### Performance

1. **Server-side rendering** provides fast initial loads
2. **Edge deployment** reduces latency globally
3. **Optimized bundles** with Vite and Rollup
4. **CSS purging** removes unused styles

## Troubleshooting

### Common Issues

**Button animations not working?**

- Ensure `tailwindcss-animate` is installed
- Check that PostCSS is processing Tailwind correctly
- Verify active state classes are included

**Styles not loading in production?**

- Check CSS file is properly linked in `__root.tsx`
- Verify build output includes CSS assets
- Ensure Cloudflare Workers has correct asset handling

**TypeScript errors?**

- Run `just fix` to auto-fix common issues
- Check path aliases in `tsconfig.json`
- Verify worker types are generated: `bun wrangler types`

### Development Server Issues

If port 3000 is in use, Vite will automatically try 3001, 3002, etc.

## Architecture Decisions

### Why `src/` instead of `app/`?

While TanStack Start's official guide uses `app/` directory, we chose `src/` for:

- **Monorepo consistency** - Other packages use `src/`
- **Tool compatibility** - Better IDE and tooling support
- **Team familiarity** - Established convention

All configurations are properly adjusted for this structure.

### Why Tailwind CSS v4?

- **Better performance** with new PostCSS architecture
- **Enhanced DX** with improved tooling
- **Future-proof** adoption of latest features
- **Cleaner configuration** with simplified setup

## Contributing

1. Follow the established directory structure
2. Use TypeScript for all new code
3. Write tests for new features
4. Run `just check` before committing
5. Update this README for significant changes

## Links

- [TanStack Start Documentation](https://tanstack.com/start)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)
