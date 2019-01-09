<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .auditInformation{
        background: #fff;
        .visitorInfo{
            padding: 20px;
            color: #232323;
            font-size: 15px;
            .infoTitle{
                height: 16px;
                line-height: 16px;
                border-left: 2px solid #0076FF;
                padding-left: 6px;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 10px;
            }
            .flex{
                display: flex;
            }
            .infoBox{
                padding-left: 6px;
                .inputbox{
                    display: flex;
                    margin-left: 6px;
                    .selctOwn {
                        margin-left: 10px;
                        .yuanImg {
                            display: inline-block;
                            vertical-align: middle;
                            height: 20px;
                            width: 20px;
                        }
                        .yuanText {
                            display: inline-block;
                            vertical-align: middle;
                            font-size: 15px;
                            color: #232323;
                            padding-left: 6px;
                        }
                    }

                }
                .shoufangInfo{
                    padding: 5px 0;
                }
                .peitong{
                    display: flex;
                    position: relative;
                    padding: 5px 0;
                    .personInfo{
                        margin-left: 4px;
                        p{
                            padding-bottom: 10px;
                        }
                        .endTime{
                            border: 1px solid #bbb;
                            padding-top: 5px;
                            padding-left: 4px;
                        }
                    }
                   .personImg{
                       margin-left: 10px;
                       background: url('../assets/images/geren.png') no-repeat center center;
                       background-size: cover;
                       height: 120px;
                       width: 90px;
                   }
                }
            }
        }
    }
</style>
<template>
    <div class="auditInformation">
        <div class="visitorInfo">
            <mt-datetime-picker
                    ref="endpicker"
                    v-model="pickerVisible"
                    type="date"
                    :startDate="beginTime"
                    year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                    @confirm="handleConfirmend">
            </mt-datetime-picker>
            <div class="infoTitle">
                访客基本信息
            </div>
            <div class="infoBox">
                <p class="shoufangInfo">姓名 : 站三里</p>
                <p class="shoufangInfo">身份证号 : 1345456556513454565565</p>
                <p class="shoufangInfo">受访单位 : 北京中车科技有限责任公司</p>
                <p class="shoufangInfo">受访部门 : 技术部门看看</p>
                <p class="shoufangInfo">受访人 : 北京中车</p>
                <p class="shoufangInfo">到访事由 : 技术部门看看</p>
                <p class="shoufangInfo">到访时间 : 北京中车</p>
                <div class='peitong'>
                    <span>结束时间 : </span>
                    <div class="personInfo">
                        <p> 张三李四 446726664444444445</p>
                        <p class="endTime" @click="openPicker('endpicker')" v-if="endTime">{{endTime}}</p>
                        <p class="endTime" @click="openPicker('endpicker')" v-if="!endTime">请选择结束时间(非必填)</p>
                    </div>
                </div>
                <p class="shoufangInfo">是否携带车辆 : 京344444</p>
                <div class='peitong'>
                    <span>认证照片 : </span>
                    <div class="personImg">

                    </div>
                </div>
            </div>
            <div class="infoTitle">
                审核
            </div>
            <div class="infoBox flex">
                <div style="line-height: 22px;">审核结果 :</div>
                <div class="inputbox">
                    <div class='selctOwn'>
                        <img class='yuanImg' @click='select' v-if='isSelect' src='../assets/images/selectyuan.png'>
                        <img class='yuanImg' @click='select' v-if='!isSelect' src='../assets/images/yuan.png'>
                        <span class='yuanText'>通过</span></div>
                    <div class='selctOwn'>
                        <img class='yuanImg' @click='selectOne' v-if='isSelectOne'
                             src='../assets/images/selectyuan.png'>
                        <img class='yuanImg' @click='selectOne' v-if='!isSelectOne' src='../assets/images/yuan.png'>
                        <span class='yuanText'>不通过</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "auditInformation",
        data(){
            return{
                pickerVisible: '',
                beginTime: '',
                endTime: '',
                isSelect: true,
                isSelectOne: false
            }
        },
        methods:{
            select() {
                if (!this.isSelect) {
                    this.isSelect = !this.isSelect;
                    this.isSelectOne = false;
                }
            },
            selectOne() {
                if (!this.isSelectOne) {
                    this.isSelectOne = !this.isSelectOne;
                    this.isSelect = false;
                }
            },
            handleConfirmend(value){

            },
            openPicker(picker) {
                document.body.style.overflow = 'auto'; //解决vue弹出层touch穿透，主页面跟随抖动问题
                this.$refs[picker].open();
            },
        }
    }
</script>

