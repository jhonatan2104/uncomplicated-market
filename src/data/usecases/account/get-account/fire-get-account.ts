import { GetAccount } from '@/domain/usecases/account/get-account'
import { FireClient } from '@/infra'
import { ACCOUNT } from '@/infra/constants/collections'

export class FireGetAccount extends FireClient implements GetAccount {
  execute = async (params: GetAccount.Params): Promise<GetAccount.Model> => {
    try {
      const accountDoc = await this.db.collection(ACCOUNT).doc(params.uid).get()

      if (!accountDoc.exists) {
        return null
      }

      const accountData = accountDoc.data()

      const account = {
        uid: accountData?.uid,
        name: accountData?.name,
        email: accountData?.email,
        type: accountData?.type
      }

      return account
    } catch (error) {
      throw new Error(error)
    }
  }
}
