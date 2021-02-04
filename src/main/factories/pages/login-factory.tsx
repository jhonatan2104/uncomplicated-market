import React from 'react'
import { Login } from '@/presentation/pages'
import { makeFireAuth } from '../usecases/auth/fire-auth-factory'

export const makeLogin: React.FC = () => {
  const auth = makeFireAuth()
  return <Login {...{ auth }}/>
}
