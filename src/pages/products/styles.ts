import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;

  padding: 0 1.6rem;
  padding-bottom: 2.4rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`
