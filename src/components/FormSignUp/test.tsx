import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/nome*/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email*/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha*/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
