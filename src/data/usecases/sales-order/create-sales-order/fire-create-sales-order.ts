import { FireClient } from '@/infra'
import { SALES } from '@/infra/constants/collections'
import { CreateSalesOrder } from '@/domain/usecases/sales-order/create-sales-order'
import { GetCompany } from '@/domain/usecases/company/get-company'
import { GetAccount } from '@/domain/usecases/account/get-account'
import { makeUuid } from '@/data/factories/uuid-factory'
import { getNow } from '@/data/helpers/date-helper'

export class FireCreateSalesOrder extends FireClient implements CreateSalesOrder {
  constructor (
    private readonly verifyEmitter: GetAccount,
    private readonly verifyCompany: GetCompany
  ) {
    super()
    this.verifyEmitter = verifyEmitter
    this.verifyCompany = verifyCompany
  }

  execute = async (params: CreateSalesOrder.Params): Promise<CreateSalesOrder.Model | any> => {
    try {
      const company = await this.verifyCompany.execute({
        cnpj: params.company
      })

      if (!company) {
        throw new Error('Essa empresa não foi encontrada...')
      }

      const emitter = await this.verifyEmitter.execute({
        uid: params.emitter
      })

      if (!emitter) {
        throw new Error('Emissor da venda não foi encontrado...')
      }

      if (params.price <= 0) {
        throw new Error('Venda com valor zero? Algo deu errado nas contas')
      }

      const salesUid = makeUuid('SL')

      const docSalesRef = this.db.collection(SALES).doc(salesUid)

      const sales: CreateSalesOrder.Model = {
        price: params.price,
        items: params.items,
        timestamp: getNow(),
        company,
        emitter
      }

      await docSalesRef.set(sales)

      return sales
    } catch (error) {
      throw new Error(error)
    }
  }
}
