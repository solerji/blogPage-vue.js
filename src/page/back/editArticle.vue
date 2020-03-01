<template>
  <!-- 文章编辑页面 -->
  <div class="editArticle">
    <div class="editArticleHeader">
      <Row :gutter="3" justify="start" type="flex">
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
      </Row>
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
      <mavon-editor
        :scrollStyle="true"
        @change="contentChange"
        style="height:43rem;"
        v-model="value"
      />
    </div>
    <div class="editArticleFooter">
      <Row>
        <Button @click="exit()" class="exit" ghost type="primary">返回</Button>
        <Button
          @click="handleSubmit()"
          class="saveContent"
          ghost
          type="primary"
          v-if="isAdd === true"
        >发布</Button>
        <Button
          @click="handleUpdate()"
          class="upadteContent"
          ghost
          type="primary"
          v-if="isEdit===true"
        >提交更新内容</Button>
      </Row>
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
      content: '',
      updateAid: '',
      tagArray: [],
      tagValue: '',
      tagLable: [],
      isAdd: true,
      isEdit: ''
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
  created() {
    this.numberGet()
  },
  methods: {
    numberGet() {
      let vue = this
      let aid = vue.$route.params.aid
      if (aid !== 0) {
        vue.$http
          .get('/api/article', {
            params: {
              aid: aid
            }
          })
          .then(function(response) {
            if (response.data.code == 0) {
              let articleUpdateContent = response.data
              vue.isAdd = vue.$route.params.isAdd
              vue.isEdit = true
              vue.header = articleUpdateContent.article.title
              vue.author = articleUpdateContent.article.author
              vue.value = articleUpdateContent.article.show_content
              vue.updateAid = articleUpdateContent.article.aid
              articleUpdateContent.tags.forEach(tagGroup => {
                vue.tagArray.push(tagGroup.tag_name)
              })
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      }
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
            showContent: vue.content,
            tagName: vue.tagArray
          }
        })
        .then(function(response) {
          if (response.data.code == 0) {
            vue.$Message.success('发布成功')
            vue.$router.push('/index')
          }
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
            showContent: vue.content,
            tagName: vue.tagArray
          }
        })
        .then(function(response) {
          if (response.data.code == 0) {
            vue.$Message.success('更新成功')
            vue.$router.push('/index')
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    contentChange: function(value, render) {
      this.contentHtml = render
      this.content = value
    },
    handleClose(event, name) {
      const index = this.tagArray.indexOf(name)
      this.tagArray.splice(index, 1)
    },
    // changeDate(datetime) {
    //   this.createTime = datetime
    //   console.log(datetime)
    // },
    exit() {
      this.$router.push('/index')
      this.isEdit = false
      this.isAdd = true
    }
  }
}
</script>
<style lang="stylus"  scoped>
.editArticle
  display: flex
  flex-direction: column
  background: url('~@/assets/images/bg1.jpg')
  background-size: cover
  background-repeat: no-repeat

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
</style>
