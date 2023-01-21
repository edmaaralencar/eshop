import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the heading and button', () => {
    const { container } = renderWithTheme(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: /Compre os melhores sapatos do mercado/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('link')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
