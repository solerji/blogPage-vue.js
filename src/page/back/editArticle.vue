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
          @on-close="handleClose2"
          closable
          color="error"
          type="dot"
          v-for="item in count"
        >{{ item + 1 }}</Tag>
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
    <div class="editArticleFooter"></div>
    <Button @click="handleSubmit()" class="saveContent" ghost type="primary">发布</Button>
    <Button @click="handleUpdate()" class="upadteContent" ghost type="primary">修改提交</Button>
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
      count: [0, 1, 2],
      updateAid: ''
    }
  },
  mounted() {
    // console.log(8989, this.$route.params.articleUpdateContent)
    this.numberGet()
  },
  methods: {
    numberGet() {
      var numberGet = this.$route.params.articleUpdateContent
      this.title = numberGet.title
      this.author = numberGet.author
      this.value = numberGet.content
    },
    handleSubmit: function() {
      this.$http({
        method: 'post',
        url: '/api/addArticle',
        data: {
          title: this.title,
          author: this.author,
          content: this.contentHtml,
          createTime: this.createTime,
          tags: this.tags
        }
      })
        .then(function(response) {
          console.log(response)
          this.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // patch?
    handleUpdate: function() {
      this.$http({
        method: 'post',
        url: '/api/updateArticle',
        data: {
          aid: this.updateAid,
          title: this.title,
          author: this.author,
          content: this.contentHtml,
          createTime: this.createTime,
          tags: this.tags
        }
      })
        .then(function(response) {
          console.log(response)
          this.$router.push('/index')
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
      if (this.count.length) {
        this.count.push(this.count[this.count.length - 1] + 1)
      } else {
        this.count.push(0)
      }
    },
    handleClose2(event, name) {
      const index = this.count.indexOf(name)
      this.count.splice(index, 1)
    },
    changeDate(datetime) {
      this.createTime = datetime
      console.log(datetime)
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
  padding-left: 90%
  margin-top: 2%

.editor
  width: 100%
  height: 40rem

@media screen and (max-width: 1400px)
  .editor
    width: 100%
    height: 22rem

.saveContent, .upadteContent
  margin-left: 90%
</style>
