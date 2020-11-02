<template>
  <div id="play">
    <h1>UpStream Developers</h1>
    <h2>Token:</h2>
    <code>Token loading...</code>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted: () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          user.getIdToken().then((token) => {
            document.querySelector('code').innerText = token;
          });
        } else {
          window.location.href = '/dev/login';
        }
      }, error => {
        console.log(error);
      }
    );
  },
};
</script>