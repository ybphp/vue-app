<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="getmy"
        />

        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
            </van-form>
            <h1 class="zc" @click="getregister">前往注册</h1>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
            username: '',
            password: '',
            item:this.$route.query.item
            };
        },
        methods: {
            getmy(){
                // 跳转路由
                this.$router.push("/my");
                this.$store.state.active=3;
            },
            onSubmit(params) {
                let _this = this;
                // 判断是否传参，修改返回路径
                let path =_this.$route.query.path

                this.$axios.get("login",{params}).then((res)=>{
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                // 登陆成功用户名存入vuex
                                _this.$store.state.username = _this.username;
                                // 回调跳转路由
                                if(_this.$route.query.path){
                                    _this.$router.push({path:path,query:{item:_this.item}});
                                }else{
                                    _this.$router.push("/my");
                                }
                            }
                            });
                    }else{
                        Toast("登陆失败");
                    }
                })
            },
            getregister(){
                this.$router.push("/register");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .zc{
        display: inline-block;
        margin-left: 20px;
        color: #1989fa;
        font-size: 15px;
    }
</style>