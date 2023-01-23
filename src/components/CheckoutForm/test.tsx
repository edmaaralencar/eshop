import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'

import CheckoutForm from '.'

jest.mock('@stripe/react-stripe-js', () => ({
  PaymentElement: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock PaymentElement">{children}</div>
  },
  Elements: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Elements">{children}</div>
  },
  useStripe: jest.fn().mockReturnValue({
    confirmPayment: jest.fn().mockResolvedValue({
      elements: ''
    })
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn()
  })
}))

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<CheckoutForm />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(<CheckoutForm />)

    expect(
      screen.getByRole('heading', { name: /pagamento/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/Mock PaymentElement/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /pagar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
