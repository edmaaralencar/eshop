import { useState } from 'react'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import { FiArrowRight, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import prisma from 'lib/prisma'

import { api } from '../../../lib/axios'
import { useCart } from 'hooks/use-cart'
import { formatMoney } from 'utils/format-money'
import { IProduct } from '../../../@types/product'

import Button from 'components/Button'
import { Heading } from 'components/Heading'
import Hr from 'components/Hr'
import Slider from 'components/Slider'

import * as S from './styles'
import { formatImageUrl } from 'utils/format-image-url'

type ProductProps = {
  product: IProduct
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default function Product({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1)

  const { status } = useSession()
  const { addProductToCart } = useCart()

  console.log(product)

  return (
    <S.Wrapper>
      <S.Header>
        <Heading>{product.name}</Heading>
        <Hr />
      </S.Header>
      <S.Product>
        <S.ImgContainer>
          <Slider>
            {product.images.map((img) => (
              <S.ProductImage key={img.id}>
                <Image
                  layout="fill"
                  src={formatImageUrl(img.image_url)}
                  alt={product.name}
                />
              </S.ProductImage>
            ))}
          </Slider>
        </S.ImgContainer>
        <S.ProductContent>
          <h2>{product.name}</h2>
          <strong>{formatMoney(product.price)}</strong>
          <p>{product.description}</p>
          <S.ProductQuantityTotal>
            <S.ProductQuantity>
              <button onClick={() => setQuantity((state) => (state -= 1))}>
                <FiMinusCircle strokeWidth={1} size={32} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((state) => (state += 1))}>
                <FiPlusCircle strokeWidth={1} size={32} />
              </button>
            </S.ProductQuantity>
            <strong>{formatMoney(product?.price * quantity)}</strong>
          </S.ProductQuantityTotal>
          <S.ButtonWrapper>
            <Button
              size="small"
              icon={<FiArrowRight size={24} />}
              onClick={() => addProductToCart({ id: product.id, quantity })}
              disabled={status === 'unauthenticated'}
            >
              Adicionar ao carrinho
            </Button>
          </S.ButtonWrapper>
        </S.ProductContent>
      </S.Product>
    </S.Wrapper>
  )
}

export async function getStaticPaths() {
  const products = await prisma.product.findMany({})

  const paths = products.map(({ id }: { id: string }) => ({ params: { id } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<ProductProps, Params> = async (
  context
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const params = context.params!
  // const { data } = await api({
  //   method: 'GET',
  //   url: `/products/${params.id}`
  // })

  const product = await prisma.product.findUnique({
    where: {
      id: String(params.id)
    },
    include: {
      images: true
    }
  })

  if (!product) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: {
      product: JSON.parse(JSON.stringify(product))
    }
  }
}
