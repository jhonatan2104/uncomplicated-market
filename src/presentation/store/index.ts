import { createStore, Store } from 'redux'
import throtlle from 'lodash/throttle'

import { RootState, IRootState } from './root-reducers'

export const configureStore = (): Store<IRootState, any> => {
  const store = createStore(RootState)

  store.subscribe(
    throtlle(() => {
      console.log('Storage')
    }, 5000)
  )
  return store
}
