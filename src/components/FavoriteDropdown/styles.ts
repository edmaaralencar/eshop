import styled from 'styled-components'

import * as HoverCard from '@radix-ui/react-hover-card'

export const Wrapper = styled(HoverCard.Portal)``

export const Content = styled(HoverCard.Content)`
  border-radius: 6px;
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);

  &[data-side='top'] {
    animation-name: slideUp;
  }
  &[data-side='bottom'] {
    animation-name: slideDown;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Arrow = styled(HoverCard.Arrow)`
  fill: white;
`

export const EmptyList = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 8rem;

  p {
    font-size: 1.4rem;
  }
`

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 40rem;
  overflow: auto;
`

export const Favorite = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem;
`

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.title};
    }

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.text.purple};
    }
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 4rem;

  button {
    position: absolute;

    width: 3.2rem;
    height: 3.2rem;
  }
`
