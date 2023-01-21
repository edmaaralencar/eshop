import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type IconButtonProps = {
  icon?: JSX.Element
} & ButtonTypes

function IconButton({ icon, ...props }: IconButtonProps) {
  return <S.Wrapper {...props}>{icon}</S.Wrapper>
}

export default IconButton
