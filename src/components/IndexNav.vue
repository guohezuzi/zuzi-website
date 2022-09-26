<template>
  <nav>
    <div @click="$emit('switchSideBar')">
      <i class="flaticon-menu point"></i>
    </div>
    <router-link to="/"><img class="logo" src="../../public/myblog.png" alt="">
    </router-link>
    <div>
      <!-- <a href="#">LOGIN</a>
      <span>/</span>
      <a href="#">SIGN UP</a> -->

      <a href="#" @click="metaMastLogin">
        <img :style="metaMaskStyle"
          src="../../public/metamask.svg">
      </a>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue'
  export default {
    name: "IndexNav",
    methods: {
      async metaMastLogin() {
        this.account = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(this.account);
        this.metaMaskStyle.filter = 'grayscale(0%)';
      },
    },
    data() {
      return {
        account: {},
        metaMaskStyle: {
          filter: 'grayscale(100%)',
        }
      }
    },
    mounted(){
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }else{
        console.log('MetaMask not installed!');
      }
    }
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

nav img,
svg {
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