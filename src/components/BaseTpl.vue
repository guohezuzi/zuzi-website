<template>
    <div>
        <transition
                enter-active-class="animated slideInLeft fast"
                @after-enter="isSmall = true"
                leave-active-class="animated bounceOutLeft"
                @before-leave="isSmall = false"
        >
            <SideBar @closeSideBar="show = false" v-if="show"/>
        </transition>

        <div :class="{small : isSmall}" class="container">
            <div id="header">
                <nav>
                    <div id="menu-wrap">
                        <img id="menu" width="19" height="16" src="../../public/img/menu.png" @click="show = !show">
                    </div>
                    <div>
                        <router-link to="/" id="logo">ZUZI</router-link>
                    </div>
                    <div>
                        <a href="#">LOGIN</a>
                        <span>/</span>
                        <a href="#">SIGN UP</a>
                    </div>
                </nav>
                <transition
                    enter-active-class="animated fadeIn"
                >
                <router-view @changeBackground="changeBackground" name="headContent"/>
                </transition>
            </div>
            <router-view name="mainContent"></router-view>
            <footer>
                <p>&copy; 2018 - GUOHEZUZI</p>
            </footer>
        </div>
    </div>
</template>

<script>
    import ShareIcons from "./ShareIcons";
    import ArticleItem from "./ArticleItem";
    import SideBar from "./SideBar";

    export default {
        name: "BaseTpl",
        components: {SideBar, ArticleItem, ShareIcons},
        data() {
            return {
                headArticleTitle: null,
                show: false,
                isSmall: false
            }
        },
        methods: {
            changeBackground(url) {
                document.getElementById('header').style.backgroundImage=url;
            }
        }
    }
</script>
<style scoped>
    .container {
        width: 100%;
        transition:width 2s;
    }

    /********头部********/
    #header {
        width: 100%;
        height: 100vh;
        background-size: cover;
        overflow: hidden;
        animation: fadeIn 1s;
    }

    #logo {
        font-size: 5vh;
    }

    #menu-wrap {
        display: flex;
    }

    nav {
        display: flex;
        padding-top: 8.5vh;
        justify-content: space-around;
        width: 100%;
        height: 20px;
    }

    nav a {
        line-height: 20px;
        font-weight: bolder;
    }

    nav img {
        cursor: pointer;
    }

    nav div {
        width: 20vmin;
        text-align: center;
    }

    .small {
        position: relative;
        left: 20%;
        width: 80%;
    }

    /*******尾部******/
    footer {
        overflow: hidden;
        background-color: #1f1f1f;
        width: 100%;
        height: 6vh;
    }

    footer p {
        line-height: 6vh;
        text-align: center;
        margin: 0;
    }
</style>