import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: #de3838;
    font-size: 1.2rem;
  }
`

type InputProps = {
  error: boolean
}

const inputModifier = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.red};

    &:focus-within {
      border-color: ${darken(0.1, theme.colors.red)};
    }
  `
}

export const Input = styled.div<InputProps>`
  ${({ theme, error }) => css`
    background-color: #ebebf1;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 0.2rem solid;
    border-color: #ebebf1;
    transition: border-color 0.2s ease-out;

    &:focus-within {
      border-color: ${theme.colors.primary.dark};
    }

    ${error && inputModifier.error(theme)}

    input {
      border: none;
      padding: 1.5rem 0;
      background: transparent;
      outline: none;
      padding-left: 1rem;
      font-size: 1.4rem;

      &::placeholder {
        font-size: 1.4rem;
      }
    }
  `}
`
