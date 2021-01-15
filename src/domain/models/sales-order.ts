import { ProductModel } from './product'
import { AccountModel } from './account'
import { ClientModel } from './client'

export type SalesOrderModel = {
  price: number
  items: ProductModel[]
  company: AccountModel
  emitter: AccountModel
  timestamp: string
  client?: ClientModel
}
