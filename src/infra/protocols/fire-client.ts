import firebase from 'firebase'

export interface IFireClient {
  core: IFireClient.FireCore
  db: IFireClient.FireDatabase
  init: () => void
  parseError: (error: firebase.FirebaseError) => string
}

export namespace IFireClient {
  export type FireCore = firebase.app.App
  export type FireDatabase = firebase.firestore.Firestore
}
