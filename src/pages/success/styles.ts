import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 60rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary.main};

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
    color: #f5f5f5;
  }
`

export const Body = styled.div`
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }

    span {
      font-weight: 400;
      font-size: 1.4rem;
    }

    strong {
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`

export const Hr = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text.gray};
  opacity: 0.1;
  border: none;
  width: 100%;
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
`

export const ProductContent = styled.div`
  display: flex;
  gap: 1.6rem;

  h4 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.title};
  }

  @media (max-width: 400px) {
    gap: 0.8rem;

    h4 {
      font-size: 1.6rem;
    }
  }
`

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  span {
    font-size: 400;
    font-size: 1.2rem;
    text-align: end;
    color: ${({ theme }) => theme.colors.text.purple};
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  width: 25rem;
  height: 16rem;

  @media (max-width: 520px) {
    width: 16rem;
    height: 10rem;
  }

  @media (max-width: 360px) {
    width: 14rem;
    height: 8rem;
  }
`
