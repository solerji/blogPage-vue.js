<template>
  <!-- 时间轴模块 -->
  <div class="timeLine">
    <div class="timeLineMain">
      <!-- 文章统计，这个位置只显示前10篇的题目 -->
      <div class="articleNumber">共计{{ timelineList.length }}篇文章，还会不断耕耘呢！</div>
      <div class="timelineGroup">
        <Timeline>
          <TimelineItem
            :index="index"
            :key="item.title"
            color="red"
            v-for="(item,index) in timelineList"
          >
            <p class="time">{{ item.showTime }}</p>
            <p class="content">{{ item.title }}</p>
          </TimelineItem>
        </Timeline>更多内容请搜索……
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'timeLine',
  data() {
    return {
      timelineList: []
    }
  },
  mounted() {
    this.getTimeLine()
  },
  methods: {
    getTimeLine: function() {
      let vue = this
      vue
        .$http({
          method: 'get',
          url: '/api/timeline'
        })
        .then(function(response) {
          vue.timelineList = response.data.list
          console.log(vue.timelineList)
          if (vue.timelineList.length >= 10) {
            console.log('最多10条')
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.time
  font-size: 14px
  font-weight: bold

.timeLineMain
  margin-top: -15%

.articleNumber
  position: relative
  padding-bottom: 5%
  font-size: 14px
  font-weight: bold
</style>
