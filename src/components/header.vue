<template>
    <div id="header">
       <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name:'hader',
        data(){
            return {
                msg:"this si header"
            }
        }
    }
</script>

<style scoped>
     #header{
        height: 40px;
        width: 100%;
        background-color: grey;
        line-height:40px;
        font-size:30px;
        text-align:center;
        

    }
   
</style>