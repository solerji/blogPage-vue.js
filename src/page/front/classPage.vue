<template>
<!-- 博文分类模块 -->
    <div class="classPage">
    <div class="classTitle">
      博文分类
    </div>
    <div class="classGroup">
      <Button type="info" shape="circle" ghost>Info</Button>
      <Button type="success" shape="circle" ghost>Success</Button>
      <Button type="warning" shape="circle" ghost>Warning</Button>
      <Button type="error" shape="circle" ghost>Error</Button>
      <Button type="primary" shape="circle" ghost>Primary</Button>
    </div>
    <Divider class="classDivider" orientation="left">共有2篇日志</Divider>
    <div class="filterClass">
      <Timeline>
          <TimelineItem>
            <p class="time">2012年</p>
            <p class="content">第一篇文章</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2013年</p>
            <p class="content">第二篇文章</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2015年</p>
            <p class="content">第三篇文章</p>
          </TimelineItem>
      </Timeline>
    </div>
    </div>
</template>
<script>
export default {
    name: 'classPage',
    data(){
      return{

      }
    }
}
</script>
<style lang="stylus"  scoped>
// .classPage
//   width 100%
//   height 100%
//   background-color #0A0A0A
//   opacity 0.8

.classTitle
  font-size 20px
  position relative
  margin-top 5%
  margin-left 50%
  font-weight bold

.classGroup
  width 60%
  position relative
  margin-top 5%
  top 40%
  left 40%
  transform translate(-40%,-40%)

.filterClass
  position relative
  width 60%
  margin-top 10%
  top 40%
  left 40%
  transform translate(-40%,-40%)

</style>