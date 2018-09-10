<template>
    <div id="article-detail-wrap">
        <p id="article-tips">标签：{{$route.query.articleTag}}</p>
        <article v-html="articleContent">
        </article>
        <div id="article-buttons">
            <a class="article-button" href="#">上一篇</a>
            <ShareIcons/>
            <a class="article-button" href="#">下一篇</a>
        </div>
        <div id="article-recommend">
            <p id="article-recommend-font">个性推荐</p>
            <div id="article-recommend-items">
                <div id="article-recommend-item1">
                    <a href="#" class="article-recommend-item-title">ART INSTALLATION</a>
                    <p>2018.7.22 / JAVA / ZUZI</p>
                </div>
                <div id="article-recommend-item2">
                    <a href="#" class="article-recommend-item-title">ART INSTALLATION</a>
                    <p>2018.7.22 / JAVA / ZUZI</p>
                </div>
                <div id="article-recommend-item3">
                    <a href="#" class="article-recommend-item-title">ART INSTALLATION</a>
                    <p>2018.7.22 / JAVA / ZUZI</p>
                </div>
            </div>
        </div>
        <div id="article-reply">
            <p>评论：</p>
            <div id="article-reply-inputs">
                <input type="text" name="name" placeholder="Name*" required>
                <input type="email" name="email" placeholder="E-mail*" required>
            </div>
            <textarea name="message" placeholder="你的评论"></textarea>
            <div id="article-reply-button-wrap">
                <a href="#">
                <div id="article-reply-button">提交</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import ShareIcons from "./ShareIcons";
    import marked from "marked";

    export default {
        name: "ArticleMainContent",
        components: {ShareIcons},
        data: function(){
            return {
                articleContent: ''
            }
        },
        mounted(){
            const url="/api/article/articleContent.json?articleId="+this.$route.query.articleId
            this.$http.get(url)
                .then(response => (this.articleContent=marked(response.data)))
        }
    }
</script>

<style scoped>
    #article-detail-wrap {
        color: black;
        margin: 0 auto;
        width: 76vw;
    }

    #article-tips {
        height: 6vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #article-detail-wrap article {
        margin: 4vh 0;
    }


    #article-buttons {
        margin: 10vh auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }

    .article-button {
        color: black;
        border: 1px solid black;
        padding: 1vmin 4vw;
    }

    .article-button:hover {
        animation: tada 1s;
    }


    #article-buttons >>> .icon {
        border: 1px solid black;
        filter: brightness(0);
    }

    #article-buttons >>> .icon:hover {
        animation: tada 1s;
    }

    #article-recommend {
        border-top: 1px solid #8a8a8a;
        border-bottom: 1px solid #8a8a8a;
    }

    #article-recommend-font {
        margin: 4vh auto;
        font-size: 3vh;
        text-align: center;
    }

    #article-recommend-items {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-bottom: 10vh;
    }

    #article-recommend-items div {
        width: 24vw;
        height: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: cover;
    }

    #article-recommend-items p {
        color: white;
        margin: 0;
        font-size: 1vw;
        word-spacing: 2vw;
        font-style: oblique;
    }

    #article-recommend-item1 {
        background-image: url('/public/img/Layer 28.png');
    }

    #article-recommend-item2 {
        background-image: url('/public/img/Layer 30.png');
    }

    #article-recommend-item3 {
        background-image: url('/public/img/Layer 31.png');
    }

    .article-recommend-item-title {
        font-style: oblique;
        font-size: 2.5vw;
        margin-bottom: 1vh;
    }

    #article-reply {
        margin-bottom: 8vh;
    }

    #article-reply p {
        margin: 5vh 0;
        font-size: 3vh;
        color: #7f7f7f;
    }

    #article-reply-inputs {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 2vh 0;
    }

    #article-reply-inputs input {
        width: 45%;
        padding: 2vh 1vmin;
    }

    #article-reply textarea {
        width: calc(100% - 2vmin);
        max-width: calc(100% - 2vmin);
        height: 20vh;
        margin-bottom: 2vh;
        padding: 2vh 1vmin;
    }

    #article-reply-button-wrap {
        display: flex;
        flex-direction: row-reverse;
    }

    #article-reply-button-wrap a:hover {
        color: white;
    }

    #article-reply-button{
        padding: 1vmin 6vmin;
        background-color: black;
    }

    #article-reply-button:hover {
        animation: bounce 1s;
    }
</style>