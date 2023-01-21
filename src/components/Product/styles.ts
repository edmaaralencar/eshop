import styled from 'styled-components'

export const Wrapper = styled.div``

export const ImageWrapper = styled.div`
  position: relative;

  display: grid;
  place-items: center;
  height: 34rem;

  background-color: ${({ theme }) => theme.colors.primary.light};

  img {
    margin-top: 1rem;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  display: flex;
  gap: 0.8rem;
`

export const ProductInfo = styled.div`
  margin: 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  span {
    font-size: 2rem;
  }

  strong {
    font-weight: 600;
    font-size: 3.2rem;
  }
`
