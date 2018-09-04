<template>
    <div id="header-article-title-wrap">
        <p id="header-article-title">{{$route.query.articleTitle}}</p>
        <p id="header-article-author">by {{$route.query.articleAuthor}}</p>
    </div>
</template>

<script>
    export default {
        name: "ArticleHeadContent",
        data() {
            return {
            }
        },
        mounted() {
            const url='url('+this.$route.query.articlePicUrl+')'
            this.$emit('changeBackground',url)
        }
    }
</script>

<style scoped>
    #header-article-title-wrap {
        height: 100vh;
        margin-top: calc(-8.5vh - 20px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #header-article-title-wrap p {
        width: 76%;
        text-align: left;
    }

    #header-article-title {
        font-size: 6vh;
        margin-bottom: 2vh;
    }

    #header-article-author {
        font-size: 3vh;
    }
</style>