import { CreateCompany, GetCompany } from '@/domain/usecases/company'
import { CreateAccount } from '@/domain/usecases/account'
import { FireClient } from '@/infra'
import { TYPE_COMPANY } from '@/data/constants/account'

export class FireCreateCompany extends FireClient implements CreateCompany {
  constructor (
    private readonly createAccount: CreateAccount,
    private readonly getCompany: GetCompany
  ) {
    super()
    this.createAccount = createAccount
    this.getCompany = getCompany
  }

  execute = async (params: CreateCompany.Params): Promise<CreateCompany.Model> => {
    try {
      const account = await this.getCompany.execute({ cnpj: params.cnpj })

      if (account) {
        throw new Error('Já existe uma empresa com esse CNPJ')
      }

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

      const newAccount = await this.createAccount
        .execute(newCompany)

      return newAccount
    } catch (error) {
      throw new Error(error)
    }
  }
}
