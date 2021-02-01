import { FireCreateCompany } from '@/data/usecases/company/create-company/fire-create-company'
import { CreateCompany } from '@/domain/usecases/company'
import { makeCreateAccount } from '../account/create-account-factory'
import { makeGetCompany } from './get-company-factory'

export const makeCreateCompany = (): CreateCompany => {
  const getCompany = makeGetCompany()
  const createAccount = makeCreateAccount()

  return new FireCreateCompany(createAccount, getCompany)
}
