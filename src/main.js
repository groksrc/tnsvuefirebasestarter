import Vue from 'nativescript-vue';

import Home from './components/Home';

import router from './router';

import store from './store';

import './styles.scss';

import firebase from 'nativescript-plugin-firebase';

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

Vue.prototype.$firebase = firebase;

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(Home),

  router,

  store,

}).$start();
