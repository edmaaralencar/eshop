import Link from 'next/link'
import { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'

import { useCart } from 'hooks/use-cart'
import { api } from 'lib/axios'

import Button from 'components/Button'

import * as S from './styles'

// function CheckoutForm({ error, setError }: CheckoutFormProps) {
function CheckoutForm() {
  const [error, setError] = useState<string | null>(null)
  const { clearCart, cartItems } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const payload = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })

    if (payload.error) {
      // setError(`Payment failed ${payload.error.message}`)
      setError(String(payload.error.message))
    } else {
      setError(null)

      clearCart()

      const { data } = await api({
        method: 'POST',
        url: '/orders',
        data: {
          cartItems,
          paymentIntentId: payload.paymentIntent?.id,
          paymentMethod: payload?.paymentIntent?.payment_method,
          total: payload.paymentIntent?.amount
        }
      })

      await router.push(`/success?id=${data.id}`)
    }
  }

  return (
    <S.Wrapper>
      <h2>Pagamento</h2>
      <form onSubmit={handleSubmit}>
        <PaymentElement />

        {error && <S.Error>{error} Tente novamente.</S.Error>}

        <S.ButtonContainer>
          <Link href="/products">
            <a href="">Continuar comprando</a>
          </Link>
          <Button type="submit" fullWidth disabled={!stripe || !elements}>
            Pagar
          </Button>
        </S.ButtonContainer>
      </form>
    </S.Wrapper>
  )
}

export default CheckoutForm
