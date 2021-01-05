<template>
  <div id="app">
    <Form class="co-study-form" ref="formInline" :model="formInline" :rules="ruleInline" inline label-position="top" label-height="50px">
      <div class="co-portrait">
        <img id="portrait" :src="url" alt="co-portrait">
      </div>
      <FormItem class="co-zhu" prop="user">
        <Input class="co-study-input" type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="co-zhu" prop="password">
        <Input class="co-study-input" type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem class="co-zhu">
        <Button class="co-study-button" type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>

  </div>

</template>
<script>
import pic from '../assets/logo.png'
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
          console.log('sadsd')

          let t = 'http://192.168.1.113:8080' + '/homepage'
          window.location.href = t
          console.log('登录成功!')
        } else {
          this.$Message.error('账户或密码错误!')
        }
      })
    }
  },
}
</script>

<style>

.co-study-form {
  position: absolute;
  top: 40%;
  left: 5%;
  width: 90%;

}
.co-zhu{
  width: 95%;

}
.co-study-input{
  width: 100%;

}
.co-study-button{
  width: 100%;
  left: 10%;
  height: 45px;
  border-radius: 5px;
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
.ivu-input {
  height: 45px;
}
</style>