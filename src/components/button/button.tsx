import type { HTMLStyledProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'


export const Button = styled('button', {
    defaultVariants: {
        variant: 'primary',
    },
    base: {
        display: 'inline-flex',
        alignItems: 'center', 
        gap: 'var(--button-gap, 0.5em)',
        padding: 'var(--button-padding, 0.7em 1.2em)',
    
        background: 'var(--button-bg)',
        color: 'var(--button-color)',
    
        borderWidth: 'var(--button-border-width)',
        borderStyle: 'var(--button-border-style)', 
        borderColor: 'var(--button-border-color)',
        borderRadius: 'var(--button-radius)',
    
        textDecoration: 'none',
        fontWeight: 'var(--button-font-weight, 700)',
        fontSize: 'var(--button-font-size, 1em)',
        letterSpacing: '0.05ch',
        fontFamily: 'sans-serif',
        lineHeight: 1.1, // Set or buttons will be different sizes (<a>/<button>)
    
        cursor: 'pointer',
        _hover: {
            backgroundColor: 'var(--button-hover-bg)',
            color: 'var(--button-hover-color)'
        },
        _focus: {
            outlineWidth: 'var(--button-outline-width, var(--button-border-width))',
            outlineStyle: 'var(--button-outline-style, var(--button-border-style))',
            outlineColor: 'var(--button-outline-color, var(--button-border-color))',
            outlineOffset: 'var(--button-outline-offset, calc(var(--button-border-width) * 2))'
        },
        _active: {
            transform: 'scale(0.99)'
        },
        '& > svg': {
            height: "var(--button-icon-size, 1.2cap)",
            width: "auto",
            flex: "none",
        }
      },
    variants: {
        variant: {
            primary: {
                '--button-bg': '#f3de8a',
                '--button-color':' #342a21',
                '--button-border-color': 'currentColor',
                '--button-hover-bg': '#f1d979',
                '--button-hover-color': '#342a21'
            },
            positive: {
                '--button-bg': '#2d936c',
                '--button-border-color': 'currentColor',
                '--button-hover-bg': '#359d75'
            },
            negative: {
                '--button-bg': '#b33c48',
                '--button-border-color': '#a62f3d',
                '--button-hover-bg': '#c24a56'
            }
        }
    }
  })

export type ButtonVariantProps = HTMLStyledProps<'button'> & {
    variant: 'primary' | 'positive' | 'negative' | undefined
}
