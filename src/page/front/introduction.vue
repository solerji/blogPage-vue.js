<template>
<!-- 个人介绍页面 -->
    <div class="introduction">
       <div class="headImg"></div>
       <div class="introductionMain">
        <div class="title">
         <p>个人介绍</p>
        </div>
        <Divider class="headDivider" orientation="left">个人介绍</Divider>
       </div>
       <div class="introductionFooter"></div>
    </div>
</template>
<script>
export default {
    name: 'introduction',
    data(){
      return {
    }
  }
}
</script>
<style lang="stylus"  scoped>
.headImg
  width 100%
  height 200px

.title
  font-size 20px
  position relative
  margin-top 5%
  margin-left 40%
  font-weight bold

.introductionMain
  position relative
  width 60%
  margin-left 20%
  margin-top 10%
  
</style>