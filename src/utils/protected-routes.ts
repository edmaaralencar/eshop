import { GetServerSidePropsContext } from 'next'
// import { unstable_getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
// import { options } from 'pages/api/auth/[...nextauth].api'

async function protectedRoutes(context: GetServerSidePropsContext) {
  // const session = await unstable_getServerSession(
  //   context.req,
  //   context.res,
  //   options
  // )

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: `/sign-in?callbackUrl=${context.resolvedUrl}`,
  //       permanent: false
  //     }
  //   }
  // }

  const session = await getSession(context)

  if (!session) {
    context.res.setHeader(
      'Location',
      `/sign-in?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
  }

  return session
}

export default protectedRoutes
