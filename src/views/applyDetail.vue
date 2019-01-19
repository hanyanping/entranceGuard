<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 75;
  .applyDetail {
    background: #f4f4f4;
    padding: 8px;
    min-height: 100vh;
    .detail {
      background: #fff;
      border-radius: 5px;
      padding: 8px;
      font-size: 14px;
      color: #232323;
      .infoBox {
        .shoufangInfo {
          padding: 8px 0;
        }
        .peitong {
          display: flex;
          position: relative;
          padding: 5px 0;
          .personInfo {
            margin-left: 4px;
            p {
              padding-bottom: 5px;
            }
          }
          .reApplay {
            background: #0076FF;
            color: #fff;
            padding: 8px 16px;
            border-radius: 5px;
          }
        }
      }
      .imgInfo {
        background: url('../assets/images/icon.jpg') no-repeat center center;
        background-size: cover;
        height: 120px;
        width: 90px;

      }
    }
  }

</style>
<template>
  <div class="applyDetail">
    <div class="detail">
      <div class="infoTop flexBetween">
        <div class="infoBox">
          <p class="shoufangInfo">受访单位 : {{userInfo.acceptCompanyName}}</p>
          <p class="shoufangInfo">受访部门 : {{userInfo.deptName}}</p>
          <p class="shoufangInfo">受访人 : {{userInfo.acceptName}}</p>
          <p class="shoufangInfo">受访手机号 : {{userInfo.acceptPhone}}</p>
          <p class="shoufangInfo">申请人姓名 : {{userInfo.name}}</p>
        </div>
        <div class="imgInfo" :style="{backgroundImage: 'url(' + (userInfo.photoUrl) + ')', backgroundSize:'cover'}">
        </div>
      </div>
      <div class="infoBox">
        <p class="shoufangInfo">身份证号 : {{userInfo.cardNum}}</p>
        <p class="shoufangInfo">到访事由 : {{userInfo.reason}}</p>
        <p class="shoufangInfo">到访时间 : {{userInfo.startTime}}</p>
        <p class="shoufangInfo">结束时间 : {{userInfo.endTime}}</p>
        <p class="shoufangInfo" v-if="userInfo.carFlag == 1">是否携带车辆 : {{userInfo.licenseNum}}</p>
        <p class="shoufangInfo" v-if="userInfo.carFlag == 2">是否携带车辆 : 否</p>
        <div class='peitong' v-if="entourageList.length != 0">
          <span>陪同人 : </span>
          <div class="personInfo">
            <p v-for="item in userInfo.entourageList"> {{item.name}} {{item.cardNum}}</p>
          </div>
        </div>
        <div class='peitong flexBetween'>
          <span v-if="userInfo.auditStatus == 1">状态 : 待审核</span>
          <span v-if="userInfo.auditStatus == 2">状态 : 审核不通过</span>
          <span v-if="userInfo.auditStatus == 3">状态 : 审核通过</span>
          <div class="reApplay" v-if="userInfo.auditStatus == 2" @click="goInfo">
            重新申请
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Loadmore, Toast} from 'mint-ui';
  import axios from 'axios'

  export default {
    name: "applyDetail",
    data() {
      return {
        userInfo: {},
        entourageList: ''
      }
    },
    created() {

    },
    mounted() {
      this.getDataDetail()
    },
    methods: {
      goInfo(){
        this.$router.push({'path':'/userinfo'})
      },
      getDataDetail() {
        console.log(this.$route.query.applyNum)
        var data = {
          applyNum: this.$route.query.applyNum
        }
        axios.post(this.ajaxUrl + "getApplyInfo", data)
          .then(response => {
            if (response.data.rescode == 200) {
              console.log(response)
              this.userInfo = response.data;
              this.entourageList = this.userInfo.entourageList;
            } else {
              Toast(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },

    }
  }
</script>

