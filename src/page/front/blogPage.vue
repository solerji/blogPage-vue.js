<template>
  <div class="blogPage">
    <div class="blogPageHeader">
      <!-- 人数统计，埋点设置 -->
      <div class="totalNumber">共有300人来过</div>
      <div class="link">联系方式及github</div>
      <div class="head">
        <Avatar icon="ios-person" size="large" />
      </div>
      <div class="blogPagePageBar">
        <div class="ctlBtn">
          <Button @click="getIntroduction" ghost type="warning">个人介绍</Button>
          <Button @click="getClass" ghost type="info">博文分类</Button>
        </div>
        <Input class="input" placeholder="输入搜索内容" search />
      </div>
    </div>
    <div class="blogPageContainer">
      <div class="leftContainer">
        <articleGroup></articleGroup>
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
      timeLine: 'timeLine'
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
    }
  }
}
</script>
<style lang="stylus"  scoped>
.blogContentPage
  // background-color #0A0A0A
  // opacity 0.8

.blogContentPageHeader
  width: 100%
  height: 200px

.blogContentPageFooter
  width: 100%
  height: 200px
  margin-top: 80%
  background-color: lightgrey

.blogContentPagePageBar
  position: relative
  margin-left: 25%
  margin-top: 2%

.leftContainer
  position: relative
  float: left
  width: 60%

.rightContainer
  position: relative
  float: left
  margin-left: 80%
  width: 40%

.blogContentPageContainer
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
  // background-color lightgrey

.totalNumber
  width: 100px
  height: 30px
  margin-left: 80%
  margin-top: 2%

.link
  width: 100px
  height: 30px
  margin-left: 80%
</style>

