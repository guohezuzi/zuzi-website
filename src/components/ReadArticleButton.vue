<template>
  <router-link :to="link">
    <div class="article-button" @click="saveArticle">阅读文章</div>
  </router-link>
</template>

<script>
  export default {
    name: "ReadArticleButton",
    props:['link','data'],
    methods:{
      saveArticle() {
        this.$store.commit('update',this.data)
      }
    }
  }
</script>

<style scoped>
  .article-button {
    padding: 1vh 12vh;
    border: 1px solid white;
    color: #fff;
  }

  .article-button:hover {
    border: 1px solid black;
    color: black;
    animation: tada 1s;
  }
</style>