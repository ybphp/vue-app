<template>
    <div>
      <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide" >
                    <div class="text animate__animated animate__fadeInDown">时尚大牌</div>
                    <img src="../../assets/imgs/c4.jpg" alt="">
                </div>
                <div  class="swiper-slide" >
                    <div v-show="flag">
                        <div class="text animate__animated animate__fadeInDown">韩版潮牌</div>
                        <img src="../../assets/imgs/c5.jpg" alt="">
                    </div>
                </div>
                <div  class="swiper-slide" >
                    <div v-show="flag">
                        <div class="text animate__animated animate__fadeInDown">俊男靓女</div>
                        <img src="../../assets/imgs/c6.jpg" alt="">
                        <!-- <van-button plain type="info">朴素按钮</van-button> -->
                        <van-button plain color="rgb(231, 179, 8)" class="van-button" size="small" to="/home">点击体验</van-button>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    data(){
        return{
            flag:false,
        }
    },
    mounted(){
        let _this = this;
        new Swiper('.guidepagecontainer', {
            pagination: {
                el: '.guidepagepagination',
            },
        on: {
                // 轮播图切换效果前
                slideChangeTransitionStart: function(){
                    _this.flag = false;//隐藏
                },
                // 轮播图切换效果后
                slideChangeTransitionEnd: function(){
                    _this.flag  = true;//显示
                },
            }
        });
    }
}
</script>
<style lang="scss" scoped>  
    .swiper-container{
        background: white;
        position: fixed;
        top:0px;
        left:0px;
        width:100%;
        height: 100%;
        
    }
    .swiper-slide{
        text-align: center;
        margin-top: 50px;
        .text{
            margin:0 auto;
            font-size: 20px;
            font-weight: bold;
        }
        img{
            width: 230px;
            margin: 10px auto;  
            border: solid 10px wheat;
        }
        .van-button{
            margin-top: 10px;
        }
    
    }
</style>