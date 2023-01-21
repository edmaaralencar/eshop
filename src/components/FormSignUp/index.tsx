import Button from 'components/Button'
import Input from 'components/Input'
import useErrors from 'hooks/use-errors'
import { api } from 'lib/axios'
import Link from 'next/link'
import Router from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { toast } from 'react-toastify'
import isEmailValid from 'utils/is-email-valid'
import * as S from './styles'

function FormSignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setError, removeError, errors, getErrorMessageByFieldName } =
    useErrors()

  const isFormValid = name && email && password && errors.length === 0

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
    }
  }

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
      name,
      email,
      password
    }

    try {
      const response = await api.post('/users/sign-up', values)
      console.log(response)
      toast.success('Conta criada com sucesso.')
      Router.push('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit} noValidate>
      <S.InputContainer>
        <Input
          icon={<FiUser size={22} color="#2E2E2E" />}
          error={getErrorMessageByFieldName('name') as string}
          onChange={handleNameChange}
          value={name}
          placeholder="Nome*"
        />

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
        Possui uma conta? <Link href="/sign-in">Faça login</Link>
      </S.AuthLink>
    </S.Wrapper>
  )
}

export default FormSignUp
