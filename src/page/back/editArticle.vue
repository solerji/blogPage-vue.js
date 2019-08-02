<template>
<!-- 文章编辑页面 -->
    <div class="editArticle">
        <div class="editArticleHeader"></div>
       <div class="headImg"></div>
       <div class="editArticleMain">
        <mavon-editor v-model="value"/>
       </div>
       <div class="editArticleFooter"></div>
       <Button type="primary" class="saveContent" ghost>保存修改</Button>
    </div>
</template>
<script>
export default {
    name: 'editArticle',
    data(){
      return {
    }
  }
}
</script>
<style lang="stylus"  scoped>
.editArticleHeader
  height 100px
.saveContent
  margin-left 90%
  margin-top 2%
</style>