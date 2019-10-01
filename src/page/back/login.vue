<template>
  <!-- 后台登录页面 -->
  <div class="loginIn">
    <div class="login">
      <div class="headImg"></div>
      <div class="loginMain">
        <div class="title">博客后台登录</div>
        <div class="loginForm">
          <Form
            :model="formInline"
            :rules="ruleInline"
            @keydown.enter.native.prevent="login('formInline')"
            label-position="top"
            ref="formInline"
          >
            <FormItem label="用户名" prop="name">
              <Input class="input" placeholder="用户名" type="text" v-model="formInline.name" />
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input class="input" placeholder="密码" type="password" v-model="formInline.password" />
            </FormItem>
            <FormItem>
              <Button @click="login('formInline')" ghost type="primary">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <!-- <div class="loginFooter"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      formInline: {
        name: '',
        password: ''
      },
      ruleInline: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '密码至少要6位！',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 登录该界面
    login: function() {
      let vue = this
      vue
        .$http({
          method: 'post',
          url: '/api/login',
          data: {
            name: this.formInline.name,
            password: this.formInline.password
          }
        })
        .then(function(response) {
          vue.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.login
  background: url('~@/assets/images/background.png')
  background-size: cover
  background-repeat: repeat
  width: 100%
  height: 70em

.loginMain
  position: relative
  z-index: 100
  margin-left: 40%
  padding-top: 20%

.title
  position: relative
  font-size: 18px
  margin-bottom: 2%
  font-weight: 900

.input
  width: 200px
</style>
