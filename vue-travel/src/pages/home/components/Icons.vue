<template>
  <div class="icons">
    <swiper class="swiper-container" :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      // iconList: [{
      //   id: '001',
      //   imgUrl: '../../../../static/img/icons/1.jpg',
      //   desc: '景点门票111111111111111111'
      // },
      // {
      //   id: '002',
      //   imgUrl: '../../../../static/img/icons/2.jpg',
      //   desc: '景点门票2'
      // },
      // {
      //   id: '003',
      //   imgUrl: '../../../../static/img/icons/3.jpg',
      //   desc: '景点门票333333333333333333333333'
      // },
      // {
      //   id: '004',
      //   imgUrl: '../../../../static/img/icons/4.jpg',
      //   desc: '景点门票4'
      // },
      // {
      //   id: '005',
      //   imgUrl: '../../../../static/img/icons/5.jpg',
      //   desc: '景点门票5'
      // },
      // {
      //   id: '006',
      //   imgUrl: '../../../../static/img/icons/6.jpg',
      //   desc: '景点门票6'
      // },
      // {
      //   id: '007',
      //   imgUrl: '../../../../static/img/icons/7.jpg',
      //   desc: '景点门票7'
      // },
      // {
      //   id: '008',
      //   imgUrl: '../../../../static/img/icons/8.jpg',
      //   desc: '景点门票8'
      // },
      // {
      //   id: '009',
      //   imgUrl: '../../../../static/img/icons/9.jpg',
      //   desc: '景点门票9'
      // }],
      swiperOption: {
        autoplay: false
      }
    }
  },
  // 计算属性
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped="scoped">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height : 0
    padding-bottom : 50%
  .icons
    margin-top : .2rem
    .icon
      float : left
      overflow : hidden
      position : relative
      width : 25%
      height : 0
      padding-bottom : 25%
      .icon-img
        position : absolute
        top : 0
        left : 0
        right : 0
        bottom : .44rem
        box-sizing : border-box
        padding : .1rem
        .icon-img-content
          display : block
          margin : 0 auto
          height : 100%
      .icon-desc
        position : absolute
        left : 0
        right : 0
        bottom : 0
        height : .44rem
        line-height : .44rem
        text-align : center
        color: $darkTextColor
        ellipsis()
</style>
