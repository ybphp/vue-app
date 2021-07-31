<template>
    <div class="box">
       <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 地址 -->
        <div class="address" @click="getAddress">
            <van-row>
                <van-col span="4"><van-icon class="van-icon" name="location" /></van-col>
                <van-col span="20">
                    <div><span class="usname">{{this.addressList.name}}</span><span class="usphone">{{this.addressList.tel}}</span></div>
                    <div class="usaddress">{{this.addressList.address}}</div>
                </van-col>
            </van-row>
        </div>

        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index" class="card">
            <van-card
            :num="item.num"
            tag="热卖"
            :price="item.price"
            :desc="item.goodsattribute"
            :title="item.productName"
            :thumb="item.img"
            />
            <div class="div1">配送方式 <span class="span1">普通配送</span><span class="span2"> 快递 免邮</span></div>
            <div class="div1">加运费险 <span class="span1">退换货可赔付8元</span><span class="span2">店铺 赠送</span></div>
            <div class="div1">订单备注 <span class="span1"></span><input type="text" placeholder="选填 填写与卖家协商的内容"></div>
        </div>

        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="确认订单"
        @submit="onsubmit"
        />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // lists:this.$route.query.item,
                name:"",
                tel:"",
                total:"",
                addressList:[],
                lists:[],
            }
        },
        methods:{
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.goodscheck) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            getAddress(){
                this.$router.push("/address");
            },
            cartvue(){//返回，未支付
                // 保存订单数据
                let order = {//订单数据
                    orderId:new Date().getTime(),
                    addressList:this.addressList,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //待支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                
                this.$router.push("/home");
                this.$store.state.active=0;
            },
            onsubmit(){//确认订单
                // 保存订单数据
                let order = {//订单数据
                    orderId:new Date().getTime(),
                    addressList:this.addressList,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);

                this.$router.push("/orderList/orderAll")
                //  路由跳转
            }

        },
        //生命周期成功初始化数据方法时执行
        created(){
            //直接购买数据传入
            if(this.$route.query.item){
                this.lists.push(this.$route.query.item)
            }

            // this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格

            let index = this.$store.state.address.lists.findIndex(item=>item.isDefault == true);
            this.addressList=this.$store.state.address.lists[index]
        },
    }
</script>

<style lang="scss" scoped>
.box{
    .address{
        width: 94%;
        height: 100px;
        margin: 5px auto;
        background:white;
        border-radius: 5px;
        .van-icon{
            font-size: 30px;
            margin-left: 10px;;
            height: 100px;
            line-height: 100px;
            color: rgba(255, 145, 0, 0.973);
        }
        .usname{
            display: inline-block;
            font-size: 18px;
            color: black;
            margin: 10px 10px  5px  0 ;
        }
        .usphone{
            display: inline-block;
            font-size: 12px;
            color: rgb(90, 90, 90);
        }
        .usaddress{
            font-size:14px;

        }
    }
    .card{
        padding:0.5rem 0;
        width: 94%;
        margin: 10px auto;
        background: white;
        border-radius: 5px;
        .div1{
            margin:0.8rem 0;
            margin-left: 1rem;
            color: black;
            .span1{
                display: inline-block;
                color: #666666;
                margin-left: 1rem;
            }
            .span2{
                display: inline-block;
                color: #666666;
                float: right;
                margin-right: 1rem;
                text-align:center;
            }
        }
        .van-card{
                background: #fff;
                font-size: 16px;
            }  
    }
}

</style>