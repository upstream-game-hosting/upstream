<template>
  <div class="home">
    <h1>UpStream</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui";
import * as firebase from "firebase/app";
import "firebase/auth";

let ui;

export default {
  mounted: () => {
    const uiConfig = {
      signInSuccessUrl: "/#/play",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
    };
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  unmounted: () => {
    ui.reset();
  }
};
</script>