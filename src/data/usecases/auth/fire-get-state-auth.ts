import { FireClient } from '@/infra'
import { GetAccount } from '@/domain/usecases/account/get-account'
import { StateAuth } from '@/domain/usecases/session/get-state-auth'

export class FireGetStateAuth extends FireClient implements StateAuth {
  constructor (
    private readonly getAccount: GetAccount
  ) {
    super()
    this.getAccount = getAccount
  }

  execute = async (): Promise<StateAuth.Model> => {
    return new Promise((resolve, reject) => {
      this.core.auth().onAuthStateChanged(
        async (user) => {
          const uidAccount = user?.uid
          if (uidAccount) {
            const account = await this.getAccount.execute({ uid: uidAccount })

            if (account) {
              resolve(account)
            } else {
              reject(new Error('Não conhecemos esse usuário... :('))
            }
          } else {
            reject(new Error('Acho que você errou a senha ou o email, mas, todo mundo erra. Tente outra vez!!'))
          }
        })
    }
    )
  }
}
