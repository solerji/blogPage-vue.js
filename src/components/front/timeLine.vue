<template>
  <!-- 时间轴模块 -->
  <div class="timeLine">
    <div class="timeLineMain">
      <!-- 文章统计，这个位置只显示前10篇的题目 -->
      <div class="articleNumber">共计{{ pageCount }}篇文章，还会不断耕耘呢！</div>
      <div class="timelineGroup">
        <Timeline>
          <TimelineItem :color="red" :index="index" :key="item" v-for="(item,index) in arrTimeLine">
            <p class="time">{{ item.time }}</p>
            <p class="content">{{ item.content }}</p>
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
      arrTimeLine: [
        {
          time: '2018年',
          content: '我写了第一篇博客'
        },
        {
          time: '2019年',
          content: '我写了第二篇博客'
        },
        {
          time: '2019年',
          content: '我写了第三篇博客'
        }
      ],
      pageCount: '5'
    }
  },
  methods: {
    getTimeLine: function() {
      //  let vue = this
      //   vue
      //     .$http({
      //       method: 'get',
      //       url: '/api/timeline'
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
