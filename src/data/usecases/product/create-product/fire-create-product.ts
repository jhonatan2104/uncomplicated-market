import { FireClient } from '@/infra'
import { PRODUCTS } from '@/infra/constants/collections'
import { CreateProduct } from '@/domain/usecases/product/create-product'
import { makeUuid } from '@/data/factories/uuid-factory'

export class FireCreateProduct extends FireClient implements CreateProduct {
  execute = async (params: CreateProduct.Params): Promise<CreateProduct.Model> => {
    try {
      if (params.price <= 0) {
        throw new Error('Produto com o valor zero? Acho que algo deu errado.')
      }

      const productUid = makeUuid('PD')

      const docProductRef = this.db.collection(PRODUCTS).doc(productUid)

      const sales: CreateProduct.Model = {
        uid: productUid,
        price: params.price,
        name: params.name,
        code: params.code,
        company: params.company
      }

      await docProductRef.set(sales)

      return sales
    } catch (error) {
      throw new Error(error)
    }
  }
}
