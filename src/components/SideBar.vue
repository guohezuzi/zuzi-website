<template>
  <div id="left-nav">
    <div class="left-wrap">
      <div class="img-wrap">
        <span @click="closeSideBar">
          <i class="flaticon-close close-icon point"></i>
        </span>
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
          <li class="categories-index" v-for="category in categories">
            <router-link :to="'/category/'+category.articleTag">{{category.articleTag}}({{category.articleTagCount}})
            </router-link>
          </li>
          <li class="categories-index"><a href="#">显示更多</a></li>
        </ul>
        <div class="img-wrap">
          <i class="flaticon-previous point" @click="showCategories = false"></i>
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
        this.$http.get('/api/articles/tagCount.json')
          .then(response => (this.categories = response.data))
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
  #index-ul {
    animation: fadeIn 1s;
  }

  #left-nav {
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color: #1c2023;
  }

  @media screen and (max-width: 450px){
    #left-nav{
      width: 40%;
    }
  }

  .left-wrap {
    position: relative;
    width: 60%;
    margin: 6vh 20% 0;
    max-height: 83vh;
    overflow: hidden;
  }

  .left-wrap img {
    cursor: pointer;
    object-fit: cover;
  }

  .img-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10vh;
  }

  .img-wrap svg {
    cursor: pointer;
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

  .close-icon:before {
    font-size: 1.6vmin;
  }
</style>