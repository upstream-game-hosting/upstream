<template>
  <div class="home">
    <h1>UpStream</h1>
    <div id="load">
      <pacman-loader :loading="true" color="#F9461C"></pacman-loader>
    </div>
    <div id="home" style="display:none">
      <button>Log In</button>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import "firebase/auth";

export default {
  components: {
    PacmanLoader,
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged(
      (user) => {
        const btn = document.querySelector('button');
        document.querySelector('#load').style.display = 'none';
        document.querySelector('#home').style.display = 'block';
        if (user) {
          btn.innerText = `Play as ${user.displayName}`;
          btn.onclick = () => {
            this.$router.push('/home');
          }
        } else {
          btn.onclick = () => {
            this.$router.push('/login');
          }
        }
      },
      (error) => {
        console.error(error);
      }
    );
  },
};
</script>