import { FireAuth } from '@/data/usecases/auth/fire-auth'
import { Auth } from '@/domain/usecases/auth'
import { makeGetAccount } from '../account/get-account-factory'

export const makeFireAuth = (): Auth => {
  const getAccount = makeGetAccount()
  return new FireAuth(getAccount)
}
