import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  async googleSignIn() {
    const googleUser =
    await Plugins.GoogleAuth.signIn().then(res => console.log('res', res)).catch(err => console.log('err', err));
   // const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
   // return this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
  }
}
