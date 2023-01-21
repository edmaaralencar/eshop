import 'match-media-mock'
import Slider from '.'
import { renderWithTheme } from 'utils/test-helper'

describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Slider>
        <h1>1</h1>
        <h1>2</h1>
      </Slider>
    )

    // expect(screen.getByRole('heading', { name: /Slider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
