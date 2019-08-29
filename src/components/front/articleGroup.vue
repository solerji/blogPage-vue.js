<template>
  <!-- 日志模块 -->
  <div class="articleGroup">
    <Card
      :index="index"
      :key="item"
      @click.native="getOneArticle"
      class="card"
      dis-hover
      v-for="(item,index) in arrCard"
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
      arrCard: [
        {
          title: '第一篇文章',
          content: '这是个实例'
        },
        {
          title: '第二篇文章',
          content: '这是个实例'
        },
        {
          title: '第三篇文章',
          content: '这是个实例'
        },
        {
          title: '第四篇文章',
          content: '这是个实例'
        }
      ]
    }
  },
  mounted() {
    // this.getArticle()
  },
  methods: {
    // getContent: function () {
    //   this.$router.push('/contentPage')
    // },
    getOneArticle: function(data) {
      let vue = this
      console.log(data.aid)
      vue.$http
        .get('/api/article', {
          params: {
            aid: data.aid
          }
        })
        .then(function(response) {
          console.log(response)
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
    // getArticle: function() {
    //   axios
    //     .post('/api/article', {
    //       title: '第一篇文章',
    //       author: 'solerji',
    //       content: '爸爸和我去游乐园玩过山车',
    //       createTime: '2019-05-18',
    //       tags: '[测试]'
    //     })
    //     .then(function(response) {
    //       console.log(response)
    //     })
    //     .catch(function(error) {
    //       console.log(error)
    //     })
    // }
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
