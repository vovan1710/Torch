export interface Product {
  img: string,
  price: string,
  id: string,
  name: {
    UA: string,
    RU: string
  },
  description: {
    UA: string,
    RU: string
  },
  size?: string
}
