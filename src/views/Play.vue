<template>
  <div id="play">
    <div id="pre">
      <h1>UpStream</h1>
      <h2>Loading your game...</h2>
      <pacman-loader :loading="true" color="#F9461C"></pacman-loader>
    </div>
    <div id="loader" style="display:none;">
      <button id="launch-button">Launch Game</button>
    </div>
    <iframe
      sandbox="allow-pointer-lock allow-scripts allow-same-origin"
      :src="`https://upstream-game-${$router.currentRoute._value.params.user}-${$router.currentRoute._value.params.game}.vercel.app/#/?token=${$data.usertoken}`"
      id="game"
      frameborder="0"
    ></iframe>
  </div>
</template>

<style scoped>
#game {
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  border: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f9461c;
  display: none;
}
button {
  font-size: 30px;
  background-color: #f9461c;
  color: whitesmoke;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  padding: 4px;
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
  data: () => {
    return {
      usertoken: ''
    }
  },
  mounted: function () {
    const game = document.querySelector("#game");
    const loader = document.querySelector("#loader");
    const loaderbtn = document.querySelector("#launch-button");
    const pre = document.querySelector("#pre");

    loaderbtn.onclick = () => {
      game.contentWindow.focus();
      game.style.display = "block";
      loader.style.display = "none";
      game.requestFullscreen();
      navigator.keyboard.lock();
    };

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        navigator.keyboard.unlock();
        game.style.display = "none";
        loader.style.display = "block";
      }
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          user.getIdToken().then((token) => {
            this.usertoken = token;
            console.log(this.usertoken);
            pre.style.display = "none";
            loader.style.display = "block";
          });
        } else {
          window.location.href = '/';
        }
      }, error => {
        console.log(error);
      }
    );
  },
};
</script>