<template>
  <div class="header">
    <div class="container header__content">
      <router-link to="/">
        <img :src="require('@/assets/logo.png')" alt="" class="header__logo">
      </router-link>
     <Menutoggler/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  component:{
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById("menu");
      const button = document.getElementById("nav-icon2");
      menu.classList.toggle("open");
      button.classList.toggle("open");
    },
  },
  beforeCreate: function () {
    this.$options.components.Menutoggler = require('./Buttons/Menutoggler').default
  },
  mounted() {},
};
</script>1


<style lang="scss">

.header {
  background: #fff;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @include shadow;

  &__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo{
    height: 40px;
  }
}

</style>
