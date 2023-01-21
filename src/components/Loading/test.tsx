import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Loading />)

    expect(screen.getByTestId('loading')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
