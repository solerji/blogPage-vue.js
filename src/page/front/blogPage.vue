<template>
  <div class="blogPage">
    <div class="blogPageHeader">
      <!-- 人数统计，埋点设置 -->
      <div class="link">
        <Icon size="24" type="logo-github" />
        <Icon size="28" type="ios-mail" />
      </div>
      <div class="totalNumber">共有{{ peopleCount }}人来过</div>
      <div class="head">
        <Avatar icon="ios-person" size="large" />
      </div>
      <div class="blogPageBar">
        <div class="ctlBtn">
          <Button @click="getIntroduction" ghost type="warning">个人介绍</Button>
          <Button @click="getClass" ghost type="info">博文分类</Button>
        </div>
        <Input
          @on-search="searchArcticle('searchContent')"
          class="input"
          clearable
          placeholder="输入搜索内容"
          search
          v-model="searchContent"
        />
      </div>
    </div>
    <div class="blogPageContainer">
      <div class="leftContainer">
        <articleGroup :searchList="searchList" ref="articleGroup"></articleGroup>
      </div>
      <div class="rightContainer">
        <timeLine></timeLine>
      </div>
    </div>
    <div class="blogPageFooter"></div>
  </div>
</template>
<script>
import articleGroup from '@/components/front/articleGroup'
import timeLine from '@/components/front/timeLine'
export default {
  name: 'blogPage',
  data() {
    return {
      articleGroup: 'articleGroup',
      timeLine: 'timeLine',
      peopleCount: '4700',
      searchContent: '',
      searchList: []
    }
  },
  components: {
    articleGroup,
    timeLine
  },
  methods: {
    getIntroduction: function() {
      this.$router.push('/introduction')
    },
    getClass: function() {
      this.$router.push('/classPage')
    },
    searchArcticle: function(searchContent) {
      let vue = this
      if (!searchContent) {
        vue.$refs.articleGroup.getArticles()
      }
      vue
        .$http({
          method: 'get',
          url: '/api/someArticles',
          params: {
            key: vue.searchContent
          }
        })
        .then(function(response) {
          vue.searchList = response.data.list
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // 什么时候获取访客
    getVisitorMessage: function() {
      //  let vue = this
      //   vue
      //     .$http({
      //       method: 'get',
      //       url: '/api/visitor'
      //     })
      //     .then(function(response) {
      //       vue.articleList = response.data.list
      //       console.log(vue.articleList)
      //     })
      //     .catch(function(error) {
      //       console.log(error)
      //     })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.blogPageHeader
  width: 100%
  background: url('~@/assets/images/bg1.jpg')
  background-size: cover
  background-repeat: no-repeat

.blogPageBar
  position: relative
  margin-left: 25%
  margin-top: 2%

.leftContainer
  position: relative
  float: left
  width: 60%

.rightContainer
  position: absolute
  float: left
  margin-top: 10%
  margin-left: 80%
  width: 40%

.blogPageContainer
  width: 100%

.ctlBtn
  float: left
  padding-left: 1%
  margin-left: -3%

.input
  width: 20%
  margin-left: 5%
  border-color: black

.head
  position: relative
  width: 70px
  height: 70px
  margin-left: 40%

.totalNumber
  width: 100px
  height: 30px
  margin-left: 81%
  font-size: 13px
  font-weight: bold

.link
  width: 100px
  height: 30px
  margin-top: 2%
  margin-left: 82%
</style>

