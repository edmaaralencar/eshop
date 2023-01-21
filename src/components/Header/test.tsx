import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test-helper'
import userEvent from '@testing-library/user-event'
import { CartProvider } from 'hooks/use-cart'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../lib/react-query'

import Header from '.'

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react')
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: 'admin' }
  }
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'authenticated' } //return type is [] in v3 but changed to {} in v4
    })
  }
})

jest.mock('next/router', () => ({
  useRouter: () => ({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    push: () => {}
  })
}))

describe('<Header />', () => {
  it('should render logo', () => {
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
        </CartProvider>
      </QueryClientProvider>
    )

    expect(screen.getByText(/eshop/i)).toBeInTheDocument()
  })

  it('should open cart when clicking cart icon', async () => {
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
        </CartProvider>
      </QueryClientProvider>
    )

    const user = userEvent.setup()
    const button = screen.getByLabelText('open-cart')

    expect(button).toHaveAttribute('data-state', 'closed')
    await user.click(button)
    expect(button).toHaveAttribute('data-state', 'open')
  })

  // it('should open wishlist when hovering heart icon', async () => {
  //   renderWithTheme(
  //     <QueryClientProvider client={queryClient}>
  //       <CartProvider>
  //         <Header />
  //       </CartProvider>
  //     </QueryClientProvider>
  //   )

  //   expect(screen.getByTestId('open-wishlist')).toHaveAttribute(
  //     'data-state',
  //     'closed'
  //   )

  //   await userEvent.hover(screen.getByTestId('open-wishlist'))

  //   expect(screen.getByTestId('open-wishlist')).toHaveAttribute(
  //     'data-state',
  //     'open'
  //   )
  // })
})
