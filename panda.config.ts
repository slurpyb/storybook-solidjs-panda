import { defineConfig } from '@pandacss/dev'
import presetPanda from '@pandacss/preset-panda'

export default defineConfig({

  preflight: true,
  presets: [presetPanda],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}', "./storybook/**/*.{js,jsx,ts,tsx,vue}"],
  jsxFramework: 'solid',
  outdir: 'styled-system'
})
