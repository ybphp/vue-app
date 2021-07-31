<template>
  <div>
     <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="item.dateTime|dataFormat" />
            <div v-for="(value,key) in item.goodsList" :key="key">
                <van-card
                :num="value.num"
                :price="value.price"
                :desc="value.goodsattribute"
                :title="value.productName"
                :thumb="value.img"
                >
            </van-card>
            </div>
            <div class="orderfooter">
                    <!-- 待支付 -->
                    <div v-if="item.type == 1">
                       <van-button size="mini" type="primary" @click="pay(item.orderId)">支付订单</van-button>
                        <van-button size="mini" type="danger" @click="dle(item.orderId)">取消订单</van-button>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.type == 2">
                        <van-button size="mini"  type="warning">退款申请</van-button>
                        <van-button size="mini"  type="info" @click="obtain(item.orderId)">已收货</van-button>
                    </div>
                    <!-- 已完成 -->
                    <div v-else-if="item.type == 3">
                        <van-button size="mini" class="pj"  @click="pj()">商品评价</van-button>
                    </div>
            </div>
        </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
Toast.setDefaultOptions({ duration: 500 });

export default {
     data(){
        return{
            lists:[],
            dataFormat:""
        }
        },
     methods:{
        // dle(index){//取消订单
        //     this.lists.splice(index,1)
        //     this.$store.commit("order/dle",index);
        // },
        dle(orderId){//取消订单
            let index = this.lists.findIndex(item=>item.orderId == orderId);
            this.lists[index].type = 6; //修改一个没有类型删除
            this.lists.splice(index,1)
            Toast('删除订单');
        },
        pay(orderId){//支付订单
            let index = this.lists.findIndex(item=>item.orderId == orderId);
            this.lists[index].type = 2; //切换支付后收货类型，调用支付接口
            Toast('支付成功');
        },
        pj(){
            Toast('已评价');
            let pj=document.querySelector(".pj")
            pj.innerHTML="已评价"
            console.log(pj)
        },
        obtain(orderId){
            let index = this.lists.findIndex(item=>item.orderId == orderId);
            this.lists[index].type = 3; //切换待收货状态，
            Toast('完成订单');
        }
        },
        created(){
            this.lists = this.$store.state.order.lists;
            this.typeList = this.$store.state.order.typeList;
            if(!this.lists.length){
            Toast('无商品信息');
        }
        },
       // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
          
        }
}
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
            font-size: 16px;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
            background: #fff;

        }
    }
</style>