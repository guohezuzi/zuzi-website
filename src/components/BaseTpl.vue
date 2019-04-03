<template>
  <div>
    <transition
        @before-enter="isSmall = true"
        leave-active-class="animated bounceOutLeft"
        @before-leave="isSmall = false"
    >
      <SideBar @closeSideBar="show = false" v-if="show"/>
    </transition>

    <div :class="{small : isSmall}" class="container">
      <div id="header" :style="{ backgroundImage: image }">
        <IndexNav @switchSideBar="show = !show"/>
        <transition
            enter-active-class="animated fadeIn"
        >
          <router-view @changeBackground="changeBackground" name="headContent"/>
        </transition>
      </div>
      <router-view name="mainContent"></router-view>
      <footer>
        <p>&copy; {{new Date().getFullYear()}} - GUOHEZUZI</p>
      </footer>
    </div>
  </div>
</template>

<script>
  import SideBar from "./SideBar";
  import IndexNav from "./IndexNav";

  export default {
    name: "BaseTpl",
    components: {IndexNav, SideBar},
    data() {
      return {
        headArticleTitle: null,
        show: window.innerWidth>450,
        isSmall: window.innerWidth>450,
        image: ''
      }
    },
    methods: {
      changeBackground(url) {
        this.image = url;
      }
    }
  }
</script>
<style scoped>
  .container {
    width: 100%;
    left: 0;
    transition: width 500ms ease-in, left 500ms ease-in;
    scroll-behavior:smooth
  }

  /********头部********/
  #header {
    width: 100%;
    height: 100vh;
    background-size: cover;
    overflow: hidden;
    animation: fadeIn 1s;
    background-color: #333;
  }

  .small {
    position: relative;
    left: 20%;
    width: 80%;
  }

  @media screen and (max-width: 450px){
    .small {
      left: 40%;
      width: 60%;
      filter:blur(1vmin);
    }
  }

  /*******尾部******/
  footer {
    overflow: hidden;
    background-color: #1f1f1f;
    width: 100%;
    height: 6vh;
  }

  footer p {
    line-height: 6vh;
    text-align: center;
    margin: 0;
  }
</style>