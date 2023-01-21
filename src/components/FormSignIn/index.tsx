import Button from 'components/Button'
import Input from 'components/Input'
import useErrors from 'hooks/use-errors'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import { toast } from 'react-toastify'
import isEmailValid from 'utils/is-email-valid'
import * as S from './styles'

function FormSignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setError, removeError, errors, getErrorMessageByFieldName } =
    useErrors()

  const isFormValid = email && password && errors.length === 0

  const router = useRouter()
  const { push, query } = router

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (!event.target.value) {
      removeError('email-invalid')
      setError({ field: 'email-obligatory', message: 'E-mail é obrigatório.' })
      return
    }

    removeError('email-obligatory')

    if (!isEmailValid(event.target.value)) {
      setError({ field: 'email-invalid', message: 'E-mail é inválido.' })
    } else {
      removeError('email-invalid')
    }
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)

    if (!event.target.value) {
      setError({
        field: 'password',
        message: 'Senha é obrigatória.'
      })
    } else {
      removeError('password')
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const values = {
      email,
      password
    }

    try {
      const result = await signIn('credentials', {
        ...values,
        redirect: false,
        callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
      })

      if (result?.ok) {
        return push(result?.url as string)
      }

      toast.error('Credenciais inválidas.')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InputContainer>
        <Input
          icon={<FiMail size={22} color="#2E2E2E" />}
          error={
            [
              getErrorMessageByFieldName('email-invalid'),
              getErrorMessageByFieldName('email-obligatory')
            ] as string[]
          }
          onChange={handleEmailChange}
          value={email}
          placeholder="Email*"
        />

        <Input
          icon={<FiLock size={22} color="#2E2E2E" />}
          error={getErrorMessageByFieldName('password') as string}
          onChange={handlePasswordChange}
          value={password}
          placeholder="Senha*"
          type="password"
        />
      </S.InputContainer>
      <Button type="submit" disabled={!isFormValid} fullWidth>
        Entrar
      </Button>
      <S.AuthLink>
        Não tem uma conta? <Link href="/sign-up">Registre-se</Link>
      </S.AuthLink>
    </S.Wrapper>
  )
}

export default FormSignIn
