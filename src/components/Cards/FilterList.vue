<template>
  <div class="filter_cart">
    <div class="filter_cart__header">
      <span>
        {{ title }}
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
        />
      </svg>
    </div>
    <Checkbox
      v-for="(list_item, list_item_index) in list"
      :key="list_item_index"
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
  props: {
    title: String,
    list: Object,
    default_checked: Boolean,
    filter_key: String,
  },
  data() {
    return {
      filter_data: {},
    };
  },
  components: {
    Checkbox,
  },
  methods: {
    createDefaultFilter() {
      for (const key in this.list) {
        this.filter_data[key] = this.default_checked;
      }
      this.$store.dispatch("UPDATE_FILTER", {
        type_filter: this.filter_key,
        value: this.filter_data,
      });
    },
    changeFilterOption(key, val) {
      this.filter_data[key] = val;
      this.filter_data = { ...this.filter_data };
    },
  },
  watch: {
    list() {
      this.createDefaultFilter();
    },
    filter_data() {
      this.$store.dispatch("UPDATE_FILTER", {
        type_filter: this.filter_key,
        value: this.filter_data,
      });
    },
  },
  mounted() {
    if (Object.keys(this.list).length > 0) {
      this.createDefaultFilter();
    }
  },
};
</script>

<style lang="scss">
.filter_cart {
  border-radius: 4px;
  background: $card_color_secondary;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &__header {
    display: block;
    padding: 16px 10px 12px 10px;
    font-weight: bold;
    font-size: 14px;
    color: $black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
      fill: $light_gray;
      &:hover{
      fill: $link_color;
      }
    }
  }
}
</style>
