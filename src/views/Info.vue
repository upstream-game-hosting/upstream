<template>
  <div class="home">
    <h1>UpStream</h1>
    <router-link to="/login">Log In</router-link>
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
        firebase.auth().onAuthStateChanged(
        function (user) {
            if (user) {
            const a = document.querySelector("a");
            console.log(user.uid);
            a.innerText = `Play as ${user.displayName || user.email}`;
            a.href = "/#/landing";
            }
        },
        function (error) {
            console.log(error);
        }
        );
    },
};
</script>