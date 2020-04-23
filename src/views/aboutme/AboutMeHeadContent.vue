<template>
    <div class="head-info-about-me">
        <p id="name-description">HELLO MY NAME IS</p>
        <p id="name">ZUZI</p>
    </div>
</template>

<script>
    export default {
        name: "AboutMeHeadContent",
        mounted(){
            this.$emit('changeBackground','url(\'/public/img/aboutme.jpg\')')
        }
    }
</script>

<style scoped>
    .head-info-about-me {
        width: 100%;
        margin: 35vh auto 0;
        text-align: center;
        font-weight: bolder;
    }

    #name-description {
        font-size: 4vh;
        margin-bottom: 1vh;
    }

    #name{
        letter-spacing: 2vh;
        font-size: 8vh;
    }

</style>