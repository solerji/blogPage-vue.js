<template>
  <!-- 博文分类模块 -->
  <div class="classPage">
    <div class="classTitle">博文分类</div>
    <div class="classGroup">
      <Button
        :item="index"
        :key="item.tag_name"
        @click="getTagsAndTimeline(item)"
        class="classBtn"
        ghost
        shape="circle"
        v-for="(item,index) in tagList"
      >{{item.tag_name}}</Button>
    </div>
    <Divider
      class="classDivider"
      orientation="left"
      v-if="timelineList.length>0"
    >共有{{timelineList.length}}篇日志</Divider>
    <div class="filterClass">
      <Timeline>
        <TimelineItem
          :index="index"
          :key="item.tag_name"
          color="red"
          v-for="(item,index) in timelineList"
        >
          <p class="time">{{ item.update_time }}</p>
          <p class="content">{{ item.article_title }}</p>
        </TimelineItem>
      </Timeline>
    </div>
    <div class="classTool">
      <Page
        :current="current"
        :page-size="pageSize"
        :page-size-opts="opts"
        :total="total"
        @on-change="classPageChange"
        @on-page-size-change="pageSizeChange"
        show-elevator
        show-sizer
        size="small"
        v-if="timelineList.length>0"
      />
    </div>
    <div class="backBtn">
      <Button @click="getBack()" ghost shape="circle" type="info">回到主页</Button>
    </div>
    <div class="classFooter"></div>
  </div>
</template>
<script>
export default {
  name: 'classPage',
  data() {
    return {
      searchCount: '3',
      arrTimeLine: [],
      timelineList: [],
      tagList: [],
      pageSize: 2,
      current: 1,
      total: 0,
      opts: [2, 6, 8, 10],
      itemName: ''
    }
  },
  mounted() {
    this.getTags()
    // this.$nextTick(() => {
    //   console.log(888, this.tagList)
    //   // this.getTagsAndTimeline(this.tagList[0])
    // })
  },
  methods: {
    getBack: function() {
      this.$router.push('/blogPage')
    },
    getTags: function() {
      let vue = this
      vue
        .$http({
          method: 'get',
          url: '/api/tags'
        })
        .then(function(response) {
          vue.tagList = response.data.list
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getTagsAndTimeline: function(item) {
      let vue = this
      vue.itemName = item.tag_name
      this.classPageChange(1)
      vue
        .$http({
          method: 'post',
          url: '/api/tagsAndTime',
          data: {
            tagName: item.tag_name
          }
        })
        .then(function(response) {
          vue.timelineList = response.data.list
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    classPageChange: function(page) {
      let vue = this
      vue.current = page
      vue
        .$http({
          method: 'post',
          url: '/api/getTimeLine',
          data: {
            tagName: vue.itemName,
            currentPage: page,
            pageIndex: vue.pageSize
          }
        })
        .then(function(response) {
          vue.timelineList = response.data.list
          vue.total = response.data.count[0].count
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    pageSizeChange: function(pagesize) {
      let vue = this
      vue.pageSize = pagesize
      vue
        .$http({
          method: 'post',
          url: '/api/getTimeLine',
          data: {
            tagName: vue.itemName,
            currentPage: vue.current,
            pageIndex: vue.pageSize
          }
        })
        .then(function(response) {
          vue.timelineList = response.data.list
          vue.total = response.data.count[0].count
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
  font-size: 16px
  font-weight: bold

.classTitle
  font-size: 20px
  position: relative
  margin-top: 5%
  margin-left: 50%
  font-weight: bold

.classGroup
  width: 60%
  position: relative
  margin-top: 5%
  top: 40%
  left: 40%
  transform: translate(-35%, -40%)

.filterClass
  transform: translate(35%, 0)

.backBtn
  margin-left: 80%
  margin-bottom: 5%

.classFooter
  width: 100%
  height: 200px
  background-color: lightgrey

.classBtn
  margin-left: 1rem
  margin-top: 1rem

.classBtn:nth-child(5n+1)
  border-color: #b7d28d
  color: #b7d28d

.classBtn:nth-child(5n+2)
  border-color: #fd7d36
  color: #fd7d36

.classBtn:nth-child(5n+3)
  border-color: #aa5b71
  color: #aa5b71

.classBtn:nth-child(5n+4)
  border-color: #FF3030
  color: #FF3030

.classBtn:nth-child(5n+5)
  border-color: #104E8B
  color: #104E8B

.classTool
  transform: translate(30%, 50%)
</style>
