import styled from 'styled-components'
import * as HrStyles from 'components/Hr/styles'

export const Wrapper = styled.main``

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 6rem auto;

  padding: 0 2.4rem;

  ${HrStyles.Wrapper} {
    margin-top: 0.8rem;
    margin-bottom: 4rem;
  }
`

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  margin: 4.8rem 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const CardContainer = styled.div`
  margin: 4.8rem 0;
`
