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
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待审核</mt-tab-item>
            <mt-tab-item id="2">审核通过</mt-tab-item>
            <mt-tab-item id="3">审核不通过</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="scroll" v-if="noWaitData">
                    <mt-loadmore :bottom-method="loadBottomwait" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmorewait"
                                 :bottom-all-loaded="allLoadedwait">
                        <div class="listBox" v-for="(item, index) in list" :key="index" @click='goDetail'>
                            <div class="flexBetween listTop">
                                <span>申请时间 : {{item.applyTime}}</span>
                                <span v-if="item.status == '待审核'" class="applyStatus origin">待审核</span>
                                <span v-if="item.status == '待预约'" class="applyStatus green">待预约</span>
                                <span v-if="item.status == '预约成功'" class="applyStatus blue">预约成功</span>
                                <span v-if="item.status == '审核不通过'" class="applyStatus nopass">审核不通过</span>
                                <span v-if="item.status == '审核失败'" class="applyStatus nopass">审核失败</span>
                                <span v-if="item.status == '已签发'" class="already">已签发</span>
                                <span v-if="item.status == '身份待验证'" class="origin">身份待验证</span>
                                <span v-if="item.status == '身份验证失败'" class="applyStatus nopass">身份验证失败</span>
                            </div>
                            <div class="listMiddle flexBetween"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon godetail' src="../assets/images/geren.png">-->
                                    <div class='info'>
                                        <div class="flexBetween infoText">
                                            <p>姓名：个人 </p>
                                            <span >性别： 男</span>
                                        </div>
                                        <p class="idCard infoText" >身份证号：411424233432345676</p>
                                        <p class="companyName infoText">单位名称：北京中车科技有限责任公司
                                            <span>{{item.code}}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="flexRight">
                                    <img class='godetail' src="../assets/images/right.png">
                                </div>
                            </div>
                            <div class="listMiddle flexBetween" v-if="item.type == 2"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon' src="../assets/images/danwei.png">-->
                                    <div class='info'>
                                        <p>所有权：单位</p>
                                        <p>所有人：{{item.name}}</p>
                                        <p>证件号码：{{item.code}}</p>
                                    </div>
                                </div>
                                <div class="flexRight">
                            <span class="goSub" @click.stop='goSubscible(item.applyNo)'
                                  v-if="item.status == '待预约'">立即预约</span>
                                    <span class="goSub" @click.stop='goApply(item.applyNo,item.type)'
                                          v-if="item.status == '审核不通过' || item.status == '审核失败' ">重新申请</span>
                                    <!--<img @click.stop='goSubcode(item.appointmentTime,item.applyNo)' v-if="item.status =='预约成功'"-->
                                    <!--style='height:30px;width:30px;' src='../assets/images/look.png'>-->
                                    <!--<img class='godetail' src="../assets/images/right.png">-->
                                </div>
                            </div>
                        </div>
                    </mt-loadmore>
                </div>
                <div v-else style="margin: 0 auto;padding-top: 100px;text-align: center;color: #f00;font-weight: 600;font-size: 18px;">
                    您还没有申请记录
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="scroll" v-if="nopassData">
                    <mt-loadmore :bottom-method="loadBottompass" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmorepass"
                                 :bottom-all-loaded="allLoadedpass">
                        <div class="listBox" v-for="(item, index) in list" :key="index" @click='goDetail'>
                            <div class="flexBetween listTop">
                                <span>申请时间 : {{item.applyTime}}</span>
                                <span v-if="item.status == '待审核'" class="applyStatus origin">待审核</span>
                                <span v-if="item.status == '待预约'" class="applyStatus green">待预约</span>
                                <span v-if="item.status == '预约成功'" class="applyStatus blue">预约成功</span>
                                <span v-if="item.status == '审核不通过'" class="applyStatus nopass">审核不通过</span>
                                <span v-if="item.status == '审核失败'" class="applyStatus nopass">审核失败</span>
                                <span v-if="item.status == '已签发'" class="already">已签发</span>
                                <span v-if="item.status == '身份待验证'" class="origin">身份待验证</span>
                                <span v-if="item.status == '身份验证失败'" class="applyStatus nopass">身份验证失败</span>
                            </div>
                            <div class="listMiddle flexBetween"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon godetail' src="../assets/images/geren.png">-->
                                    <div class='info'>
                                        <div class="flexBetween infoText">
                                            <p>姓名：个人 </p>
                                            <span >性别： 男</span>
                                        </div>
                                        <p class="idCard infoText" >身份证号：411424233432345676</p>
                                        <p class="companyName infoText">单位名称：北京中车科技有限责任公司
                                            <span>{{item.code}}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="flexRight">
                                    <img class='godetail' src="../assets/images/right.png">
                                </div>
                            </div>
                            <div class="listMiddle flexBetween" v-if="item.type == 2"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon' src="../assets/images/danwei.png">-->
                                    <div class='info'>
                                        <p>所有权：单位</p>
                                        <p>所有人：{{item.name}}</p>
                                        <p>证件号码：{{item.code}}</p>
                                    </div>
                                </div>
                                <div class="flexRight">
                            <span class="goSub" @click.stop='goSubscible(item.applyNo)'
                                  v-if="item.status == '待预约'">立即预约</span>
                                    <span class="goSub" @click.stop='goApply(item.applyNo,item.type)'
                                          v-if="item.status == '审核不通过' || item.status == '审核失败' ">重新申请</span>
                                    <!--<img @click.stop='goSubcode(item.appointmentTime,item.applyNo)' v-if="item.status =='预约成功'"-->
                                    <!--style='height:30px;width:30px;' src='../assets/images/look.png'>-->
                                    <!--<img class='godetail' src="../assets/images/right.png">-->
                                </div>
                            </div>
                        </div>
                    </mt-loadmore>
                </div>
                <div v-else style="margin: 0 auto;padding-top: 100px;text-align: center;color: #f00;font-weight: 600;font-size: 18px;">
                    您还没有申请记录
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="scroll" v-if="noNopassData">
                    <mt-loadmore :bottom-method="loadBottomNopass" bottomPullText="上拉加载更多" :auto-fill="false" ref="loadmoreNopass"
                                 :bottom-all-loaded="allLoadedNopass">
                        <div class="listBox" v-for="(item, index) in list" :key="index" @click='goDetail'>
                            <div class="flexBetween listTop">
                                <span>申请时间 : {{item.applyTime}}</span>
                                <span v-if="item.status == '待审核'" class="applyStatus origin">待审核</span>
                                <span v-if="item.status == '待预约'" class="applyStatus green">待预约</span>
                                <span v-if="item.status == '预约成功'" class="applyStatus blue">预约成功</span>
                                <span v-if="item.status == '审核不通过'" class="applyStatus nopass">审核不通过</span>
                                <span v-if="item.status == '审核失败'" class="applyStatus nopass">审核失败</span>
                                <span v-if="item.status == '已签发'" class="already">已签发</span>
                                <span v-if="item.status == '身份待验证'" class="origin">身份待验证</span>
                                <span v-if="item.status == '身份验证失败'" class="applyStatus nopass">身份验证失败</span>
                            </div>
                            <div class="listMiddle flexBetween"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon godetail' src="../assets/images/geren.png">-->
                                    <div class='info'>
                                        <div class="flexBetween infoText">
                                            <p>姓名：个人 </p>
                                            <span >性别： 男</span>
                                        </div>
                                        <p class="idCard infoText" >身份证号：411424233432345676</p>
                                        <p class="companyName infoText">单位名称：北京中车科技有限责任公司
                                            <span>{{item.code}}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="flexRight">
                                    <img class='godetail' src="../assets/images/right.png">
                                </div>
                            </div>
                            <div class="listMiddle flexBetween" v-if="item.type == 2"
                                 @click='goDetail(item.applyNo,item.type,item.status)'>
                                <div class="flexLeft">
                                    <!--<img class='applayIcon' src="../assets/images/danwei.png">-->
                                    <div class='info'>
                                        <p>所有权：单位</p>
                                        <p>所有人：{{item.name}}</p>
                                        <p>证件号码：{{item.code}}</p>
                                    </div>
                                </div>
                                <div class="flexRight">
                            <span class="goSub" @click.stop='goSubscible(item.applyNo)'
                                  v-if="item.status == '待预约'">立即预约</span>
                                    <span class="goSub" @click.stop='goApply(item.applyNo,item.type)'
                                          v-if="item.status == '审核不通过' || item.status == '审核失败' ">重新申请</span>
                                    <!--<img @click.stop='goSubcode(item.appointmentTime,item.applyNo)' v-if="item.status =='预约成功'"-->
                                    <!--style='height:30px;width:30px;' src='../assets/images/look.png'>-->
                                    <!--<img class='godetail' src="../assets/images/right.png">-->
                                </div>
                            </div>
                        </div>
                    </mt-loadmore>
                </div>
                <div v-else style="margin: 0 auto;padding-top: 100px;text-align: center;color: #f00;font-weight: 600;font-size: 18px;">
                    您还没有申请记录
                </div>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
    import {Loadmore, Toast, Navbar, TabItem} from 'mint-ui';
    // import moment from 'moment/moment';
    import axios from 'axios'

    export default {
        name: "applaypoliceList",
        data() {
            return {
                allLoadedwait: false,
                allLoadedpass: false,
                allLoadedNopass: false,
                list: [{'status':'待预约','name':'ddd','code':'444444444','applyNo':'eeeeeee','type':'3','applyTime':'3333333'}],
                pageSize: 10,
                pageNum: 1,
                userId: '',
                loadMore: true,
                loadMoreNopass: true,
                loadMorepass: true,
                loadMorewait: true,
                noData: true,
                noWaitData: true,
                noNopassData: true,
                nopassData: true,
                selected: "1"
            }
        },
        created() {

        },
        mounted() {
            this.userId = localStorage.getItem('userId');
            // this.userId = '8C4C15479B0343ECBBA90540E059156D'
            this.getDataList()
        },
        methods: {
            goSubcode(appointmentTime, applyNo) {
                localStorage.setItem('appointmentTime', appointmentTime);
                this.$router.push({path: '/subscribecode', query: {apply_no: applyNo, code: 0}})
            },
            goApply(applyNo, applyType) {
                if (applyType == 1) {
                    this.$router.push({path: '/personalDeclaration'})
                } else if (applyType == 2) {
                    this.$router.push({path: '/companyDeclar'})
                }
            },
            goSubscible(applyNo) {
                this.$router.push({path: '/subscribe', query: {applyNo: applyNo}})
            },
            goDetail(applyNo, applyType, applyStatus) {
                this.$router.push({
                    path: '/applyDetail',
                    // query: {applyNo: applyNo, applyType: applyType, applyStatus: applyStatus}
                })
            },
            getDataList() {
                var data = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum,
                    userId: 1,
                    type: 1
                }
                axios.post(this.ajaxUrl + "vehicle/userList", data)
                    .then(response => {
                        console.log(response);
                        var listdata = response.data.list;
                        if (response.data.result.rescode == 200) {
                            if (response.data.list.length != 0) {
                                this.noData = true;
                                for (var i = 0; i < listdata.length; i++) {
                                    listdata[i].applyTime = moment(listdata[i].applyTime).format('YYYY年MM月DD日');
                                    this.list.push(listdata[i])
                                }
                            }
                            if (listdata.length == 0 || listdata.length < this.pageSize) {
                                this.loadMore = false;
                                this.noData = true;
                                if(listdata.length == 0 && this.pageNum == 1){
                                    console.log(this.pageNum)
                                    this.noData = false;
                                }
                            }
                        }

                    }, err => {
                        console.log(err);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            loadBottomwait() {
                this.pageNum++;
                if (this.loadMorewait) {
                    this.getDataList()
                } else {
                    Toast('没有更多数据')

                }
                //  this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmorewait.onBottomLoaded();
            },
            loadBottompass() {
                this.pageNum++;
                if (this.loadMorepass) {
                    this.getDataList()
                } else {
                    Toast('没有更多数据')

                }
                //  this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmorepass.onBottomLoaded();
            },
            loadBottomNopass() {
                this.pageNum++;
                if (this.loadMoreNopass) {
                    this.getDataList()
                } else {
                    Toast('没有更多数据')

                }
                //  this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmoreNopass.onBottomLoaded();
            }
        }
    }
</script>


