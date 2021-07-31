<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
          @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
          @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<!-- 当一个style标签拥有scoped属性时候，它的css样式只能用于当前的Vue组件，可以使组件的样式不相互污染。
如果一个项目的所有style标签都加上了scoped属性，相当于实现了样式的模块化。
當父元素設置 overflow: hidden 時，父元素會形成一個 BFC ，會需要計算父元素高度，而這時根據 CSS 中的 BFC 規則，浮動元素(float) 也會被計算在內，
所以才會造成浮動元素也被包含在內的效果。而 position: absolute 則不會被計算在內。-->
<style lang="stylus" scoped="scoped">
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color : #CCCCCC
    &:after
      border-color : #CCCCCC
  .border-bottom
    &:before
      border-color : #CCCCCC
  .list
    overflow : hidden
    position : absolute
    top: 1.58rem
    left : 0
    right : 0
    bottom : 0
    .title
      line-height : .54rem
      background : #EEEEEE
      padding-left : .2rem
      color: #666
      font-size : .26rem
    .button-list
      overflow : hidden
      padding : .1rem .6rem .1rem .1rem
      .button-wrapper
        float : left
        width : 33.33%
        .button
          margin : .1rem
          padding : .1rem 0
          text-align : center
          border : .02rem solid #CCCCCC
          border-radius : .06rem
    .item-list
      .item
        line-height : .74rem
        padding-left : .2rem
</style>
