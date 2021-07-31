<template>
  <div class="swiper">
    <swiper :options="swiperOption" class="swiper-img" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default{
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background : #fff
  .swiper
    width: 100
    height: 0
    padding-bottom: 41.6%
    background : #eee
    //当内容溢出元素框时,内容会被修剪，并且其余内容是不可见的
    overflow: scroll
    .swiper-img img
      width: 100%
</style>
