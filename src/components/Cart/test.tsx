/* eslint-disable @typescript-eslint/no-empty-function */
import { renderWithTheme } from 'utils/test-helper'
import * as Dialog from '@radix-ui/react-dialog'
import { CartProvider } from 'hooks/use-cart'

import Cart from '.'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../lib/react-query'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <QueryClientProvider client={queryClient}>
        <Dialog.Root>
          <CartProvider>
            <Cart onCloseCart={() => {}} />
          </CartProvider>
        </Dialog.Root>
      </QueryClientProvider>
    )

    // expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
