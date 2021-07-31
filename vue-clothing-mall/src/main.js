import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 10px约等于0.63rem
// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css"
import "./assets/font/iconfont.js"

// vant组件库
// $cnpm i vant -S
// npm i babel-plugin-import -D
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);
import { CouponCell, CouponList } from 'vant';
Vue.use(CouponCell);
Vue.use(CouponList);
import { Popup } from 'vant';
Vue.use(Popup);
// 插件 轮播类插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";

// 配置axios
// cnpm i axios -S
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;

//全局时间处理过滤器
Vue.filter("dataFormat",function(dataString){
            console.log(dataString);
            var dd = new Date(dataString);
            // 获取年月日
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();

            // 获取时分秒
            var hh = dd.getHours();
            var mm = dd.getMinutes();
            var ss = dd.getSeconds();
            console.log(ss)
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
        })
// 动画效果
// cnpm install animate.css --save
// cnpm install animate.css@3.7.2 --save
import "animate.css";
// import 'animate.css/animate.css'

//设置路由跳转时滚动条回到顶部
router.afterEach(() => {
  window.scrollTo(0,0);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
