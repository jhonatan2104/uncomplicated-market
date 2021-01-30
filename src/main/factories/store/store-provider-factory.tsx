import React from 'react'
import { Provider } from 'react-redux'

import { configureStore } from '@/presentation/store'

type Props = {
  children: React.ReactNode
}

const AppThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const store = configureStore()
  return (
    <Provider {...{ store }}>
      {children}
    </Provider>
  )
}

export default AppThemeProvider
