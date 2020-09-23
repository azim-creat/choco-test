<template>
  <div id="menu-toggler" @click="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Menutoggler",
 
  methods: {
    toggleMenu() {
      const menu = document.getElementById("menu");
      const button = document.getElementById("menu-toggler");
      menu.classList.toggle("open");
      button.classList.toggle("open");
    },
  },
};
</script>

<style lang="scss">

#menu-toggler
 {
  width: 40px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  @media (min-width: 960px) {
    display: none;
  }
}

#menu-toggler span {
  display: block;
  position: absolute;
  height: 4px;
  width: 50%;
  background: $gray;
  opacity: 1;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#menu-toggler span:nth-child(even) {
  left: 50%;
  border-radius: 0 2px 2px 0;
}

#menu-toggler span:nth-child(odd) {
  left: 0px;
  border-radius: 2px 0 0 2px;
}

#menu-toggler span:nth-child(1),
#menu-toggler span:nth-child(2) {
  top: 0px;
}

#menu-toggler span:nth-child(3),
#menu-toggler span:nth-child(4) {
  top: 12px;
}

#menu-toggler span:nth-child(5),
#menu-toggler span:nth-child(6) {
  top: 26px;
}

#menu-toggler.open span:nth-child(1),
#menu-toggler.open span:nth-child(6) {
  transform: rotate(45deg);
}

#menu-toggler.open span:nth-child(2),
#menu-toggler.open span:nth-child(5) {
  transform: rotate(-45deg);
}

#menu-toggler.open span:nth-child(1) {
  left: 3px;
  top: 7px;
}

#menu-toggler.open span:nth-child(2) {
  left: calc(50% - 3px);
  top: 7px;
}

#menu-toggler.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#menu-toggler.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#menu-toggler.open span:nth-child(5) {
  left: 3px;
  top: 20px;
}

#menu-toggler.open span:nth-child(6) {
  left: calc(50% - 3px);
  top: 20px;
}
</style>
