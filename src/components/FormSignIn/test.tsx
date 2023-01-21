import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render form with inputs', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email*/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha*/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
