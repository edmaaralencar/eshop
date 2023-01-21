import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render logo', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByText(/eshop/i)).toBeInTheDocument()
  })
})
