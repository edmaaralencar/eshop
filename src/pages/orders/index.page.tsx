import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from 'lib/axios'
import { formatMoney } from 'utils/format-money'
import protectedRoutes from 'utils/protected-routes'
import { formatImageUrl } from 'utils/format-image-url'

import { IProduct } from '../../@types/product'

import Button from 'components/Button'
import Sidebar from 'components/Sidebar'

import * as S from './styles'

export interface IOrder {
  id: string
  card_brand: string
  card_last4: string
  total: number
  created_at: Date
  order_products: Array<{
    id: string
    quantity: number
    product: IProduct
  }>
}

type OrdersProps = {
  orders: IOrder[]
}

export default function Orders({ orders }: OrdersProps) {
  return (
    <S.Wrapper>
      <Sidebar />

      <S.Container>
        <h2>Meus pedidos</h2>

        <S.OrdersList>
          {orders?.map((order) => (
            <S.Order key={order.id}>
              <S.OrderLabel>
                <span>Detalhes</span>
                <span>Preço</span>
              </S.OrderLabel>
              <S.Hr />
              <S.OrderBody>
                {order.order_products.map((item) => (
                  <S.OrderProduct key={item.id}>
                    <S.OrderProductContent>
                      <Image
                        src={formatImageUrl(item.product.images[0].image_url)}
                        alt={item.product.name}
                        width={100}
                        height={100}
                      />

                      <div>
                        <span>{item.product.name}</span>
                        <Link
                          href={`/products/${item.product.id}`}
                          passHref
                          legacyBehavior
                        >
                          <Button as="a" size="small">
                            Comprar novamente
                          </Button>
                        </Link>
                      </div>
                    </S.OrderProductContent>
                    <S.OrderProductPrice>
                      <h3>{formatMoney(item.product.price)}</h3>
                      <span>x{item.quantity}</span>
                    </S.OrderProductPrice>
                  </S.OrderProduct>
                ))}
              </S.OrderBody>
              <S.OrderFooter>
                <div>
                  <span>Pedido realizado</span>
                  <strong>{new Date(order.created_at).toLocaleString()}</strong>
                </div>
                <div>
                  <span>Pedido nº</span>
                  <strong>{order.id}</strong>
                </div>
                <div className="last">
                  <span>Total</span>
                  <strong>{formatMoney(order.total / 100)}</strong>
                </div>
              </S.OrderFooter>
            </S.Order>
          ))}
        </S.OrdersList>
      </S.Container>
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

  const { data } = await api({
    url: '/orders',
    method: 'GET',
    headers: {
      Cookie: context.req.headers.cookie
    }
  })

  return {
    props: {
      session,
      orders: data
    }
  }
}
