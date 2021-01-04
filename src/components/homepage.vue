<template >
<!--  v-show="1 === 2"-->
  <div style="background:#eee; padding: 5px; line-height: 5vh" >
        <Card :bordered="false" v-for="(m, i) in userMessage"
              v-bind:key="i"
              style="border: 1px solid #eee; padding: 2px 0; margin: 5px 0;"
        >
          <!--在todo里添加一个东西使整行被点击都会响应-->
          <p><span @click="actionClickUser">被举报人：{{ m.reportUserName }}</span></p>
          <p>被举报时间：{{ m.reportTime1 }} {{ m.reportTime2 }}</p>
          <p>举报类型：{{ m.reportType }}</p>
          <p>举报范围：{{ m.reportRange }}</p>
          <p>举报描述：{{ m.reportDescribe }}</p>
          <img v-bind:src=m.reportPhoto style="width: 60%">
          <div class="co-buttons-update">
            <button class="co-button-update">处理</button>
            <button class="co-button-update">忽略</button>
            <button @click="actionClickDetain" class="co-button-update">拘留</button>
          </div>
        </Card>
    </div>
</template>

<script>
import n21 from '../message.js'



export default {
  name: 'home',
  data: function() {
    return {
      userMessage: n21,
    }
  },
  methods: {
    actionClickUser: function() {
      console.log('dark bad')
      let t = 'http://192.168.1.113:8080' + '/userpage'
      window.location.href = t
    },
    actionClickDetain: function() {
      let t = 'http://192.168.1.113:8080' + '/detain'
      window.location.href = t
    }
  },
}
</script>

<style>
.co-buttons-update{
  position: absolute;
  right: 5%;
  top: 5%;
}
.co-button-update{
  background: white;
  border: 1px solid #eee;
  margin: 3%;
  border-radius: 5px;
}

</style>