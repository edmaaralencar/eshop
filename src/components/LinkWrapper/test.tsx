import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render the link', () => {
    renderWithTheme(<LinkWrapper href="/">Ver mais</LinkWrapper>)

    expect(screen.getByRole('link', { name: /ver mais/i })).toBeInTheDocument()
  })
})
