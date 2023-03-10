import axios from 'axios'

export const api = axios.create({
  baseURL: `${
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://eshop-plum.vercel.app'
  }/api`
})
