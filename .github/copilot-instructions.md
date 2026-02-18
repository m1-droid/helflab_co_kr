# Copilot Instructions

This file provides workspace-specific custom instructions for developing the Astro + Vercel website project.

## Project Overview
- **Framework**: Astro with TypeScript
- **Deployment**: Vercel (static site)
- **Package Manager**: npm
- **Type Safety**: TypeScript (strictest mode)

## Project Structure

```
helflab_website/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Layout components
│   ├── pages/          # Page routes (file-based routing)
│   └── styles/         # Global styles
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration with Vercel adapter
├── vercel.json         # Vercel deployment configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Development Guidelines

- Use `.astro` files for Astro components
- Use `.ts` or `.tsx` for TypeScript files
- Keep components in `src/components/` directory
- Page routes are automatically generated from `src/pages/` structure
- Styles can be scoped to components or placed in `src/styles/`
- Import types from proper modules for better IDE support

## Deployment

The project is configured for automatic deployment to Vercel. Push to your repository to trigger builds.

- Main build command: `npm run build`
- Output directory: `./dist`
- Framework: Astro (with Vercel static adapter)
