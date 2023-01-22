import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;

    height: 60rem;
    width: 100%;
    max-width: ${theme.container};

    padding: 0 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;

    background-color: ${theme.colors.primary.dark};

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      padding: 3.2rem;
    }

    @media (max-width: 450px) {
      height: 67rem;
    }
  `}
`

export const Content = styled.div`
  flex: 1;
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h1 {
      color: ${theme.colors.white};
      font-size: 4rem;
    }

    p {
      color: ${theme.colors.white};
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 2.4rem;

      margin-top: 2.6rem;
      margin-bottom: 3.2rem;
    }
  `}
`

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;

  height: 40rem;

  @media (max-width: 768px) {
    width: 40rem;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 50rem;
  }
`

export const ButtonWrapper = styled.div`
  width: 20rem;
`
