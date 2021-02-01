import { FireCreateAccount } from '@/data/usecases/account/create-account/fire-create-account'
import { CreateAccount } from '@/domain/usecases/account'

export const makeCreateAccount = (): CreateAccount => {
  return new FireCreateAccount()
}
