import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;

  padding: 0 1.6rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3.2rem;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 860px) {
    gap: 2.4rem;
  }
`

export const ProductImage = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 0.8rem;
  height: 40rem;

  img {
    padding: 2rem !important;
  }
`

export const ImgContainer = styled.div`
  min-width: 0;
  height: 46rem;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 765px) {
    gap: 1.6rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: 300;
  }

  strong {
    font-size: 3.2rem;
    font-weight: 600;
  }

  p {
    font-size: 2rem;
  }
`

export const ProductQuantityTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 2rem;
    font-weight: 600;
  }
`

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  button {
    background-color: transparent;
    border: none;
    height: 3.2rem;
  }

  span {
    font-size: 2.4rem;
    font-weight: 300;
  }
`

export const ButtonWrapper = styled.div`
  max-width: 30rem;
`
