<template>
  <div class="filter_cart">
    <span class="filter_cart__header"> {{title}} </span>
    <Checkbox 
      v-for="(list_item, list_item_index) in list" :key="list_item_index"
      :title="list_item"
    />
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

export default {
  name: "FilterList",
  props:{
    title: String,
    list: [Array, Object]
  },  
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
  margin-bottom: 10px;
  
  &__header{
    display: block;
    padding:  16px 10px 12px 10px;
    font-weight: bold;
    font-size: 14px;
    color: $black ;
  }
  
}
</style>
