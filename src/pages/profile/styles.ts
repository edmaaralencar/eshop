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

export const Container = styled.form`
  background-color: #f5f8fa;
  width: 100%;

  padding: 2.4rem;

  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;

  margin-bottom: 2.4rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`
