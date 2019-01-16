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
          <router-link  v-for="(item,index) in listdata" :key='index' class="homeList flexBetween"  :to="{path:item.router,query: {name: 1}}">
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
                    {'name':'历史申请记录',icon:require('../assets/images/liebiao.png'),router: '/applayList'}],
                phone: ''
            }
        },
        created(){
            window.onload = function() {
                document.addEventListener('message', function(msg) {
                    var data = JSON.parse(msg.data)
                    if(data.hasOwnProperty('phoneNum')){
                        localStorage.setItem('phone',data.phoneNum)
                    }
                });
            }
        },
        mounted(){
            if(localStorage.getItem('phone')){
                this.phone = localStorage.getItem('phone');
            }
        },
        methods:{
            go(){
                window.location.href = 'https://www.baidu.com'
                // window.open('https://www.baidu.com');
            },
            goRouter(router){
                // window.location.href = 'https://www.baidu.com'
                // alert(router)
                    let routeData = this.$router.resolve({
                        path: router });
                    window.open(routeData.href, '_blank');
              // console.log(document.location.host+'/entranceGuard'+router)
              //   window.open(document.location.host+'/entranceGuard'+router)
            }
        }
    }
</script>
