import { FireClient } from '@/infra'
import { PRODUCTS, ACCOUNT } from '@/infra/constants/collections'
import { CreateProduct } from '@/domain/usecases/product/create-product'
import { GetAccount } from '@/domain/usecases/account/get-account'
import { makeUuid } from '@/data/factories/uuid-factory'

export class FireCreateProduct extends FireClient implements CreateProduct {
  constructor (
    private readonly verifyAccount: GetAccount
  ) {
    super()
    this.verifyAccount = verifyAccount
  }

  execute = async (params: CreateProduct.Params): Promise<CreateProduct.Model> => {
    try {
      if (params.price <= 0) {
        throw new Error('Produto com o valor zero? Acho que algo deu errado.')
      }

      const company = await this.verifyAccount.execute({
        uid: params.uid_company
      })

      if (!company) {
        throw new Error('A empresa referenciada não foi encontrada...')
      }

      const productUid = makeUuid('PD')

      const docProductRef = this.db.collection(ACCOUNT).doc(params.uid_company)
        .collection(PRODUCTS)
        .doc(productUid)

      const product: CreateProduct.Model = {
        uid: productUid,
        price: params.price,
        name: params.name,
        code: params.code,
        company
      }

      await docProductRef.set(product)

      return product
    } catch (error) {
      throw new Error(error)
    }
  }
}
