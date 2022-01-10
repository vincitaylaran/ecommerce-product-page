export interface Product {
  id: number
  name: string
  price: number
  thumbnails: string[]
  images: string[]
  description: string
  company: string
  discount?: number
}
