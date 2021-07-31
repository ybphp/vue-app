<template>
  <div>
     <!-- 顶部导航 -->
        <van-row class="topsearchNav">
            <van-col span="3"><span class="iconfont icon-logo1"></span></van-col>
            <van-col span="18">
                <van-search @focus="getSearch" placeholder="搜索商品名称" />
            </van-col>
            <van-col span="3" @click="getmy"><span class="iconfont icon-RectangleCopy
"></span></van-col>
        </van-row>
        <!-- 顶部导航end -->
        <!-- 首页轮播 -->
        <div class="swiper-container homeBanner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/banner01.jpg"  alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner02.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/img/banner03.jpg" alt="">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination homePagination"></div>
        </div>
        <!-- 首页轮播结束 -->
        <!-- 类别导航开始 -->
          <div class="swiper-container homeClass">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <van-grid :border="false" :column-num="4">
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-diaopai"></use>
                      </svg>
                      <span class="font">店铺新品</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-baokuan"></use>
                      </svg>
                      <span class="font">今日热卖</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gouwudai"></use>
                      </svg>
                      <span class="font">服装国际</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chongzhi"></use>
                      </svg>
                      <span class="font">充值中心</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use>
                      </svg>
                      <span class="font">会员优惠</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-manyidu"></use>
                      </svg>
                      <span class="font">衣库优品</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jinbi"></use>
                      </svg>
                      <span class="font">金币庄园</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-aixin"></use>
                      </svg>
                      <span class="font">会员中心</span>
                    </van-grid-item>
                  </van-grid> 
              </div>
              <div class="swiper-slide">
                <van-grid :border="false" :column-num="4">
                  <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-aixinrexian"></use>
                      </svg>
                      <span class="font">美丽穿搭</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhibo"></use>
                      </svg>
                      <span class="font">直播空间</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kaquan"></use>
                      </svg>
                      <span class="font">集卡活动</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wuliu"></use>
                      </svg>
                      <span class="font">都市人生</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-biaoqian"></use>
                      </svg>
                      <span class="font">人气上新</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-manyidu"></use>
                      </svg>
                      <span class="font">设计优品</span>
                    </van-grid-item>
                    <van-grid-item>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qiandao"></use>
                      </svg>
                      <span class="font">四季服饰</span>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kefu"></use>
                      </svg>
                      <span class="font">联系客服</span>
                    </van-grid-item>
                </van-grid>
              </div>
            </div>
            <!-- Add Scrollbar -->
            <div class="swiper-scrollbar homeScrollbar"></div>
          </div>
        <!-- 类别导航结束 -->
        
        <!-- 商品列表 -->
            <div class="list2">
              <van-grid :border="false" :column-num="2" :gutter="5" :center="false">
                    <van-grid-item>
                      <h1 style="color:#ff6b00;font-size:16px">聚划算</h1>
                        <van-grid :border="false" :column-num="2" :gutter="0" :center="false">
                        <van-grid-item>
                          <h2 style="color:#fe4e50">品牌折扣</h2>
                          <van-image :src=imgs[1] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#fa2a59">大额抢卷</h2>
                          <van-image :src=imgs[0] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#f9a500">折扣店铺</h2>
                          <van-image :src=imgs[2] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#ff6025">限时半价</h2>
                          <van-image :src=imgs[3] />
                        </van-grid-item>
                      </van-grid>
                    </van-grid-item>
                    <van-grid-item>
                        <h1 style="color:#f9a500;font-size:16px">有好货</h1>
                        <van-grid :border="false" :column-num="2" :gutter="0" :center="false">
                        <van-grid-item>
                          <h2 style="color:#ff507d">全民推荐</h2>
                          <van-image :src=imgs[4] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#f9a500">热卖店铺</h2>
                          <van-image :src=imgs[5] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#fe4e50">预售好货</h2>
                          <van-image :src=imgs[6] />
                        </van-grid-item>
                        <van-grid-item>
                          <h2 style="color:#50bdff">摇号大牌</h2>
                          <van-image :src=imgs[7] />
                        </van-grid-item>
                      </van-grid>
                    
                    </van-grid-item>
              </van-grid>
            </div>
        <!-- 商品列表结束 -->
      <!-- 你可能喜欢 -->
      <div class="list_text"><div>→  你可能喜欢的  ←</div></div> 
      <div class="list" >
        <div class="listleft">
          <van-grid :border="false" class="van-grid" :column-num="1" :gutter="5" :center="false" v-for="(item,index) in lists1" :key="index">
            <van-grid-item @click="go(item)" class="van-grid-item">
                <van-image :src="item.img"/>
                <div class="productName">{{item.productName}}</div>
                <div class="productDescription">{{item.productDescription}}</div>
                <span class="money">￥{{item.price}}</span><span class="fk">1000+人付款</span>
              </van-grid-item>
          </van-grid>
        </div>
        <div class="listright">
          <van-grid :border="false" class="van-grid" :column-num="1" :gutter="5" :center="false" v-for="(item,index) in lists2" :key="index">
            <van-grid-item @click="go(item)" class="van-grid-item">
                <van-image :src="item.img"/>
                <div class="productName">{{item.productName}}</div>
                <div class="productDescription">{{item.productDescription}}</div>
                <span class="money">￥{{item.price}}</span> <span class="fk">1000+人付款</span>
              </van-grid-item>
          </van-grid>
        </div>
      </div>
    
        <!-- 你可能喜欢结束 -->
        <vantabbar></vantabbar>
  
  </div>
