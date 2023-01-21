import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Wrapper = styled.div``

export const Trigger = styled(Dialog.Trigger)``

export const Portal = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const Content = styled(Dialog.Content)`
  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(100%, 0%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(0, 0%) scale(1);
    }
  }
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  right: 0;
  top: 0;
  width: 48.4rem;
  height: 100vh;
  padding: 3.2rem;

  animation: contentShow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
`

export const Title = styled(Dialog.Title)``

export const Hr = styled.hr`
  width: 100%;
  background-color: #dce2e5;
  height: 0.2rem;
  border: none;

  margin-top: 0.8rem;
`

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 2.4rem 0;
`

export const Product = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.6rem;
`

export const EmptyCart = styled.span`
  font-size: 1.4rem;
`

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 15rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  flex: 1;
`

export const ProductName = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
`

export const ProductPrice = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
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
    height: 2.4rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 300;
  }
`

export const Total = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 2rem;
  }

  strong {
    font-weight: 500;
    font-size: 2.4rem;
  }
`

export const Close = styled(Dialog.Close)`
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;

  cursor: pointer;
  background: transparent;
  border: none;
`
