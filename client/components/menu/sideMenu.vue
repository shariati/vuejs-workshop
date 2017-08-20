<template>
  <div class="sidemenu animated" 
       :class="{slideInRight: show, slideOutRight: !show}">
      <h3>side menu</h3>
  </div>
</template>

<script>
export default {
  props: ["show"]
}
</script>

<style lang="scss">
  .sidemenu{
      position: absolute;
      width: 100px;
      background-color: black;
      height: 100%;
      top: 0;
      right: 0;
      z-index: 1;
  }
</style>
