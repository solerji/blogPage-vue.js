<template>
  <!-- 后台管理首页面 -->
  <div class="index">
    <div class="indexHeader"></div>
    <div class="newButton">
      <Row type="flex">
        <Col
          :lg="{ span: 5, offset: 20 }"
          :md="{ span: 5, offset: 22 }"
          :sm="{ span: 5, offset: 22 }"
          :xs="{ span: 5, offset: 18 }"
        >
          <Button @click="addArticle()" ghost isAdd="true" type="info">新增文档</Button>
        </Col>
      </Row>
    </div>
    <div class="indexMain">
      <Row justify="start" type="flex">
        <Col :lg="6" :md="6" :sm="7" :xs="10">
          <div>
            <Tag class="listHeaderStyle" color="volcano" type="border">文章列表</Tag>
          </div>
          <div class="indexLeft">
            <Table
              :columns="columns"
              :data="articleList"
              :height="height"
              :show-header="false"
              @on-row-click="getOneArticle"
              highlight-row
              ref="articleTable"
              style="overflow-x:hidden;"
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
        </Col>
        <Col :lg="18" :md="18" :sm="17" :xs="14">
          <div class="indexRight">
            <div class="articleContent">
              <Row>
                <div class="title">{{ articleContent.title }}</div>
              </Row>
              <Row>
                <div class="otherMessage">
                  <Col :lg="4" :md="2" :sm="2" :xs="24">
                    <span class="author">
                      <Tag color="cyan" type="border">{{ articleContent.author }}</Tag>
                    </span>
                  </Col>
                  <Col
                    :lg="{ span: 6, offset: 2 }"
                    :md="{ span: 4, offset: 2 }"
                    :sm="{ span: 4, offset: 2 }"
                    :xs="{ span: 24, offset: 2 }"
                  >
                    <span class="time">{{ articleContent.update_time }}</span>
                  </Col>
                  <Col
                    :lg="{ span: 10, offset: 1 }"
                    :md="{ span: 14, offset: 1 }"
                    :sm="{ span: 14, offset: 1 }"
                    :xs="{ span: 24, offset: 1 }"
                  >
                    <span class="tags">
                      <Tag
                        :key="item.tag_name"
                        color="cyan"
                        v-for="item in tagsArray"
                      >{{item.tag_name}}</Tag>
                    </span>
                  </Col>
                </div>
              </Row>
              <Divider />
              <div>
                <div class="content" v-html="articleContent.content">{{ articleContent.content }}</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
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
      modal: false,
      height: window.innerHeight - 220
    }
  },
  created() {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  mounted() {
    this.getArticle()
  },
  destroyed() {
    window.removeEventListener('resize', this.getHeight)
  },
  methods: {
    getHeight: function() {
      this.height = window.innerHeight - 220
    },
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
.indexHeader
  background: url('~@/assets/images/bg1.jpg')
  background-size: cover
  background-repeat: no-repeat
  width: 100%
  height: 10rem

.indexMain
  width: 100%

.indexLeft
  position: relative
  float: left
  width: 100%

.indexRight
  position: relative
  float: left
  width: 70%
  padding-left: 2%

.newButton
  margin-bottom: 2%

.title
  font-size: 25px
  height: 30px
  font-weight: bold
  transform: translate(0%, -50%)

.articleContent
  margin-top: 8%

.content
  overflow: auto
  height: 100%

.time, .tags
  padding-left: 2%

.listHeaderStyle
  margin-left: 2%
  width: 10rem
  text-align: center
  font-size: 17px
</style>
