<template>
  <div>
    <modal name="verify-modal"
           :draggable=true
           height="auto"
           width="50%"
           :clickToClose=false
           :classes="['verify-modal']"
    >
      <div class="modal-wrap">
        <label for="visit-code">
          请输入您的访问密码：
        </label>
        <div>
          <input id="visit-code" type="password" v-model="secret"/>
        </div>
      </div>
      <div class="modal-button" @touchend="verify" @click="verify">
        确定
      </div>
    </modal>
    <article v-html="content"></article>
  </div>
</template>

<script>
  import marked from "marked";

  export default {
    name: "SecretArticle",
    mounted() {
        document.getElementById('header').style.height = 'auto';
        document.getElementById('header').style.minHeight = '100vh';
        this.$modal.show("verify-modal")
    },
    data() {
      return {
        article:{},
        articleVisitUrl: this.$route.params.articleVisitUrl,
        secret: ""
      }
    },
    computed: {
      content() {
        if (this.article.content)
          return marked(this.article.content);
      }
    },
    methods: {
      verify(){
        this.$http.get("/api/article/secret/"+this.articleVisitUrl,{
          params:{
            secret: this.secret
          }
        }).then((response) =>{
          this.article=response.data
          this.$modal.hide("verify-modal")
          this.$toasted.show("验证成功")
          this.$emit('changeBackground', 'url(' + this.article.titlePicUrl + ')')
        }).catch(()=>{
          this.$toasted.show("验证失败")
        })
      }
    },
  }

</script>
<style>
  .verify-modal {
    background-color: #343031;
    border-radius: 2vh !important;
  }
</style>
<style scoped>
  .modal-wrap {
    color: #333;
    padding: 1vh 2vh;
    background-color: #E8E7E5;
  }

  .modal-wrap label {
    font-weight: lighter;
  }

  .modal-wrap div {
    border: 0.0625rem solid #333;
    margin-top: 2vh;
    padding: 1vh 1vh;
    border-radius: 1vh;
  }

  .modal-wrap input {
    width: 100%;
    background-color: #E8E7E5;
    font-size: 2vh;
    border: none;
    outline: none;
  }

  .modal-button {
    cursor: pointer;
    padding: 1vh;
    color: #E7D7C8;
    text-align: center;
    letter-spacing: 2vh;
    background-color: #343031;
  }

  article{
    margin: 0 17%;
    color: black;
  }
</style>