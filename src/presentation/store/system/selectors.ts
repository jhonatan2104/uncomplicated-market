import { IRootState } from '../root-reducers'
import { TypeAccount } from './@types/state'

export const getTypeAccount = (state: IRootState): TypeAccount => {
  return state.system.typeAccount
}
