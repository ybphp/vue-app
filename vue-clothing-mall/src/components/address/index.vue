<template>
    <div>
        
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />

        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
             chosenAddressId: '1',
              list: [
                
              ],
            };
        },
        methods: {
            onAdd() {
              this.$router.push("/addressAdd")
            },
            onEdit(item) {
              this.$router.push({path:"/addressEdit",query:{id:item.id}})
            },
            onSelect(item){//选择地址
                this.$store.commit("address/editId",item.id);
                this.$router.go(-1)
            }
        },
        created(){
            this.list = this.$store.state.address.lists || [];
            // 获取id值
            try {
                this.chosenAddressId = this.list.find(item=>item.isDefault).id
            } catch (error) {
                Toast('没有地址数据');
            }
        },
       
        // 组件内路由守卫
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            if(to.path == "/my"){
                this.$store.state.vanTabbar = true; 
            }
            next();
        }
    };
</script>