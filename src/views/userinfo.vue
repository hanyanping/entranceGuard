<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .userInfo{
        background: #f4f4f4;
        padding: 8px;
        border-radius: 5px;
        .infoBox{
             height: 40px;
            line-height: 40px;
            background: #fff;
            font-size: 14px;
            padding: 10px;
            border-bottom:1px solid #eee;
            .inputLeft{
                /*width: 35%;*/
                .lableTextIcon{
                    color: #f00;

                }
                .lableText{
                    display: inline-block;
                }
            }
            .inputText{
                color: #929292;
                font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
                /*border: 1px solid #bbb;*/
                width: 59%;
                /*border-radius: 5px;*/
                text-indent: 4px;
                padding: 0 6px;
                text-align: right;
            }
            .addInfo{
                padding: 8px 12px;
                color: #fff;
                background: #0076FF;
                border-radius: 5px;
                font-size: 12px;
            }
            .selectBox{
                color: #929292;
                font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
                /*border: 1px solid #bbb;*/
                width: 62%;
                padding: 0 6px;
                /*border-radius: 5px;*/
                text-indent: 4px;
            }
            .inputbox{
                width: 49%;
                .selctOwn {
                    .yuanImg {
                        display: inline-block;
                        vertical-align: middle;
                        height: 22px;
                        width: 22px;
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
        }
        .submitInfo{
            margin: 20px auto;
            text-align: center;
            background: #0076FF;
            color: #fff;
            border-radius: 20px;
            width: 160px;
            height: 45px;
            line-height: 45px;

        }
    }
    .mint-datetime{
        /*overflow-x: hidden;*/
    }
</style>
<template>
    <div class="userInfo">
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访单位 :</span>
            </div>
            <select class="selectBox">
                <option value="">请选择受访单位</option>
                <option>r444</option>
            </select>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访单位部门 :</span>
            </div>
            <select class="selectBox">
                <option value="">请选择受访部门</option>
            </select>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访人 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.respondent" placeholder="请输入受访人姓名(全名)"/>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访人手机号 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.phone" placeholder="请输入受访人手机号"/>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">申请人姓名 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.applicant" placeholder="请输入申请人姓名"/>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">身份证号 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.idCard" placeholder="请输入身份证号"/>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">到访事由 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.reason" placeholder="请输入到访事由"/>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText"  @click="openPicker('startpicker')" >到访时间:</span>
            </div>
            <div @click="openPicker('startpicker')" class='inputText' v-if="userinfo.startTime">
               {{userinfo.startTime}}
            </div>
            <div @click="openPicker('startpicker')" class='inputText' v-if="!userinfo.startTime">
               请选择到访时间
            </div>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">结束时间 :</span>
            </div>
            <div @click="openPicker('endpicker')" class='inputText' v-if="userinfo.endTime">
                {{userinfo.endTime}}
            </div>
            <div @click="openPicker('endpicker')" class='inputText' v-if="!userinfo.endTime">
                请选择结束时间
            </div>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">是否有车辆需要进场 :</span>
            </div>
            <div class="flexAround inputbox">
                <div class='selctOwn'>
                    <img class='yuanImg' @click='select' v-if='isSelect' src='../assets/images/selectyuan.png'>
                    <img class='yuanImg' @click='select' v-if='!isSelect' src='../assets/images/yuan.png'>
                    <span class='yuanText'>是</span></div>
                <div class='selctOwn'>
                    <img class='yuanImg' @click='selectOne' v-if='isSelectOne'
                         src='../assets/images/selectyuan.png'>
                    <img class='yuanImg' @click='selectOne' v-if='!isSelectOne' src='../assets/images/yuan.png'>
                    <span class='yuanText'>否</span>
                </div>
            </div>
        </div>
        <div class="infoBox flexBetween" v-if="isSelect">
            <div class="inputLeft"></div>
            <div style="min-width: 70%;">
                <input class='inputText' type="text" style="text-align: left;"   placeholder="请输入车牌号">
            </div>
        </div>
        <div class="infoBox flexBetween">

            <div class="inputLeft">
               陪同人信息 :</div>
            <div style="min-width: 70%;">
                <input class='inputText' style="text-align: left;" type="text" placeholder="请输入陪同人姓名">
                <!--<span class="addInfo"></span>-->
            </div>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft"></div>
            <div style="min-width: 70%;">
                <input class='inputText' type="text" placeholder="请输入陪同人身份证号">
                <span class="addInfo">添加</span>
            </div>
        </div>
        <mt-datetime-picker
                ref="startpicker"
                v-model="pickerVisible"
                type="date"
                :startDate="beginTime"
                year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                @confirm="handleConfirm">
        </mt-datetime-picker>
        <mt-datetime-picker
                ref="endpicker"
                v-model="pickerVisible"
                type="date"
                :startDate="beginTime"
                year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
                @confirm="handleConfirmend">
        </mt-datetime-picker>
        <div class="submitInfo">提交并进行活体检测</div>
    </div>
</template>

<script>
    import { DatetimePicker,Toast } from 'mint-ui';
    export default {
        name: "userinfo",
        data(){
            return{
                isSelect: true,
                isSelectOne: false,
                beginTime: new Date(),
                pickerVisible: '',
                userinfo:{
                    company: '',
                    department: '',
                    respondent: '',
                    phone: '',
                    applicant: '',
                    idCard: '',
                    reason: '',
                    startTime: '',
                    endTime: '',
                    isCar: '1',
                    companions: []
                }
            }
        },
        watch:{
            'userinfo.startTime':function(){
                var startStr = new Date(this.userinfo.startTime).getTime();
                if(this.userinfo.endTime){
                    var endStr = new Date(this.userinfo.endTime).getTime();
                    console.log(startStr,endStr)
                    if(startStr>endStr){
                        Toast('结束时间不能小于到访时间')
                        this.userinfo.startTime = ''
                    }
                }
            },
            'userinfo.endTime':function(){
                if(this.userinfo.startTime){
                    var startStr = new Date(this.userinfo.startTime).getTime();
                    var endStr = new Date(this.userinfo.endTime).getTime();
                    if(startStr>endStr){
                        Toast('结束时间不能小于到访时间');
                        this.userinfo.endTime = ''
                    }
                }
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
            openPicker(picker) {
                document.body.style.overflow = 'auto'; //解决vue弹出层touch穿透，主页面跟随抖动问题
                this.$refs[picker].open();
            },
            timetrans(d) {
                var  getMonth = '', getDate = '';
                getMonth = d.getMonth()+1 < 9 ? '0' + (d.getMonth()+1) : (d.getMonth()+1)
                getDate = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
                var newTime = d.getFullYear() + '-' + getMonth + '-' + getDate;
                return newTime
            },
            handleConfirm(value){
                document.body.style.overflow = 'visible'; //解决vue弹出层touch穿透
                var d = new Date(value);
                this.userinfo.startTime = this.timetrans(d)
            },
            handleConfirmend(value){
                var d = new Date(value);
                this.userinfo.endTime = this.timetrans(d);
            }
        }
    }
</script>

