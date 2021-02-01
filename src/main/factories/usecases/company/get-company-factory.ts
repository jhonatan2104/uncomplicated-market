import { FireGetCompany } from '@/data/usecases/company/get-company/fire-get-company'
import { GetCompany } from '@/domain/usecases/company'

export const makeGetCompany = (): GetCompany => {
  return new FireGetCompany()
}
