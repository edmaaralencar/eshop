import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    width: 4.2rem;
    height: 4.2rem;

    border: 1px solid ${theme.colors.primary.dark};
    border-radius: 0.7rem;

    background-color: ${theme.colors.white};

    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${theme.colors.primary.dark};

      svg {
        color: ${theme.colors.white} !important;
      }
    }
  `}
`
