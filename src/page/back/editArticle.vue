<template>
  <!-- 文章编辑页面 -->
  <div class="editArticle">
    <div class="editArticleHeader">
      <span class="editArticleTitle">
        <Input placeholder="请输入标题" style="width: 300px" v-model="header" />
      </span>
      <span class="editArticleAuthor">
        <Input placeholder="请输入作者名" style="width: 300px" v-model="author" />
      </span>
      <span class="editArticleTag">
        <Tag
          :key="item"
          @on-close="handleClose"
          closable
          color="error"
          type="dot"
          v-for="item in tagArray"
        >{{ item }}</Tag>
        <Poptip trigger="focus">
          <Input
            @on-enter="getKey"
            clearable
            placeholder="请输入标签"
            style="width: 120px"
            v-model="tagValue"
          />
          <div slot="content">{{ formatTags }}</div>
        </Poptip>
      </span>
      <!-- 用户自行设定发布时间 -->
      <!-- <span class="editArticleTime">
        <DatePicker
          @on-change="changeDate"
          format="yyyy-MM-dd HH:mm"
          placeholder="请选择发布日期和时间"
          placement="top"
          style="width: 200px"
          type="datetime"
          v-model="createTime"
        ></DatePicker>
      </span>-->
    </div>
    <div class="editArticleMain">
      <mavon-editor @change="contentChange" v-model="value" />
    </div>
    <div class="editArticleFooter">
      <Button @click="exit()" class="exit" ghost type="primary">返回</Button>
      <Button @click="handleSubmit()" class="saveContent" ghost type="primary">发布</Button>
      <Button @click="handleUpdate()" class="upadteContent" ghost type="primary">提交更新内容</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'editArticle',
  data() {
    return {
      value: '',
      header: '',
      author: '',
      content: '',
      tags: '',
      contentHtml: '',
      updateAid: '',
      tagArray: [],
      tagValue: '',
      tagLable: []
    }
  },
  computed: {
    formatTags() {
      if (this.tagValue === '') return '请输入标签'
      function parseNumber(str) {
        return str
      }
      return parseNumber(this.tagValue)
    }
  },
  mounted() {
    this.numberGet()
  },
  methods: {
    numberGet() {
      var numberGet = this.$route.params.articleUpdateContent
      this.header = numberGet.article.title
      this.author = numberGet.article.author
      this.value = numberGet.article.content
      this.updateAid = numberGet.article.aid
      numberGet.tags.forEach(tagGroup => {
        this.tagArray.push(tagGroup.tag_name)
      })
      console.log(this.tagArray)
    },
    getKey: function() {
      let tagTmps = this.tagValue
      let tagTmp = []
      tagTmp.push(tagTmps)
      for (var i = 0; i < tagTmp.length; i++) {
        if (this.tagArray.indexOf(tagTmp[i]) == -1) {
          this.tagArray.push(tagTmp[i])
        }
      }
      console.log(this.tagArray)
    },
    handleSubmit: function() {
      let vue = this
      vue
        .$http({
          method: 'post',
          url: '/api/addArticle',
          data: {
            title: vue.header,
            author: vue.author,
            content: vue.contentHtml,
            tagName: vue.tagArray
          }
        })
        .then(function(response) {
          debugger
          vue.$Message.success('发布成功')
          // vue.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    handleUpdate: function() {
      let vue = this
      vue
        .$http({
          method: 'post',
          url: '/api/updateArticle',
          data: {
            aid: vue.updateAid,
            title: vue.header,
            author: vue.author,
            content: vue.contentHtml,
            tagName: vue.tagArray
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
      // console.log(123, value)
      // html解析
      // console.log(render)
      this.contentHtml = render
    },
    handleClose(event, name) {
      const index = this.tagArray.indexOf(name)
      this.tagArray.splice(index, 1)
      console.log(3, this.tagArray)
    },
    // changeDate(datetime) {
    //   this.createTime = datetime
    //   console.log(datetime)
    // },
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

.editArticleTitle, .editArticleTag, .editArticleAuthor
  padding-top: 4%
  padding-left: 2%

.editArticleTag
  position: relative

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
