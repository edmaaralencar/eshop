import styled from 'styled-components'

export const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 10rem;
    height: 10rem;
    border: 5px solid ${({ theme }) => theme.colors.primary.light};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.colors.primary.main};
    animation: spinner 2s linear infinite;
    margin: 0 auto;
  }
`
