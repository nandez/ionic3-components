// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Component } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-one',
  templateUrl: 'login-one.html',
})
export class LoginOnePage {

  public loginForm: any;
  public backgroundImage = 'assets/img/background/background-5.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public events: Events
  ) { }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500,
      content:"Aguarde un instante..."
    });

    loading.onDidDismiss(() => {
        this.events.publish('onLoginSuccess');
    });

    loading.present();

  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }
}
