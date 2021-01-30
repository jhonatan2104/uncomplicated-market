import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import AppThemeProvider from '@/main/factories/theme/theme-provider-factory'

import Router from '@/main/router'

import { helpersLoadingApp } from '@/main/helpers'

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
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  )
}

export default App
