import React, { useMemo } from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { TYPE_COMPANY, TYPE_COOPERATOR } from '@/data/constants/account'

type Props = {
  type?: string
  color?: string
}

const IconIdentifierAccount: React.FC<Props> = ({ type, color }: Props) => {
  const IconIdentifier = useMemo(() => {
    switch (type) {
      case TYPE_COMPANY:
        return <MaterialIcons name="work" size={60} color={color ?? '#fff'} />
      case TYPE_COOPERATOR:
        return <MaterialIcons name="assignment-ind" size={60} color={color ?? '#fff'} />
      default:
        return null
    }
  }, [type])
  return (
    <View style={{
      padding: 16
    }}>
      {IconIdentifier}
    </View>
  )
}

export default IconIdentifierAccount
