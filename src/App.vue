<template>
  <div id="app">
    <Header />

    <div class="container">
      <aside id="menu" class="side-menu">
        aside
      </aside>

      <main>Main</main>
    </div>
    <router-view /> 
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["count"]),
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("./assets/css/reset.css");

body{
  background: $bg;
}
.container {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 960px) {
    width: 960px;
  }
}

main {
  flex-grow: 2;
  flex-basis: 35rem;
  background: red;
}

button {
  display: block;
  float: right;

  @media (min-width: 960px) {
    display: none;
  }
}

aside {
  flex-grow: 1;
  flex-basis: 18rem;
}

.side-menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: -200vw;
  visiblity: hidden;
  background: salmon;
  transition: left 0.5s, visibility 1s;

  &.open {
    visibility: visible;
    left: 0;
  }

  @media (min-width: 960px) {
    position: static;
    height: 350px;
    width: auto;
    top: unset;
    left: unset;
    visibility: visible;
  }
}

</style>
