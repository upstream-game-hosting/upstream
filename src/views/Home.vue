<template>
  <div class="home">
    <h1>UpStream</h1>
    <div id="load">
      <pacman-loader :loading="true" color="#F9461C"></pacman-loader>
    </div>
    <div id="user" style="display:none">
      <h2 id="name"></h2>
    </div>
  </div>
</template>

<style scoped>
  #load {
    text-align: center;
  }
</style>

<script>
import * as firebase from "firebase/app";
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue';
import "firebase/auth";

export default {
  components: {
    PacmanLoader
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          document.querySelector('#name').innerText = `Welcome, ${user.displayName || user.email}`;
          document.querySelector('#user').style.display = 'block';
          document.querySelector('#load').style.display = 'none';
        } else {
          window.location.href = '/info';
        }
      }, error => {
        console.log(error);
      }
    );
  },
};
</script>