<template>
    <div :style="[{backgroundColor: this.$store.state.theme.backgroundColor}]">
        <div class="test animated bg-black" :class="{bounceOut, bounceIn}" :style="getBackColor()">
            <button @click="bounceOutShow()">click me</button>
        </div>
        <button @click="bounceInShow()">click me</button>
        <input v-model="firstName"  type="text" class="block"></input>
        <input v-model="lastName" type="text" class="block"></input>
        <span>{{fullName}}</span>
        <button @click="go({
            name: 'about',
            params: {
                'fullName': fullName 
            }
        })">About</button>  
        <button @click="showSideMenu()">show side menu</button>  
        <br/>
        <br/>
        <br/>
        <ul>
            <li v-for="(book,index) in books" :key="index">
                {{book.name}}-{{index}}-{{book.year}}
            </li>
        </ul>  
        <button @click="handleGetCityInformation()" >get city</button> 
        <button @click="handleChangeBackColor()" >change back color</button> 
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
            lastName: "",
            books : []
        }
    },
    watch: {
        firstName: function(newFirstName) {
            console.log('first name changed',newFirstName)
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
        handleChangeBackColor(){
            this.$store.commit('changeThemeBackground',"black")
        },
        handleGetCityInformation(){
            this.$store.dispatch('getCityInformation', 'tehran')
            //this.books = this.$store.state.books
        },
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
