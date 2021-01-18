import { GetProduct } from '@/domain/usecases/product/get-product'
import { FireClient } from '@/infra'
import { PRODUCTS, ACCOUNT } from '@/infra/constants/collections'

export class FireGetProduct extends FireClient implements GetProduct {
  execute = async (params: GetProduct.Params): Promise<GetProduct.Result> => {
    try {
      const productResult = await this.db.collection(ACCOUNT).doc(params.uid_company)
        .collection(PRODUCTS)
        .where('code', '==', params.code)
        .get()

      if (productResult.empty) {
        return null
      }

      const productData = productResult.docs[0].data()

      const product: GetProduct.Result = {
        name: productData.name,
        price: productData.price,
        uid: productData.uid,
        code: productData.code,
        company: productData.company,
        createdBy: productData.createdBy
      }

      return product
    } catch (error) {
      throw new Error(error)
    }
  }
}
