<template>
    <div class="box">
        <van-nav-bar
            :title="$route.name"
        />
        <div class="card" v-for="(item,index) in this.$store.state.cart.lists" :key="index" @click="go(item)">
            <van-row class="store">
                <van-col span="3">
                </van-col>
                <van-col span="21">
                <van-tag mark id="van-tag" color="rgb(255, 123, 0)">Hot</van-tag><span id="span">{{item.storename}}</span>
                </van-col>
            </van-row>
            <van-row class="goods">
                <van-col span="3">
                    <van-checkbox v-model="item.goodscheck"></van-checkbox>
                </van-col>
                <van-col span="7">
                    <van-image
                        width="5rem"
                        height="5rem"
                        fit="cover"
                        :src="item.img"
                        />
                </van-col>
                <van-col span="14">
                    <div class="goodsdescribe">{{item.goodsdescribe}}</div>
                    <div class="goodsattribute">{{item.goodsattribute}}</div>
                    <div class="goodsmoney">￥{{item.price}} <span class="old">原价:{{item.oldprice}}</span></div>
                    <p>
                        <van-button   type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
                        <span>{{item.num}}</span>
                        <van-button  type="default" size="mini" @click="item.num++">+</van-button>
                        <van-button  type="danger"  size="mini" @click="del">删除</van-button>
                    </p>
                </van-col>
            </van-row>
        </div>
       

        <!-- 购物车空时显示 -->
        <div class="empty" v-if="$store.state.username">
            <img src="../assets/img/404.png" alt="">
            <h1>购物车竟然是空的</h1>
            <h2>再忙，也要记得买点什么犒劳自己~</h2>
            <button @click="getSearch">去逛一逛</button>
            <div class="like">
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
            </div>
        </div>
        <div class="empty" v-else>
            <img src="../assets/img/404.png" alt="">
            <h1>请先继续登录</h1>
            <h2>登录了才可以使用购物车等更多功能~</h2>
            <button @click="getlogin">点击我去登录</button>
            <div class="like">
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
            </div>
        </div>

        <van-submit-bar :price=" sum*100" button-text="提交订单" @submit="getOrder()">
            <van-checkbox v-model="checkedAll" >全选</van-checkbox>
        </van-submit-bar>
        <vantabbar></vantabbar>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import vantabbar from "../components/vantabbar"
    export default {
        data(){
            return {
                checked:true,
                total:0,
                lists:this.$store.state.cart.lists,
                lists1:[
                    { 
                        id:1,
                        img:require("../assets/imgs/f12.jpg"),
                        productName:"酷女孩套装",//商品名称
                        storename:"欧若拉旗舰店",
                        productDescription:"潮牌高端可爱，透风清凉",//商品描述
                        goodscheck:true,//商品选框
                        goodsdescribe:"夏季日系拼色机女装修身宽松休闲潮牌可爱装",//商品描述
                        goodsattribute:"紫罗兰-【韩款式】-叻;L",//商品属性描述
                        price:68,//价钱
                        oldprice:168,//原价
                        num:1
                    },
                    {
                        id:2,
                        img:require("../assets/imgs/f2.jpg"),
                        productName:"男球鞋",//商品名称
                        storename:"欧若拉旗舰店",
                        productDescription:"高端大气上档次，透风清凉增高",//商品描述
                        goodscheck:true,//商品选框
                        goodsdescribe:"法马尼男鞋休闲百搭运动鞋男2020新款夏季透气镂空网面鞋子男潮鞋",//商品描述
                        goodsattribute:"红色-【宽松款式】-叻;L",//商品属性描述
                        price:158,//价钱
                        oldprice:258,//原价
                        num:1
                    },
                ],
                lists2:[
                     { 
                        id:3,
                        img:require("../assets/imgs/f4.jpg"),
                        productName:"乖乖女黑裙",//商品名称
                        storename:"以哦旗舰店",
                        productDescription:"高端大气上档次昔日，透风清凉",//商品描述
                        goodscheck:true,//商品选框
                        goodsdescribe:"干物女ganwunv 2020夏季黑色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                        goodsattribute:"黑色-【201款式】-叻;L",//商品属性描述
                        price:68,//价钱
                        oldprice:168,//原价
                        num:1
                    },
                    { 
                        id:4,
                        img:require("../assets/imgs/f5.jpg"),
                        productName:"乖乖女白裙",//商品名称
                        storename:"发士拉旗舰店",
                        productDescription:"ganwunv 2020夏季天蓝色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                        goodscheck:true,//商品选框
                        goodsdescribe:"2020夏季白色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                        goodsattribute:"白色-【宽松款式】-叻;均码",//商品属性描述
                        price:78,//价钱
                        oldprice:178,//原价
                        num:1
                    },
                ]
            }
            
        },
        methods:{
            getOrder(){
                if(this.lists.length){
                    this.$router.push({path: 'order'});
                    //路由跳转传参
                    //用this.$route.query.item可以得到
                }else{
                    Toast('购物车还没用东西');
                }
                
            },
            del(index){
                this.$store.state.cart.lists.splice(index,1)
                if(this.$store.state.cart.lists==0){
                    let empty =document.querySelector(".empty")
                    empty.style.display="block";
                }
            },
           
            getSearch(){
                // 跳转路由
                this.$router.push("/home");
            },
            getlogin(){
                this.$router.push("/login");
            },
            go(item){
            this.$router.push({path: 'details', query:{item: item}});
            },

        },
        //计算属性
        computed:{
            sum(){
                // 总价格计算
                // total 累加值
                return this.$store.state.cart.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.goodscheck) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            // 全选按钮
            checkedAll:{
                // 计算属性中有两个固定方法，get()取值，set()赋值
                //第一次页面加载过程中，checkAll被调用默认使用get()方法，获取当前自己应该等到状态。
                // every() 方法用于检测数组所有元素是否都符合指定条件
                // 只能全部数组对象都为true才为true，如果有一个false为false
                get(){
                    // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                    return this.$store.state.cart.lists.every((item)=>{
                        return item.goodscheck;
                    })
                },
                set(value){
                    // 遍历所有数据选中与反选
                   this.$store.state.cart.lists.forEach((item)=>{
                        return item.goodscheck = value;
                    })
                }
            }
        },
        //生命周期页面加载完成后执行
        mounted(){
           if(this.$store.state.cart.lists==0){
                    let empty =document.querySelector(".empty")
                    empty.style.display="block";
                }
        },
        components:{
            vantabbar
        }

    }
