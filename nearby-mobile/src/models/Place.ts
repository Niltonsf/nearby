export interface Rule {
  description: string
  id: string
  marketId: string
}

export interface Place {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
  categoryId: string
  latitude: number
  longitude: number
  phone: string
  rules: Rule[]
}
