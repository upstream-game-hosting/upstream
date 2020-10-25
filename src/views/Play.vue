<template>
  <div id="play">
    <div id="loader">
        <button id="launch-button">Launch Game</button>
    </div>
    <iframe
      sandbox="allow-pointer-lock allow-orientation-lock allow-scripts allow-same-origin"
      :src="`https://upstream-game-${$router.currentRoute._value.params.user}-${$router.currentRoute._value.params.game}.vercel.app`"
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
export default {
  mounted: () => {
    const game = document.querySelector("#game");
    const loader = document.querySelector("#loader");
    const loaderbtn = document.querySelector("#launch-button");

    loaderbtn.onclick = () => {
      game.contentWindow.focus();
      game.style.display = "block";
      loader.style.display = "none";
      game.requestFullscreen();
      screen.orientation.lock("landscape");
      navigator.keyboard.lock();
    };

    document.addEventListener("fullscreenchange", (event) => {
      if (!document.fullscreenElement) {
        navigator.keyboard.unlock();
        game.style.display = "none";
        loader.style.display = "block";
      }
    });
  },
};
</script>