import styled from 'styled-components'

type WrapperProps = {
  size?: string
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: ${({ size }) => size === 'large' && 'space-between'};

  gap: 1.6rem;
  min-height: 39rem;

  padding: 3.2rem;

  border-radius: 5px;
  background-color: #8787ff;

  h4 {
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};

    max-width: 32rem;
  }

  p {
    font-size: 1.8rem;
    color: #f3f3f3;
    max-width: 47rem;
  }

  button {
    max-width: 20rem;
  }
`

export const ImageWrapperBig = styled.div`
  position: absolute;
  bottom: 0;
  right: 3rem;

  width: 40rem;
  height: 30rem;

  @media (max-width: 850px) {
    display: none;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 3rem;

  width: 29rem;
  height: 20rem;

  @media (max-width: 950px) and (min-width: 760px) {
    display: none;
  }

  @media (max-width: 500px) {
    position: relative;
    inset: 0;
    width: 100%;
  }
`
