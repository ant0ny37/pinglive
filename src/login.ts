import { TabsPage } from './pages/tabs/tabs';

export namespace Login {

  export const firebaseConfig = {
    apiKey: "AIzaSyDalDifuONB0kMnfvRe0JTB7WgDN6TJo8I",
    authDomain: "pinglive-6ec8a.firebaseapp.com",
    databaseURL: "https://pinglive-6ec8a.firebaseio.com",
    projectId: "pinglive-6ec8a",
    storageBucket: "pinglive-6ec8a.appspot.com",
    messagingSenderId: "475003173933"
  };
  
  export const facebookAppId: string = "142718373075203";
  export const googleClientId: string = "475003173933-5pqdcnojb85qinpnl1vc2112dpb8aad8.apps.googleusercontent.com";
  export const homePage = TabsPage;
}
