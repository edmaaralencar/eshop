import styled from 'styled-components'

export const Wrapper = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 117%;

  letter-spacing: -0.075rem;

  color: ${({ theme }) => theme.colors.primary.dark};
`
