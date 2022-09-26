<template>
    <div id="record-meet-content" class="record-meet-wrap">
        <div>{{meetDuring}}</div>
    </div>
</template>
  
<script>
import { nextTick } from 'vue'

export default {
  name: "RecordMeet",
  mounted() {
      document.getElementById('header').style.height = 'auto';
      document.getElementById('header').style.minHeight = '100vh';
      this.timer = setInterval(this.calMeetDuring, 1000);
      this.calMeetDuring();
      this.scrollToMain()
  },
  beforeDestroy() {
      clearTimeout(this.timer);
  },
  data() {
    return {
      name: this.$route.params.name,
      timer: '',
      meetStart: new Date('2022/09/12 19:00:00').getTime(),
      meetDuring: '',
    }
  },
  computed: {
  },
  methods: {
    calMeetDuring() {
        var curr = new Date().getTime()
        var diff = curr - this.meetStart
        var days = Math.floor(diff/(24*3600*1000))
        var hours = Math.floor((diff%(24*3600*1000))/(3600*1000)) 
        var minutes = Math.floor( (diff%(24*3600*1000))%(3600*1000) / (60*1000) )
        var secords = Math.floor( (diff%(24*3600*1000))%(3600*1000)%(60*1000) / 1000 )
        
        this.meetDuring = days + ' 天 ' + hours + ' 时 ' + minutes + ' 分 ' + secords + ' 秒'
    },
    async scrollToMain() {
        await nextTick()
        document.getElementById("record-meet-content").scrollIntoView();
    }
  },
}
</script>
<style>
.record-meet-wrap {
    background-color: #343031;
    border-radius: 2vh !important;
    height: 100vh;
    width: 100vw;
    font-size: 3.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<style scoped>

</style>