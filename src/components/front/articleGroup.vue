<template>
<!-- 日志模块 -->
    <div class="articleGroup">
       <Card class="card"  @click.native = "getContent">
        很多日志
        </Card>
    </div>
</template>
<script>
export default {
    name: 'articleGroup',
    data(){
      return{

      }
    },
    methods: {
      getContent: function(){
        this.$router.push('/contentPage')
      }
    }
}
</script>
<style lang="stylus"  scoped>
.card
  width 90%
  height 100px
  margin-left 25%
  margin-top 5%
  border-color skyblue
</style>