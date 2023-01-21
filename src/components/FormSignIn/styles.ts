import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-bottom: 2.4rem;
`

export const Input = styled.div`
  background-color: #ebebf1;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 0.2rem solid;
  border-color: #ebebf1;
  transition: border-color 0.2s ease-out;

  &:focus-within {
    /* box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary.dark}; */
    border-color: ${({ theme }) => theme.colors.primary.dark};
  }

  input {
    border: none;
    padding: 1.5rem 0;
    background: transparent;
    outline: none;
    padding-left: 0.8rem;
    font-size: 1.4rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
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
