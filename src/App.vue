<template>
  <div id="app">
    <Header />
    <!-- <MenuToggler/> -->
    <div class="container">
      <aside id="menu" class="side-menu">
        <FilterList
          title="Опции тарифа"
          filter_key="options"
          :list="options"
          :default_checked="false"
        />
        <FilterList
          title="Авиакомпании"
          filter_key="airlines"
          :list="airlines"
          :default_checked="true"
        />
        
      </aside>

      <main>
        <FlightCard
          v-for="(flight, flight_index) in flights" :key="flight_index"
          :flight="flight"
        />
      </main>
    </div>

    <router-view />
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FilterList from "./components/Cards/FilterList.vue";
import FlightCard from "./components/Cards/FlightCard.vue";
// import MenuToggler from "./components/Buttons/MenuToggler.vue";
import { mapGetters } from "vuex";


export default {
  name: "App",
  components: {
    Header,
    FilterList,
    FlightCard,
  },
  computed: {
    ...mapGetters(["airlines", "flights", "options"]),
  },
  mounted() {
    
    import("./results.js").then(module => {
      this.$store.dispatch('INIT_FLIGHTS', module.default.flights)
      this.$store.dispatch('INIT_AIRLINERS', module.default.airlines)
    })

    
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("./assets/css/reset.css");


body {
  background: $bg;
  width: calc(100vw - (100vw - 100%));
  overflow-x: hidden;

}
.container {
  width: calc(100% - 4rem);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (min-width: 1140px) {
    width: 1140px;
    padding: 0;
  }
}

@media (max-width: 1140px) {
  .container {
    width: calc(100% - 2rem);
    padding: 0 1rem;
  }
}



main {
  flex-grow: 3;
  flex-basis: 35rem;
}

aside {
  flex-grow: 1;
  flex-basis: 10rem;

}
aside#menu:after {
    display: block;
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: whitesmoke;
    z-index: -1;
    top: 10px;
}
@media (min-width: 1140px) {
  aside#menu:after {
    display: none
  }
    
  }


.side-menu {
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  left: -200vw;
  visiblity: hidden;
  transition: left 0.5s, visibility 1s;

  

  &.open {
    visibility: visible;
    left: 0;
    max-height: calc(100vh - 56px);
    max-width: calc(100vw - (100vw - 100%));
    overflow-y: scroll;
  }

  @media (min-width: 1140px) {
    position: static;
    width: auto;
    top: unset;
    left: unset;
    visibility: visible;
    margin-right: 20px;
    
  }
}
</style>
