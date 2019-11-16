<template>
  <!-- 后台管理首页面 -->
  <div class="index">
    <div class="indexHeader"></div>
    <div class="newButton">
      <Button @click="addArticle()" ghost isAdd="true" type="info">新增文档</Button>
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
          height="500"
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
              isEdit="true"
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
            <span class="time">{{ articleContent.update_time }}</span>
            <span class="tags">
              <Tag :key="item.tag_name" color="cyan" v-for="item in tagsArray">{{item.tag_name}}</Tag>
            </span>
          </div>
          <Divider />
          <div class="content" v-html="articleContent.content">{{ articleContent.content }}</div>
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
      isAdd: true,
      isEdit: false,
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
          if (response.data.code == 0) {
            vue.articleList = response.data.list
            // 请求列表时默认请求第一行
            vue.getOneArticle(vue.articleList[0], 1)
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getOneArticle: function(row, index) {
      let vue = this
      vue.delAid = row.aid
      vue.$http
        .get('/api/article', {
          params: {
            aid: row.aid
          }
        })
        .then(function(response) {
          if (response.data.code == 0) {
            vue.articleContent = response.data.article
            vue.tagsArray = response.data.tags
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    show(row) {
      let vue = this
      vue.$http
        .get('/api/article', {
          params: {
            aid: row.aid
          }
        })
        .then(function(response) {
          if (response.data.code == 0) {
            let articleUpdateContent = response.data
            vue.isEdit = true
            vue.isAdd = false
            let isEditStatus = vue.isEdit
            let isAddStatus = vue.isAdd
            vue.$router.push({
              name: 'editArticle',
              params: { articleUpdateContent, isEditStatus, isAddStatus }
            })
          }
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
          if (response.data.code == 0) {
            vue.$Message.success('删除成功')
            vue.getArticle()
          }
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
.index
  background: url('~@/assets/images/bg1.jpg')
  background-size: cover
  background-repeat: no-repeat

.indexHeader
  height: 100px
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
  font-size: 25px
  height: 30px
  font-weight: bold
  transform: translate(0%, -50%)

.articleContent
  margin-top: 8%

.content
  top: 2%
  overflow: auto

.time, .tags
  padding-left: 2%

.listHeaderStyle
  margin-left: 2%
  width: 10rem
  text-align: center
  font-size: 17px
</style>
