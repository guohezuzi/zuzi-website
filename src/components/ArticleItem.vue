<template>
  <div class="article-item">
    <img v-if="show" :data-url="article.articleTitlePicUrl" src alt />
    <div class="article-wrap">
      <div class="article">
        <p class="article-item-title">{{article.articleTitle | title}}</p>
        <p>
          {{article.articleLastUpdateTime}} /
          <router-link
            class="article-tag"
            v-for="tag in article.articleTags"
            :key="tag"
            :to="'/category/'+tag"
          >{{tag}}</router-link>
          / By {{article.articleAuthor |
          capitalize}}
        </p>
        <div class="article-button-wrap">
          <ReadArticleButton :link="'/article/'+article.articleVisitUrl" :data="article" />
        </div>
      </div>
    </div>
    <img v-if="!show" :data-url="article.articleTitlePicUrl" src alt />
  </div>
</template>

<script>
import ReadArticleButton from "./ReadArticleButton";
export default {
  name: "ArticleItem",
  components: { ReadArticleButton },
  props: {
    index: Number,
    article: Object
  },
  computed: {
    show: function() {
      return (this.index + 1) % 2 === 1;
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
  methods: {
    saveArticle() {
      this.$store.commit("update", this.article);
    }
  }
};
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
  word-spacing: 1vmin;
}

@media screen and (max-width: 450px) {
  .article-item img {
    width: 100%;
  }

  .article-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(50, 50, 50, 0.5);
  }
}
</style>