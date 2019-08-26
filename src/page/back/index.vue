<template>
  <!-- 后台管理首页面 -->
  <div class="index">
    <div class="indexHeader"></div>
    <!-- <div class="headImg"></div> -->
    <div class="newButton">
      <Button @click="addArticle()" ghost type="info">新增文档</Button>
    </div>
    <div class="indexMain">
      <div class="indexLeft">
        <Table :columns="columns1" :data="data1" :show-header="false">
          <template slot="action" slot-scope="{ row, index }">
            <Button
              @click="show(index)"
              ghost
              size="small"
              style="margin-right: 5px"
              type="primary"
            >编辑</Button>
            <Button @click="delArticle(index)" ghost size="small" type="error">删除</Button>
          </template>
        </Table>
      </div>
      <div class="indexRight">
        <div class="articleContent">
          <div class="title">这是文章标题</div>
          <Divider />
          <div class="content">这是文章正文部分</div>
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
      columns1: [
        {
          title: 'Title',
          key: 'title'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data1: [
        {
          title: 'John Brown'
        },
        {
          title: 'Jim Green'
        },
        {
          title: 'Joe Black'
        },
        {
          title: 'Jon Snow'
        }
      ]
    }
  },
  methods: {
    addArticle: function() {
      let vue = this
      vue.$router.push('./editArticle')
      vue
        .$http({
          method: 'get',
          url: '/api/article',
          data: {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            createTime: Date(),
            tags: req.body.tags,
            isPublish: true
          }
        })
        .then(function(response) {
          console.log(response)
          // vue.$router.push('./editArticle')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    delArticle: function() {
      this.$http({
        method: 'delete',
        url: '/api/article/:aid',
        data: {
          aid: 2018
        }
      })
        .then(function(response) {
          console.log(response)
          this.$router.push('/index')
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.indexHeader
  height: 100px
  background: url('~@/assets/images/header.png')
  // background-size: cover
  background-repeat: no-repeat
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
</style>
