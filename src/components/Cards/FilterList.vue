<template>
  <div class="filter_cart">
    <span class="filter_cart__header"> {{title}} </span>
    <Checkbox 
      v-for="(list_item, list_item_index) in list" :key="list_item_index"
      :title="list_item"
      :checkbox_key="list_item_index"
      :change_callback="changeFilterOption"
      :checked="default_checked"
    />
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

export default {
  name: "FilterList",
  props:{
    title: String,
    list: Object,
    default_checked: Boolean,
    filter_key: String,
  },
  data(){
    return {
      filter_data:{

      }
    }
  },
  components: {
    Checkbox,
  },
  methods: {
    createDefaultFilter(){
      for (const key in this.list) {
        this.filter_data[key] = this.default_checked 
      }
      this.$store.dispatch("UPDATE_FILTER", {type_filter: this.filter_key, value: this.filter_data} )

    },
    changeFilterOption(key, val){
      this.filter_data[key] = val 
      this.filter_data = {...this.filter_data} 
    }
  },
  watch: {
    "list"(){
      this.createDefaultFilter()
    },
    "filter_data"() {
      this.$store.dispatch("UPDATE_FILTER", {type_filter: this.filter_key, value: this.filter_data} )
    }
  },
  mounted() {
    if(Object.keys(this.list).length > 0){
      this.createDefaultFilter()
    }
  },
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
