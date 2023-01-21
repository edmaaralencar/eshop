import Logo from 'components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

type AuthProps = {
  title: string
  children: ReactNode
}

function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Link href="/" passHref legacyBehavior>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
        </Link>
        <Image src="/produto.png" alt="Auth Image" width={550} height={380} />
      </S.ImageWrapper>
      <S.Content>
        <Link href="/" passHref legacyBehavior>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
        </Link>
        <S.Container>
          <S.Heading>{title}</S.Heading>
          {children}
        </S.Container>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
