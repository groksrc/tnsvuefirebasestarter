import Vue from 'nativescript-vue';
import firebase from 'nativescript-plugin-firebase'

import router from './router';

import store from './store';

import './styles.scss';

firebase.init({
  onAuthStateChanged: data => { // optional
    console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (init's onAuthStateChanged callback)");
  },
  persist: false,
}).then(
  () => {
    console.log("Firebase is ready");
  },
  error => {
    console.log("firebase.init error: " + error);
  }
);

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
