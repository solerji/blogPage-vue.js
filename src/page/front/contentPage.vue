<template>
  <!-- 文章内容页面 -->
  <div class="contentPage">
    <div class="contentMain">
      <div class="contentTitle">{{ checkedArticle[0].title }}</div>
      <div class="otherMessage">
        <span class="author">
          <Tag color="cyan" type="border">{{ checkedArticle[0].author }}</Tag>
        </span>
        <span class="time">{{ checkedArticle[0].updateTime }}</span>
        <span class="tags">
          <Tag :key="item" color="cyan" v-for="item in tags">{{item.tag}}</Tag>
        </span>
      </div>
      <Divider class="headDivider" orientation="left">Left Text</Divider>
      <div class="contentMarkdown">
        <div class="contentMarkdownMain">
          <div class="content">{{ checkedArticle[0].content }}</div>
        </div>
        <div class="contentMarkdownLeft">47297483</div>
        <div class="contentMarkdownRight">428934830</div>
      </div>
    </div>
    <div class="contentFooter">
      <Divider class="footDivider" orientation="right">Right Text</Divider>
      <div class="pageClass"></div>
      <!-- 留言功能待开放 -->
      <!-- <div class="comment"></div> -->
      <!-- 上传图片作为打赏工具 -->
      <div class="word">如果您喜欢，就请作者喝杯奶茶吧！</div>
      <div class="milktea">
        <Icon size="28" type="ios-cafe" />
      </div>
      <div class="begMoney">
        <div class="wechat"></div>
        <div class="alipay"></div>
      </div>
      <div class="noteWrapper">
        <div class="note">版权声明</div>
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
        {
          tag: '科技'
        },
        {
          tag: '生活'
        }
      ],
      checkedArticle: [
        {
          title: '这是一篇文章',
          author: '作者姓名',
          tags: ['科技', '生活'],
          updateTime: '2018-09-08',
          content: '这是一篇文章哈哈哈哈哈哈'
        }
      ]
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
  transform: translate(50%, 50%)
  padding-top: 2%

.milktea
  top: 50%
  left: 50%
  transform: translate(57%, 50%)
  padding-top: 2%

.word
  top: 50%
  left: 50%
  transform: translate(47%, 50%)
  padding-top: 2%
  font-size: 20px

.wechat
  background-color: grey
  width: 5rem
  height: 5rem

.alipay
  background-color: grey
  margin-left: 5%
  width: 5rem
  height: 5rem

.note
  background-color: lightgrey
  height: 10rem
  width: 40rem
  margin-left: 35%
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
