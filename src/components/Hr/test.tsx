import { render, screen } from '@testing-library/react'

import Hr from '.'

describe('<Hr />', () => {
  it('should render the heading', () => {
    render(<Hr />)

    expect(screen.getByTestId(/hr/i)).toBeInTheDocument()
  })
})
