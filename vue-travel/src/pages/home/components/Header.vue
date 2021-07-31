<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe612;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe668;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<!-- scoped表示只对当前定义的组件样式有效 -->
<!-- 1rem = html 的font-size = 50px -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display : flex
    line-height : $heightHeader
    background : $bgColor
    color : #fff
    .header-left
      width : .64rem
      float : left
      .back-icon
        text-align : center
        font-size : .5rem
    .header-input
      flex : 1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      padding-left : .2rem
      background : #fff
      border-radius : .1 rem
      color : #ccc
    .header-right
      min-width : 1.04rem
      padding : 0 .1rem
      float : right
      text-align : center
      color : #FFFFFF
</style>
