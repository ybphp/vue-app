<template>
    <div>
        <van-row class="topsearchNav">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-icon-test3"></span></van-col>
            <van-col span="18">
                <van-search placeholder="搜索商品名称" v-model="data"/>
            </van-col>
            <van-col span="3"><span class="iconfont icon-icon-test1" @click="add"></span></van-col>
        </van-row>
        <div class="box">
            <div class="top"><span>历史搜索</span> <van-icon name="delete" @click="dle"/></div>
            <div class="bottom"><span class="span" v-for="(item,index) in lists" :key="index">{{item}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
         data(){
            return{  
                lists:this.$store.state.searcchLists,
                data:""
            }
        },
        methods:{
            dle(){
                this.$store.state.searcchLists=""
            },
            add(){
                this.$store.state.searcchLists.push(this.data)
                this.$router.push("/home");
            }
        },
    }
</script>

<style lang="scss" scoped>
    .box{
            width: 100%;
        .top{
            width: 100%;
            margin:10px 0px 5px 10px;
            span{
                font-size: 18px;
                color: black;
                font-weight: bold;
                display: inline-block;
                margin-right: 200px;
            }
            .van-icon{
                font-size: 20px;
                
            }
        }
        .bottom{
            width: 100%;
            .span{
                padding: 5px;
                background: rgb(233, 233, 233);
                border-radius: 5px;;
                display: inline-block;
                margin:4px 10px;
            }
        }
    }
    .topsearchNav{
        background-color: #F2F2F2;
        .icon-icon-test3{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-icon-test1{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
    }
</style>