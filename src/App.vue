<template>
  <router-view />
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9461c;
  background-color: black;
}

* {
  font-family: "Ubuntu", sans-serif;
}

h1 {
  font-size: 70px;
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

button:hover {
  cursor: pointer;
}
</style>

<script>
import * as firebase from "firebase/app";

export default {
  watch: {
    $route(to) {
      if (to.meta.title) {
        document.title = `${to.meta.title} | UpStream`;
      }
    },
  },
  mounted: () => {
    const firebaseConfig = {
      apiKey: "AIzaSyC4dWobb4sNH47U62fVQ6eExlHAO-MiauA",
      authDomain: "samuelstream-b7231.firebaseapp.com",
      databaseURL: "https://samuelstream-b7231.firebaseio.com",
      projectId: "samuelstream-b7231",
      storageBucket: "samuelstream-b7231.appspot.com",
      messagingSenderId: "190011806449",
      appId: "1:190011806449:web:a8ded712d2476b75ee8f50",
      measurementId: "G-0W72KNQYJQ",
    };
    firebase.initializeApp(firebaseConfig);
  },
};
</script>