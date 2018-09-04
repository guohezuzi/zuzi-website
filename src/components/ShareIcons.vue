<template>
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
</template>

<script>
    export default {
        name: "ShareIcons"
    }
</script>

<style scoped>
    #icons {
        width: 20vw;
        height: 4.2vmin;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .icon {
        width: 4.5vmin;
        height: 4.2vmin;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5vmin;
    }
</style>