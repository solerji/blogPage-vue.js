<template>
  <!-- 文章内容页面 -->
  <div class="contentPage">
    <div class="contentMain">
      <div class="contentTitle">{{ name }}</div>
      <div class="otherMessage">
        <Row :gutter="11" align="middle" justify="center" type="flex">
          <i-col :lg="{ span: 6, offset: 2 }"
                    :md="{ span: 4, offset: 2 }"
                    :sm="{ span: 4, offset: 2 }"
                    :xs="{ span: 22, push: 1}">
            <span class="author">
              <Tag color="cyan" type="border">{{ author }}</Tag>
            </span>
          </i-col>
          <i-col :lg="{ span: 6, offset: 2 }"
                    :md="{ span: 4, offset: 2 }"
                    :sm="{ span: 4, offset: 2 }"
                    :xs="{ span: 22, push: 1}">
            <span class="time">{{ updateTime }}</span>
          </i-col>
          <i-col :lg="{ span: 6, offset: 2 }"
                    :md="{ span: 4, offset: 2 }"
                    :sm="{ span: 4, offset: 2 }"
                    :xs="{ span: 22, push: 1}">
            <span class="tags">
              <Tag :key="item.tag_name" color="cyan" v-for="item in tags">{{ item.tag_name }}</Tag>
            </span>
          </i-col>
        </Row>
      </div>
      <Divider class="headDivider" orientation="left">正文部分</Divider>
      <div class="contentMarkdown">
        <div class="contentMarkdownMain">
          <div class="content" v-html="content">{{ content }}</div>
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
        <i-col>
          <div class="word">如果您喜欢，就请作者喝杯奶茶吧！</div>
        </i-col>
        <i-col>
          <div class="milktea">
            <Icon size="28" type="ios-cafe" />
          </div>
        </i-col>
        <i-col>
          <div class="begMoney">
            <img height="100px" src="../../assets/images/wechat.jpg" width="100px" />
            <img height="100px" src="../../assets/images/alipay.jpg" width="100px" />
          </div>
        </i-col>
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
      checkedArticle: [],
      name: '',
      author: '',
      updateTime: '',
      content: ''
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
          vue.name = articleContent.article.title
          vue.author = articleContent.article.author
          vue.updateTime = articleContent.article.update_time
          vue.content = articleContent.article.content
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
