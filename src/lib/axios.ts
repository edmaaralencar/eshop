import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://eshop-plum.vercel.app/api'
})
