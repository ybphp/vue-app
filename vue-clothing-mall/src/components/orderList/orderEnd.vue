<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type==3">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="item.dateTime|dataFormat"/>
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
                            <van-button size="mini" type="primary">支付订单</van-button>
                            <van-button size="mini" type="danger">删除订单</van-button>
                        </div>
                        <!-- 待收货 -->
                        <div v-else-if="item.type == 2">
                            <van-button size="mini"  type="warning">退款申请</van-button>
                            <van-button size="mini"  type="info">已收货</van-button>
                        </div>
                        <!-- 已完成 -->
                        <div v-else-if="item.type == 3">
                            <van-button size="mini" class="pj" @click="pj()">商品评价</van-button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 500 });
export default {
     data(){
            return{
                lists:[],
                dataFormat:""

            }
            },
            methods:{
                pj(){
                    Toast('已评价');
                    // let pj=document.querySelector(".pj")
                    this.innerHTML="已评价"
                    console.log(this)
                },  
        },
    created(){
        // let folist=this.$store.state.order.lists;
        //     for(var i=0;i<folist.length;i++){
        //         if(folist[i].type==3){
        //             this.lists.push(folist[i])
        //         }
        //     }
        let dataList = this.$store.state.order.lists;
        this.lists = dataList.filter(item=>item.type == 3); //类型为一生成新数组
        this.typeList = this.$store.state.order.typeList;
        if(!this.lists.length){
            Toast('无商品信息');
        }
        },
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