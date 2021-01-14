import { CreateCooperator } from '@/domain/usecases/cooperator'
import { CreateAccount } from '@/domain/usecases/account'
import { VerifyAccessCode } from '@/domain/usecases/company'
import { FireClient } from '@/infra'
import { COOPERATOR } from '@/infra/constants/collections'
import { TYPE_COOPERATOR } from '@/data/constants/account'

export class FireCreateCooperator extends FireClient implements CreateCooperator {
  constructor (
    private readonly createAccount: CreateAccount,
    private readonly verifyAccessCode: VerifyAccessCode
  ) {
    super()
    this.createAccount = createAccount
    this.verifyAccessCode = verifyAccessCode
  }

  execute = async (params: CreateCooperator.Params): Promise<CreateCooperator.Model> => {
    try {
      const verifyAccess = await this.verifyAccessCode
        .execute({
          cnpj: params.cnpj,
          accessCode: params.accessCode
        })

      if (verifyAccess) {
        const account = await this.createAccount
          .execute({
            name: params.name,
            password: params.password,
            email: params.email,
            type: {
              identifier: TYPE_COOPERATOR
            }
          })

        const cooperatorRefDoc = this.db.collection(COOPERATOR).doc(account.uid)

        const newCooperator = {
          account,
          company: params.cnpj,
          status: 'ACTIVE'
        }

        await cooperatorRefDoc.set(newCooperator)

        return newCooperator
      } else {
        throw new Error('Código acesso inválido')
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
