<template >
<!--  v-show="1 === 2"-->
  <div v-show="userControl === true" style="background:#eee; padding: 5px; line-height: 5vh" >
    <Card :bordered="false" v-for="(m, i) in userMessage"
          v-bind:key="i"
          style="border: 1px solid #eee; padding: 2px 0; margin: 5px 0;"
    >
      <!--在todo里添加一个东西使整行被点击都会响应-->
      <p><span @click="actionClickUserBack">举报人：{{ m.reportUserName }}</span></p>
      <p>被举报时间：{{ m.reportTime1 }} {{ m.reportTime2 }}</p>
      <p>举报类型：{{ m.reportType }}</p>
      <p>举报范围：{{ m.reportRange }}</p>
      <p>举报描述：{{ m.reportDescribe }}</p>
      <img v-bind:src=m.reportPhoto style="width: 60%">
      <div class="co-buttons-update">
        <button class="co-button-update">处理</button>
        <button class="co-button-update">忽略</button>
        <button class="co-button-update">拘留</button>
      </div>
    </Card>
  </div>
<!--  <message12345 name="dasd"></message12345>-->


</template>

<script>
// import detain from './../controlThing/detain.vue'
import pic from '../assets/logo.png'
let n22 = [
  {
    reportUserName: 'aaa',
    reportTime1: '2020-10-11',
    reportTime2: '00:00',
    reportType: '啊是不是',
    reportRange: 'sadjwda',
    reportDescribe: '达瓦的吧安慰你都看不到帮我卡巴那俺文件夹八度空间我不懂',
    reportPhoto: pic
  },
  {
    reportUserName: 'aaa',
    reportTime1: '2020-10-11',
    reportTime2: '00:00',
    reportType: 'sadddw不是',
    reportRange: 'sadjwda',
    reportDescribe: '达瓦的吧',
    reportPhoto: pic
  }
]


export default {
  name: 'userPage',
  data: function() {
    return {
      userMessage: n22,
      userControl: true,
    }
  },
  methods: {
    actionClickUserBack: function() {
      console.log('dark soul')
    }
  },
  // components: {
  //   message12345: detain,
  // }
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