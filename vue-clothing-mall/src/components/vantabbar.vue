<template>
    <div>
        <!-- 导航 -->
        <van-tabbar v-model="$store.state.active">
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>