import { CreateCompany } from '@/domain/usecases/company'
import { CreateAccount } from '@/domain/usecases/account'
import { FireClient } from '@/infra'
import { COMPANY } from '@/infra/constants/collections'
import { TYPE_COMPANY } from '@/data/constants/account'

export class FireCreateCompany extends FireClient implements CreateCompany {
  constructor (
    private readonly createAccount: CreateAccount
  ) {
    super()
    this.createAccount = createAccount
  }

  execute = async (params: CreateCompany.Params): Promise<CreateCompany.Model> => {
    try {
      const account = await this.createAccount
        .execute({
          name: params.name,
          password: params.password,
          email: params.email,
          type: TYPE_COMPANY
        })

      const companyRefDoc = this.db.collection(COMPANY).doc(params.cnpj)

      const newCompany = {
        account,
        cnpj: params.cnpj,
        accessCode: params.accessCode
      }

      await companyRefDoc.set(newCompany)

      return newCompany
    } catch (error) {
      throw new Error(error)
    }
  }
}
