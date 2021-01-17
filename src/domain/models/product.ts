export type ProductModel = {
  uid: string
  price: number
  name: string
  code: string
  company: string
  createdBy?: string
}

export type ProductBasicModel = {
  price: number
  name?: string
}
