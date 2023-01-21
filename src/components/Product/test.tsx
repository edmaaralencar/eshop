import { screen, waitFor } from '@testing-library/react'
import { WishlistProvider } from 'hooks/use-wishlist'
import { renderWithTheme } from 'utils/test-helper'

import Product from '.'

const props = {
  id: '1231',
  name: 'Air Max 90',
  price: 300.0,
  image: '/produto.png'
}

describe('<Product />', () => {
  it('should render product info', async () => {
    renderWithTheme(
      <WishlistProvider>
        <Product {...props} />
      </WishlistProvider>
    )

    const image_url = `/_next/image?url=%2F${props.image.slice(
      1,
      props.image.length
    )}&w=750&q=75`

    expect(screen.getByText(/air max 90/i)).toBeInTheDocument()
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByRole('img')).toHaveAttribute('src', image_url)
    })
  })
})
