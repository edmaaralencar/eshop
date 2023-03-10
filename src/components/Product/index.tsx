import Image from 'next/image'
import Link from 'next/link'
import { FiHeart } from 'react-icons/fi'
import { useSession } from 'next-auth/react'

import { useWishlist } from 'hooks/use-wishlist'
import { formatMoney } from 'utils/format-money'
import { formatImageUrl } from 'utils/format-image-url'

import Button from 'components/Button'
import IconButton from 'components/IconButton'

import * as S from './styles'

export type ProductProps = {
  id: string
  name: string
  image: string
  price: number
}

function Product({ id, name, image, price }: ProductProps) {
  const session = useSession()
  const { addOrRemoveProductOfWishlist, isProductInWishlist } = useWishlist()

  function handleAddToFavorites() {
    addOrRemoveProductOfWishlist({
      id,
      name,
      description: '',
      images: [{ id, image_url: image }],
      price
    })
  }

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.ImageWrapper>
          <Image src={formatImageUrl(image)} alt={name} fill priority />
        </S.ImageWrapper>
        {session.status === 'authenticated' && (
          <S.ButtonContainer>
            <IconButton
              onClick={handleAddToFavorites}
              icon={
                isProductInWishlist(id) ? (
                  <FiHeart size={24} fill="#6C6CFF" color="#6C6CFF" />
                ) : (
                  <FiHeart size={24} color="#6C6CFF" />
                )
              }
            />
          </S.ButtonContainer>
        )}
      </S.ImageContainer>
      <S.ProductInfo>
        <span>{name}</span>
        <strong>{formatMoney(price)}</strong>
      </S.ProductInfo>
      <Link href={`/products/${id}`} passHref legacyBehavior>
        <Button as="a" fullWidth>
          Ver mais
        </Button>
      </Link>
    </S.Wrapper>
  )
}

export default Product
