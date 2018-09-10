<template>
    <div>
        <div id="article-items">
            <ArticleItem
                    v-for="(article,index) in articles"
                    :index="index"
                    :article="article"
                    :key="article.articleId"
            />
        </div>
        <div id="read-more">
            <p>过往不恋 未来不迎 当时不杂</p>
            <div id="read-more-button-wrap">
                <a id="read-more-button" href="#">阅读更多文章</a>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleItem from "./ArticleItem";

    export default {
        name: "IndexMainContent",
        components: {ArticleItem},
        data() {
            return {
                articles: null
            }
        },
        mounted() {
            this.$http.get('/api/article/articles.json?pageNum=1&pageSize=4')
                .then(response => (this.articles = response.data))
                .catch(error => console.log(error));
            document.addEventListener("scroll", this.handleScroll, false);
        },
        methods: {
            handleScroll() {
                const articleItems = document.getElementById('article-items').childNodes;
                for (let i of articleItems) {
                    let diff = window.innerHeight - i.getBoundingClientRect().top;
                    if (diff > 0 && i.getBoundingClientRect().bottom > 0) {
                        let img = i.querySelector('img');
                        img.style.animation = 'fadeIn 1s';
                        img.src = img.getAttribute('data-url');
                    }
                }
            }
        },
        destroyed(){
            document.removeEventListener('scroll',this.handleScroll);
        }
    }
</script>

<style scoped>
    #read-more {
        background-image: url('/public/img/Layer12.jpg');
        background-size: cover;
        height: 40vh;
        width: 100%;
        overflow: hidden;
    }

    #read-more p {
        letter-spacing: 0.8vw;
        text-align: center;
        font-size: 2.5vh;
        margin: 10vh auto;
    }

    #read-more-button-wrap {
        display: flex;
        justify-content: center;
    }

    #read-more-button {
        margin: 0 auto;
        height: 5vh;
        padding: 0 8vw;
        font-weight: bold;
        line-height: 5vh;
        border: 1px solid white;
        text-align: center;
    }

    #read-more-button:hover {
        border: 1px solid black;
        color: black;
        animation: tada 1s;
    }
</style>