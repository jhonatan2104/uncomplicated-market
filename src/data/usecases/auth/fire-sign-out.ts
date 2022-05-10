import { SignOut } from '@/domain/usecases/session/sign-out'
import { FireClient } from '@/infra'

export class FireSignOut extends FireClient implements SignOut {
  execute = async (): Promise<void> => {
    await this.core.auth().signOut()
  }
}
