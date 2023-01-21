import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;

  padding: 0 1.6rem;
  padding-bottom: 2.4rem;

  display: grid;
  grid-template-columns: auto 2fr;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
  background-color: #f5f8fa;
  width: 100%;

  padding: 2.4rem;

  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-top: 4rem;
`

export const Order = styled.div``

export const OrderFooter = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;

  display: flex;
  gap: 2.4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    color: ${({ theme }) => theme.colors.white};

    &.last {
      flex: 1;
      text-align: end;
    }

    span {
      font-size: 1.2rem;
    }

    strong {
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

export const OrderLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 0.8rem;

  span {
    font-weight: 700;
    font-size: 1.4rem;
  }
`

export const OrderBody = styled.div`
  padding: 1.6rem 0;
  /* border: 2px solid ${({ theme }) => theme.colors.primary.main}; */

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const OrderProduct = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OrderProductContent = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.title};
    }

    a {
      height: 3.2rem;
      padding: 0 1.2rem;
      margin-top: 0.8rem;

      span {
        font-size: 1.2rem;
      }
    }
  }
`

export const OrderProductPrice = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
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
