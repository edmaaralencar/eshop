import { useRouter } from 'next/router'
import { FiX, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

import { useCart } from 'hooks/use-cart'
import { formatMoney } from 'utils/format-money'

import Button from 'components/Button'
import { Heading } from 'components/Heading'
import Loading from 'components/Loading'

import * as S from './styles'
import Image from 'next/image'
import { formatImageUrl } from 'utils/format-image-url'

type CartProps = {
  onCloseCart: () => void
}

function Cart({ onCloseCart }: CartProps) {
  const router = useRouter()
  const {
    cartItems,
    isLoading,
    total,
    handleIncrementProductInCart,
    handleDecrementProductInCart
  } = useCart()

  function handleGoToCheckout() {
    router.push('/checkout')
    onCloseCart()
  }

  return (
    <S.Wrapper>
      <S.Portal>
        <S.Overlay />
        <S.Content>
          <S.Title asChild>
            <Heading level={3}>Carrinho</Heading>
          </S.Title>
          <S.Hr />
          <S.Products>
            {cartItems.length < 0 && isLoading ? (
              <Loading />
            ) : cartItems.length > 0 ? (
              <>
                {cartItems?.map((item) => (
                  <S.Product key={item.product?.id}>
                    <S.ProductImage>
                      <Image
                        alt={item.product.name}
                        src={formatImageUrl(item.product?.images[0].image_url)}
                        width={130}
                        height={130}
                      />
                    </S.ProductImage>
                    <S.ProductContent>
                      <S.ProductName>{item.product?.name}</S.ProductName>
                      <S.ProductPrice>
                        {formatMoney(item?.product?.price)}
                      </S.ProductPrice>
                      <S.ProductQuantityTotal>
                        <S.ProductQuantity>
                          <button
                            onClick={() =>
                              handleDecrementProductInCart({
                                id: item?.product?.id,
                                quantity: item?.quantity
                              })
                            }
                          >
                            <FiMinusCircle strokeWidth={1} size={24} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleIncrementProductInCart({
                                id: item?.product?.id,
                                quantity: item?.quantity
                              })
                            }
                          >
                            <FiPlusCircle strokeWidth={1} size={24} />
                          </button>
                        </S.ProductQuantity>
                        <strong>
                          {formatMoney(item?.product?.price * item?.quantity)}
                        </strong>
                      </S.ProductQuantityTotal>
                    </S.ProductContent>
                  </S.Product>
                ))}
              </>
            ) : (
              <S.EmptyCart>Carrinho vazio</S.EmptyCart>
            )}
          </S.Products>
          <S.Hr />
          <S.Total>
            <span>Total:</span>
            <span>{formatMoney(total)}</span>
          </S.Total>
          <Button as="a" fullWidth size="large" onClick={handleGoToCheckout}>
            Finalizar compra
          </Button>
          <S.Close>
            <FiX size={30} color="#000000" />
          </S.Close>
        </S.Content>
      </S.Portal>
    </S.Wrapper>
  )
}

export default Cart
