<template>
  <div id="contact-me-info">
    <p id="contact-me-info-title">联系我在</p>
    <div id="icons">
      <a href="https://www.github.com/guohezuzi">
        <div class="icon">
          <i class="flaticon-github-logo"></i>
        </div>
      </a>
      <a href="https://www.pinterest.com/guohezuzi">
        <div class="icon">
          <i class="flaticon-pinterest-logo"></i>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <i class="flaticon-twitter-logo-silhouette"></i>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <i class="flaticon-facebook-logo"></i>
        </div>
      </a>
      <a href="#">
        <div class="icon">
          <i class="flaticon-tumblr-letter-logo"></i>
        </div>
      </a>
    </div>
    <div id="contact-me-info-and">
      <p class="header-font">或者</p>
      <p class="header-font"><a href="#e-mail-wrap"><i class="flaticon-download"></i></a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ContactHeadContent",
    mounted() {
      this.$emit('changeBackground', 'url(\'/public/img/Layer 53.jpg\')')
    }
  }
</script>

<style scoped>
  #contact-me-info {
    margin: 30vh auto 0;
    text-align: center;
  }

  #contact-me-info p:hover {
    color: #fff;
  }

  #contact-me-info-title {
    font-size: 6vh;
    margin-bottom: 4vh;
  }

  #icons {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .icon {
    width: 4vmin;
    height: 4vmin;
    border-radius: 2vmin;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    color: #333;
  }

  /*.icon img{
      filter: brightness(0);
  }*/

  #contact-me-info-and {
    margin-top: 30vh;
  }

  .header-font {
    font-size: 4vmin;
  }

  .header-font i:before {
    font-size: 2.5vmin;
  }
</style>