import { FireVerifyAccessCode } from '@/data/usecases/company/verify-access-code/fire-verify-access-code'
import { VerifyAccessCode } from '@/domain/usecases/company'

export const makeVerifyAccessCode = (): VerifyAccessCode => {
  return new FireVerifyAccessCode()
}
