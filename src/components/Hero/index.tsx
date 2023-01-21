import Button from 'components/Button'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import * as S from './styles'

function Hero() {
  return (
    <S.Wrapper>
      <S.Content>
        <h1>Compre os melhores sapatos do mercado</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          suscipit deleniti, placeat nobis, ut, porro dignissimos distinctio.
        </p>
        <S.ButtonWrapper>
          <Button
            variant="outlined"
            icon={<FiArrowRight size={22} color="#ffffff" />}
            size="medium"
            as="a"
            href=""
          >
            Comprar
          </Button>
        </S.ButtonWrapper>
      </S.Content>
      <S.ImageWrapper>
        <Image src="/produto.png" alt="" layout="fill" />
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default Hero
