<template>
  <div>
    <router-view></router-view>
    <side-menu v-if="this.$route.meta.showSideMenu" :show="showSideMenu"></side-menu>
  </div>
</template>

<script>
import sideMenu from './menu/sideMenu'
export default {
  components: {
    sideMenu
  },
  data(){
    return {
      showSideMenu: false
    }
  },
  created(){
    console.log('created')    
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style>

</style>
