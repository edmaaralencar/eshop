import styled, { css } from 'styled-components'

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ theme }) => css`
    font-size: 3.2rem;
    color: ${theme.colors.title};
    font-weight: 400;
    text-transform: uppercase;
    line-height: 5.4rem;
    letter-spacing: 0.03em;
  `}
`
