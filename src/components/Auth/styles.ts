import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.light};
  height: 100%;

  display: grid;
  place-items: center;

  @media (max-width: 760px) {
    display: none;
  }
`

export const LogoWrapper = styled.a`
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;

  text-decoration: none;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 1.6rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 36rem;
`

export const Heading = styled.h1`
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 2.4rem;
`
