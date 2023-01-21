import Button from 'components/Button'
import Input from 'components/Input'
import Sidebar from 'components/Sidebar'
import useErrors from 'hooks/use-errors'
import { api } from 'lib/axios'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import { toast } from 'react-toastify'
import isEmailValid from 'utils/is-email-valid'
import protectedRoutes from 'utils/protected-routes'
import * as S from './styles'

export default function Profile() {
  const session = useSession()
  const [email, setEmail] = useState(session?.data?.user?.email)
  const [name, setName] = useState(session?.data?.user?.name)

  const { setError, removeError, errors, getErrorMessageByFieldName } =
    useErrors()

  const isFormValid = email && name && errors.length === 0

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (!isEmailValid(event.target.value)) {
      setError({ field: 'email-invalid', message: 'E-mail é inválido.' })
    } else {
      removeError('email-invalid')
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    try {
      await api({
        method: 'PUT',
        url: '/users',
        data: {
          name,
          email
        }
      })

      const event = new Event('visibilitychange')
      document.dispatchEvent(event)

      window.location.reload()

      toast.success('Conta atualizada com sucesso.')
    } catch (error) {
      console.log(error)
      toast.error('Ocorreu um erro. Tente novamente mais tarde.')
    }
  }

  return (
    <S.Wrapper>
      <Sidebar />

      <S.Container onSubmit={handleSubmit}>
        <h2>Minha conta</h2>

        <S.InputContainer>
          <Input
            icon={<FiUser size={22} color="#2E2E2E" />}
            error={getErrorMessageByFieldName('name') as string}
            onChange={handleNameChange}
            value={name as string}
            placeholder="Nome"
            type="name"
          />
          <Input
            icon={<FiMail size={22} color="#2E2E2E" />}
            error={getErrorMessageByFieldName('email') as string}
            onChange={handleEmailChange}
            value={email as string}
            placeholder="E-mail"
            type="email"
          />
        </S.InputContainer>

        <Button disabled={!isFormValid} type="submit">
          Atualizar dados
        </Button>
      </S.Container>
    </S.Wrapper>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return {
      props: {}
    }
  }

  return {
    props: {
      session
    }
  }
}
