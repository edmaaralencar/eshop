import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import protectedRoutes from 'utils/protected-routes'
import { formatMoney } from 'utils/format-money'
import { useCart } from 'hooks/use-cart'

import CheckoutForm from 'components/CheckoutForm'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { api } from 'lib/axios'
import { formatImageUrl } from 'utils/format-image-url'

const stripe = loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY))

export default function Checkout() {
  const [error, setError] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState('')

  const { cartItems, total } = useCart()

  useEffect(() => {
    async function setPaymentMode() {
      if (cartItems.length > 0) {
        const { data } = await api({
          method: 'POST',
          url: '/orders/create-payment-intent',
          data: { cartItems }
        })

        if (data.error) {
          setError(data.error)
        } else {
          setClientSecret(data.client_secret)
        }
      }
    }

    setPaymentMode()
  }, [cartItems])

  return (
    <S.Wrapper>
      <S.CartList>
        <S.CartBody>
          {cartItems.map((item) => (
            <S.Product key={item.product.id}>
              <Image
                src={formatImageUrl(item.product.images[0].image_url)}
                alt={item.product.name}
                width={140}
                height={140}
              />
              <S.ProductContent>
                <strong>{item.product.name}</strong>
                <span>Valor: {formatMoney(item.product.price)}</span>
                <span>Quantidade: {item.quantity}</span>
                <span>
                  Total: {formatMoney(item.quantity * item.product.price)}
                </span>
              </S.ProductContent>
            </S.Product>
          ))}
        </S.CartBody>

        <S.CartFooter>
          <span>Total:</span>
          <strong>{formatMoney(total)}</strong>
        </S.CartFooter>
      </S.CartList>

      {clientSecret && (
        <Elements key={clientSecret} stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm />
          {/* <CheckoutForm error={error} setError={setError} /> */}
        </Elements>
      )}
    </S.Wrapper>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return {
      props: {}
    }
  }

  return {
    props: {}
  }
}
