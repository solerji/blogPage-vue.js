<template>
  <!-- 文章内容页面 -->
  <div class="contentPage">
    <div class="contentMain">
      <div class="contentTitle">{{ checkedArticle.article.title }}</div>
      <div class="otherMessage">
        <span class="author">
          <Tag color="cyan" type="border">{{ checkedArticle.article.author }}</Tag>
        </span>
        <span class="time">{{ checkedArticle.article.update_time }}</span>
        <span class="tags">
          <Tag :key="item.tag_name" color="cyan" v-for="item in tags">{{ item.tag_name }}</Tag>
        </span>
      </div>
      <Divider class="headDivider" orientation="left">正文部分</Divider>
      <div class="contentMarkdown">
        <div class="contentMarkdownMain">
          <div class="content">{{ checkedArticle.article.content }}</div>
        </div>
        <div class="contentMarkdownLeft">47297483</div>
        <div class="contentMarkdownRight">428934830</div>
      </div>
    </div>
    <div class="contentFooter">
      <Divider class="footDivider" orientation="right">
        <Button @click="getBack">返回首页</Button>
      </Divider>
      <div class="pageClass"></div>
      <!-- 留言功能待开放 -->
      <!-- <div class="comment"></div> -->
      <!-- 上传图片作为打赏工具 -->
      <div class="word">如果您喜欢，就请作者喝杯奶茶吧！</div>
      <div class="milktea">
        <Icon size="28" type="ios-cafe" />
      </div>
      <div class="begMoney">
        <img height="100px" src="../../assets/images/wechat.jpg" width="100px" />
        <img height="100px" src="../../assets/images/alipay.jpg" width="100px" />
      </div>
      <div class="noteWrapper">
        <div class="note">
          <h2>版权声明</h2>
          <p>本文作者： Solerji</p>
          <p>本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contentPage',
  data() {
    return {
      tags: [
        // {
        //   tag_name: '第一篇'
        // },
        // {
        //   tag_name: '第二篇'
        // },
        // {
        //   tag_name: '第三篇'
        // }
      ],
      checkedArticle: [
        // {
        //   article: '232323'
        // }
        // {
        //   author: 'wqwqw',
        //   title: 'ewew',
        //   content: 'trtrtr'
        // }
      ]
    }
  },
  mounted() {
    this.getArticleContent()
  },
  methods: {
    getArticleContent: function() {
      let articleDetail = this.$route.params.articleContent
      this.checkedArticle = articleDetail
      this.tags = articleDetail.tags
      // console.log(7777, this.checkedArticle)
    },
    getBack: function() {
      this.$router.push('/blogPage')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.contentTitle
  position: absolute
  margin: auto
  top: 10%
  left: 50%
  font-size: 30px
  font-weight: bold
  transform: translate(-10%, -50%)

.headDivider
  position: relative
  margin-top: 10%

.footDivider
  position: relative
  margin-top: 10%

.begMoney
  display: flex
  flex-direction: row
  top: 50%
  left: 50%
  transform: translate(45%, 50%)

.milktea
  top: 50%
  left: 50%
  transform: translate(50%, 50%)
  padding-top: 2%

.word
  top: 50%
  left: 50%
  transform: translate(42%, 50%)
  padding-top: 2%
  font-size: 20px

.note
  background-color: lightgrey
  border-radius: 16px
  text-align: center
  font-size: 14px
  width: 40rem
  margin-left: 34%
  margin-top: 7%

.otherMessage
  position: absolute
  padding-top: 5%
  width: 600px
  top: 15%
  left: 50%
  transform: translate(-15%, -50%)

.author, .time, .tags
  padding: 3%

.contentMarkdown
  float: left
  width: 100%

.contentMarkdownLeft
  float: left
  margin-left: -100%
  width: 20rem

.contentMarkdownRight
  width: 20rem
  float: left
  margin-left: -20rem

.contentMarkdownMain
  margin-left: 20rem
  margin-right: 20rem
  height: 100%
</style>
