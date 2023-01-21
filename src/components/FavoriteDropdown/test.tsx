import { render, screen } from '@testing-library/react'

import * as HoverCard from '@radix-ui/react-hover-card'
import { WishlistContext } from 'hooks/use-wishlist'

import FavoriteDropdown from '.'
import { renderWithTheme } from 'utils/test-helper'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))

const product = {
  id: '1231',
  name: 'Air Max 90',
  description: 'oiad',
  price: 300,
  images: [
    {
      image_url: '/produto.png',
      id: '12'
    }
  ]
}

describe('<FavoriteDropdown />', () => {
  it('should render the dropdown with products', () => {
    const { container } = renderWithTheme(
      <HoverCard.Root open>
        <WishlistContext.Provider
          value={{
            items: [product],
            addOrRemoveProductOfWishlist: jest.fn(),
            productIsInWishlist: jest.fn()
          }}
        >
          <FavoriteDropdown />
        </WishlistContext.Provider>
      </HoverCard.Root>
    )

    expect(screen.getByRole('link', { name: /ver mais/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the dropdown with products', () => {
    renderWithTheme(
      <HoverCard.Root open>
        <WishlistContext.Provider
          value={{
            items: [],
            addOrRemoveProductOfWishlist: jest.fn(),
            productIsInWishlist: jest.fn()
          }}
        >
          <FavoriteDropdown />
        </WishlistContext.Provider>
      </HoverCard.Root>
    )

    expect(screen.getByText(/nenhum item salvo./i)).toBeInTheDocument()
  })
})
