import { CreateCompany } from '@/domain/usecases/company'
import { CreateAccount } from '@/domain/usecases/account'
import { FireClient } from '@/infra'
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
      const newCompany = {
        name: params.name,
        password: params.password,
        email: params.email,
        type: {
          identifier: TYPE_COMPANY,
          cnpj: params.cnpj,
          accessCode: params.accessCode
        }
      }

      const account = await this.createAccount
        .execute(newCompany)

      return account
    } catch (error) {
      throw new Error(error)
    }
  }
}
