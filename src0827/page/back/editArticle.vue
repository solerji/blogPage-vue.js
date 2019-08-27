<template>
<!-- 文章编辑页面 -->
    <div class="editArticle">
        <div class="editArticleHeader">
          <span class="editArticleTitle"><Input v-model="title"  placeholder="请输入标题" style="width: 300px" /></span>
          <span class="editArticleAuthor"><Input v-model="author" placeholder="请输入作者名" style="width: 300px" /></span>
           <span class="editArticleTag">
             <Tag v-for="item in count" :key="item" :name="item" type="dot" color="error" closable @on-close="handleClose2">{{ item + 1 }}</Tag>
                <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
          </span>
          <span class="editArticleTime"><DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placement="top" placeholder="请选择发布日期和时间" style="width: 200px"></DatePicker></span>
        </div>
       <!-- <div class="headImg"></div> -->
       <div class="editArticleMain">
        <mavon-editor v-model="value" @change="contentChange"/>
       </div>
       <div class="editArticleFooter"></div>
       <Button type="primary" class="saveContent" @click="handleSubmit()" ghost>发布</Button>
       <Button type="primary" class="upadteContent" @click="handleUpdate()" ghost>修改提交</Button>
    </div>
</template>
<script>
export default {
    name: 'editArticle',
    data(){
      return {
        value: '',
        title: '',
        author: '',
        content: '',
        createTime: Date,
        // updateTime: Date,
        tags: '',
        contentHtml: '',
        count: [0, 1, 2]
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
  },
  contentChange: function (value, render) {
      // 文字内容
      console.log(123, value)
      // html解析
      console.log(render)
      this.contentHtml = render;
  },
  // patch?
  handleUpdate: function () {
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
  },
  handleAdd () {
    if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1);
      } else {
        this.count.push(0);
      }
  },
  handleClose2 (event, name) {
    const index = this.count.indexOf(name);
    this.count.splice(index, 1);
  }
  }
}
</script>
<style lang="stylus"  scoped>
.editArticle
  display flex
  flex-direction column

.editArticleHeader
  height 20%

.editArticleMain
  margin-top 3%

.saveContent
  margin-left 90%
  margin-top 2%
  
.editArticleHeader
  display flex
  flex-direction row

.editArticleTitle, .editArticleTime, .editArticleTag, .editArticleAuthor
  padding-top 4%
  padding-left 2%

.editArticleTag
  position relative

.editArticleTime
  position absolute
  right 2%

</style>