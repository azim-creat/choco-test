<template>
  <div id="app">
    <Header />
    <!-- <MenuToggler/> -->
    <div class="container">
      <aside id="menu" class="side-menu">
        <Checkbox/>
        <Checkbox/>
        <Checkbox/>
      </aside>

      <main>Masssin</main>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
// import MenuToggler from "./components/Buttons/MenuToggler.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Checkbox,
    // MenuToggler,
  },
  computed: {
    ...mapGetters(["count"]),
  },
  mounted() {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("./assets/css/reset.css");


body {
  background: $bg;
}
.container {
  width: calc(100vw - 2rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (min-width: 960px) {
    width: 960px;
    padding: 0;
  }
}

main {
  flex-grow: 2;
  flex-basis: 35rem;
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
