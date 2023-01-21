import { HomeProps } from 'pages/index.page'

import Card from 'components/Card'
import { Heading } from 'components/Heading'
import Hero from 'components/Hero'
import Hr from 'components/Hr'
import LinkWrapper from 'components/LinkWrapper'
import Product from 'components/Product'

import * as S from './styles'

function Home({ products }: HomeProps) {
  return (
    <S.Wrapper>
      <Hero />

      <S.Section>
        <S.SectionHeader>
          <Heading level={2}>Lançamentos</Heading>
          <LinkWrapper href="/products">Ver mais</LinkWrapper>
        </S.SectionHeader>
        <Hr />
        <S.Products>
          {products?.slice(0, 6).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0].image_url}
            />
          ))}
        </S.Products>

        <S.CardsContainer>
          <Card
            size="normal"
            title="Veja a coleção masculina de roupas"
            image="/produto.png"
          />
          <Card
            size="normal"
            title="Veja a coleção feminina de roupas"
            image="/produto.png"
          />
        </S.CardsContainer>

        <S.SectionHeader>
          <Heading level={2}>PRODUTOS</Heading>
          <LinkWrapper href="/products">Ver mais</LinkWrapper>
        </S.SectionHeader>
        <Hr />
        <S.Products>
          {products?.slice(6).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0].image_url}
            />
          ))}
        </S.Products>

        <S.CardContainer>
          <Card
            size="large"
            title="Veja as novidades da loja"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.  aliquid natus eveniet aliquam nobis velit veritatis vel excepturi laboriosam quod tenetur placeat!"
            image="/produto.png"
          />
        </S.CardContainer>
      </S.Section>
    </S.Wrapper>
  )
}

export default Home
