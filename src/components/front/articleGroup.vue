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
      <span slot="title" style="font-weight: 500;color: grey;">{{ item.title }}</span>
      <!-- <div class="articleContent"> -->
      <span>{{ item.content }}</span>
      <!-- </div> -->
    </Card>
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
      articleList: [],
      articleContent: []
    }
  },
  mounted() {
    this.getArticles()
    console.log(22, this.searchList)
  },
  watch: {
    searchList(newVal, oldVal) {
      console.log(2323, newVal)
      this.articleList = newVal
    }
  },
  methods: {
    getOneArticle: function(item) {
      let vue = this
      console.log(item.aid)
      vue.$http
        .get('/api/article', {
          params: {
            aid: item.aid
          }
        })
        .then(function(response) {
          let articleContent = response.data
          // vue.$router.push('/contentPage')
          vue.$router.push({
            name: 'contentPage',
            params: { articleContent }
          })
          // console.log(vue.articleContent)
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
</style>
