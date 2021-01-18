import { AccountModel } from '@/domain/models'

export type ProductModel = {
  uid: string
  price: number
  name: string
  code: string
  company: AccountModel
  createdBy?: string
}

export type ProductBasicModel = {
  price: number
  name?: string
}
