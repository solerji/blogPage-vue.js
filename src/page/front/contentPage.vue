<template>
  <!-- 文章内容页面 -->
  <div class="contentPage">
    <Row>
      <div class="contentMain">
        <Col :push="12">
          <div class="contentTitle">{{ checkedArticle.article.title }}</div>
        </Col>
        <Row>
          <div class="otherMessage">
            <Col :span="4">
              <span class="author">
                <Tag color="cyan" type="border">{{ checkedArticle.article.author }}</Tag>
              </span>
            </Col>
            <Col :span="6">
              <span class="time">{{ checkedArticle.article.update_time }}</span>
            </Col>
            <Col :span="14">
              <span class="tags">
                <Tag :key="item.tag_name" color="cyan" v-for="item in tags">{{ item.tag_name }}</Tag>
              </span>
            </Col>
          </div>
        </Row>
        <Divider class="headDivider" orientation="left">正文部分</Divider>
        <div class="contentMarkdown">
          <Row>
            <div class="contentMarkdownMain">
              <div
                class="content"
                v-html="checkedArticle.article.content"
              >{{ checkedArticle.article.content }}</div>
            </div>
          </Row>
          <div class="contentMarkdownLeft">47297483</div>
          <div class="contentMarkdownRight">428934830</div>
        </div>
      </div>
    </Row>
    <div class="contentFooter">
      <Divider class="footDivider" orientation="right">
        <Button @click="getBack">返回首页</Button>
      </Divider>
      <Row :gutter="16">
        <div class="pageClass"></div>
        <!-- 留言功能待开放 -->
        <!-- <div class="comment"></div> -->
        <!-- 上传图片作为打赏工具 -->
        <Row>
          <Col :push="9">
            <div class="word">如果您喜欢，就请作者喝杯奶茶吧！</div>
          </Col>
        </Row>
        <Row>
          <div class="milktea">
            <Col :push="11">
              <Icon size="28" type="ios-cafe" />
            </Col>
          </div>
        </Row>
        <Row>
          <div class="begMoney">
            <Col :push="9" :span="12">
              <img height="100px" src="../../assets/images/wechat.jpg" width="100px" />
            </Col>
            <Col :span="12">
              <img height="100px" src="../../assets/images/alipay.jpg" width="100px" />
            </Col>
          </div>
        </Row>
        <Row>
          <div class="noteWrapper">
            <Col :push="6" :span="10">
              <div class="note">
                <h2>版权声明</h2>
                <p>本文作者： Solerji</p>
                <p>本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处！</p>
              </div>
            </Col>
          </div>
        </Row>
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
    getArticleContent: function() {
      let articleDetail = this.$route.params.articleContent
      this.checkedArticle = articleDetail
      this.tags = articleDetail.tags
    },
    getBack: function() {
      this.$router.push('/blogPage')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.contentTitle
  font-size: 30px
  font-weight: bold
  margin-top: 5%

.headDivider
  position: relative
  margin-top: 10%

.footDivider
  position: relative
  margin-top: 10%

.word
  font-size: 20px

.note
  background-color: lightgrey
  border-radius: 16px
  text-align: center
  font-size: 14px
  width: 40rem
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
