import { FireClient } from '@/infra'
import { SALES, ACCOUNT } from '@/infra/constants/collections'
import { CreateSalesOrder } from '@/domain/usecases/sales-order/create-sales-order'
import { GetAccount } from '@/domain/usecases/account/get-account'
import { makeUuid } from '@/data/factories/uuid-factory'
import { getNow, getDay } from '@/data/helpers/date-helper'

export class FireCreateSalesOrder extends FireClient implements CreateSalesOrder {
  constructor (
    private readonly verifyAccount: GetAccount
  ) {
    super()
    this.verifyAccount = verifyAccount
  }

  execute = async (params: CreateSalesOrder.Params): Promise<CreateSalesOrder.Model | any> => {
    try {
      if (params.price <= 0) {
        throw new Error('Venda com valor zero? Algo deu errado nas contas')
      }

      const company = await this.verifyAccount.execute({
        uid: params.uid_company
      })

      if (!company) {
        throw new Error('Essa empresa não foi encontrada...')
      }

      const emitter = await this.verifyAccount.execute({
        uid: params.uid_emitter
      })

      if (!emitter) {
        throw new Error('Emissor da venda não foi encontrado...')
      }

      const salesUid = makeUuid('SL')
      const daySales = getDay()

      const docSalesRef = this.db.collection(ACCOUNT).doc(params.uid_company)
        .collection(SALES)
        .doc(daySales)
        .collection(SALES)
        .doc(salesUid)

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
