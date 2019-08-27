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
        <FormItem prop="name" label="用户名">
            <Input type="text" class="input" v-model="formInline.name" placeholder="用户名"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
            <Input type="password" class="input" v-model="formInline.password" placeholder="密码"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="login('formInline')" ghost>登录</Button>
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
            name: '',
            password: ''
        },
        ruleInline: {
            name: [
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
    // 登录该界面
    login: function () {
      // this.$http({
      //   method: 'post',
      //   url: '/api/login',
      //   data:{
      //     name: this.formInline.name,
      //     password: this.formInline.password
      //   }
      //   } 
      // )
      // .then(function (response) {
      //   console.log(response)
        this.$router.push('/index')
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
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