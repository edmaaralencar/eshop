import styled from 'styled-components'

export const Wrapper = styled.aside`
  /* background-color: ${({ theme }) => theme.colors.primary.light}; */

  width: 25rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    width: auto;
  }
`

type NavItemProps = {
  active: boolean
}

export const NavItem = styled.a<NavItemProps>`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border: none;
  text-decoration: none;

  transition: background-color 0.1s ease;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.dark : '#F5F8FA'};
  /* : darken(0.05, theme.colors.primary.light)}; */

  span {
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.title};
    font-size: 1.8rem;
    font-weight: 100;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};

    svg {
      fill: ${({ theme }) => theme.colors.white};
      -webkit-text-stroke-color: white;
    }

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
