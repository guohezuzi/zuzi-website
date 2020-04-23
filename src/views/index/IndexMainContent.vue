<template>
  <div>
    <div id="article-items">
      <template v-for="articles in articleList">
        <ArticleItem
          v-for="(article,index) in articles"
          :index="index"
          :article="article"
          :key="article.articleId"
        />
      </template>
    </div>
    <div class="loading" v-if="loading">
      <atom-spinner :animation-duration="1000" :size="60" :color="'#ECF0F1'" />
    </div>
    <div id="read-more">
      <p>过往不恋 未来不迎 当时不杂</p>
      <div id="read-more-button-wrap">
        <a id="read-more-button" href="#" @click.prevent="loadmore()">阅读更多文章</a>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from "../../components/ArticleItem";
import debounce from "lodash/debounce";
import { AtomSpinner } from "epic-spinners";

export default {
  name: "IndexMainContent",
  components: {
    ArticleItem,
    AtomSpinner
  },
  data() {
    return {
      loading: true,
      currPage: 0,
      lastPage: 1,
      articleList: []
    };
  },
  mounted() {
    this.loadmore();
    document.addEventListener("scroll", this.handleScroll, false);
  },
  methods: {
    handleScroll: debounce(function() {
      const articleItems = document.getElementById("article-items").childNodes;
      for (let i of articleItems) {
        let diff = window.innerHeight - i.getBoundingClientRect().top;
        if (diff > 0 && i.getBoundingClientRect().bottom > 0) {
          let img = i.querySelector("img");
          img.style.animation = "fadeIn 1s";
          img.src = img.getAttribute("data-url");
        }
      }
    }, 100),
    loadmore() {
      if (this.currPage < this.lastPage) {
        this.currPage++;
        this.loading = true;
        this.$http
          .get("/api/articles?page=true&pageSize=4&pageNum=" + this.currPage)
          .then(
            response => (
              (this.loading = false),
              this.articleList.push(response.data.data),
              (this.lastPage = response.data.last_page)
            )
          )
          .catch(error => console.log(error));
      }else{
        this.$toasted.show("当前文章已经是最后一条了哦🙃")
      }
    }
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
#read-more {
  background-image: url("/public/img/read_more.jpg");
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
  letter-spacing: 1vmin;
  padding: 0 10vmin;
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

.loading {
  display: flex;
  justify-content: center;
  background-color: #1c2023;
}
</style>