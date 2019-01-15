<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .homepage{
        width:100%;
        height: 100vh;
        .homeList{
            background: #fff;
            margin-bottom: 20px;
            padding: 15px 20px;
            img{
                height: 50px;
                width:50px;
                display: inline-block;
                vertical-align: middle;
            }
            span{
                display: inline-block;
                vertical-align: middle;
                line-height: 50px;
                font-size: 16px;
                color: #232323;
            }
        }
    }
</style>
<template>
    <div class="homepage">
          <router-link :to='item.router'v-for="(item,index) in listdata" :key='index' class="homeList flexBetween">
            <span>{{item.name}}</span>
            <img :src="item.icon">
          </router-link>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                listdata:[
                    {'name':'预约申请',icon:require('../assets/images/shenqing.png'),router: '/userinfo'},
                    {'name':'历史申请记录',icon:require('../assets/images/liebiao.png'),router: '/applayList'}]
            }
        },
        watch(){

        },
        mounted(){
            window.onload = function() {
                document.addEventListener('message', function(msg) {
                    var msg = JSON.stringify(msg)
                    alert(msg)
                    alert(msg.phoneNum)
                });
            }
        },
        methods:{
            goRouter(router){
              console.log(document.location.host)
                 window.location.href= document.location.host+'/entranceGuard'+router
//                this.$router.push({path:router})
            }
        }
    }
</script>
