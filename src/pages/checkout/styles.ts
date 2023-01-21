import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;

  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

export const CartList = styled.div`
  background-color: #f5f8fa;
`

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 2.4rem;
`

export const Product = styled.div`
  display: flex;
  gap: 2.4rem;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  strong {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 0.4rem;
  }

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};

  span {
    font-size: 1.6rem;
  }

  strong {
    font-size: 1.8rem;
  }
`
