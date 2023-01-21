import Home from './home'
import { api } from 'lib/axios'
import { IProduct } from '../@types/product'

export type HomeProps = {
  products: IProduct[]
}

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const { data: products } = await api({ method: 'GET', url: '/products' })

  return {
    props: {
      products
    }
  }
}
