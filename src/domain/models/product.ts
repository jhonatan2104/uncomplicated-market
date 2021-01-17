import { AccountModel } from './account'

export type ProductModel = {
  uid: string
  price: number
  name: string
  code: string
  company: AccountModel
  createdBy?: AccountModel
}

export type ProductBasicModel = {
  price: number
  name?: string
}
