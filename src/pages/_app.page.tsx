import Header from 'components/Header'
import { CartProvider } from 'hooks/use-cart'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/react-query'
import { WishlistProvider } from 'hooks/use-wishlist'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>EShop</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <meta
                  name="description"
                  content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
                />
              </Head>
              <GlobalStyles />
              <ToastContainer />
              {router.pathname !== '/sign-in' &&
                router.pathname !== '/sign-up' && <Header />}
              <Component {...pageProps} />

              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default App
