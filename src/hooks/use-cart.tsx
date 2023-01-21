import { useQuery } from '@tanstack/react-query'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { IProduct } from '../@types/product'
import { api } from '../lib/axios'
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem
} from 'utils/storage'

type CartItem = {
  id: string
  quantity: number
}

type CartProviderProps = {
  children: ReactNode
}

type CartContextData = {
  cartItems: Array<{
    product: IProduct
    quantity: number
  }>
  quantity: number
  total: number
  isLoading: boolean
  clearCart: () => void
  addProductToCart: (product: CartItem) => void
  handleIncrementProductInCart: (product: CartItem) => void
  handleDecrementProductInCart: (product: CartItem) => void
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const cartItemsInStorage = getStorageItem('cart')

    if (cartItemsInStorage) {
      setCartItems(cartItemsInStorage)
    }
  }, [])

  const { data, isLoading } = useQuery(
    ['cart/items', cartItems],
    async () => {
      let url = `/products/items?`

      for (const item of cartItems) {
        url += `id=${item.id}&`
      }

      const { data } = await api.get(url)

      return data
    },
    {
      enabled: cartItems.length > 0
    }
  )

  const products = data?.map((product: IProduct) => ({
    product,
    quantity: cartItems.find((item) => item.id === product.id)?.quantity
  }))

  const total = products?.reduce(
    (acc: number, item: { product: IProduct; quantity: number }) =>
      (acc += item.product.price * item.quantity),
    0
  )

  function addProductToCart(product: CartItem) {
    setCartItems((prevState) => {
      const productIsInCart = prevState.find((item) => item.id === product.id)

      if (productIsInCart) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity }
            : item
        )
      } else {
        return [...prevState, product]
      }
    })

    const cartItemsInStorage: CartItem[] = getStorageItem('cart')

    if (cartItemsInStorage) {
      const productIsInCart = cartItemsInStorage?.find(
        (item) => item.id === product.id
      )

      if (productIsInCart) {
        const productWithCorrectQuantity = cartItemsInStorage.map((item) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity }
            : item
        )
        setStorageItem('cart', productWithCorrectQuantity)
      } else {
        setStorageItem('cart', [...cartItemsInStorage, product])
      }
    } else {
      setStorageItem('cart', [product])
    }
  }

  function handleIncrementProductInCart(product: CartItem) {
    setCartItems((prevState) => {
      return prevState.map((item) =>
        item.id === product.id
          ? { ...product, quantity: (product.quantity += 1) }
          : item
      )
    })

    const cartItemsInStorage: CartItem[] = getStorageItem('cart')

    const productIsInCart = cartItemsInStorage?.find(
      (item) => item.id === product.id
    )

    if (productIsInCart) {
      const productWithCorrectQuantity = cartItemsInStorage.map((item) =>
        item.id === product.id
          ? { ...productIsInCart, quantity: (productIsInCart.quantity += 1) }
          : item
      )
      setStorageItem('cart', productWithCorrectQuantity)
    } else {
      setStorageItem('cart', [...cartItemsInStorage, product])
    }
  }

  function handleDecrementProductInCart(product: CartItem) {
    setCartItems((prevState) => {
      if (product.quantity === 1) {
        return prevState.filter((item) => item.id !== product.id)
      }

      return prevState.map((item) =>
        item.id === product.id
          ? { ...product, quantity: (product.quantity -= 1) }
          : item
      )
    })

    const cartItemsInStorage: CartItem[] = getStorageItem('cart')

    const productIsInCart = cartItemsInStorage?.find(
      (item) => item.id === product.id
    )

    if (productIsInCart) {
      if (productIsInCart.quantity === 1) {
        const productsWithoutProduct = cartItemsInStorage.filter(
          (item) => item.id !== product.id
        )

        setStorageItem('cart', productsWithoutProduct)
        return
      }

      const productWithCorrectQuantity = cartItemsInStorage.map((item) =>
        item.id === product.id
          ? { ...productIsInCart, quantity: (productIsInCart.quantity -= 1) }
          : item
      )
      setStorageItem('cart', productWithCorrectQuantity)
    } else {
      setStorageItem('cart', [...cartItemsInStorage, product])
    }
  }

  function clearCart() {
    removeStorageItem('cart')
    setCartItems([] as CartItem[])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: products || [],
        quantity: cartItems.length || 0,
        total: total || 0,
        addProductToCart,
        handleIncrementProductInCart,
        handleDecrementProductInCart,
        clearCart,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
