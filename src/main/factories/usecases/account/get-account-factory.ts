import { FireGetAccount } from '@/data/usecases/account/get-account/fire-get-account'
import { GetAccount } from '@/domain/usecases/account/get-account'

export const makeGetAccount = (): GetAccount => {
  return new FireGetAccount()
}
