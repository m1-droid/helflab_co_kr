# HelfLab Website

An Astro + Vercel powered static website for HelfLab.

## 🚀 Project Structure

```text
helflab_website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Layout templates
│   ├── pages/           # Page routes (file-based routing)
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment config
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🧞 Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start local dev server at `localhost:3000` |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview production build locally        |

## 📝 Development

- Components: Use `.astro` files in `src/components/`
- Pages: Create `.astro` or `.md` files in `src/pages/`
- Styles: Use scoped styles or global styles in `src/styles/`
- Assets: Place static files in `public/`

## 🚢 Deployment

This project is configured for Vercel deployment:

1. Push to GitHub repository
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on push

Build command: `npm run build`
Output directory: `./dist`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Vercel Deployment](https://vercel.com/docs)
- [Astro Discord Community](https://astro.build/chat)
