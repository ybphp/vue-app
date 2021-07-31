import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import home from "./routes/home";
import category from "./routes/category";
import cart from "./routes/cart";
import my from "./routes/my";
import search from "./routes/search";
import publics from "./routes/publics";
import details from "./routes/details";
import order from "./routes/order";
import address from "./routes/address";
import orderlist from "./routes/orderlist";
import order2 from "./routes/order2";
import collect from "./routes/collect";
const routes = [
  {
    path:"/",
    redirect:"/advertpage"
  },
  home,     //首页
  category, //分类
  cart,     //购物车
  ...my,        //我的
  search,   //搜索
  details,  //详情页路由
  ...publics, //公共路由
  order, //订单页面
  order2, //直接购买提交订单页面2
  ...address, //地址路由
  ...orderlist,
  collect
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
