<template>
    <div>
         <div class="top">
            <van-row>
                <van-col span="2" @click="$router.go(-1)">
                    <span class="iconfont icon-icon-test3"></span>
                </van-col>
                <van-col span="17">
                    <van-search @focus="getSearch" placeholder="搜索商品名称" />
                </van-col>
                <van-col span="5">
                    <span class="iconfont icon-fenxiang" @click="showShare = true">
                    </span>
                    <span class="iconfont icon-icon-test2" @click="sc"></span>
                </van-col>
            </van-row>
        </div>
        <div class="swiper-container detailscontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img alt="">
                </div>
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img alt="">
                </div>
                <div class="swiper-slide">
                    <img :src=this.$route.query.item.img alt="">
                </div>
            </div>
            <div class="swiper-pagination detailspagination"></div>
        </div>
        <!-- 价钱 -->
        <div class="center">
            <div class="price">
                ￥{{this.$route.query.item.price}}<span>原价:{{this.$route.query.item.oldprice}}</span>
            </div>
            <div class="goodsdescribe">
                <van-tag plain type="danger" id="van-tag">热卖</van-tag><span id="span">{{this.$route.query.item.goodsdescribe}}</span>
            </div>
            <font color="#ff4a00">「分期享12期免息，低至417元起/期」</font><br>
            <van-tag type="warning">首单直降100元</van-tag> <van-tag type="warning">满2件8.5折</van-tag> <van-tag type="warning">限购5件</van-tag> <van-tag type="warning">全包邮</van-tag>
        </div>
        <div>
            <img src="../assets/imgs/x1.jpg" alt="">
            <img src="../assets/imgs/x2.jpg" alt="">
            <img src="../assets/imgs/x3.jpg" alt="">
            <img src="../assets/imgs/x4.jpg" alt="">
            <img src="../assets/imgs/x5.jpg" alt="">
            <img src="../assets/imgs/x6.jpg" alt="">
            <img src="../assets/imgs/x7.jpg" alt="">
        </div>
        <!-- 下部 -->
        <van-goods-action>
            <van-goods-action-icon icon="shop-o" text="首页" @click="$router.push('/home')"/>
            <van-goods-action-icon icon="cart-o" :badge="this.badge" text="购物车" @click="getCart" />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="addcart"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="buy"
            />
        </van-goods-action>
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
    </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from 'vant';
// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 500 });
    export default {
        data(){
            return{  
                item:this.$route.query.item,
                badge:"",
                showShare: false,
                options: [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
                };
        },
        methods:{
            onSelect(option) {
                Toast(option.name);
                this.showShare = false;
                },
            sc(){
                Toast("收藏成功");
                let sc=document.querySelector(".icon-icon-test2")
                sc.style.color="rgb(247, 197, 33)"
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：可以加入购物车
                if(this.$store.state.username){
                    var ids=[]
                        this.$store.state.collect.lists.forEach(function(item){
                            ids.push(item.id)
                        })
                        let index=ids.indexOf(this.item.id)
                        if(index==-1){
                            this.$store.state.collect.lists.push(this.item)
                        }else{
                            return;
                        }
                }else{
                    Toast('请您先登录');
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/details",
                            item:this.item
                        }
                    })
                }
            },
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            },
            getCart(){//去购物车的方法
                this.$router.push("/cart");
                this.$store.state.active=2;
            },
            addcart(){//加入购物车方法
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：可以加入购物车
                if(this.$store.state.username){
                    var ids=[]
                        this.$store.state.cart.lists.forEach(function(item){
                            ids.push(item.id)
                        })
                        let index=ids.indexOf(this.item.id)
                        if(index==-1){
                            this.badge="+1"
                            this.$store.state.cart.lists.push(this.item)
                        }else{
                            this.badge="+1"
                            let index = this.$store.state.cart.lists.findIndex(e=>e.id == this.item.id);
                            this.$store.state.cart.lists[index].num++
                        }
                }else{
                    Toast('请您先登录');
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/details",
                            item:this.item
                        }
                    })
                }
                
            },
            buy(){//直接购买方法
                 if(this.$store.state.username){
                    //路由跳转传参
                    //用this.$route.query.item可以得到
                    this.$router.push({path: '/order2',query:{item:this.item}});
                 }else{
                    Toast('请您先登录');
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/details",
                            item:this.item
                        }
                    })
                 }
            }
        },
        mounted(){
            new Swiper('.detailscontainer', {
                pagination: {
                    el: '.detailspagination',
                },
            });
        } 
    }
</script>

<style lang="scss" scoped>
    .top{
        height: 3.4rem;//54px
        width: 100%;
        line-height: 3.4rem;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 999;
        
        .icon-icon-test3{
            font-size: 2.5rem;
        }
        .icon-fenxiang{
            font-size: 1.4rem;
            color: rgb(150, 150, 150);
            margin-right:0.8rem;
        }
        .icon-icon-test2{
            font-size: 1.8rem;
            color: rgb(150, 150, 150);
        }
    }
    .swiper-container{
        background: white;
        position: absolute;
        top: 3.4rem;
        left:0px;
        width:100%;
        .swiper-slide{
            text-align: center;
        }
    }
    .detailspagination{
        position: absolute;
        bottom:0.63rem;
        left:0px;
    }
    //价钱
    .center{
        width: 90%;
        margin: 0 auto;
        margin-top: 116%;
        .price{
            font-size: 1.8rem;
            color:#ff6b00;
            font-weight: bold;
            span{
                display: inline-block;
                font-size:0.7rem;
                margin-left: 0.6rem;
                color:#8b8b8b;
                text-decoration: line-through;
            }
        }
        .goodsdescribe{
            font-size: 1rem;
            font-weight: bold;
            color: rgb(15, 15, 15);
            #van-tag{
                margin-bottom: 0.3rem;
                width: 1.5rem;
                height: 0.75rem;
                text-align: center;
                line-height: 1.9rem;
                font-size: 0.63rem;
                margin-right: 0.63rem;
            }
        }
    }
   

        

</style>