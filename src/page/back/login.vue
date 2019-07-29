<template>
<!-- 后台登录页面 -->
    <div class="login">
       <div class="headImg"></div>
       <div class="loginMain">
        <div class="title">
         <p>博客后台登录</p>
        </div>
        <Input v-model="userName" placeholder="请输入用户名" clearable style="width: 200px" />
        <Input v-model="password" placeholder="请输入密码" clearable style="width: 200px" />
        <Button type="default" ghost>提交</Button>
        <Button type="primary" ghost>重置</Button>
       </div>
       <div class="loginFooter"></div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
      return {
        userName: '',
        password: ''
    }
  }
}
</script>
<style lang="stylus"  scoped>

</style>