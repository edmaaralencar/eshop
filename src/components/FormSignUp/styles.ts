import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-bottom: 2.4rem;
`

export const FormGroup = styled.div`
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

export const AuthLink = styled.span`
  font-size: 1.4rem;
  display: block;
  text-align: center;
  margin-top: 3.2rem;

  a {
    color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => darken(0.1, theme.colors.primary.dark)};
    }
  }
`
