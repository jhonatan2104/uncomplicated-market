/* eslint-disable @typescript-eslint/default-param-last */
import { SET_COOPERATOR, CooperatorActionTypes } from './@types/actions'
import { CooperatorState } from './@types/state'

const initialState: CooperatorState = {
  company: undefined,
  status: ''
}

export function cooperatorReducer (
  state = initialState,
  action: CooperatorActionTypes
): CooperatorState {
  switch (action.type) {
    case SET_COOPERATOR:
      return {
        ...state,
        company: action.payload.company,
        status: action.payload.status
      }
    default:
      return state
  }
}
