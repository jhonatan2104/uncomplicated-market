import { CreateAccount } from '@/domain/usecases/account'
import { FireClient } from '@/infra'
import { ACCOUNT } from '@/infra/constants/collections'

export class FireCreateAccount extends FireClient implements CreateAccount {
  execute = async (params: CreateAccount.Params): Promise<CreateAccount.Model> => {
    try {
      await this.core
        .auth()
        .createUserWithEmailAndPassword(params.email, params.password)

      const userCurrent = this.core.auth().currentUser

      if (userCurrent) {
        await userCurrent.updateProfile({ displayName: params.name })

        const userRefDoc = this.db.collection(ACCOUNT).doc(userCurrent.uid)

        const newAccount: CreateAccount.Model = {
          name: params.name,
          email: params.email,
          type: params.type,
          uid: userCurrent.uid
        }

        await userRefDoc.set(newAccount)

        return newAccount
      } else {
        throw new Error('Não foi possível criar o usuário')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
