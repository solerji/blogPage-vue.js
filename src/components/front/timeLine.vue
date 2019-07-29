<template>
<!-- 时间轴模块 -->
    <div class="timeLine">
      <div class="timeLineMain">
        <!-- 文章统计 -->
        <div class="articleNumber">
        共计2篇文章，还会不断耕耘呢！
        </div>
        <div class="timelineGroup">
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
    </div>
</template>
<script>
export default {
    name: 'timeLine',
    data(){
      return{

      }
    }
}
</script>
<style lang="stylus"  scoped>
.time
  font-size 14px
  font-weight bold

.timeLineMain
  margin-top -15%

.articleNumber
  position relative
  padding-bottom 5%
  font-size 14px
  font-weight bold

</style>