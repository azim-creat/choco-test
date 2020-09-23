<template>
  <div class="header">
    <h1> Header </h1>
        <button id="open-button">Open Menu</button>


  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    // msg: String
  },
  mounted() {
    var open = document.getElementById("open-button");
    var menu = document.getElementById("menu");

    open.addEventListener("click", () => {
      menu.classList.add("open");
    });

    
  },
}
</script>


<style lang="scss">
.header{
  &_logo{

  }
}

</style>
