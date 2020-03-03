<template>
  <!-- 后台管理首页面 -->
  <div class="index">
    <div class="indexHeader"></div>
    <div class="newButton">
      <Row type="flex">
        <i-col
          :lg="{ span: 5, offset: 20 }"
          :md="{ span: 5, offset: 22 }"
          :sm="{ span: 5, offset: 22 }"
          :xs="{ span: 5, offset: 18 }"
        >
          <Button @click="addArticle()" ghost isAdd="true" type="info">新增文档</Button>
          <Button @click="exit()" ghost isAdd="true" type="info">退出登录</Button>
        </i-col>
      </Row>
    </div>
    <div class="indexMain">
      <Row justify="start" type="flex">
        <Icon type="ios-arrow-forward" title="文章列表" @click="value = true" class="drawButton" v-if="isShow === false"/>
        <i-col :lg="6" :md="7" :sm="7" v-if="isShow === true">
           <div class="indexLeft" >
            <div>
            <Tag class="listHeaderStyle" color="volcano" type="border">文章列表</Tag>
          </div>
            <Table
              :columns="columns"
              :data="articleList"
              :height="height"
              :show-header="false"
              @on-row-click="getOneArticle"
              highlight-row
              ref="articleTable"
              style="overflow-x:hidden;overflow:auto;"
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
        </i-col>
        <i-col v-if="isShow === false">
        <Drawer placement="left" :closable="false" v-model="value" trigger>
          <div class="indexLeft" >
          <div>
            <Icon type="ios-arrow-back" @click="value = false" class="drawButton" />
            <Tag class="listHeaderStyle" color="volcano" type="border">文章列表</Tag>
          </div>
            <Table
              :columns="columns"
              :data="articleList"
              :height="height"
              :show-header="false"
              @on-row-click="getOneArticle"
              highlight-row
              ref="articleTable"
              style="overflow-x:hidden;overflow:auto;"
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
          </Drawer>
        </i-col>
        <i-col :lg="17" :md="17" :sm="17" :xs="22">
          <div class="indexRight">
            <div class="articleContent">
              <Row>
                <div class="title">{{ articleContent.title }}</div>
              </Row>
              <Row>
                <div class="otherMessage">
                  <i-col :lg="4" :md="2" :sm="2" :xs="22">
                    <span class="author">
                      <Tag color="cyan" type="border">{{ articleContent.author }}</Tag>
                    </span>
                  </i-col>
                  <i-col
                    :lg="{ span: 6, offset: 2 }"
                    :md="{ span: 4, offset: 2 }"
                    :sm="{ span: 4, offset: 2 }"
                    :xs="{ span: 22, push: 1}"
                  >
                    <span class="time">{{ articleContent.update_time }}</span>
                  </i-col>
                  <i-col
                    :lg="{ span: 10, offset: 1 }"
                    :md="{ span: 14, offset: 1 }"
                    :sm="{ span: 14, offset: 1 }"
                    :xs="{ span: 22, push: 1 }"
                  >
                    <span class="tags">
                      <Tag
                        :key="item.tag_name"
                        color="cyan"
                        v-for="item in tagsArray"
                      >{{item.tag_name}}</Tag>
                    </span>
                  </i-col>
                </div>
              </Row>
              <Divider />
              <div>
                <div class="content" v-html="articleContent.content">{{ articleContent.content }}</div>
              </div>
            </div>
          </div>
        </i-col>
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
      height: window.innerHeight,
      isShow: true,
      value: false
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
      if (window.innerWidth < 750) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
    addArticle: function() {
      let vue = this
      let aid = 0
      // vue.$router.push('./editArticle')
      vue.$router.push({
        name: 'editArticle',
        params: { aid: aid, isEdit: vue.isEdit, isAdd: vue.isAdd }
      })
    },
    exit () {
      let vue = this
      localStorage.removeItem('token')
      vue.$router.push('/login')
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
          url: '/api/articles',
          // headers:{
          //  'Authorization':`Bearer ${token}`
          // }
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
      vue.isEdit = true
      vue.isAdd = false
      vue.$router.push({
        name: 'editArticle',
        params: { aid: row.aid, isEdit: vue.isEdit, isAdd: vue.isAdd }
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
<style lang="stylus" scoped>
.indexHeader
  background: url('~@/assets/images/bg1.jpg')
  background-size: cover
  background-repeat: no-repeat
  width: 100%
  height: 20vh

.indexMain
  width: 100%

.indexLeft
  position: relative
  float: left
  width: 100%

.indexRight
  position: relative
  float: left
  width: 100%
  padding-left: 2%

.newButton
  margin-bottom: 2%

.title
  font-size: 1.5rem
  font-weight: bold
  transform: translate(0%, -50%)

.articleContent
  margin-top: 8%

.content
  overflow: auto
  height: 100vh

.time, .tags
  padding-left: 2%

.listHeaderStyle
  margin-left: 2%
  text-align: center
  font-size: 1rem

.drawButton
  font-size: 1.5625rem

</style>
