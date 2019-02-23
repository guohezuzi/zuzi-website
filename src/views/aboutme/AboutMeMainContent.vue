<template>
  <div id="about-me-detail">
    <p>&nbsp;&nbsp;&nbsp;&nbsp;我是一个喜欢自由的人，喜欢任何可以用很大自由空间去创造的事情，比如编程、绘画。
      在这个过程中，会有一种扮演上帝的感觉，我可以用自己喜欢的方式去完成或实现想做的事情，并且能够收获巨大的成就感。
      同时在这个过程中，我能很快的集中注意力，或许达到了心流状态吧，并且我知道每一步去做什么，这种感觉真的非常棒！
      另一方面，我也是一个终生学习者，因为通过系统的学习，然后加入自己的思维方式或者想法，再将所学的东西去输出，
      这个过程真的很棒！并且学习过程的确定性，可叠加性，还有学习的复利效应，简直就是解开这个世界的万能钥匙。另外，
      说点具体的吧，当写下这篇介绍的时候，我是一名大三的学生，一名全栈增长性工程师，目前的精通的技术栈是JavaWeb、
      Vue.js, 正在学习Java大数据技术，空闲时间在了解flutter框架。如果你对我感兴趣，可以通过下面的图标链接了解到更多。</p>
    <ShareIcons/>
  </div>
</template>

<script>
  import ShareIcons from "../../components/ShareIcons";

    export default {
        name: "AboutMeMainContent",
        components: {ShareIcons}
    }
</script>

<style scoped>
  #about-me-detail {
    color: black;
    width: 76%;
    margin: 8vh 12%;
    border: 1px solid black;
    padding-bottom: 5vh;
  }

  #about-me-detail p {
    margin: 5vh 5vw;
    font-size: 2.5vh;
    overflow: hidden;
  }

  #about-me-detail >>> .icon {
    border: 1px solid black;
    background-color: black;
    margin: 0 1vmin;
  }

  #about-me-detail a {
    color: black;
  }

  #about-me-detail >>> a:hover {
    color: white;
  }
</style>