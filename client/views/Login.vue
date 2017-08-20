<template>
  <div>
        Login
        <input type="button" value="Admin Login" @click="goAdmin()" />
        <input type="button" value="User Login" @click="goUser()" />
  </div>
</template>

<script>

export default {
 mounted(){
   console.log(this.$router)
   console.log(this.$route)
 }, 
 methods: {
    goAdmin(){
      this.$router.push({
        name: 'home',
        params: {
          id: 300,
          isAdmin: true
        },
        meta: {

        }
      })
    },
    goUser(){
      this.$router.push({
        name: 'home',
        params: {
          id: 300,
          isAdmin: false
        },
        meta: {

        }
      })
    }
 }
}
</script>
<style>

</style>

