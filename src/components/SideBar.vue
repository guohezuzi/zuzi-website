<template>
    <div id="left-nav">
        <div class="left-wrap">
            <div class="img-wrap">
                <img id="close" src="../../public/img/close.png" @click="closeSideBar">
            </div>
            <ul id="index-ul" v-if="!showCategories">
                <li class="normal-index">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="normal-index">
                    <router-link to="/aboutme">About Me</router-link>
                </li>
                <li class="normal-index"><a id="categories" @click="getCategories">Categories</a></li>
                <li class="normal-index">
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
            <div v-else>
                <ul id="categories-ul">
                    <li id="categories-title"><a href="#">Categories</a></li>
                    <li class="categories-index" v-for="(num, category) in categories">
                        <router-link :to="'/category/'+category">{{category}}({{num}})</router-link>
                    </li>
                    <li class="categories-index"><a href="#">显示更多</a></li>
                </ul>
                <div class="img-wrap">
                    <img src="../../public/img/return.png" title="返回" @click="showCategories = false">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        methods: {
            closeSideBar() {
                this.$emit('closeSideBar');
            },

            getCategories() {
                this.showCategories = true
                this.$http.get('/api/article/tags.json?pageNum=1&pageSize=7')
                    .then(response => (this.categories = response.data[0]))
                    .catch(error => console.log(error))
            }
        },
        data() {
            return {
                showCategories: false,
                categories: null
            }
        }
    }
</script>

<style scoped>
    #index-ul{
        animation: fadeIn 1s;
    }

    #left-nav {
        width: 20%;
        height: 100vh;
        position: fixed;
        background-color: #1c2023;
    }

    .left-wrap {
        position: relative;
        width: 60%;
        margin: 8.5vh 20%;
        max-height: 83vh;
        overflow: hidden;
    }

    .left-wrap img {
        cursor: pointer;
        width: 2vh;
        height: 2vh;
        object-fit: cover;
    }

    .img-wrap{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .left-wrap ul {
        margin: 10vh auto;
    }

    .left-wrap li {
        list-style-type: none;
        text-align: right;
    }

    #categories {
        cursor: pointer;
    }

    .normal-index {
        margin-bottom: 8vh;
        font-size: 2vh;
    }

    /******categories-ul*****/

    #categories-ul {
        max-height: 56vh;
        overflow: hidden;
        animation: fadeIn 1s;
    }

    #categories-title {
        font-weight: bolder;
        font-size: 2vh;
        margin-bottom: 8vh;
    }

    .categories-index {
        margin-bottom: 4vh;
        font-size: 2vh;
    }


</style>