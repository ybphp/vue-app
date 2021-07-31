<template>
  <div>
    <div class="title">周末去玩啊</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '001',
  //       imgUrl: '../../../../static/img/week1.jpg',
  //       title: '平凡之路',
  //       desc: '平凡才是唯一的答案'
  //     },
  //     {
  //       id: '002',
  //       imgUrl: '../../../../static/img/week2.jpg',
  //       title: '未来山河',
  //       desc: '多年以后，当我翻过山丘，却发现已无人等候，我才知道脚下的足迹已全然没有意义'
  //     },
  //     {
  //       id: '003',
  //       imgUrl: '../../../../static/img/week3.jpg',
  //       title: '诗和远方',
  //       desc: '星辰大海需要门票，诗和远方需要路费'
  //     },
  //     {
  //       id: '004',
  //       imgUrl: '../../../../static/img/week4.jpg',
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
  .item-img-wrapper
    overflow : hidden
    height : 0
    padding-bottom : 37%
    .item-img
      width : 100%
  .item-info
    padding : .2rem
    min-width : 0
    .item-title
      line-height : .54rem
      font-size : .32rem
      ellipsis()
    .item-desc
      line-height : 0.4rem
      color: #ccc
      ellipsis()
</style>
