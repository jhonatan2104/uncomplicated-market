
import { CompanyState } from './company/@types/state'
import { CooperatorState } from './cooperator/@types/state'
import { IRootState } from './root-reducers'
import { TypeAccount } from './system/@types/state'

export const getContentAccount = (state: IRootState, typeAccount: TypeAccount): CompanyState | CooperatorState => {
  return typeAccount === 'COMPANY' ? state.company : state.cooperator
}
