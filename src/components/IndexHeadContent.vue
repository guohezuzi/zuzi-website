<template>
        <div id="head-content">
            <div class="article">
                <p id="welcome">欢迎来到卒子的博客</p>
                <p id="head-article-title">{{randomArticle.articleTitle}}</p>
                <p id="head-article-info">{{randomArticle.articleLastUpdateTime}} / {{randomArticle.articleTag}} / By
                    {{randomArticle.articleAuthor}}</p>
                <div class="article-button-wrap">
                    <router-link :to="randomArticle | coverArticleLink">
                        <div class="article-button">阅读文章</div>
                    </router-link>
                </div>
            </div>
            <ShareIcons/>
        </div>
</template>

<script>
    import ShareIcons from "./ShareIcons";

    export default {
        name: "IndexHeadContent",
        components: {ShareIcons},
        data() {
            return {
                randomArticle: {}
            }
        },
        mounted() {
            this.$http.get('/api/article/randomArticle.json')
                .then(response => (this.randomArticle = response.data))
                .catch(error => console.log(error));
            this.$emit('changeBackground', 'url(\'../../public/img/Layer27.png\')')
        }
    }
</script>

<style scoped>
    #welcome {
        letter-spacing: 1rem;
        font-size: 5vh;
        margin-bottom: 10vh;
    }

    #head-article-title {
        max-height: 10vh;
        font-size: 3vh;
        margin-bottom: 5vh;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        letter-spacing: 2vmin;
    }

    #head-content >>> .icon:hover {
        filter: brightness(0%);
        animation: tada 1s;
    }
</style>
<style>
    .article {
        width: 75%;
        margin: 13.5vh auto 0;
        display: flex;
        flex-direction: column;
    }

    .article p {
        text-align: center;
    }

    .article-button-wrap {
        font-size: 2vh;
        cursor: pointer;
        margin: 8.5vh auto 15.5vh;
        text-align: center;
        letter-spacing: 0.2rem;
    }

    .article-button {
        padding: 1vmin 12vmin;
        border: 1px solid white;
    }

    .article-button:hover {
        border: 1px solid black;
        color: black;
        animation: tada 1s;
    }

</style>