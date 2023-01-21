import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 1.6rem;

  width: 100%;
  max-width: ${({ theme }) => theme.container};

  margin-bottom: 4rem;

  a {
    text-decoration: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  button,
  a {
    background: transparent;
    border: none;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    span {
      width: 1.8rem;
      height: 1.8rem;
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;

      display: grid;
      place-items: center;

      border-radius: 0.5rem;

      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`
