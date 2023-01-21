import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    font-size: 2rem;
    color: ${theme.colors.text.gray};
    text-decoration: none;
    line-height: 3.2rem;
    font-weight: 300;

    &:hover {
      text-decoration: underline;
    }
  `}
`
