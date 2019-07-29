<template>
<!-- 进入博客首页 -->
    <div class="firatPage">
        <div class="firatPageHeader"></div>
        <div class="firatPageContainer">
          <div class="wordStyle">
            <p class="word">Welcome to Solerji's Blog!</p>
          </div>
          <div class="buttonStyle">
            <Button class="button" @click="getSecond">enter</Button>  
          </div>
        </div>
        <div class="firatPageFooter"></div>
        
    </div>
</template>
<script>
import * as d3 from 'd3'
export default {
    name: 'firstPage',
    data () {
        return{

        }
    },
    mounted: {
      
    },
    methods: {
        getSecond: function(){
            this.$router.push('/blogPage')
        }
    }
}
</script>
<style lang="stylus">
.firatPage 
  height: 100%;

.firatPageHeader 
  width 100%;
  height 20px;
  background-color lightgrey

.firatPageFooter 
  position relative
  width 100%
  height 100px
  background-color lightgrey

.firatPageContainer
  position relative
  width 100%
  height 450px
  background-color white

.wordStyle
  margin-top 20%
.buttonStyle
  margin-top 3%
.word 
  position relative
  vertical-align middle
  align-content center
  margin-left 35%
  color black
  font-size 30px

.button
  margin-left 45%

// d3
.path 
  stroke-linejoin round
  stroke-linecap round


.background 
  fill none
  stroke #ddd

.foreground 
  fill none
  pointer-events all

</style>
