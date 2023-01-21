import { api } from 'lib/axios'

import Product from 'components/Product'
import * as S from './styles'
import { IProduct } from '../../@types/product'
import { Heading } from 'components/Heading'
import Hr from 'components/Hr'

type ProductsProps = {
  products: IProduct[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading>Produtos</Heading>
        <Hr />
      </S.Header>
      <S.Products>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.images[0].image_url}
          />
        ))}
      </S.Products>
    </S.Wrapper>
  )
}

export async function getServerSideProps() {
  const { data: products } = await api({ method: 'GET', url: '/products' })

  return {
    props: {
      products
    }
  }
}
