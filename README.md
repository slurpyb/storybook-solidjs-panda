# Storybook + SolidJS + PandaCSS + Vite

A starting point for creating a design system with storybook, solidjs, pandacss, and vite.

## Getting Started

### Installation

1. Click use this template 
2. Clone your new repo
```bash
git clone https://github.com/{{USERNAME}}/{{REPO}}.git
```

3. Install dependencies
```bash
pnpm install
```

4. Add your theme or shared preset for panda stylings.
```typescript
/* panda.config.ts */
export default defineConfig({

  preflight: true,
  presets: [yourThemePreset(), presetPanda],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}', "./storybook/**/*.{js,jsx,ts,tsx,vue}"],
  jsxFramework: 'solid',
  outdir: 'styled-system'
  theme: {
    extend: {
        recipes: {
            /* ... */
        }
        tokens: {
            colors,
            fontSizes,
            /* ... */
        }
    }
  }
})
```
5. Add your components
Create or copy over your components into ```src/components```

## Usage

### Development
Runs development server on port 6006.
```bash
pnpm dev
```

### Building
Builds a static site to ./storybook-static
```bash
pnpm build
```

**Note**:
This repo uses [@slurpyb/lucide-solid-rebundler](https://github.com/slurpyb/lucide-solid-rebundler) to fix issue with lucide-icons. Remove this and the lucide-solid icons if you dont need it.

## Acknowledgements
- [Park-UI](https://park-ui.com) for creating a storybook+vite+solidjs+pandacss project which actually worked. For whatever reason, I struggled to get this stack running. I learnt a lot through the park-ui design system repo.

## Contributions
Feel free to open a pull request. This was a very hacky process.

## License
MIT

