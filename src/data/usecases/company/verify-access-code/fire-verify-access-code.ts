import { VerifyAccessCode } from '@/domain/usecases/company/verify-access-code'
import { FireClient } from '@/infra'
import { COMPANY } from '@/infra/constants/collections'

export class FireVerifyAccessCode extends FireClient implements VerifyAccessCode {
  execute = async (params: VerifyAccessCode.Params): Promise<boolean> => {
    try {
      const companyResult = await this.db.collection(COMPANY).doc(params.cnpj).get()

      if (!companyResult.exists) {
        throw new Error(`A empresa com o cnpj ${params.cnpj} não existe`)
      } else {
        const company = companyResult.data()

        return company?.accessCode === params.accessCode
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}
