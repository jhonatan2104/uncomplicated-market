import { CompanyModel } from './company'
import { CooperatorModel } from './cooperator'

export type AccountModel = {
  uid: string
  name: string
  email: string
  type: CompanyModel & CooperatorModel
}
