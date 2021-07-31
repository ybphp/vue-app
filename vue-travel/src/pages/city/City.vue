<template>
  <div>
    <city-header :cities="cities"></city-header>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleSelectCity"></city-alphabet>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('./api/city.json')
        .then(this.getCitySucc)
    },
    getCitySucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleSelectCity (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped="scoped">
</style>
