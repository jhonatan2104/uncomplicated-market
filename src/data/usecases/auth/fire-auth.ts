import { Auth } from '@/domain/usecases/session/auth'
import { FireClient } from '@/infra'
import { GetAccount } from '@/domain/usecases/account/get-account'

export class FireAuth extends FireClient implements Auth {
  constructor (
    private readonly getAccount: GetAccount
  ) {
    super()
    this.getAccount = getAccount
  }

  auth = async (params: Auth.Params): Promise<Auth.Model> => {
    try {
      const auth = await this.core.auth().signInWithEmailAndPassword(params.email, params.password)

      const uidAccount = auth.user?.uid

      if (uidAccount) {
        const account = await this.getAccount.execute({ uid: uidAccount })

        if (account) {
          return account
        } else {
          throw new Error('Não conhecemos esse usuário... :(')
        }
      } else {
        throw new Error('Acho que você errou a senha ou o email, mas, todo mundo erra. Tente outra vez!!')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
