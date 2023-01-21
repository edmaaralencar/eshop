import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import IconButton from '.'

describe('<IconButton />', () => {
  it('should render the button', () => {
    renderWithTheme(<IconButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
