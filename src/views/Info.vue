<template>
  <div class="home">
    <h1>UpStream</h1>
    <a href="/#/login">Log In</a>
  </div>
</template>

<style scoped>
a {
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
import "firebase/auth";

export default {
    mounted: () => {
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
              const a = document.querySelector("a");
              a.innerText = `Play as ${user.displayName || user.email}`;
              a.href = "/landing";
            }
        }, error => {
            console.log(error);
        }
        );
    },
};
</script>