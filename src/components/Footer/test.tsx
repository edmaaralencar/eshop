import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(
      screen.getByText('Edmar Alencar 2022 © Todos os direitos reservados')
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
