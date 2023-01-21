import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Sidebar from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/profile' }))
}))

describe('<Sidebar />', () => {
  it('should render the links', () => {
    const { container } = renderWithTheme(<Sidebar />)

    expect(screen.getByText(/minha conta/i).parentElement).toHaveAttribute(
      'href',
      '/profile'
    )

    expect(screen.getByText(/meus pedidos/i).parentElement).toHaveAttribute(
      'href',
      '/orders'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the logout button', () => {
    const { container } = renderWithTheme(<Sidebar />)

    expect(
      screen.getByText(/sair da plataforma/i).parentElement
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
