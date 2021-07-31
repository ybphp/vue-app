<template>
    <div>
        <div class="head">head</div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <h2 class="h2">{{item.name}}</h2>
                        <ul>
                            <li v-for="num in item.content" :key="num+index" @click="go(item)">
                                <van-card
                                :num= item.num
                                :price= item.price
                                :desc= item.name+num
                                :title= item.productName
                                :thumb= item.img
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'

    export default {
            data(){
                return {  
                    msg:'欢迎来到vue.js学习',
                    left:["男装","女装","夏季爆款","品牌服饰","童装","中年款式","包包","鞋子","国际品牌","网红同款","内衣服饰","裙子系列"],
                    right:[
                    {name:"男装",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f3.jpg"), 
                            productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"女装",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f1.jpg"),
                            productName:"酷女孩套装",//商品名称
                            productDescription:"潮牌高端可爱，透风清凉",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机女装修身宽松休闲潮牌可爱装",//商品描述
                            goodsattribute:"紫罗兰-【韩款式】-叻;L",//商品属性描述
                            price:68,//价钱
                            oldprice:168,//原价
                            num:1},
                    {name:"夏季爆款",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f4.jpg"),
                            productName:"乖乖女黑裙",//商品名称
                            productDescription:"高端大气上档次昔日，透风清凉",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"干物女ganwunv 2020夏季黑色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                            goodsattribute:"黑色-【201款式】-叻;L",//商品属性描述
                            price:68,//价钱
                            oldprice:168,//原价
                            num:1},
                    {name:"品牌服饰",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f5.jpg"),
                            productName:"乖乖女白裙",//商品名称
                            productDescription:"ganwunv 2020夏季天蓝色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"2020夏季白色泡泡袖蓬蓬蛋糕长裙连衣裙女长款",//商品描述
                            goodsattribute:"白色-【宽松款式】-叻;均码",//商品属性描述
                            price:78,//价钱
                            oldprice:178,//原价
                            num:1},
                    {name:"童装",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f6.jpg"),
                            productName:"水手服(可爱)",//商品名称
                            productDescription:"高端大气上档次，透风清凉长腿修身",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"ganwunv 水手服百搭日系女裙",//商品描述
                            goodsattribute:"蓝白色-【宽松款式】-叻;L",//商品属性描述
                            price:68,//价钱
                            oldprice:168,//原价
                            num:1},
                    {name:"中年款式",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f13.jpg"), 
                            productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"包包",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f7.jpg"), 
                            productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"鞋子",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f8.jpg"), 
                            productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"国际品牌",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f9.jpg"), 
                            productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"网红同款",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f10.jpg"),
                                productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"内衣服饰",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f11.jpg"),
                                productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    {name:"裙子系列",content:[1,2,3,4,5],
                            img:require("../../assets/imgs/f12.jpg"),
                                productName:"体恤男装",//商品名称
                            productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
                            goodscheck:true,//商品选框
                            storename:"以哦旗舰店",
                            goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
                            goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
                            price:38,//价钱
                            oldprice:138,//原价
                            num:1},
                    ],
                    listHeight:[],//记录高度
                    scrollY:0
                }
            },
            
            methods: {
                go(item){
                    this.$router.push({path: 'details', query:{item: item}});
                    },
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 ,//滚动位置探针效果
                         click:true, //拥有触发事件
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    console.log(pos.y);
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }

                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);

                        // this.currentIndex = index; //左侧效果
                    }
                    
                }   
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }

                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        ul{
            list-style: none;
        }
        .head{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            background-color: #ffffff;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            background-color: #007aae;
            color:#fff;
            font-weight: bold;
        }
        .left li span{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 14px;
           
        }
        .right{
            flex:1;
            background-color: azure;
            .h2{
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
            
        }
        .van-card{
            font-size: 14px;
        }
        .right li{
            line-height: 100px;
            border: 1px solid #f2f2f2;
        }
</style>