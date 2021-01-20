import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

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
    <View style={styles.container}>
      <Router />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
