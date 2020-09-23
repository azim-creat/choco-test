<template>
  <label class="checkbox_item">
    One
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",

  methods: {},
};
</script>

<style lang="scss">
.checkbox_item {
  padding: 12px;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  user-select: none;
  &:hover {
    background-color: $list_hover_color;
  }
}

/* Hide the browser's default checkbox */
.checkbox_item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 12px;
  height: 12px;
  width: 12px;
  transform: translate(0, -50%);
  background: #fff;
  border: 1px solid $gray;
  border-radius: 2px;
}

.checkbox_item:hover input ~ .checkmark {
  // background-color: #ccc;
}

.checkbox_item input:checked ~ .checkmark {
  background-color: $green;
  border: 1px solid $green;
  border-radius: 2px;
}
.checkbox_item:hover input ~ .checkmark:after {
  display: block;
  left: 4px;
  top: 0px;
  width: 3px;
  height: 6px;
  border: solid $gray;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox_item input:checked ~ .checkmark:after {
  display: block;
  border-color: #fff !important;

}

.checkbox_item .checkmark:after {
  left: 4px;
  top: 0px;
  width: 3px;
  height: 6px;
  border: solid white ;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
