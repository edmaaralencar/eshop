import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2.4rem;
    background-color: #f5f8fa;

    h2 {
      color: ${theme.colors.title};
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  `}
`

export const ButtonContainer = styled.div`
  margin-top: 2.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  align-items: center;

  a {
    text-decoration: none;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;

    color: ${({ theme }) => theme.colors.primary.main};

    transition: color 0.1s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`

export const Error = styled.p`
  color: red;
  font-size: 1.4rem;
  margin: 1.4rem 0;
`
