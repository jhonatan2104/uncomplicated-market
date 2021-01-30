/* eslint-disable @typescript-eslint/default-param-last */
import { SET_TYPE_ACCOUNT, SystemActionTypes } from './@types/actions'
import { SystemState } from './@types/state'

const initialState: SystemState = {
  typeAccount: 'COOPERATOR'
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
    default:
      return state
  }
}
