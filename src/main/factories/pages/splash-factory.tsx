import React from 'react'
import { Splash } from '@/presentation/pages'
import { makeFireGetStateAuth } from '../usecases/auth/fire-get-state-auth-factory'

export const makeSplash: React.FC = () => {
  const getStateAuth = makeFireGetStateAuth()
  return <Splash {...{ getStateAuth }}/>
}
