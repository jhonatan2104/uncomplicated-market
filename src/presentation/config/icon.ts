import { loadAsync } from 'expo-font'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export const loadAppIcons = async (): Promise<void> => {
  return loadAsync({
    ...MaterialCommunityIcons.font,
    ...MaterialIcons.font
  })
}
