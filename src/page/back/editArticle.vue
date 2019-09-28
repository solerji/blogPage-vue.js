<template>
  <!-- 文章编辑页面 -->
  <div class="editArticle">
    <div class="editArticleHeader">
      <span class="editArticleTitle">
        <Input placeholder="请输入标题" style="width: 300px" v-model="title" />
      </span>
      <span class="editArticleAuthor">
        <Input placeholder="请输入作者名" style="width: 300px" v-model="author" />
      </span>
      <span class="editArticleTag">
        <Tag
          :key="item"
          :name="item"
          @on-close="handleClose"
          closable
          color="error"
          type="dot"
          v-for="item in tagArray"
        >{{ item }}</Tag>
        <Button @click="handleAdd" icon="ios-add" size="small" type="dashed">添加标签</Button>
      </span>
      <span class="editArticleTime">
        <DatePicker
          @on-change="changeDate"
          format="yyyy-MM-dd HH:mm"
          placeholder="请选择发布日期和时间"
          placement="top"
          style="width: 200px"
          type="datetime"
          v-model="createTime"
        ></DatePicker>
      </span>
    </div>
    <div class="editArticleMain">
      <mavon-editor @change="contentChange" v-model="value" />
    </div>
    <div class="editArticleFooter">
      <Button @click="exit()" class="exit" ghost type="primary">返回</Button>
      <Button @click="handleSubmit()" class="saveContent" ghost type="primary">发布</Button>
      <Button @click="handleUpdate()" class="upadteContent" ghost type="primary">修改提交</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'editArticle',
  data() {
    return {
      value: '',
      title: '',
      author: '',
      content: '',
      createTime: '',
      tags: '',
      contentHtml: '',
      updateAid: '',
      tagArray: ['测试', '软件']
    }
  },
  mounted() {
    this.numberGet()
  },
  methods: {
    numberGet() {
      var numberGet = this.$route.params.articleUpdateContent
      this.title = numberGet.title
      this.author = numberGet.author
      this.value = numberGet.content
      this.updateAid = numberGet.aid
    },
    handleSubmit: function() {
      let vue = this
      let tagsTmp = vue.tagArray.join(',')
      console.log(this.createTime)
      vue
        .$http({
          method: 'post',
          url: '/api/addArticle',
          data: {
            title: vue.title,
            author: vue.author,
            content: vue.contentHtml,
            createTime: vue.createTime,
            tags: tagsTmp,
            publish: '1'
          }
        })
        .then(function(response) {
          console.log(response)
          vue.$Message.success('发布成功')
          vue.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // patch?
    handleUpdate: function() {
      let vue = this
      let tagsTmp = vue.tagArray.join(',')
      vue
        .$http({
          method: 'post',
          url: '/api/updateArticle',
          data: {
            aid: vue.updateAid,
            title: vue.title,
            author: vue.author,
            content: vue.contentHtml,
            createTime: vue.createTime,
            tags: tagsTmp
          }
        })
        .then(function(response) {
          console.log(response)
          vue.$Message.success('更新成功')
          vue.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    contentChange: function(value, render) {
      // 文字内容
      console.log(123, value)
      // html解析
      console.log(render)
      this.contentHtml = render
    },
    handleAdd() {
      // if (this.tagArray.length) {
      //   console.log(this.tagArray)
      //   this.tagArray.push(this.tagArray[this.tagArray.length - 1] + 1)
      //   console.log(3424, this.tagArray)
      // } else {
      //   this. count.push(0)
      // }
    },
    handleClose(event, name) {
      const index = this.tagArray.indexOf(name)
      this.tagArray.splice(index, 1)
      console.log(3, this.tagArray)
    },
    changeDate(datetime) {
      this.createTime = datetime
      console.log(datetime)
    },
    exit() {
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.editArticle
  display: flex
  flex-direction: column

.editArticleHeader
  height: 20%
  z-index: 4000

.editArticleMain
  margin-top: 3%

.editArticleHeader
  display: flex
  flex-direction: row

.editArticleTitle, .editArticleTime, .editArticleTag, .editArticleAuthor
  padding-top: 4%
  padding-left: 2%

.editArticleTag
  position: relative

.editArticleTime
  position: absolute
  right: 2%

.editArticleFooter
  display: flex
  flex-direction: row
  padding-left: 85%
  margin-top: 2%

.editor
  width: 100%
  height: 40rem

@media screen and (max-width: 1400px)
  .editor
    width: 100%
    height: 22rem

.exit, .saveContent, .upadteContent
  margin-left: 10px
</style>
