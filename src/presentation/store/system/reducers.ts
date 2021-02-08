/* eslint-disable @typescript-eslint/default-param-last */
import { SET_ACCOUNT, SET_TYPE_ACCOUNT, SystemActionTypes } from './@types/actions'
import { SystemState } from './@types/state'

const initialState: SystemState = {
  typeAccount: 'COOPERATOR',
  account: undefined
}

export function systemReducer (
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case SET_TYPE_ACCOUNT:
      return {
        ...state,
        typeAccount: action.payload
      }
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
        typeAccount: action.payload.type.identifier
      }
    default:
      return state
  }
}
