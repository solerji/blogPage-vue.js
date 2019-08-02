<template>
<!-- 后台登录页面 -->
    <div class="login">
       <div class="headImg"></div>
       <div class="loginMain">
        <div class="title">
         博客后台登录
        </div>
        <div class="loginForm">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="top" >
        <FormItem prop="user" label="用户名">
            <Input type="text" class="input" v-model="formInline.user" placeholder="用户名"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
            <Input type="password" class="input" v-model="formInline.password" placeholder="密码"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" ghost>登录</Button>
        </FormItem>
        </Form>
     </div>
  </div>
  <div class="loginFooter"></div>
  </div>
</template>
<script>
export default {
    name: 'login',
    data(){
      return {
         formInline: {
            user: '',
            password: ''
        },
        ruleInline: {
            user: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入用户密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码至少要6位！', trigger: 'blur' }
            ]
      }
    }
  },
  methods:{
    handleSubmit:function(){
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.loginMain
  position relative
  margin-left 40%
  margin-top 20%
.title
  position relative
  font-size 18px
  margin-bottom  2%
.input
  width 200px
  
</style>