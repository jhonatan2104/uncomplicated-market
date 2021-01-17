import { FireClient } from '@/infra'
import { PRODUCTS } from '@/infra/constants/collections'
import { CreateProduct } from '@/domain/usecases/product/create-product'
import { GetProduct } from '@/domain/usecases/product/get-product'
import { GetCompany } from '@/domain/usecases/company/get-company'
import { makeUuid } from '@/data/factories/uuid-factory'

export class FireCreateProduct extends FireClient implements CreateProduct {
  constructor (
    private readonly verifyCompany: GetCompany,
    private readonly verifyProduct: GetProduct
  ) {
    super()
    this.verifyCompany = verifyCompany
    this.verifyProduct = verifyProduct
  }

  execute = async (params: CreateProduct.Params): Promise<CreateProduct.Model> => {
    try {
      if (params.price <= 0) {
        throw new Error('Produto com o valor zero? Acho que algo deu errado.')
      }

      //   const emitter = await this.verifyEmitter.execute({
      //     uid: params.createdBy
      //   })

      //   if (!emitter) {
      //     throw new Error('Emissor da venda não foi encontrado...')
      //   }

      const company = await this.verifyCompany.execute({
        cnpj: params.company
      })

      if (!company) {
        throw new Error('Essa empresa não foi encontrada...')
      }

      const product = await this.verifyProduct.execute({
        company: params.company,
        code: params.code
      })

      if (product) {
        throw new Error('Esse produto já existe...')
      }

      const productUid = makeUuid('PD')

      const docProductRef = this.db.collection(PRODUCTS).doc(productUid)

      const sales: CreateProduct.Model = {
        uid: productUid,
        price: params.price,
        name: params.name,
        code: params.code,
        company
      }

      await docProductRef.set(sales)

      return sales
    } catch (error) {
      throw new Error(error)
    }
  }
}
