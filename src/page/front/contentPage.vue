<template>
  <!-- 文章内容页面 -->
  <div class="contentPage">
    <div class="contentMain">
      <div class="contentTitle">{{ checkedArticle.article.title }}</div>
      <div class="otherMessage">
        <Row :gutter="11" align="middle" justify="center" type="flex">
          <Col>
            <span class="author">
              <Tag color="cyan" type="border">{{ checkedArticle.article.author }}</Tag>
            </span>
          </Col>
          <Col>
            <span class="time">{{ checkedArticle.article.update_time }}</span>
          </Col>
          <Col>
            <span class="tags">
              <Tag :key="item.tag_name" color="cyan" v-for="item in tags">{{ item.tag_name }}</Tag>
            </span>
          </Col>
        </Row>
      </div>
      <Divider class="headDivider" orientation="left">正文部分</Divider>
      <div class="contentMarkdown">
        <div class="contentMarkdownMain">
          <div
            class="content"
            v-html="checkedArticle.article.content"
          >{{ checkedArticle.article.content }}</div>
        </div>
      </div>
    </div>
    <div class="contentFooter">
      <Divider class="footDivider" orientation="right">
        <Button @click="getBack">返回首页</Button>
      </Divider>
      <Row :gutter="20" align="middle" justify="center" type="flex">
        <!-- 留言功能待开放 -->
        <!-- <div class="comment"></div> -->
        <!-- 上传图片作为打赏工具 -->
        <Col>
          <div class="word">如果您喜欢，就请作者喝杯奶茶吧！</div>
        </Col>
        <Col>
          <div class="milktea">
            <Icon size="28" type="ios-cafe" />
          </div>
        </Col>
        <Col>
          <div class="begMoney">
            <img height="100px" src="../../assets/images/wechat.jpg" width="100px" />
            <img height="100px" src="../../assets/images/alipay.jpg" width="100px" />
          </div>
        </Col>
      </Row>
      <Row align="middle" justify="center" type="flex">
        <div class="noteWrapper">
          <div class="note">
            <h2>版权声明</h2>
            <p>本文作者： Solerji</p>
            <p>本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！</p>
          </div>
        </div>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contentPage',
  data() {
    return {
      tags: [],
      checkedArticle: []
    }
  },
  mounted() {
    this.getArticleContent()
  },
  methods: {
    getBack: function() {
      this.$router.push('/blogPage')
    },
    getArticleContent: function() {
      let vue = this
      let aid = vue.$route.params.aid
      vue.$http
        .get('/api/article', {
          params: {
            aid: aid
          }
        })
        .then(function(response) {
          let articleContent = response.data
          vue.checkedArticle = articleContent
          vue.tags = articleContent.tags
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.contentTitle
  font-size: 30px
  font-weight: bold
  margin-top: 5%
  text-align: center

.headDivider
  position: relative

.footDivider
  position: relative

.word
  font-size: 20px

.note
  background-color: lightgrey
  border-radius: 16px
  text-align: center
  font-size: 14px
  width: 38rem
  margin-top: 7%

.otherMessage
  align: center
  height: 100%
  margin-top: 2%

.contentMarkdownMain
  align: center
  height: 100%
  padding: 6%
  padding-top: 0
  overflow: auto
</style>
