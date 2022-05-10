import { FireSignOut } from '@/data/usecases/auth/fire-sign-out'
import { SignOut } from '@/domain/usecases/session/sign-out'

export const makeFireSignOut = (): SignOut => {
  return new FireSignOut()
}
