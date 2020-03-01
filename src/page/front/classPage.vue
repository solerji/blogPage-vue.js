<template>
  <!-- 博文分类模块 -->
  <div class="classPage">
    <Row>
      <i-Col :push="10">
        <div class="classTitle">博文分类</div>
      </i-Col>
      <i-Col :push="1">
        <div class="classGroup">
          <Button
            :item="index"
            :key="item.tag_name"
            @click="getTagsAndTimeline(item.tag_name)"
            class="classBtn"
            ghost
            shape="circle"
            v-for="(item,index) in tagList"
          >{{item.tag_name}}</Button>
        </div>
      </i-Col>
    </Row>
    <Divider
      class="classDivider"
      orientation="left"
      v-if="timelineList.length>0"
    >共有{{timelineList.length}}篇日志</Divider>
    <div class="filterClass">
      <Timeline>
        <TimelineItem :key="item.tag_name" color="red" v-for="item in timelineList">
          <p class="time">{{ item.update_time }}</p>
          <p class="content">{{ item.article_title }}</p>
        </TimelineItem>
      </Timeline>
    </div>
    <Row :gutter="10">
      <i-Col>
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
      </i-Col>
      <i-Col>
        <div class="backBtn">
          <Button @click="getBack()" ghost shape="circle" type="info">回到主页</Button>
        </div>
      </i-Col>
    </Row>
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
      pageSize: 4,
      current: 1,
      total: 0,
      opts: [4, 6, 8],
      itemName: ''
    }
  },
  mounted() {
    this.getTags()
  },
  methods: {
    getBack: function() {
      this.$router.push('/blogPage')
      this.pageSize = 0
      this.total = 0
      this.opts = []
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
      vue.itemName = item
      vue
        .$http({
          method: 'post',
          url: '/api/tagsAndTime',
          data: {
            tagName: item
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
  font-weight: bold

// .classGroup
// width: 60%
// position: relative
// margin-top: 5%
// top: 40%
// left: 40%
// transform: translate(-35%, -40%)
.filterClass
  transform: translate(35%, 0)

.backBtn
  margin-left: 80%
  margin-top: 7%

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
  transform: translate(25%, 50%)
</style>
