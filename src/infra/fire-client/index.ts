import { IFireClient } from '../protocols/fire-client'
import * as firebase from 'firebase'
import 'firebase/firestore'
import appCertificate from '~/certificates/firebase.json'

export abstract class FireClient implements IFireClient {
  public core: IFireClient.FireCore
  public db: IFireClient.FireDatabase

  constructor () {
    this.init()
    this.core = firebase.app()
    this.db = firebase.firestore()
  }

  init (): void {
    if (!firebase.apps.length) {
      firebase.initializeApp(appCertificate)
    }
  }

  parseError (error: firebase.FirebaseError): string {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Email Inválido'
      case 'auth/user-disabled':
        return 'Usuário Desabilitado'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      case 'auth/wrong-password':
        return 'Senha Incorreta'
      default:
        return 'Error'
    }
  }
}
