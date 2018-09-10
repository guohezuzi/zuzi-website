<template>
    <div id="error-content-wrap">
        <p id="error-title">404-PAGE NOT FOUND</p>
        <div id="back-button-wrap">
            <router-link to="/" id="back-button">返 回 首 页</router-link>\
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error",
        mounted(){
            this.$emit('changeBackground','url(\'/public/img/Layer 7.png\')')
        }
    }
</script>

<style scoped>
    #error-content-wrap {
        width: 60%;
        margin: 25vh auto 0;
        text-align: center;
    }

    #error-title{
        font-size: 5vh;
        margin-bottom: 10vh;
    }

    #back-button-wrap{
        display: flex;
        justify-content: center;
    }

    #back-button{
        padding: 1.5vmin 15vmin;
        font-size: 2.5vh;
        border: 1px solid white;
        margin: 0 auto;
    }

    #back-button:hover{
        color: black;
        border-color: black;
        animation: tada 1s;
    }
</style>