</template>

<script>
    import Swiper from "swiper"
    import vantabbar from "../components/vantabbar"
    export default {
      data(){
          return{
              lists1:this.$store.state.lists1,
              lists2:this.$store.state.lists2,
              imgs:[
                require("../assets/imgs/f1.jpg"),
                require("../assets/imgs/f2.jpg"),
                require("../assets/imgs/f3.jpg"),
                require("../assets/imgs/f4.jpg"),
                require("../assets/imgs/f5.jpg"),
                require("../assets/imgs/f6.jpg"),
                require("../assets/imgs/f7.jpg"),
                require("../assets/imgs/f8.jpg"),
              ],
              
          }
      },
      methods:{
        getSearch(){
            // 跳转路由
            this.$router.push("/search");
          },
        go(item){
          this.$router.push({path: 'details', query:{item: item}});
        },
        getmy(){
          this.$router.push("/my");
          this.$store.state.active=3
        }
        },
        mounted(){
          //轮播图
          new Swiper('.homeBanner', {
                pagination: {
                    el: '.homePagination',
                },
            });
          //分类导航
          new Swiper('.homeClass', {
              slidesPerView: 1,
              spaceBetween: 1,
              freeMode: true,
              scrollbar: {
                el: '.homeScrollbar',
                hide: true,
             },
          });
        },
        components:{
          vantabbar
        }        
      }

</script>

<style lang="scss" scoped>
  #app{
    background-color: #f2f2f2;
  }
    .topsearchNav{
        background-color: #F2F2F2;
        .icon-logo1{
            text-align: center;
            display: block;
            font-size: 2rem;
            height: 2.8rem;
            line-height: 2.8rem;
            color:#ff6B00;
        }
        .van-search{
            width: 100%;
            padding:0px;
            margin:0.3rem;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-RectangleCopy{
            text-align: center;
            display: block;
            font-size: 2rem;
            height: 2.8rem;
            line-height: 2.8rem;
            color:#4E4E4E;
        }
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        width: 100%;
        font-size: 1.2rem;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 1.1rem;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .font{
      font-size:0.6rem;
    }
    .list{
      width: 100%;
      margin-top: 10px;
      .van-grid{
        padding: 0;
      }
      .listleft{
        width:50%;
        display: inline-block;
        position: relative;
        .van-grid-item{
          margin-top: 5px;
        
        }
        
      }
      .listright{
        width:50%;
        display: inline-block;
        position: relative;
        .van-grid-item{
          margin-top: 5px;
        }
      }
      
      .productName{
        font-size: 14px;
        color: black;
        font-weight: bold;
      }
      .productDescription{
        font-size: 12px;
        width:120px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 16px;
      }
      .money{
        display: inline-block;
        width: 4rem;
        color: red;
        font-weight: bold;
        font-size: 1.2rem;
        position: absolute;
        bottom: 0.3rem;
        left: 0.3rem;
      }  
      .fk{
        position: absolute;
        bottom: 0.5rem;
        right: 0.6rem;
        width: 4.7rem;
        display: inline-block;
        color: rgb(204, 204, 204);
      }  
    }
    .list_text{
      text-align: center;
      width: 100%;
      font-size: 0.8rem;
      height:1.89rem;
      font-weight: bold;
      line-height: 1.9rem;
      margin-top: 0.63rem;
      color: #fc7235;
      }
    .list2{
      width: 100%;
      margin-top: 0.6rem ;
      h2{
        margin-bottom: 0.6rem;
      }
    }
    //icon图标样式
    .icon {
      height:3.2rem;
      width:70%;
      margin: 0.1rem 0.6em;
      vertical-align: -0.5em;
      fill: currentColor;
      overflow: hidden;
    }
</style>