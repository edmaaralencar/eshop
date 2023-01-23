import { useSession } from 'next-auth/react'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { IProduct } from '../@types/product'
import { getStorageItem, setStorageItem } from 'utils/storage'

type WishlistProviderProps = {
  children: ReactNode
}

type WishlistContextData = {
  items: IProduct[]
  addOrRemoveProductOfWishlist: (product: IProduct) => void
  isProductInWishlist: (id: string) => boolean
}

export const WishlistContext = createContext({} as WishlistContextData)

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [items, setItems] = useState<IProduct[]>([] as IProduct[])
  const { data } = useSession()

  useEffect(() => {
    const wishlistItemsInStorage = getStorageItem('wishlist')

    if (wishlistItemsInStorage) {
      if (data?.user) {
        setItems(wishlistItemsInStorage)
      } else {
        setItems([] as IProduct[])
      }
    }
  }, [data?.user])

  function isProductInWishlist(id: string) {
    return items.some((item) => item.id === id)
  }

  function addOrRemoveProductOfWishlist(product: IProduct) {
    if (isProductInWishlist(product.id)) {
      setItems((prevState) =>
        prevState.filter((item) => item.id !== product.id)
      )
      setStorageItem(
        'wishlist',
        items.filter((item) => item.id !== product.id)
      )
    } else {
      setStorageItem('wishlist', [...items, product])
      setItems((prevState) => [...prevState, product])
    }
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        isProductInWishlist,
        addOrRemoveProductOfWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
