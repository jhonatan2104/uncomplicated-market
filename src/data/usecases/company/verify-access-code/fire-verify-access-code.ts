import { VerifyAccessCode } from '@/domain/usecases/company/verify-access-code'
import { FireClient } from '@/infra'
import { ACCOUNT } from '@/infra/constants/collections'

export class FireVerifyAccessCode extends FireClient implements VerifyAccessCode {
  execute = async (params: VerifyAccessCode.Params): Promise<boolean> => {
    try {
      const accountQuerySnapshot = await this.db.collection(ACCOUNT).where('type.cnpj', '==', params.cnpj).get()

      if (accountQuerySnapshot.empty) {
        throw new Error(`A empresa com o cnpj ${params.cnpj} não existe`)
      } else {
        const account = accountQuerySnapshot.docs[0].data()

        return account?.type?.accessCode === params.accessCode
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}
