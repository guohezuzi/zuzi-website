<template>
    <div class="article-item">
        <img v-if="show" :data-url="article.articlePicUrl" src="" alt="">
        <div class="article-wrap">
            <div class="article">
                <p class="article-item-title">{{article.articleTitle}}</p>
                <p>{{article.articleLastUpdateTime}} / {{article.articleTag}} / By {{article.articleAuthor |
                    capitalize}}</p>
                <div class="article-button-wrap">
                    <router-link :to="article | coverArticleLink">
                        <div class="article-button">阅读文章</div>
                    </router-link>
                </div>
            </div>
        </div>
        <img v-if="!show" :data-url="article.articlePicUrl" src="" alt="">
    </div>
</template>

<script>
    export default {
        name: "ArticleItem",
        props: {
            index: Number,
            article: Object
        },
        computed: {
            show: function () {
                return (this.index + 1) % 2 === 1
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.toUpperCase()
            }
        }
    }
</script>

<style scoped>
    .article-item {
        width: 100%;
        height: 60vh;
        display: flex;
    }

    .article-item img {
        width: 50%;
        height: 60vh;
        object-fit: cover;

    }

    .article-wrap {
        width: 50%;
        height: 60vh;
        background-color: #1c2023;
        overflow: hidden;
    }

    .article-item-title {
        height: 10vh;
        font-size: 3vh;
        overflow: hidden;
        margin-bottom: 4vh;
        letter-spacing: 2vmin;
    }
</style>