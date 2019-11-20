<template>
  <!-- 进入博客首页 -->
  <div class="firstPage">
    <div class="buttonStyle animated slideInDown">
      <Row type="flex">
        <Col :push="3" :span="2">
          <span>
            <Button @click.stop="getManage()" ghost>manage blog</Button>
          </span>
        </Col>
        <Col :offset="15" :span="2">
          <span>
            <Button @click.stop="getSecond()" ghost>enter my blog</Button>
          </span>
        </Col>
      </Row>
    </div>
    <vue-particle-line>
      <div class="firstPageHeader animated slideInDown">
        <!-- <div class="box animated slideInDown"></div> -->
      </div>
      <div class="firstPageContainer">
        <Row>
          <div class="wordStyle">
            <Col :push="9" :span="6">
              <p class="box animated shake">Welcome to Solerji's Blog!</p>
            </Col>
          </div>
        </Row>
      </div>
      <div class="firstPageFooter animated slideInUp"></div>
    </vue-particle-line>
  </div>
</template>
<script>
export default {
  name: 'firstPage',
  data() {
    return {}
  },
  methods: {
    getSecond: function() {
      this.$router.push('/blogPage')
    },
    getManage: function() {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="stylus">
.firstPage
  height: 100%

.firstPageHeader
  width: 100%
  height: 10rem
  background-color: lightgrey

.firstPageFooter
  position: relative
  width: 100%
  height: 15rem
  background-color: lightgrey

.firstPageContainer
  position: relative
  width: 100%
  height: 27rem
  background-color: white

.wordStyle
  margin-top: 15%
  vertical-align: middle
  align-content: center
  color: black
  font-size: 2rem

.buttonStyle
  background-color: lightgrey

.button
  margin-left: 80%
  margin-top: 1%
  font-size: 15px
  font-weight: bold
</style>
