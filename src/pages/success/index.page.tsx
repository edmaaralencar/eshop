import { useQuery } from '@tanstack/react-query'
import { api } from 'lib/axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IOrder } from 'pages/orders/index.page'
import { formatImageUrl } from 'utils/format-image-url'
import { formatMoney } from 'utils/format-money'
import * as S from './styles'

export default function Success() {
  const router = useRouter()
  const id = String(router.query.id)

  const { data, isLoading } = useQuery([`success/${id}`, id], async () => {
    const { data } = await api({
      method: 'GET',
      url: `/orders/${id}`
    })

    return data as IOrder
  })

  if (isLoading || !data) {
    return <p>Carregando...</p>
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Image src="/success.png" width={160} height={160} />
        <div>
          <h1>Compra feita com sucesso.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            aperiam vero excepturi quae ullam, quaerat voluptatibus ipsum
            aliquid, hic.
          </p>
        </div>
      </S.Header>
      <S.Body>
        <div>
          <span>
            Pedido nº: <strong>{data?.id}</strong>
          </span>
          <span>
            Data do pedido:{' '}
            <strong>
              {new Date(data?.created_at).toLocaleString().split(' ')[0]}
            </strong>
          </span>
        </div>

        <S.ProductDetails>
          <div>
            <span>Detalhes</span>
            <span>Preço</span>
          </div>

          <S.Hr />

          <S.ProductsList>
            {data?.order_products.map((item) => (
              <S.Product key={item.id}>
                <S.ProductContent>
                  <Image
                    src={formatImageUrl(item.product.images[0].image_url)}
                    width={70}
                    height={70}
                  />
                  <h4>{item.product.name}</h4>
                </S.ProductContent>
                <S.ProductPrice>
                  <strong>{formatMoney(item.product.price)}</strong>
                  <span>x{item.quantity}</span>
                </S.ProductPrice>
              </S.Product>
            ))}
          </S.ProductsList>

          <S.Hr />
        </S.ProductDetails>

        <div>
          <span></span>
          <span>
            Total: <strong>{formatMoney(data?.total / 100)}</strong>
          </span>
        </div>
      </S.Body>
    </S.Wrapper>
  )
}
