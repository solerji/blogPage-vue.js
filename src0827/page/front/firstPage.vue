<template>
<!-- 进入博客首页 -->
    <div class="firstPage">
      <div class="buttonStyle animated slideInDown">
        <Button class="button"  @click.stop="getSecond()" ghost>enter my blog</Button>  
      </div>
      <vue-particle-line>
        <div class="firstPageHeader animated slideInDown">
          <!-- <div class="box animated slideInDown"></div> -->
        </div>
        <div class="firstPageContainer">
          <div class="wordStyle">
            <p class="box animated shake">Welcome to Solerji's Blog!</p>
          </div>
        </div>
        <div class="firstPageFooter animated slideInUp"></div>
        </vue-particle-line>
     </div>  
</template>
<script>
export default {
    name: 'firstPage',
    data () {
        return{

        }
    },
    methods: {
        getSecond: function(){
            this.$router.push('/blogPage')
        }
    }
}
</script>
<style lang="stylus">
.firstPage 
  height: 100%

.firstPageHeader 
  width 100%;
  height 90px;
  background-color lightgrey

.firstPageFooter 
  position relative
  width 100%
  height 200px
  background-color lightgrey

.firstPageContainer
  position relative
  width 100%
  height 300px
  background-color white

.wordStyle
  margin-top 10%
  position relative
  vertical-align middle
  align-content center
  margin-left 30%
  color black
  font-size 40px
  
.buttonStyle
  background-color lightgrey

.button
  margin-top 4%
  margin-left 85%
  font-size 15px
  font-weight bold

</style>
