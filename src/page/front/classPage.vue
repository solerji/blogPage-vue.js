<template>
  <!-- 博文分类模块 -->
  <div class="classPage">
    <div class="classTitle">博文分类</div>
    <div class="classGroup">
      <Button
        :item="index"
        :key="item"
        class="classBtn"
        ghost
        shape="circle"
        v-for="(item,index) in arrClass"
      >{{item.className}}</Button>
    </div>
    <Divider class="classDivider" orientation="left">共有{{searchCount}}篇日志</Divider>
    <div class="filterClass">
      <Timeline>
        <TimelineItem :index="index" :key="item" color="red" v-for="(item,index) in arrTimeLine">
          <p class="time">{{ item.time }}</p>
          <p class="content">{{ item.content }}</p>
        </TimelineItem>
      </Timeline>
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
      arrClass: [
        {
          className: '大数据'
        },
        {
          className: '人工智能'
        },
        {
          className: '技术'
        },
        {
          className: '知识'
        },
        {
          className: '前端'
        }
      ],
      searchCount: '3',
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
      tagList: ''
    }
  },
  mounted() {
    this.getTags()
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
          // console.log(vue.articleList)
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
  transform: translate(-40%, -40%)

.filterClass
  position: relative
  width: 60%
  margin-top: 10%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.backBtn
  margin-left: 70%
  margin-bottom: 5%

.classFooter
  width: 100%
  height: 200px
  background-color: lightgrey

.classBtn
  margin-left: 2%

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
</style>
