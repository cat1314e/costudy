<template >
<!--  v-show="1 === 2"-->
<div>
  <Card class="co-card" :bordered="false" v-for="(s, i) in userMessage"
    v-bind:key="i"
    v-show="reportName === s.reportUserName"
  >
  <!--在todo里添加一个label使整行被点击都会响应-->
  <p><span @click="actionClickUserBack">被举报人：{{ s.reportUserName }}</span></p>
  <p>被举报时间：{{ s.reportTime1 }} {{ s.reportTime2 }}</p>
  <p>举报类型：{{ s.reportType }}</p>
  <p>举报范围：{{ s.reportRange }}</p>
  <p>举报描述：{{ s.reportDescribe }}</p>
  <img class="co-image" v-bind:src=s.reportPhoto>
  <div class="co-buttons-update">
    <button @click="actionClickHandle" class="co-button-update">处理</button>
    <button @click="actionClickIgnoreU" class="co-button-update">忽略</button>
    <button @click="actionClickDetainU" class="co-button-update">拘留</button>
  </div>
  </Card>
  <br>
</div>




</template>

<script>
import n21 from '../message.js'



export default {
  name: 'userPage',
  props: ['reportName'],
  data: function() {
    return {
      userMessage: n21,
      usershow: true,
    }
  },
  methods: {
    actionClickUserBack: function() {
      this.$emit('fatherMethod');
    },
    actionClickHandle: function() {
      let t = 'http://192.168.1.113:8080' + '/handle'
      window.location.href = t
    },
    actionClickDetainU: function() {
      let t = 'http://192.168.1.113:8080' + '/detain'
      window.location.href = t
    },
    actionClickIgnoreU(event) {
      let self = event.target
      let userCard = self.closest('.co-card')
      console.log('userCard', userCard)
      userCard.remove()
      // 此处添加移除数据库的此条记录，并且刷新userpage组件
      this.$emit('actionClickIgnore')
    }
  },
}
</script>

<style>
.co-buttons-update{
  position: absolute;
  right: 5vw;
  width: 20vw;
  top: 5%;
}
.co-button-update{
  background: white;
  border: 1px solid #eee;
  width: 18vw;
  margin: 3%;
  border-radius: 5px;
}
.co-card {
  border: 1px solid #eee;
  padding: 2px 0;
  margin: 5px 0;
}
.co-image{
  width: 60%
}

</style>