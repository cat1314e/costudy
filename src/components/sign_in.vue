<template>
  <div id="app">
    <Form v-show="sign === true" ref="formInline" :model="formInline" :rules="ruleInline" inline label-position="top" label-height="50px">
      <div class="co-portrait">
        <img id="portrait" :src="url" alt="co-portrait">
      </div>
      <FormItem class="co-zhu" prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="co-zhu" prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="co-zhu">
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>

    <!--    <message123 name="wo de shi jie"></message123>-->
    <!--    <message1234 name="dawjdd"></message1234>-->
  </div>

</template>
<script>
import pic from '../assets/logo.png'
// import homepage from './components/homepage.vue'
// import userHomePage from './components/userHomePage.vue'
export default {
  data: function() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入账户', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      },
      url: pic,
      sign: true,

    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功!')
          this.sign = false
        } else {
          this.$Message.error('账户或密码错误!')
        }
      })
    }
  },
  // components: {
  //   message123: homepage,
  //   message1234: userHomePage,
  // }
}
</script>

<style>

Form {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 90%;

}
.co-zhu{
  width: 95%;

}
Input{
  width: 100%;

}
Button{
  width: 100%;
  left: 10%;
}
.co-portrait{
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid cornsilk;
  overflow: hidden;
  left: 50%;
  top: -78%;
  transform: translateX(-50%);
}
.co-portrait::before{
  content: "";
  padding-top: 100%;
  display: block;
}
#portrait{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%) translateY(-50%);
}
</style>