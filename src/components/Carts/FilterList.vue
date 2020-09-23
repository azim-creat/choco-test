<template>
  <div class="filter_cart">
    <span class="filter_cart__header"> Опции тарифа </span>
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

export default {
  name: "FilterList",
  components: {
    Checkbox,
  },
  methods: {},
};
</script>

<style lang="scss">
.filter_cart{
  border-radius: 4px;
  background: $card_color_secondary;
  padding-bottom: 10px;
  &__header{
    display: block;
    padding:  16px 10px 12px 10px;
    font-weight: bold;
    font-size: 14px;
    color: $black ;
  }
  
}
</style>
