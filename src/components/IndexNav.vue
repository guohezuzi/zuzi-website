<template>
  <nav>
    <div @click="$emit('switchSideBar')">
      <i class="flaticon-menu point"></i>
    </div>
    <router-link to="/"><img class="logo" src="../../public/myblog.png" alt="">
    </router-link>
    <div>
      <a href="#">LOGIN</a>
      <span>/</span>
      <a href="#">SIGN UP</a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "IndexNav"
  }
</script>

<style scoped>
  nav {
    display: flex;
    padding-top: 6vh;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }

  nav a {
    font-weight: bolder;
  }

  nav img, svg {
    cursor: pointer;
  }

  nav div {
    width: 20vmin;
    text-align: center;
  }

  .logo {
    width: 10vh;
    height: 10vh;
    display: block;
  }
</style>