</script>

<style lang="scss" scoped>
.box{
        background:#f7f7f7 ;
    .empty{
        margin-top: 1rem;
        display: none;
        text-align: center;
        img{
            width:6rem;
            margin: 0 auto;
        }
        h1{
            font-size: 18px;
            color: rgb(53, 53, 53);
        }
        h2{
            font-size: 12px;
            color: rgb(153, 153, 153);
        }
        button{
            background:transparent;
            border: solid 1px rgb(153, 153, 153) ;
            height: 28px;
            line-height:16px;
            padding: 5px;
            margin-top: 0.63rem;
        }
        .like{
            .list{
                text-align: left;
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
        }
    }
    margin-bottom: 3.1rem;
    .card{
        background: white;
        width: 90%;
        margin: 0.63rem auto;
        border-radius: 0.63rem;
        padding: 0.63rem;
        .store{
            margin-bottom: 0.63rem;
            height: 1.9rem;
            color: black;
            font-size: 1.2rem;
            vertical-align: bottom;
            position: relative;
                #van-tag{
                     position: absolute;
                     top: 0.3rem;
                }
                #span{
                    position: absolute;
                    left: 5rem;
                    font-size: 1rem;
                    font-weight: bold  ;
                }
        }
        .goods{
            .van-checkbox{
                position: relative;
                left:0.3rem;
                top:2.3rem;
            }
            .goodsdescribe{
                width: 100%;
                margin-bottom: 0.63rem;
                font-size: 1rem;
                color: black;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .goodsattribute{
                display: inline-block;
                margin-bottom: 0.63rem;
                padding: 2px 0;
                font-size: 0.6rem;
                color: rgb(141, 141, 141);
                background: rgb(236, 236, 236);
              

            }
            .goodsmoney{
                font-size: 1.3rem;
                color: red;
                font-weight: bold;
                .old{
                    font-size: 0.65rem;
                    color: #8b8b8b;
                    font-weight: 0;
                    text-decoration: line-through;
                }
            }
            
        }
    }
    
    .van-submit-bar{
    bottom: 3.1rem;
    }
}
</style>