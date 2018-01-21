import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Validator } from '../validator';
import { Login } from '../login';
import { LogoutProvider } from './logout';

const errorMessages = {
  accountExistsWithDifferentCredential: { title: 'Le compte existe déjà !', subTitle: 'Un compte avec les mêmes identifiants existe déjà.' },
  invalidCredential: { title: 'Identifiant invalide !', subTitle: 'Une erreur s\'est produite lors de la connexion avec cet identifiant.' },
  operationNotAllowed: { title: 'Connexion refusé !', subTitle: 'Vous n\'êtes pas autorisé à vous connecter à ce fournisseur ! Veuillez contacter le support technique.' },
  userDisabled: { title: 'Compte désactivé !', subTitle: 'Ce compte a été suspendu ! Veuillez contacter le support technique.' },
  userNotFound: { title: 'Compte non trouvé !', subTitle: 'Impossible de trouver un compte avec cet identifiant.' },
  wrongPassword: { title: 'Mot de passe incorrect !', subTitle: 'Le mot de passe renseigné est incorrect.' },
  invalidEmail: { title: 'Email invalide !', subTitle: 'L\'email renseignée est incorrecte.' },
  emailAlreadyInUse: { title: 'Email non disponible !', subTitle: 'L\'email renseignée est déjà utilisée.' },
  weakPassword: { title: 'Mot de passe trop faible !', subTitle: 'Le mot de passe renseigné est trop faible.' },
  requiresRecentLogin: { title: 'identifiant expiré !', subTitle: 'L\'identifiant a expiré, veuillez vous connecter à nouveau.' },
  userMismatch: { title: 'Utilisateur déjà utilisé !', subTitle: 'Cet identifiant est déjà utilisé par un autre compte !' },
  providerAlreadyLinked: { title: 'Déjà lié !', subTitle: 'Le compte est déjà lié à cet identifiant.' },
  credentialAlreadyInUse: { title: 'Identifiant déjà utilisé !', subTitle: 'Cet identifiant est déjà utilisé par un autre utilisateur.' },
};

@Injectable()
export class AlertProvider {
  private alert;

  constructor(public alertCtrl: AlertController, public logoutProvider: LogoutProvider) {
    console.log("Initializing Alert Provider");
  }

  showErrorMessage(code) {
    switch (code) {
      case 'auth/account-exists-with-different-credential':
        this.alert = this.alertCtrl.create({
          title: errorMessages.accountExistsWithDifferentCredential["title"],
          subTitle: errorMessages.accountExistsWithDifferentCredential["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/invalid-credential':
        this.alert = this.alertCtrl.create({
          title: errorMessages.invalidCredential["title"],
          subTitle: errorMessages.invalidCredential["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/operation-not-allowed':
        this.alert = this.alertCtrl.create({
          title: errorMessages.operationNotAllowed["title"],
          subTitle: errorMessages.operationNotAllowed["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/user-disabled':
        this.alert = this.alertCtrl.create({
          title: errorMessages.userDisabled["title"],
          subTitle: errorMessages.userDisabled["subTitle"],
          buttons: ['OK']
        });
        this.alert.present();
        break;
      case 'auth/user-not-found':
        this.alert = this.alertCtrl.create({
          title: errorMessages.userNotFound["title"],
          subTitle: errorMessages.userNotFound["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/wrong-password':
        this.alert = this.alertCtrl.create({
          title: errorMessages.wrongPassword["title"],
          subTitle: errorMessages.wrongPassword["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/invalid-email':
        this.alert = this.alertCtrl.create({
          title: errorMessages.invalidEmail["title"],
          subTitle: errorMessages.invalidEmail["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/email-already-in-use':
        this.alert = this.alertCtrl.create({
          title: errorMessages.emailAlreadyInUse["title"],
          subTitle: errorMessages.emailAlreadyInUse["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/weak-password':
        this.alert = this.alertCtrl.create({
          title: errorMessages.weakPassword["title"],
          subTitle: errorMessages.weakPassword["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/requires-recent-login':
        this.alert = this.alertCtrl.create({
          title: errorMessages.requiresRecentLogin["title"],
          subTitle: errorMessages.requiresRecentLogin["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/user-mismatch':
        this.alert = this.alertCtrl.create({
          title: errorMessages.userMismatch["title"],
          subTitle: errorMessages.userMismatch["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/provider-already-linked':
        this.alert = this.alertCtrl.create({
          title: errorMessages.providerAlreadyLinked["title"],
          subTitle: errorMessages.providerAlreadyLinked["subTitle"],
          buttons: ['OK']
        }).present();
        break;
      case 'auth/credential-already-in-use':
        this.alert = this.alertCtrl.create({
          title: errorMessages.credentialAlreadyInUse["title"],
          subTitle: errorMessages.credentialAlreadyInUse["subTitle"],
          buttons: ['OK']
        }).present();
        break;
    }
  }
}
