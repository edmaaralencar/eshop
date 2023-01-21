import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Lançamentos</Heading>)

    expect(
      screen.getByRole('heading', { name: /lançamentos/i })
    ).toBeInTheDocument()
  })

  it('should render the heading as h2', () => {
    renderWithTheme(<Heading level={2}>Lançamentos</Heading>)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
