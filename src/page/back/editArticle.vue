<template>
<!-- 文章编辑页面 -->
    <div class="editArticle">
        <div class="editArticleHeader"></div>
       <div class="headImg"></div>
       <div class="editArticleMain">
        <mavon-editor v-model="value"/>
       </div>
       <div class="editArticleFooter"></div>
       <Button type="primary" class="saveContent" @click="handleSubmit('value')" ghost>发布</Button>
       <Button type="primary" class="upadteContent" @click="handleUpdate('value')" ghost>修改提交</Button>
    </div>
</template>
<script>
export default {
    name: 'editArticle',
    data(){
      return {
        value: {},
        title: '',
        author: '',
        content: '',
        createTime: Date,
        tags: ''
    }
  },
  methods: {
     handleSubmit: function () {
      this.$http({
        method: 'post',
        url: '/api/article',
        data:{
          title: this.title,
          author: this.author,
          content: this.content,
          createTime : this.createTime,
          tags: this.tags,
        }
        } 
      )
      .then(function (response) {
        console.log(response)
        this.$router.push('/index')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  // patch?
  // handleUpdate: function () {
  //     this.$http({
  //       method: 'post',
  //       url: '/api/article',
  //       data:{
  //         title: this.title,
  //         author: this.author,
  //         content: this.content,
  //         createTime : this.createTime,
  //         tags: this.tags,
  //       }
  //       } 
  //     )
  //     .then(function (response) {
  //       console.log(response)
  //       this.$router.push('/index')
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }
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