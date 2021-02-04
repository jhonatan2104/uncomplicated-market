import { FireGetStateAuth } from '@/data/usecases/auth/fire-get-state-auth'
import { StateAuth } from '@/domain/usecases/session/get-state-auth'
import { makeGetAccount } from '../account/get-account-factory'

export const makeFireGetStateAuth = (): StateAuth => {
  const getAccount = makeGetAccount()
  return new FireGetStateAuth(getAccount)
}
