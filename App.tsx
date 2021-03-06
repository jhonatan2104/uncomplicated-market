import React, { useEffect, useState } from 'react'
import { View, LogBox } from 'react-native'

import AppThemeProvider from '@/main/factories/theme/theme-provider-factory'
import AppStoreProvider from '@/main/factories/store/store-provider-factory'

import Router from '@/main/router'

import { helpersLoadingApp } from '@/main/helpers'

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    helpersLoadingApp().then(() => {
      console.log('App Loading')
      setLoading(true)
    })
      .catch((err: Error) => {
        console.log(`Error App Loading ${err.message}`)
      })
  }, [])

  if (!loading) {
    return <View />
  }
  return (
    <AppStoreProvider>
      <AppThemeProvider>
        <Router />
      </AppThemeProvider>
    </AppStoreProvider>

  )
}

export default App
