<template>
    <div id="app">
       <v-header></v-header>
        <v-footer></v-footer>
        <router-view/>
    </div>
  
</template>

<script>
import Header from "@components/header";
import Footer from "@components/footer";
import "./assets/css/reset.css";
    export default {
        name:'App',
        components:{
            'v-header':Header,
            'v-footer':Footer
        },
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>

<style scoped>
 
</style>