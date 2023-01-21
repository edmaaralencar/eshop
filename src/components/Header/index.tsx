import { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { FiBriefcase, FiUser, FiHeart, FiLogOut } from 'react-icons/fi'
import * as Dialog from '@radix-ui/react-dialog'
import * as HoverCard from '@radix-ui/react-hover-card'

import { useCart } from 'hooks/use-cart'

import Cart from 'components/Cart'
import Button from 'components/Button'
import Logo from 'components/Logo'
import FavoriteDropdown from 'components/FavoriteDropdown'

import * as S from './styles'

function Header() {
  const [openCart, setOpenCart] = useState(false)
  const { data: session } = useSession()
  const { quantity } = useCart()

  function handleCloseCart() {
    setOpenCart(false)
  }

  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <Dialog.Root open={openCart} onOpenChange={setOpenCart}>
        <S.Wrapper>
          <Link href="/" passHref>
            <a>
              <Logo />
            </a>
          </Link>

          {session ? (
            <S.Nav>
              <Link href="/profile" passHref>
                <a href="">
                  <FiUser size={26} color="#071B39" />
                </a>
              </Link>
              <HoverCard.Trigger asChild>
                <button data-testid="open-wishlist">
                  <FiHeart size={26} color="#071B39" />
                </button>
              </HoverCard.Trigger>
              <Dialog.Trigger asChild>
                <button aria-label="open-cart">
                  <FiBriefcase size={26} color="#071B39" />
                  <span>{quantity}</span>
                </button>
              </Dialog.Trigger>
              <button>
                <FiLogOut size={26} color="#071b39" onClick={() => signOut()} />
              </button>
            </S.Nav>
          ) : (
            <Link href="/sign-in" passHref>
              <Button size="small" as="a">
                Login
              </Button>
            </Link>
          )}
        </S.Wrapper>

        <Cart onCloseCart={handleCloseCart} />
        <FavoriteDropdown />
      </Dialog.Root>
    </HoverCard.Root>
  )
}

export default Header
