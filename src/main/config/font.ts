import { loadAsync } from 'expo-font'

export const fontsUsed = {
  'Roboto-Black': require('~/assets/fonts/Roboto/Roboto-Black.ttf'),
  'Roboto-Bold': require('~/assets/fonts/Roboto/Roboto-Bold.ttf'),
  'Roboto-Medium': require('~/assets/fonts/Roboto/Roboto-Medium.ttf'),
  'Roboto-Regular': require('~/assets/fonts/Roboto/Roboto-Regular.ttf'),
  'Roboto-Light': require('~/assets/fonts/Roboto/Roboto-Light.ttf')
}

export const loadAppFonts = async (): Promise<void> => {
  return loadAsync(fontsUsed)
}
