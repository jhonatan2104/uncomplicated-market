export type TypeAccount = {
  uid: string
  identifier: string
}

export type AccountModel = {
  uid: string
  name: string
  email: string
  type: TypeAccount
}
