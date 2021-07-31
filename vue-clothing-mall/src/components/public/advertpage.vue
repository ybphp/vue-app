<template>
  <div class="box">
        <img src="../../assets/imgs/c8.png" alt="">
        <!-- 广告页advertpage.vue -->
        <button @click="goHome">跳过 <span>{{num}}</span></button>
    </div>
</template>

<script>
export default {
 data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home");//跳转首页
                }else{
                    this.num--;
                }
            },1000)
            this.$store.state.vanTabbar = false;
        },
        beforeDestroy(){
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
html, body{ margin:0; height:100%; }
    .box{
        width: 100%;
        img {
            width: 100%;
        }
        button{
            position: absolute;
            top: 2rem;
            left: 70%;
            width:80px;
            border: none;
            background:#666666;
            height: 38px;
            font-size: 18px;
            color: white;
            opacity: 0.8;
            line-height: 38px;
        }
    }
    
</style>