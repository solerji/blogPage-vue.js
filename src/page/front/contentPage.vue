<template>
<!-- 文章内容页面 -->
    <div class="contentPage">
        <div class="contentMain">
          <div class="contentTitle">一篇文章</div>
          <Divider class="headDivider" orientation="left">Left Text</Divider>
          <div class="contentMarkdown"></div>
        </div>
        <div class="contentFooter">
          <Divider class="footDivider" orientation="right">Right Text</Divider>
          <div class="pageClass"></div>
          <!-- 留言功能待开放 -->
          <!-- <div class="comment"></div> -->
          <!-- 上传图片作为打赏工具 -->
          <div class="begMoney">
            <div class="wechat"></div>
            <div class="alipay"></div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contentPage',
    data(){
      return{

      }
    }
}
</script>
<style lang="stylus"  scoped>
.contentTitle 
  position absolute
  margin auto
  top 20%
  left 50%
  font-size 30px
  font-weight bold
  transform translate(-20%,-50%)

.headDivider
  position relative
  margin-top 10%

.footDivider
  position relative
  margin-top 10%
.wechat
  float left
.alipay
  float left 
</style>