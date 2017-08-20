<template>
  <div>About
      <div>{{this.$route.params.fullName}}</div>
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
