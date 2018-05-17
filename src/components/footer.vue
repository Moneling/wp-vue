<template>
    <div id="footer">
        <h1>  {{msg}}</h1>
      
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"this is footer"
            }
        }
    }
</script>

<style scoped>
    #footer{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 40px;
        width: 100%;
        background-color: grey;
        line-height:40px;
        font-size:20;
        text-align:center;
    }
</style>