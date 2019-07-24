<template>
  <div id="head-content">
    <div class="article">
      <p id="welcome">欢迎来到卒子的博客</p>
      <p id="head-article-title">{{randomArticle.articleTitle | title}}</p>
      <p id="head-article-info">
        {{randomArticle.articleLastUpdateTime}} /
        <router-link class="article-tag" v-for="tag in randomArticle.articleTags" :key="tag" :to="'/category/'+tag">
          {{tag}}
        </router-link>
        / By {{randomArticle.articleAuthor}}
      </p>
      <div class="article-button-wrap">
        <ReadArticleButton :link="'/article/'+randomArticle.articleVisitUrl" :data="randomArticle"/>
      </div>
    </div>
    <ShareIcons/>
  </div>
</template>

<script>
  import ShareIcons from "../../components/ShareIcons";
  import ReadArticleButton from "../../components/ReadArticleButton";
  //import storeArticle from './StoreArticle.js'

  export default {
    name: "IndexHeadContent",
    components: {ReadArticleButton, ShareIcons},
    data() {
      return {
        randomArticle: {}
      }
    },
    mounted() {
      this.$http.get('/api/articles/randomArticle.json')
        .then(response => (this.randomArticle = response.data))
        .catch(error => console.log(error));
      this.$emit('changeBackground', 'url(\'/public/img/Layer27.jpg\')')
      //console.log(this.$store.state.article.articleTitle)
    },
    methods: {
      /* setArticle() {
         storeArticle.setMessageAction(this.randomArticle)
         //this.$root.$data.article = this.randomArticle
       }*/
    },
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
    word-spacing: 1vmin;
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
    margin: 0;
    text-align: center;
  }

  .article-button-wrap {
    font-size: 2vh;
    cursor: pointer;
    margin: 8.5vh auto 15.5vh;
    text-align: center;
    letter-spacing: 0.2rem;
  }
</style>