import { FireCreateCooperator } from '@/data/usecases/cooperator/create-cooperator/fire-create-cooperator'
import { CreateCooperator } from '@/domain/usecases/cooperator'
import { makeCreateAccount } from '../account/create-account-factory'
import { makeVerifyAccessCode } from '../company/verify-access-code-factory'

export const makeCreateCooperator = (): CreateCooperator => {
  const verifyAccessCode = makeVerifyAccessCode()
  const createAccount = makeCreateAccount()

  return new FireCreateCooperator(createAccount, verifyAccessCode)
}
