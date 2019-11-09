<template>
  <!-- 日志模块 -->
  <div class="articleGroup">
    <Card
      :index="index"
      :key="item.title"
      @click.native="getOneArticle(item)"
      class="card"
      dis-hover
      v-for="(item,index) in articleList"
    >
      <div slot="title" style="font-weight: 500;color: grey;">{{ item.title }}</div>
      <div v-html="item.show_content">{{ item.show_content }}</div>
    </Card>
    <div class="articlePage">
      <Page
        :current="current"
        :page-size="pageSize"
        :total="total"
        @on-change="pageChange"
        show-elevator
        show-sizer
        size="small"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'articleGroup',
  props: {
    searchList: Array
  },
  data() {
    return {
      articleList: [
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // },
        // {
        //   title: '2323',
        //   content: '4444'
        // }
      ],
      articleContent: [],
      total: 0,
      pageSize: 8,
      current: 1
    }
  },
  mounted() {
    this.getArticles()
  },
  watch: {
    searchList(newVal, oldVal) {
      this.articleList = newVal
    }
  },
  methods: {
    getOneArticle: function(item) {
      let vue = this
      vue.$http
        .get('/api/article', {
          params: {
            aid: item.aid
          }
        })
        .then(function(response) {
          let articleContent = response.data
          vue.$router.push({
            name: 'contentPage',
            params: { articleContent }
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    getArticles: function() {
      let vue = this
      vue
        .$http({
          method: 'get',
          url: '/api/articles'
        })
        .then(function(response) {
          vue.articleList = response.data.list
          vue.total = vue.articleList.length
          // console.log(vue.articleList)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    pageChange: function(page) {
      console.log('yeshu', page)
    }
  }
}
</script>
<style lang="stylus"  scoped>
.articleGroup, .card
  width: 90%
  margin-left: 15%
  margin-top: 5%

.card:nth-child(3n+1)
  border-color: #b7d28d

.card:nth-child(3n+2)
  border-color: #fd7d36

.card:nth-child(3n+3)
  border-color: #aa5b71

.articlePage
  margin-left: 15rem
  margin-top: 5%
</style>
