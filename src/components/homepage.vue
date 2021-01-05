<template >
<!--  v-show="1 === 2"-->
  <div  class="co-home">
    <Card class="co-card" :bordered="false" v-for="(m, i) in userMessage"
          v-show="home_to_user === true"
          v-bind:key="i"
    >
      <!--在todo里添加一个东西使整行被点击都会响应-->
      <p>被举报人：<span @click="actionClickUser">{{ m.reportUserName }}</span></p>
      <p>被举报时间：{{ m.reportTime1 }} {{ m.reportTime2 }}</p>
      <p>举报类型：{{ m.reportType }}</p>
      <p>举报范围：{{ m.reportRange }}</p>
      <p>举报描述：{{ m.reportDescribe }}</p>
      <img class="co-image" v-bind:src=m.reportPhoto>
      <div class="co-buttons-update">
        <button @click="actionClickHandle" class="co-button-update">处理</button>
        <button @click="actionClickIgnore" class="co-button-update">忽略</button>
        <button @click="actionClickDetain" class="co-button-update">拘留</button>
      </div>
    </Card>
    <UserHomePage
        v-show="home_to_user === false"
        @fatherMethod="fatherMethod"
        v-bind:reportName="user_test"
    >
    </UserHomePage>

  </div>
</template>


<script>
import n21 from '../message.js'
import userHomePage from './userHomePage'


export default {
  name: 'home',

  data: function() {
    return {
      userMessage: n21,
      home_to_user: true,
      user_test: '',
    }
  },
  methods: {
    actionClickUser: function(event) {
      console.log('dark bad')
      this.home_to_user = false
      this.user_test = event.target.innerText
      console.log('this.user_test', this.user_test)

    },
    actionClickHandle: function() {
      let t = 'http://192.168.1.113:8080' + '/handle'
      window.location.href = t
    },
    actionClickDetain: function() {
      let t = 'http://192.168.1.113:8080' + '/detain'
      window.location.href = t
    },
    fatherMethod() {
      console.log('测试')
      this.home_to_user = true
    },
    actionClickIgnore(event) {
      let self = event.target
      let userCard = self.closest('.co-card')
      console.log('userCard', userCard)
      userCard.remove()
      // 此处添加移除数据库的此条记录

    }
  },
  components: {
    UserHomePage: userHomePage,
  }
}
</script>

<style>

.co-card{
  border: 1px solid #eee;
  padding: 2px 0;
  margin: 5px 0;
}
.co-home{
  background:#eee;
  padding: 5px;
  line-height: 5vh;
}
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
.co-image{
  width: 60%;
}

</style>