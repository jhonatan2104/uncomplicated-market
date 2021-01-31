import React from 'react'
import { View, ViewProps, ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native'
import Constants from 'expo-constants'
import theme from '@/presentation/theme'

type Props = {
  bg: string
  children: React.ReactNode
  bgBack?: string
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: 658
  },
  containerScroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 658
  },
  circle: {
    position: 'absolute',
    left: -122,
    width: '100%',
    height: '100%',
    borderRadius: 658,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  }
})

const BackgroundCircle: React.FC<ViewProps & Props> = (props: ViewProps & Props) => {
  const { children, bg, bgBack } = props

  return (
    <SafeAreaView style={{ backgroundColor: theme.colorsBase.darkWhite, flex: 1, marginTop: Constants.statusBarHeight }}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.containerScroll}
      >
        <View style={[
          styles.container,
          {
            backgroundColor: bgBack ?? theme.colorsBase.darkWhite
          }

        ]}>
          <View style={[
            styles.circle,
            {
              backgroundColor: bg
            }
          ]}>
            {children}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={{
          fontFamily: 'Roboto-Regular',
          fontSize: 23
        }}>v 1.0.0</Text>
      </View>
    </SafeAreaView>

  )
}

export default BackgroundCircle
