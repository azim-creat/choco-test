<template>
  <div class="flighd_cart">
    Card
  </div>
</template>

<script>
// import Checkbox from "@/components/Checkbox/Checkbox.vue";

export default {
  name: "FlightCard",
  components: {
    // Checkbox,
  },
  methods: {},
};
</script>

<style lang="scss">
.flighd_cart{
  border-radius: 4px;
  background: $card_color;
  @include card_shadow;
}
</style>
