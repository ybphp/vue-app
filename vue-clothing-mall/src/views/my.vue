<template>
  <div>
      <van-nav-bar :title="$route.name" />
      <van-row gutter="20" class="top">
        <van-col span="6">
          <div class="tx">
            <div v-if="$store.state.username"> <img src="../assets/img/nz3.jpg" alt=""> </div>
            <div v-else class="iconfont icon-logo1"></div>
          </div>
        </van-col>
        <van-col span="18" >
            <div v-if="$store.state.username">
              <span class="name" v-text="$store.state.username"></span>
              <span class="tc" @click="$store.state.username=''">退出</span>
            </div>
            <div v-else>
              <router-link to="/login" >登陆</router-link>
              <router-link to="/register" >注册</router-link>
            </div>
        </van-col>
      </van-row>
      <!-- 列表 -->
        <van-cell-group class="list">
            <van-cell title="我的订单" class="dd" v-if="$store.state.username" is-link @click="getoredr"/>
            <van-cell title="我的地址" v-if="$store.state.username" is-link to="/address" />
            <van-cell title="我的收藏" v-if="$store.state.username" is-link to="/collect"/>
            <!-- <van-cell title="优惠卷" is-link v-if="$store.state.username" /> -->
            <van-cell is-link @click="showPopup">联系客服</van-cell>
            <!-- <van-cell title="联系客服" is-link /> -->
            <!-- 优惠券单元格 -->
        <van-coupon-cell
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
          v-if="$store.state.username"  
        />
        <!-- 优惠券列表 -->
            <van-cell title="设置" is-link class="sz" />
        </van-cell-group>
        <vantabbar></vantabbar>
        
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px;"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
        <!-- 联系客服 -->
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
          <div class="kf">
            <p>客服联系热线: 820-8208820</p>
            <p>客服联系微信: yg_8208820</p>
            <p>公司地址: 广东省广州市天河区珠吉路60号</p>
            <p>公司邮箱: 1033294099@qq.com</p>
          </div>
        </van-popup>
  </div>
    
</template>

<script>

import vantabbar from "../components/vantabbar"

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
  data(){
    return{
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false,
      show: false,
    }
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    getoredr(){
        // 跳转路由
        this.$router.push("/orderlist/orderAll");
        // this.store.state.oder.active=0;
      },
      onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      },
      onExchange(coupon) {
        this.coupons.push(coupon);
      },
  },
  components:{
    vantabbar
  }  
}
</script>

<style lang="scss" scoped>
 
  .top{
    width: 100%;
    height:6rem;
    background: rgb(255, 123, 0) url("../assets/img/bg.png")   no-repeat;
    opacity: 1;
    background-size: 100% auto;
     .tx{
        width: 5rem;
        height: 5rem;
        background: white;
        text-align: center;
        line-height: 5rem;
        margin:8px 0.8rem 0;
        border-radius:50px;
        .icon-logo1{
          font-size: 4rem;
          color: rgb(255, 123, 0);
        }
         img{
        border-radius:50px;
        }
      }
    .van-col{
      height:5rem;
      line-height:5rem;
      font-size: 1.5rem;
        .name,a{
          margin-left: 1.5rem;
          font-size: 1.5rem;  
          color:#fff;
          font-weight: bold;
          cursor: pointer;
        }
        .tc{
          font-size: 14px;
          margin-left: 1.5rem;
          color:#666666;
          cursor: pointer;
        }
      }
      
  }
  .kf{
      margin-left: 2rem;
      margin-top: 2rem;
      p{
        display:block;
        margin: 0.5rem 0;
        font-size: 1rem;
      }
  }
  .list{
    background: #f7f7f7;
    .van-cell{
      height: 3.2rem;
      line-height: 2rem;
      font-size: 1rem;
    }
  }
  .dd{
    margin: 0.8rem 0;
  }
  .sz{
     margin: 0.8rem 0;
  }
</style>