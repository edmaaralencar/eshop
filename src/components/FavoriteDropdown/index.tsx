import Button from 'components/Button'
import Hr from 'components/Hr'
import IconButton from 'components/IconButton'
import { useWishlist } from 'hooks/use-wishlist'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { FiHeart } from 'react-icons/fi'
import { formatImageUrl } from 'utils/format-image-url'
import { formatMoney } from 'utils/format-money'

import * as S from './styles'

function FavoriteDropdown() {
  const { items, addOrRemoveProductOfWishlist, productIsInWishlist } =
    useWishlist()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Arrow />

        <S.FavoritesList>
          {items?.length < 1 ? (
            <S.EmptyList>
              <p>Nenhum item salvo.</p>
            </S.EmptyList>
          ) : (
            <>
              {items?.map((product) => (
                <Fragment key={product.id}>
                  <S.Favorite>
                    <S.FavoriteContainer>
                      <Image
                        alt={product.name}
                        src={formatImageUrl(product.images[0].image_url)}
                        width={100}
                        height={80}
                      />
                      <div>
                        <span>{product.name}</span>
                        <strong>{formatMoney(product.price)}</strong>
                      </div>
                    </S.FavoriteContainer>

                    <S.ButtonContainer>
                      <IconButton
                        onClick={() => addOrRemoveProductOfWishlist(product)}
                        icon={
                          productIsInWishlist(product.id) ? (
                            <FiHeart size={18} fill="#6C6CFF" color="#6C6CFF" />
                          ) : (
                            <FiHeart size={18} color="#6C6CFF" />
                          )
                        }
                      />
                    </S.ButtonContainer>

                    <Link href={`/products/${product.id}`} passHref>
                      <Button as="a" variant="secondary" fullWidth size="small">
                        Ver mais
                      </Button>
                    </Link>
                  </S.Favorite>
                  <Hr />
                </Fragment>
              ))}
            </>
          )}
        </S.FavoritesList>
      </S.Content>
    </S.Wrapper>
  )
}

export default FavoriteDropdown
