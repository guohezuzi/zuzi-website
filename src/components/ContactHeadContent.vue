<template>
    <div id="contact-me-info">
        <p id="contact-me-info-title">联系我在</p>
        <div id="icons">
            <a href="#">
                <div class="icon">
                    <img src="../../public/img/github.png">
                </div>
            </a>
            <a href="#">
                <div class="icon">
                    <img src="../../public/img/pinterest.png">
                </div>
            </a>
            <a href="#">
                <div class="icon">
                    <img src="../../public/img/twitter.png">
                </div>
            </a>
            <a href="#">
                <div class="icon">
                    <img src="../../public/img/facebook.png">
                </div>
            </a>
            <a href="#">
                <div class="icon">
                    <img src="../../public/img/tumblr.png">
                </div>
            </a>
        </div>
        <div id="contact-me-info-and">
        <p class="header-font">或者</p>
        <p class="header-font">&darr;</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactHeadContent",
        mounted(){
            this.$emit('changeBackground', 'url(\'/public/img/Layer 53.png\')')
        }
    }
</script>

<style scoped>
    #contact-me-info {
        margin: 30vh auto 0;
        text-align: center;
    }

    #contact-me-info-title {
        font-size: 6vh;
        margin-bottom: 4vh;
    }

    #icons {
        width: 100%;
        height: 4vh;
        display: flex;
        justify-content: center;
    }

    .icon {
        width: 4vh;
        height: 4vh;
        border-radius: 2vh;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
    }

    .icon img{
        filter: brightness(0);
    }

    #contact-me-info-and{
        margin-top: 30vh;
    }

    .header-font {
        font-size: 4vh;
    }
</style>