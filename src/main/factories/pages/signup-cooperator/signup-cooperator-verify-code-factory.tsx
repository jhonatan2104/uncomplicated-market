import React from 'react'
import { SignUpCooperatorVerifyCode } from '@/presentation/pages'
import { makeCreateCooperator } from '../../usecases/cooperator/create-cooperator-factory'

export const makeSingUpCooperatorVerifyCode: React.FC = () => {
  const createCooperator = makeCreateCooperator()
  return <SignUpCooperatorVerifyCode {...{ createCooperator }} />
}
