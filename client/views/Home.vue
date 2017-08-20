<template>
    <div>
        <div class="test animated bg-black" :class="{bounceOut, bounceIn}" :style="getBackColor()">
            <button @click="bounceOutShow()">click me</button>
        </div>
        <button @click="bounceInShow()">click me</button>
        <input v-model="firstName" type="text" class="block"></input>
        <input v-model="lastName" type="text" class="block"></input>
        <span>{{fullName}}</span>
        <button @click="go({
            name: 'about',
            params: {
                'fullName': fullName 
            }
        })">About</button>  
        <button @click="showSideMenu()">show side menu</button>     
    </div>
</template>

<script>
export default {
    data() {
        return {
            bounceOut: false,
            bounceIn: false,
            bgColor: "black",
            firstName: "",
            lastName: ""
        }
    },
    computed: {
        fullName: function(){
            // return this.firstName + ' ' + this.lastName
            return `${this.firstName} ${this.lastName}`
        }
    },
    mounted() {

    },
    created() {

    },
    methods: {
        go(route){
            console.log(route)
            this.$router.push(route)
        },
        showSideMenu(){
            this.$parent.showSideMenu = !this.$parent.showSideMenu
        },
        getBackColor() {
            return {
                backgroundColor: this.bgColor
            }
        },
        bounceOutShow() {
            this.bounceOut = true
            this.bounceIn = false
        },
        bounceInShow() {
            this.bounceIn = true
            this.bounceOut = false
            this.bgColor = "red"
        }
    }
}
</script>

<style lang="scss">
.test {
    color: black;
}
</style>
