<template>
<!-- 后台管理首页面 -->
    <div class="index">
        <div class="indexHeader"></div>
       <div class="headImg"></div>
       <div class="newButton">
         <Button type="info" @click="addArticle()" ghost>新增文档</Button>
      </div>
       <div class="indexMain">
        <div class="indexLeft">
          <Table :columns="columns1" :data="data1" :show-header="false">
             <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)" ghost>编辑</Button>
              <Button type="error" size="small" @click="delArticle(index)" ghost>删除</Button>
            </template>
          </Table>
        </div>
        <div class="indexRight">
          <div class="articleContent">
            <div class="title">这是文章标题</div>
            <div class="otherMessage">
              <span><Tag color="cyan" type="border">作者</Tag></span>
              <span>最新时间</span>
              <span><Tag v-for="item in tags" color="cyan" :key="item">{{item.tag}}</Tag></span>
            </div>
            <Divider/>
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
    data(){
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
          title: 'John Brown',
        },
        {
          title: 'Jim Green',
        },
        {
          title: 'Joe Black',
        },
        {
          title: 'Jon Snow',
        }
      ],
      tags: [
        {
          tag:'科技'
        },
        {
          tag:'生活'
        }
      ]
    }
  },
  methods:{
    addArticle: function(){
      this.$router.push('./editArticle')
      // this.$http({
      //   method: 'get',
      //   url: '/api/article/:aid',
      //   data:{
      //     aid: 2018,
      //   }
      //   } 
      // )
      // .then(function (response) {
      //   console.log(response)
      //   this.$router.push('./editArticle')
      // })
      // .catch(function (error) {
      //   console.log(error)
      // })
    },
    delArticle: function () {
      this.$http({
        method: 'delete',
        url: '/api/article/:aid',
        data:{
          aid: 2018,
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
    }
  }
}
</script>
<style lang="stylus"  scoped>
.indexHeader
  height 100px
.indexMain
  width 100%
  
.indexLeft
  position relative
  float left
  width 30%
.indexRight
  position relative
  float left
  width 70%
  // background-color lightgrey

.newButton
  margin-left 90%
  margin-bottom 2%  

.title 
  position absolute
  margin auto
  top 10%
  left 50%
  font-size 25px
  height 30px
  font-weight bold
  transform translate(-0%,-50%)

.articleContent 
  margin-top 8%

.content
  top 2%

.otherMessage
  right 2%
</style>