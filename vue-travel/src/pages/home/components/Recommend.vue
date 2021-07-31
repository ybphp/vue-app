<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommed',
  props: {
    recommendList: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: '../../../../static/img/rem1.jpeg',
  //       title: '平凡之路',
  //       desc: '平凡才是唯一的答案'
  //     },
  //     {
  //       id: '002',
  //       imgUrl: '../../../../static/img/rem2.jpeg',
  //       title: '未来山河',
  //       desc: '多年以后，当我翻过山丘，却发现已无人等候，我才知道脚下的足迹已全然没有意义'
  //     },
  //     {
  //       id: '003',
  //       imgUrl: '../../../../static/img/rem3.jpeg',
  //       title: '诗和远方',
  //       desc: '星辰大海需要门票，诗和远方需要路费'
  //     },
  //     {
  //       id: '004',
  //       imgUrl: '../../../../static/img/rem4.jpg',
  //       title: '星辰大海',
  //       desc: '我跨过山和大海，也穿过人上人海。'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped="scoped">
  @import '~styles/mixins.styl'
  .title
    margin-top : .2rem
    line-height : .8rem
    background : #eee
    text-indent : .2rem
  .item
    overflow : hidden
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1
      padding : .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height : 0.4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height : .44rem
        margin-top : .16rem
        background : #ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color : #fff
</style>
