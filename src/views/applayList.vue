<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .listBox {
        background: #fff;
        padding: 0 16px;
        margin: 12px 0;
        .listTop {
            padding: 10px 0;
            border-bottom: 1px solid #f4f4f4;
            font-weight: 600;
            color: #232323;
            font-size: 15px;
            .applyStatus {
            }
            .nopass {
                color: #f00;
            }
            .already {
                color: #bbb;
            }
            .origin {
                color: #FF7F35;
            }
            .green {
                color: #2FB86C;
            }
            .blue {
                color: #3186DB;
            }
        }
        .listMiddle {
            font-size: 15px;
            padding: 16px 0;
            .flexLeft {
                display: flex; // height:60px;
                .applayIcon {
                    vertical-align: middle;
                    height: 47px;
                    width: 47px;
                    padding-right: 6px;
                }
                .info {
                    line-height: 22px;
                    font-size: 14px;
                    color: #696969;
                    .infoText{
                        padding: 5px 0;
                    }
                }
            }
            .flexRight {
                /*line-height: 60px;*/
                position: relative;
                .godetail {
                    height: 18px;
                    width: 12px;
                    display: inline-block;
                    vertical-align: middle;
                    position: absolute;
                    bottom: 5px;
                    right: 0;
                }
                .goSub {
                    position: absolute;
                    display: inline-block;
                    height: 30px;
                    width: 70px;
                    line-height: 30px;
                    text-align: center;
                    right: 0;
                    background: #096FD4;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 14px;
                    top: 0;
                }
            }
        }
    }
</style>
<template>
    <div style="background: #f4f4f4;min-height:100vh;">
        <div class="scroll" v-if="noData">
            <!--<mt-loadmore :bottom-method="loadBottom" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmore" :bottom-all-loaded="allLoaded">-->
                <div class="listBox" v-for="(item,index) in list" :key="index" @click='goDetail(item.applyNum)'>
                    <div class="flexBetween listTop">
                        <span> {{item.applyTime}}</span>
                        <span v-if="item.auditStatus == '1'" class="applyStatus origin">待审核</span>
                        <span v-if="item.auditStatus == '2'" class="applyStatus nopass">审核不通过</span>
                        <span v-if="item.auditStatus == '3'" class="already">审核通过</span>
                    </div>
                    <div class="listMiddle flexBetween"
                         @click='goDetail(item.applyNum)'>
                        <div class="flexLeft">
                            <!--<img class='applayIcon godetail' src="../assets/images/geren.png">-->
                            <div class='info'>
                                <div class="flexBetween infoText">
                                    <p>姓名：{{item.name}} </p>
                                    <span >性别： {{item.sex}}</span>
                                </div>
                                <p class="idCard infoText" >身份证号：{{item.cardNum}}</p>
                                <p class="companyName infoText">单位名称：{{item.companyName}}
                                </p>
                            </div>
                        </div>
                        <div class="flexRight">
                            <img class='godetail' src="../assets/images/right.png">
                        </div>
                    </div>
                </div>
            <!--</mt-loadmore>-->
        </div>
        <div v-else style="margin: 0 auto;padding-top: 100px;text-align: center;color: #f00;font-weight: 600;font-size: 18px;">
            您还没有申请记录
        </div>
    </div>
</template>

<script>
    import {Loadmore, Toast} from 'mint-ui';
    // import moment from 'moment/moment';
    import axios from 'axios'

    export default {
        name: "historyList",
        data() {
            return {
                allLoaded: false,
                list: [],
                pageSize: 10,
                pageNum: 1,
                userId: '',
                loadMore: true,
                noData: true,
                phone: '17666143833'
            }
        },
        created() {
          if(localStorage.getItem('phone')){
            this.phone = localStorage.getItem('phone');
          }
        },
        mounted() {
            this.getDataList()
        },
        methods: {
            goDetail(applyNum) {
                 this.$router.push({
                     path: '/applyDetail',
                      query: {applyNum: applyNum}
                 })
            },
            getDataList() {
                var data = {
                   phoneNum: this.phone
                }
                axios.post(this.ajaxUrl + "getApplyList", data)
                    .then(response => {
                        if (response.data.rescode == 200) {
                          console.log(response)
                          var listdata = response.data.applyList;
                            if (response.data.applyList.length != 0) {
                                this.noData = true;
                              this.list = listdata;
                            }
                            if (listdata.length == 0 ) {
                                this.loadMore = false;
                                this.noData = false;
                            }
                        }else{
                          this.noData = false;
                          Toast(response.data.resdes)
                        }
                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            loadBottom() {
                this.pageNum++;
                if (this.loadMore) {
                    this.getDataList()
                } else {
                    Toast('没有更多数据')

                }
                //  this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            }
        }
    }
</script>


