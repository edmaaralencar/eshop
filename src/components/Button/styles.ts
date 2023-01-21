import styled, { css, DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'
import { ButtonProps } from '.'

export type WrapperProps = {
  icon: boolean
} & Pick<ButtonProps, 'variant' | 'size' | 'fullWidth'>

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.dark};
    color: ${theme.colors.white};

    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${lighten(0.02, theme.colors.primary.dark)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: transparent;

    border: 1px solid ${theme.colors.primary.main};
    color: ${theme.colors.primary.main};

    transition: border-color 0.1s ease-out;
    transition: color 0.1s ease-out;

    &:hover {
      border-color: ${darken(0.1, theme.colors.primary.main)};
      color: ${darken(0.1, theme.colors.primary.main)};
    }
  `,
  outlined: (theme: DefaultTheme) => css`
    background: transparent;

    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};

    transition: border-color 0.1s ease-out;
    transition: color 0.1s ease-out;

    &:hover {
      border-color: ${darken(0.1, theme.colors.white)};
      color: ${darken(0.1, theme.colors.white)};

      svg {
        color: ${darken(0.1, theme.colors.white)} !important;
      }
    }
  `,
  small: () => css`
    padding: 0 2rem;
    height: 4.7rem;

    span {
      font-size: 1.8rem;
    }
  `,
  medium: () => css`
    padding: 0 2rem;
    height: 5.2rem;

    span {
      font-size: 1.8rem;
    }
  `,
  large: () => css`
    padding: 0 3rem;
    height: 5.5rem;

    span {
      font-size: 1.8rem;
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  icon: () => css`
    svg {
      margin-left: 3.2rem;
      margin-top: 0.1rem;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, size, fullWidth, icon }) => css`
    text-decoration: none;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 300;
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${!!variant && wrapperModifiers[variant](theme)}
    ${!!size && wrapperModifiers[size]}
    ${!!fullWidth && wrapperModifiers.fullWidth}
    ${icon && wrapperModifiers.icon}
  `}
`
