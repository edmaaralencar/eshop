import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  variant?: 'primary' | 'outlined' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: ElementType
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    children,
    icon,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      icon={!!icon}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      <span>{children}</span>
      {icon}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
