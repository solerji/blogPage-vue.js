<template>
  <!-- 后台登录页面 -->
  <div class="loginIn">
    <div class="loginMain">
      <Row>
        <i-col :xs="{ push:6 }" :sm="{ push:7 }" :md="{ push:8 }" :lg="{ push:9 }" >
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
                <Input
                  class="input"
                  placeholder="密码"
                  type="password"
                  v-model="formInline.password"
                />
              </FormItem>
              <FormItem>
                <Button @click="login('formInline')" ghost type="primary">登录</Button>
              </FormItem>
            </Form>
          </div>
        </i-col>
      </Row>
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
          localStorage.setItem('token',"Bearer " + response.data.data)
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
.loginIn
  background: url('~@/assets/images/background.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center
  height: 90vh
  width: 100vw

.loginMain
  z-index: 100
  align: center

.title
  position: relative
  font-size: 18px
  padding-top : 25vh;
  margin-bottom: 2%
  font-weight: 900

.input
  width: 200px
</style>
