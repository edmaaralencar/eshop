export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  images: IProductImage[]
}

export interface IProductImage {
  id: string
  image_url: string
}
