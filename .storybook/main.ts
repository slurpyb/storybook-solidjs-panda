import type { StorybookConfig } from 'storybook-solidjs-vite';
import tsconfigPaths from 'vite-tsconfig-paths'
import { mergeConfig } from 'vite'
import { join, dirname } from "path"
import { fileURLToPath } from 'url';

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  docs: {
    defaultName: 'Documentation',
  },
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-essentials'),
      options: {
        backgrounds: false,
        controls: true,
        actions: true
      }
    },
    {
      name: getAbsolutePath('@chromatic-com/storybook'),
      options: {}
    },
    {
      name: getAbsolutePath('@storybook/addon-interactions'),
      options: {}
    },
    {
      name: getAbsolutePath('@storybook/addon-a11y'),
      options: {}
    },
    {
      name: getAbsolutePath('@storybook/addon-themes'),
      options: {}
    },
  ],
  
  framework: {
    name: getAbsolutePath('storybook-solidjs-vite'),
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: './' })],
      resolve: {
        alias: {
          "lucide-solid/icons": fileURLToPath(
            new URL(
              "../node_modules/lucide-solid/dist/source/icons",
              import.meta.url,
            ),
          ),
        },
      },
    })
  }
};
export default config;