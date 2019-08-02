<template>
<!-- 后台管理首页面 -->
    <div class="index">
        <div class="indexHeader"></div>
       <div class="headImg"></div>
       <div class="newButton">
         <Button type="info" @click="addArticle()"  ghost>新增文档</Button>
      </div>
       <div class="indexMain">
        <div class="indexLeft">
          <Table :columns="columns1" :data="data1" :show-header="false">
             <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)" ghost>编辑</Button>
              <Button type="error" size="small" @click="remove(index)" ghost>删除</Button>
            </template>
          </Table>
        </div>
        <div class="indexRight">
          <div class="articleContent">这里有一篇文章</div>
        </div>
       </div>
       <div class="indexFooter"></div>
    </div>
</template>
<script>
export default {
    name: 'index',
    data(){
      return {
      columns1: [
        {
          title: 'Title',
          key: 'title'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      data1: [
        {
          title: 'John Brown',
        },
        {
          title: 'Jim Green',
        },
        {
          title: 'Joe Black',
        },
        {
          title: 'Jon Snow',
        }
      ]
    }
  },
  methods:{
    addArticle: function(){
      this.$router.push('./editArticle')
    }
  }
}
</script>
<style lang="stylus"  scoped>
.indexHeader
  height 100px
.indexMain
  width 100%
  
.indexLeft
  position relative
  float left
  width 30%
.indexRight
  position relative
  float left
  width 70%
  background-color lightgrey
.newButton
  margin-left 90%
  margin-bottom 2%  
</style>