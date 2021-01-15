/* eslint-disable @typescript-eslint/restrict-template-expressions */
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export const makeUuid = (prefixed: string): string => {
  return `${prefixed}-${uuidv4()}`
}
