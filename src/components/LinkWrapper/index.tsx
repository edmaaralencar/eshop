import Link from 'next/link'
import { ReactNode } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import * as S from './styles'

export type LinkWrapperProps = {
  href: string
  children: ReactNode
}

function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <Link href={href} passHref>
      <S.Wrapper>
        {children}
        <FiArrowRight size={22} color="#5B5B69" />
      </S.Wrapper>
    </Link>
  )
}

export default LinkWrapper
