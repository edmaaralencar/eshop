import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Comprar</Button>)

    expect(screen.getByRole('button', { name: /comprar/i })).toBeInTheDocument()
  })
})
