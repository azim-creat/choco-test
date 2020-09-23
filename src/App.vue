<template>
  <div id="app">
    <Header/>
    <router-link to="/HellowWord">HellowWord</router-link>
    <router-view/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['count'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
