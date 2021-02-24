
import { CompanyState } from './company/@types/state'
import { CooperatorState } from './cooperator/@types/state'

export const getContentAccount = (state: any, typeAccount: string): CompanyState & CooperatorState => {
  return typeAccount === 'COMPANY' ? state.company : state.cooperator
}
