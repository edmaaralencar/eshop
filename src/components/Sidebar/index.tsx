import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineBorderColor, MdLogout } from 'react-icons/md'

import * as S from './styles'

function Sidebar() {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Link href="/profile" passHref legacyBehavior>
        <S.NavItem active={router.pathname === '/profile'}>
          <RiAccountCircleLine
            color={router.pathname === '/profile' ? '#ffffff' : '#18183F'}
            size={24}
          />
          <span>Minha conta</span>
        </S.NavItem>
      </Link>
      <Link href="/orders" passHref legacyBehavior>
        <S.NavItem active={router.pathname === '/orders'}>
          <MdOutlineBorderColor
            color={router.pathname === '/orders' ? '#ffffff' : '#18183F'}
            size={24}
          />
          <span>Meus pedidos</span>
        </S.NavItem>
      </Link>
      {/* <Link href="/change-password" passHref>
        <S.NavItem active={router.pathname === '/change-password'}>
          <RiAccountCircleLine
            color={
              router.pathname === '/change-password' ? '#ffffff' : '#18183F'
            }
            size={24}
          />
          <span>Trocar senha</span>
        </S.NavItem>
      </Link> */}
      <S.NavItem as="button" onClick={() => signOut()} active={false}>
        <MdLogout color="#18183F" size={24} />
        <span>Sair da plataforma</span>
      </S.NavItem>
    </S.Wrapper>
  )
}

export default Sidebar
