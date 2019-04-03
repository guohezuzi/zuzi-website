<template>
    <div id="icons">
        <a href="https://www.github.com/guohezuzi">
            <div class="icon">
                <i class="flaticon-github-logo"></i>
            </div>
        </a>
        <a href="https://www.pinterest.com/guohezuzi">
            <div class="icon">
                <i class="flaticon-pinterest-logo"></i>
            </div>
        </a>
        <a href="#">
            <div class="icon">
                <i class="flaticon-twitter-logo-silhouette"></i>
            </div>
        </a>
        <a href="#">
            <div class="icon">
                <i class="flaticon-facebook-logo"></i>
            </div>
        </a>
        <a href="#">
            <div class="icon">
                <i class="flaticon-tumblr-letter-logo"></i>
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
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .icon {
        width: 4.5vh;
        height: 4.2vh;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5vmin;
    }
</style>