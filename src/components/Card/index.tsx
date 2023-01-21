import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type CardProps = {
  size: 'normal' | 'large'
  title: string
  image: string
  description?: string
}

function Card({ size, title, image, description }: CardProps) {
  if (size === 'large') {
    return (
      <S.Wrapper size="large">
        <h4>{title}</h4>
        <p>{description}</p>
        <Button size="small" variant="outlined">
          Ver mais
        </Button>

        <S.ImageWrapperBig>
          <Image src={image} alt={title} layout="fill" />
        </S.ImageWrapperBig>
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <h4>{title}</h4>
      <Link href="/products" passHref legacyBehavior>
        <Button size="small" variant="outlined">
          Ver mais
        </Button>
      </Link>

      <S.ImageWrapper>
        <Image src={image} alt={title} layout="fill" />
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default Card
