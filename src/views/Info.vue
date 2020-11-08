<template>
  <div class="home">
    <small style="color:#c60c30"></small><br /><br />
    <img src="/img/favicon.svg" style="height: 100px" />
    <h1>UpStream</h1>
    <h2>The best place to play and make games.</h2>
    <div id="auth" style="display: none"></div>
    <div id="continue" style="display: none">
      <button></button>
    </div>
    <h3>Play for free</h3>
    <p>Most of our games are free forever, with no tricky subscriptions!</p>
    <h3>Get more with PRO</h3>
    <p>
      If you love UpStream and want to support us, sign up for UpStream PRO.
      You'll get tons more free games as well as in-game extra content, advanced
      features, and cool surprises for one low price. Forever.
    </p>
    <h3>Make your own</h3>
    <p>
      If you know Vue, Unity, or even just plain JS, you can make your own games
      and integrate them with UpStream for tons of cool features!
    </p>
    <div id="load">
      <pacman-loader :loading="true" color="#F9461C"></pacman-loader>
    </div>
  </div>
</template>

<script>
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import * as firebase from "firebase/app";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import "firebase/auth";

let ui;

export default {
  components: {
    PacmanLoader,
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged(
      (user) => {
        const btn = document.querySelector("button");
        if (user) {
          btn.innerText = `Play as ${user.displayName}`;
          document.querySelector("#load").style.display = "none";
          document.querySelector("#continue").style.display = "block";
          btn.onclick = () => {
            this.$router.push("/home");
          };
        } else {
          try {
            if (this.$route.query.returnToGame) {
              document.querySelector('small').innerText = 'Please login to play this game.'
            }
            const uiConfig = {
              signInSuccessUrl: this.$route.query.returnToGameUser ? `/play/${this.$route.query.returnToGameUser}/${this.$route.query.returnToGame}`: '/home',
              signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
            };
            ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start("#auth", uiConfig);
            document.querySelector("#load").style.display = "none";
            document.querySelector("#auth").style.display = "block";
          } catch {
            window.location.reload();
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