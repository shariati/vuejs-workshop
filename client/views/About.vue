<template>
  <div>About
      <div>{{this.$route.params.fullName}}</div>
      <img :src="this.$store.state.city.condition.icon" />
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style>
  
</style>
