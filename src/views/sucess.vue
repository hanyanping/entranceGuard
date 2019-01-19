<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 75;
  .success{
    width:100%;
    overflow: hidden;
    text-align: center;
    margin: 30px auto;
    background: #fff;
    .sucessIcon{
      height:100px;
      width:100px;
      text-align: center;
    }
    .sucessText{
      color:#232323;
      font-size:15px;
      width:70%;
      margin: 30px auto;
    }
    .sureButton{
      margin: 30px auto;
      text-align: center;
      background: #0076FF;
      color: #fff;
      border-radius: 20px;
      width: 160px;
      height: 45px;
      line-height: 45px;
    }
  }
</style>
<template>
  <div class="success">
   <img class="sucessIcon" src="../assets/images/applaySucess.png">
    <p class="sucessText">
      恭喜您身份认证通过，等待受访人审核中。
      您可至历史详情查看进度
    </p>
    <div class="sureButton" @click="goHome">确定</div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{

      }
    },
    created(){

    },

    methods:{

      goHome(){
        this.$router.push({'path':'/'})
      }
    }
  }
</script>
