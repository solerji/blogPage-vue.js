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
            <p class="time">{{ item.update_time }}</p>
            <p class="content">{{ item.title }}</p>
          </TimelineItem>
        </Timeline>显示最近10条啦～更多内容请搜索……
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'timeLine',
  data() {
    return {
      timelineList: [
        // {
        //   update_time: '2018年',
        //   title: '我写了第一篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第二篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第三篇博客'
        // },
        // {
        //   update_time: '2018年',
        //   title: '我写了第一篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第二篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第三篇博客'
        // },
        // {
        //   update_time: '2018年',
        //   title: '我写了第一篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第二篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第三篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第二篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第三篇博客'
        // },
        // {
        //   update_time: '2019年',
        //   title: '我写了第三篇博客'
        // }
      ],
      count: ''
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
          vue.count = response.data.list.length
          if (vue.timelineList.length >= 9) {
            vue.timelineList.splice(10, vue.timelineList.length)
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
