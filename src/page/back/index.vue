<template>
  <!-- 后台管理首页面 -->
  <div class="index">
    <div class="indexHeader"></div>
    <div class="newButton">
      <Button @click="addArticle()" ghost type="info">新增文档</Button>
    </div>
    <div class="indexMain">
      <div class="indexLeft">
        <div>
          <Tag class="listHeaderStyle" color="volcano" type="border">文章列表</Tag>
        </div>
        <Table
          :columns="columns"
          :data="articleList"
          :show-header="false"
          @on-row-click="getOneArticle"
          highlight-row
          ref="articleTable"
        >
          <template slot="title" slot-scope="{ row }">
            <strong>{{ row.title }}</strong>
          </template>
          <template slot="action" slot-scope="{ row, index }">
            <Button
              @click="show(row)"
              ghost
              size="small"
              style="margin-right: 5px"
              type="primary"
            >编辑</Button>
            <Button @click="remove(index)" ghost size="small" type="error">删除</Button>
          </template>
        </Table>
        <Modal @on-cancel="cancel" @on-ok="ok" title="警告" v-model="modal">
          <p>确认删除？</p>
        </Modal>
      </div>
      <div class="indexRight">
        <div class="articleContent">
          <div class="title">{{ articleContent.title }}</div>
          <div class="otherMessage">
            <span class="author">
              <Tag color="cyan" type="border">{{ articleContent.author }}</Tag>
            </span>
            <span class="time">{{ articleContent.createTime }}</span>
            <span class="time">{{ articleContent.updateTime }}</span>
            <span class="tags">
              <Tag :key="item" color="cyan" v-for="item in tagsArray">{{item}}</Tag>
            </span>
          </div>
          <Divider />
          <div class="content">{{ articleContent.content }}</div>
        </div>
      </div>
    </div>
    <div class="indexFooter"></div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      columns: [
        {
          title: 'Title',
          slot: 'title'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      articleList: [],
      articleContent: [],
      delAid: '',
      articleUpdateContent: [],
      tagsArray: [],
      modal: false
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    addArticle: function() {
      let vue = this
      vue.$router.push('./editArticle')
    },
    remove(index) {
      console.log(index)
      let vue = this
      vue.modal = true
    },
    getArticle: function() {
      let vue = this
      vue
        .$http({
          method: 'get',
          url: '/api/articles'
        })
        .then(function(response) {
          vue.articleList = response.data.list
          // console.log(vue.articleList)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getOneArticle: function(index) {
      let vue = this
      vue.delAid = index.aid
      vue.$http
        .get('/api/article', {
          params: {
            aid: index.aid
          }
        })
        .then(function(response) {
          vue.articleContent = response.data
          vue.tagsArray = response.data.tags.split(',')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    show(row) {
      let vue = this
      console.log(row.aid)
      vue.$http
        .get('/api/article', {
          params: {
            aid: row.aid
          }
        })
        .then(function(response) {
          let articleUpdateContent = response.data
          vue.$router.push({
            name: 'editArticle',
            params: { articleUpdateContent }
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    ok() {
      let vue = this
      console.log(vue.delAid)
      vue
        .$http({
          method: 'delete',
          url: '/api/delArticle',
          data: {
            aid: vue.delAid
          }
        })
        .then(function(response) {
          vue.$Message.success('删除成功')
          vue.getArticle()
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    cancel() {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.indexHeader
  height: 100px
  // background: url('~@/assets/images/header.png')
  // background-size: cover
  // background-repeat: no-repeat
  width: 100%
  height: 10em
  opacity: 0.5

.indexMain
  width: 100%

.indexLeft
  position: relative
  float: left
  width: 30%

.indexRight
  position: relative
  float: left
  width: 70%
  padding-left: 2%
  // background-color lightgrey

.newButton
  margin-left: 90%
  margin-bottom: 2%

.title
  position: absolute
  margin: auto
  top: 10%
  left: 50%
  font-size: 25px
  height: 30px
  font-weight: bold
  transform: translate(0%, -50%)

.articleContent
  margin-top: 8%

.content
  top: 2%

.otherMessage
  padding-left: 40%

.author, .time, .tags
  padding-left: 5%

.listHeaderStyle
  margin-left: 2%
  width: 10rem
  text-align: center
  font-size: 17px
</style>
