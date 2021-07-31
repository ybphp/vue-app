<template>
    <div>
        <van-nav-bar class="box"
            :title="$route.name"
        ></van-nav-bar>
        <bscroll></bscroll>
        <vantabbar></vantabbar>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll" 
    import vantabbar from "../components/vantabbar"
    export default {
        components:{
            bscroll,
            vantabbar
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        background:#f7f7f7 ;
    }
    
</style>