import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import './index.css'
import DocumentationTemplate from './DocumentationTemplate.mdx'
const preview: Preview = {
  
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
      layout: 'padded'
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
    (Story) => Story(),
  ],
}

export default preview
