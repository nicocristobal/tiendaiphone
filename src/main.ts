import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const firebaseConfig = {
    apiKey: "AIzaSyDTRV8dP9EOlh8fkoOdx-tQrb1-_Cs5jQk",
    authDomain: "tiendaiphone-b82a6.firebaseapp.com",
    projectId: "tiendaiphone-b82a6",
    storageBucket: "tiendaiphone-b82a6.appspot.com",
    messagingSenderId: "122582744793",
    appId: "1:122582744793:web:9b6ab00b7e69686da588c8",
    measurementId: "G-L4VF3RM8G3"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);