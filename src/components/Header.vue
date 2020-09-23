<template>
  <div class="header">
    <div class="container">
      <h1>Header</h1>
      <button @click="toggleMenu">Menu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    // msg: String
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("open");
    },
  },
  mounted() {},
};
</script>


<style lang="scss">
.header {
  background: cyan;
  &_logo {
  }
}
</style>
