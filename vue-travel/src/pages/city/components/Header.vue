<template>
  <div>
    <div class="header">
      选择城市
      <router-link to="/">
        <div class="iconfont header-back">&#xe743;</div>
      </router-link>
    </div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id"
        @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="isData">
          没有查询到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      // 跳转到首页
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped="scoped">
  @import '~styles/varibles.styl'
  .header
    position : relative  // 生成相对定位的元素，相对于其正常位置进行定位
    overflow : hidden
    height : $heightHeader
    line-height : $heightHeader
    text-align : center
    color: #FFFFFF
    font-size : .32rem
    background: $bgColor
    .header-back
      position : absolute  //生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
      top : 0
      left : 0
      width : .64rem
      text-align : center
      font-size : .4rem
      color : #FFFFFF
  .search
    padding 0 .1rem
    height : .72rem
    background : $bgColor
    .search-input
      box-sizing : border-box  //假如您需要并排放置两个带边框的框，可通过将 box-sizing 设置为 "border-box"。这可令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中
      padding : 0 .1rem
      height : .62rem
      line-height : .62rem
      width : 100%
      text-align : center
      border-radius : .06rem
      color: #666
  .search-content
    z-index : 1
    overflow : hidden
    position : absolute
    top: 1.58rem
    left : 0
    right : 0
    bottom : 0
    background : #EEEEEE
    .search-item
      line-height : .62rem
      padding-left : .2rem
      background : #FFFFFF
      color : #666666
</style>
