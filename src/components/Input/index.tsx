import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = {
  error: string | string[]
  icon: JSX.Element
} & InputHTMLAttributes<HTMLInputElement>

function Input({ error, icon, ...rest }: InputProps) {
  function getErrorBooleanValue() {
    if (typeof error == 'object') {
      return error.some((err) => err !== undefined)
    } else {
      return !!error
    }
  }

  const isError = getErrorBooleanValue()

  return (
    <S.Wrapper>
      <S.Input error={isError}>
        {icon}
        <input {...rest} />
      </S.Input>
      {error && <span>{error}</span>}
    </S.Wrapper>
  )
}

export default Input
