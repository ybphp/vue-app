import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import cart from "./cart";
import address from "./address";
import order from "./order";
import collect from "./collect"
export default new Vuex.Store({
  state: {

    active: 0,//显示底部 导航的第几个
    searcchLists:["男短袖","女裙子"],
    username:null,//用户名
    lists1:[
      { 
        id:1,
        img:require("../assets/imgs/f1.jpg"),
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
      { 
        id:3,
        img:require("../assets/imgs/f3.jpg"),
        productName:"体恤男装",//商品名称
        storename:"欧若拉旗舰店",
        productDescription:"高端大气上档次，透风清凉，暑假",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能工装男加肥大码宽松休闲潮牌裤",//商品描述
        goodsattribute:"暗蓝色-【宽松款式】-叻;XL",//商品属性描述
        price:38,//价钱
        oldprice:138,//原价
        num:1
      },
      { 
        id:4,
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
      { id:5,
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
      { 
        id:6,
        img:require("../assets/imgs/f6.jpg"),
        productName:"水手服(可爱)",//商品名称
        storename:"棋手旗舰店",
        productDescription:"高端大气上档次，透风清凉长腿修身",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"ganwunv 水手服百搭日系女裙",//商品描述
        goodsattribute:"蓝白色-【宽松款式】-叻;L",//商品属性描述
        price:68,//价钱
        oldprice:168,//原价
        num:1
      },
      {
        id:7,
        img:require("../assets/imgs/f7.jpg"),
        productName:"雅实连衣裙",//商品名称
        storename:"欧若拉旗舰店",
        productDescription:"高端大气上档次，超女潮男",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"Fine丹若2020新款中国风复古刺绣旗袍重工钉珠高端名媛气质连衣裙",//商品描述
        goodsattribute:"褐色-【宽松款式】-叻;L",//商品属性描述
        price:150,//价钱
        oldprice:308,//原价
        num:1
      
      },
      { 
        id:8,
        img:require("../assets/imgs/f8.jpg"),
        productName:"潮男短裤 ",//商品名称
        storename:"欧若拉旗舰店",
        productDescription:"高端大气上档次，韩版潮牌",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能工装短裤男加肥大码宽松休闲潮牌胖子运动五分裤",//商品描述
        goodsattribute:"灰色-【宽松款式】-叻;L",//商品属性描述
        price:38,//价钱
        oldprice:138,//原价
        num:1
      }
    ],
    lists2:[
      { 
        id:9,
        img:require("../assets/imgs/f9.jpg"),
        productName:"雅静套裙",//商品名称
        storename:"二更旗舰店",
        productDescription:"高端大气可爱，透风清凉",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机女装修身宽松休闲潮牌名媛气质连衣裙",//商品描述
        goodsattribute:"白色-【564款式】-叻;L",//商品属性描述
        price:98,//价钱
        oldprice:168,//原价
        num:1
      },
      {
        id:10,
        img:require("../assets/imgs/f10.jpg"),
        productName:"九分裤",//商品名称
        storename:"库拉旗舰店",
        productDescription:"夏季潮男，百搭休闲九分裤",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能工装短裤男加肥大码宽松休闲潮牌",//商品描述
        goodsattribute:"黑色-【第三款】-叻;L",//商品属性描述
        price:108,//价钱
        oldprice:228,//原价
        num:1
      },
      { 
        id:11,
        img:require("../assets/imgs/f11.jpg"),
        productName:"可爱粉群",//商品名称
        storename:"丰色旗舰店",
        productDescription:"夏日可爱粉，女装潮牌韩版女连衣裙",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能夏日可爱粉，女装潮牌韩版女连衣裙裤",//商品描述
        goodsattribute:"可爱粉-【修身款式】-叻;L",//商品属性描述
        price:78,//价钱
        oldprice:138,//原价
        num:1
      },
      { 
        id:12,
        img:require("../assets/imgs/f12.jpg"),
        productName:"学生白裙",//商品名称
        storename:"拉李旗舰店",
        productDescription:"学生系列百搭着群，透风清凉",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能2020夏季天连衣裙女款",//商品描述
        goodsattribute:"蓝色-【宽松款式】-叻;L",//商品属性描述
        price:88,//价钱
        oldprice:168,//原价
        num:1
      },
      { id:13,
        img:require("../assets/imgs/f13.jpg"),
        productName:"女长裤",//商品名称
        storename:"大大旗舰店",
        productDescription:"ganwunv 2020夏季淡灰色修身长裤",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色2020夏季淡灰色修身长裤",//商品描述
        goodsattribute:"灰色-【修身款式】-叻;L",//商品属性描述
        price:45,//价钱
        oldprice:178,//原价
        num:1
      },
      { 
        id:14,
        img:require("../assets/imgs/f14.jpg"),
        productName:"邻家女孩折长裙",//商品名称
        storename:"黑黑旗舰店",
        productDescription:"透风清凉长腿修身长裙",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"ganwunv 2020夏季天邻家女孩折长裙",//商品描述
        goodsattribute:"灰色-【长款式】-叻;L",//商品属性描述
        price:98,//价钱
        oldprice:168,//原价
        num:1
      },
      {
        id:15,
        img:require("../assets/imgs/f15.jpg"),
        productName:"男T恤",//商品名称
        storename:"欧凉拉旗舰店",
        productDescription:"及时行乐，乐拍男体恤",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季新款男潮牌百搭体恤",//商品描述
        goodsattribute:"白色-【及时行乐款】-叻;XXL",//商品属性描述
        price:120,//价钱
        oldprice:308,//原价
        num:1
      
      },
      { 
        id:16,
        img:require("../assets/imgs/f20.jpg"),
        productName:"李宁运动鞋 ",//商品名称
        storename:"李宁旗舰店",
        productDescription:"高端大气上档次，潮牌李宁",//商品描述
        goodscheck:true,//商品选框
        goodsdescribe:"夏季日系拼色机能工装短裤男加肥大码宽松休闲潮牌胖子运动五分裤",//商品描述
        goodsattribute:"灰色-【宽松款式】-叻;L",//商品属性描述
        price:308,//价钱
        oldprice:438,//原价
        num:1
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    address,
    order,
    collect
  }
});
