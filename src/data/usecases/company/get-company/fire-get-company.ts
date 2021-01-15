import { GetCompany } from '@/domain/usecases/company/get-company'
import { FireClient } from '@/infra'
import { ACCOUNT } from '@/infra/constants/collections'

export class FireGetCompany extends FireClient implements GetCompany {
  execute = async (params: GetCompany.Params): Promise<GetCompany.Model> => {
    try {
      const accountQuerySnapshot = await this.db.collection(ACCOUNT).where('type.cnpj', '==', params.cnpj).get()

      if (accountQuerySnapshot.empty) {
        return null
      }

      const accountData = accountQuerySnapshot.docs[0].data()

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
