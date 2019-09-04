<template>
  <!-- 日志模块 -->
  <div class="articleGroup">
    <Card
      :index="index"
      :key="item"
      @click.native="getOneArticle(item)"
      class="card"
      dis-hover
      v-for="(item,index) in articleList"
    >
      <span slot="title">{{ item.title }}</span>
      <!-- <div class="articleContent"> -->
      <span>{{ item.content }}</span>
      <!-- </div> -->
    </Card>
  </div>
</template>
<script>
export default {
  name: 'articleGroup',
  data() {
    return {
      articleList: [],
      articleContent: []
    }
  },
  mounted() {
    this.getArticles()
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
          vue.articleContent = response.data
          vue.$router.push('/contentPage')
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
          console.log(vue.articleList)
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
