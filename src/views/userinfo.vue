<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .userInfo{
        background: #f4f4f4;
        padding: 8px;
        border-radius: 5px;
        .infoBox{
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
            .carBox{
                width: 100%;
                tr td{
                    border: 1px solid #bbb;
                    padding: 2px 10px;
                    text-align: center;
                }
                tr td:nth-last-child(1){
                    color: #f00;
                    cursor: pointer;
                }
            }
            .listName{
                position: relative;
                width: 59%;
                .ulList{
                    position: absolute;
                    right: 0;
                    text-align: center;
                    background: #fff;
                    width: 100px;
                    height: 160px;
                    overflow-y: scroll;
                    border: 1px solid #f4f4f4;
                    border-top: 0;
                    li:hover{
                        background: #bbb;
                    }
                }
            }
            .inputText{
                color: #929292;
                font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
                /*border: 1px solid #bbb;*/
                width: 59%;
                /*border-radius: 5px;*/
                text-indent: 4px;
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
            <select class="selectBox" v-model="userinfo.company">
                <option value="">请选择受访单位</option>
                <option v-for="(item,index) in companyList" :key='index' :value="item.code">{{item.name}}</option>
            </select>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访单位部门 :</span>
            </div>
            <select class="selectBox" v-model="userinfo.department">
                <option value="">请选择受访部门</option>
                <option v-for="(item,index) in deptList" :key='index' :value="item.code">{{item.name}}</option>
            </select>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">受访人 :</span>
            </div>
            <div class="listName">
                <input class='inputText'style="width: 100%;" type="text" v-model="userinfo.respondent" placeholder="请输入受访人姓名(全名)"/>
                <div class="ulList" style="display: none;" v-if="acceptNameList.length != 0">
                    <ul>
                        <li v-for="item in acceptNameList" @click="getName(item.name)">{{item.name}}</li>
                    </ul>
                </div>

            </div>

        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft">
                <span class="lableTextIcon">*</span>
                <span class="lableText">申请人单位 :</span>
            </div>
            <input class='inputText' type="text" v-model="userinfo.applicantCompaney" placeholder="请输入申请人单位"/>
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
            <input class='inputText' type="text" @blur='validateId' v-model="userinfo.idCard" placeholder="请输入身份证号"/>
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
                <input class='inputText' type="text" style="text-align: left;"  v-model="carNUm" placeholder="请输入车牌号">
                <span class="addInfo" @click="addlicense">添加</span>
            </div>
        </div>
        <div class="infoBox flexBetween" v-if="isSelect && carData.length !=0">
            <div class="inputLeft"></div>
            <div style="min-width: 70%;">
                <table class="carBox">
                    <tr v-for="(item,index) in carData">
                        <td>{{item}}</td>
                        <td @click="deleteItem(item,index)">删除</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="infoBox flexBetween">

            <div class="inputLeft">
               陪同人信息 :</div>
            <div style="min-width: 70%;">
                <input class='inputText' style="text-align: left;" v-model="companyName" type="text" placeholder="请输入陪同人姓名">
                <!--<span class="addInfo"></span>-->
            </div>
        </div>
        <div class="infoBox flexBetween">
            <div class="inputLeft"></div>
            <div style="min-width: 70%;">
                <input class='inputText' type="text" v-model="companyCard" placeholder="请输入陪同人身份证号">
                <span class="addInfo" @click="addName">添加</span>
            </div>
        </div>
        <div class="infoBox flexBetween" v-if=" userinfo.entourageList.length !=0">
            <div class="inputLeft"></div>
            <div style="min-width: 90%;">
                <table class="carBox">
                    <tr v-for="(item,index) in userinfo.entourageList">
                        <td>{{item.name}}</td>
                        <td>{{item.cardNum}}</td>
                        <td @click="deletePerson(item,index)">删除</td>
                    </tr>
                </table>
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
        <div class="submitInfo" @click="submit">提交并进行活体检测</div>
    </div>
</template>

<script>
    import { DatetimePicker,Toast } from 'mint-ui';
    import Patterns from '../common/patternRules'
    import axios from 'axios'
    export default {
        name: "userinfo",
        data(){
            return{
                companyCard: '',
                companyName: '',
                carNUm: '',
                carData: ["京1234"],
                isSelect: true,
                isSelectOne: false,
                beginTime: new Date(),
                pickerVisible: '',
                acceptNameList: [],
                companyList:[],
                deptList: [],
                userinfo:{
                    company: '',
                    department: '',
                    respondent: '',
                    applicantCompaney: '',
                    applicant: '',
                    idCard: '',
                    reason: '',
                    startTime: '',
                    endTime: '',
                    isCar: '1',
                    licenseNum: '',
                    chapterUrl: '',
                    entourageList:[{name:'哈哈哈哈',cardNum:'411424199001125469'}]
                },
                phone: ''
            }
        },
        created(){
            this.getCompany();
            if(localStorage.getItem('phone')){
                this.phone = localStorage.getItem('phone');
            }
        },
        destroyed() {
            var that = this;
            document.removeEventListener('message', function(msg) {//获取客户端人脸识别数据
                if(msg.data){
                    that.userinfo.chapterUrl = msg.data;
                    localStorage.setItem("url",that.userinfo.chapterUrl)
                }else{
                    Toast("检测失败，请重新检测")
                }
            },true)
        },
        mounted(){
            var that = this;
            document.addEventListener('message', function(msg) {//获取客户端人脸识别数据
                var data = JSON.parse(msg.data)
                if(data){
                    if(data.hasOwnProperty('imageData')){
                        that.userinfo.chapterUrl = msg.data;
                        localStorage.setItem("url",that.userinfo.chapterUrl)
                    }
                }else{
                    Toast("检测失败，请重新检测")
                }
            });
        },
        watch:{
            'userinfo.reason': function(){
                if(this.userinfo.reason.length>30){
                    this.userinfo.reason = this.userinfo.reason.substring(0,30)
                }
            },
            'userinfo.company': function(){
                if(this.userinfo.company){
                    for(var item of this.companyList){
                        if(item.code === this.userinfo.company){
                            this.deptList = item.deptList;
                        }
                    }
                }else{
                    this.deptList = [];
                    this.userinfo.department = '';
                }
            },
            'userinfo.respondent': function(){//监听输入的受访人姓名
                if(this.userinfo.company == ''){
                    this.userinfo.respondent = '';
                    Toast("请选择受访单位");
                    return;
                }
                if(this.userinfo.department == ''){
                    this.userinfo.respondent = '';
                    Toast("请选择受访单位");
                    return;
                }
                if(this.userinfo.respondent){
                    if(this.userinfo.respondent.length>10){
                        this.userinfo.respondent = this.userinfo.respondent.substring(0,10)
                    }
                    this.getNameList()
                }
            },
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
            getPersonInfo(){

            },
            deletePerson(item,index){
                this.userinfo.entourageList.splice(index,1);
            },
            deleteItem(item,index){
                this.carData.splice(index,1)
            },
            addlicense(){
                if(this.userinfo.carData.length ==5){
                    Toast(" 车辆最多可添加5辆");
                    return;
                }
                this.carData.push(this.carNUm);
                this.carNUm = '';
            },
            addName(){
                if(this.userinfo.entourageList.length ==5){
                    Toast("陪同人最多可添加5人");
                    return;
                }
                if(this.companyName == ''){
                    Toast("请输入陪同人姓名");
                    return;
                }
                if(this.companyName.length > 10){
                    this.companyName = this.companyName.substring(0,10);

                }
                if(this.companyCard){
                    if(!(Patterns.idNum.test(this.companyCard))){
                        Toast('请输入正确的身份证号');
                        return;
                    }
                }
                if(this.companyCard == ''){
                    Toast('请输入陪同人身份证号');
                     return;
                }
                var obj = {
                    name: this.companyName,
                    cardNum:this.companyCard
                }
                this.userinfo.entourageList.push(obj)
                this.companyName = '';
                this.companyCard = ''
            },
            validateId(){
                if(!(Patterns.idNum.test(this.userinfo.idCard))){
                    Toast('请输入正确身份证号')
                }
            },
            submit(){
                window.postMessage('success');
                return;
                if(this.userinfo.department == ''){
                    Toast("请选择受访单位");
                    return
                }
                if(this.userinfo.department == ''){
                    Toast("请选择受访部门");
                    return
                }
                if(this.userinfo.respondent == ''){
                    Toast("请输入受访人");
                    return
                }
                if(this.userinfo.applicantCompaney == ''){
                    Toast("请输入申请单位");
                    return
                }
                if(this.userinfo.applicant == ''){
                    Toast("请输入申请人姓名");
                    return
                }
                if(this.userinfo.idCard == ''){
                    Toast("请输入身份证号");
                    return
                }
                if(!(Patterns.idNum.test(this.userinfo.idCard))){
                    Toast('请输入正确身份证号')
                    return
                }
                if(this.userinfo.reason == ''){
                    Toast("请输入到访事由");
                    return
                }
                if(this.userinfo.startTime == ''){
                    Toast("请输入到访时间");
                    return
                }
                if(this.userinfo.endTime == ''){
                    Toast("请输入结束时间");
                    return
                }
                if(this.userinfo.isCar == '1'){
                    if(this.carData.length == 0){
                        Toast("请输入车牌号");
                        return
                    }
                }
                if(this.isSelect){
                    this.userinfo.isCar = '1';
                }
                if(this.isSelectOne){
                    this.userinfo.isCar = '2';
                }
                this.userinfo.licenseNum = this.carData.join(",");
                var submitData = {
                    phoneNum: this.phone,
                    companyCode: this.userinfo.company,
                    deptCode: this.userinfo.department,
                    acceptName:this.userinfo.respondent,
                    name: this.userinfo.applicant,
                    cardNum: this.userinfo.idCard,
                    companyName: this.userinfo.applicantCompaney,
                    reason: this.userinfo.reason,
                    startTime: this.userinfo.startTime,
                    endTime: this.userinfo.endTime,
                    carFlag: this.userinfo.isCar,
                    licenseNum: this.userinfo.licenseNum,
                    photoData: this.userinfo.photoData,//待确认
                    entourageList: this.userinfo.entourageList
                }
            },
            getNameList(){
                this.acceptNameList = [{
                    "name": "张三"
                },{
                    "name": "玩笑的发"
                },{
                        "name": "李四"
                    }];
                $(".ulList").css({"display":'block'})
                return;
                axios.post(this.ajaxUrl + "/accessforh5/checkInfo", {
                    companyCode: this.userinfo.company,
                    deptCode: this.userinfo.department,
                    acceptName: this.userinfo.respondent
                })
                    .then(response => {
                        console.log(response);
                        const {data} = response;
                        const {result} = data;
                        const {rescode, resdes} = result;
                        if (rescode != 200) {
                            Toast(resdes);
                        } else {

                        }
                    })
                    .catch(err => {
                        Toast(err);
                    });
            },
            getCompany(){
                var obj = {
                    "rescode": "200",
                    "resdes": "成功",
                    "companyList": [{
                        "code": "001",
                        "name": "北京首都国际机场公安局",
                        "deptList": [{
                            "code": "001001",
                            "name": "指挥中心"
                        }, {
                            "code": "001002",
                            "name": "空防处"
                        }, {
                            "code": "001003",
                            "name": "消防处"
                        }]
                    }, {
                        "code": "002",
                        "name": "北京中车宝联",
                        "deptList": [{
                            "code": "002001",
                            "name": "产品部"
                        }, {
                            "code": "002002",
                            "name": "商务部"
                        }]
                    }]
                }
                console.log(obj)
                this.companyList = obj.companyList;
                return;
                axios.post(this.ajaxUrl + "/accessforh5/checkInfo", {
                    phoneNum: this.phone
                    })
                    .then(response => {
                        console.log(response);
                        const {data} = response;
                        const {result} = data;
                        const {rescode, resdes} = result;
                        if (rescode != 200) {
                            Toast(resdes);
                        } else {

                        }
                    })
                    .catch(err => {
                        Toast(err);
                    });
            },
            getName(name){
                $(".ulList").css({"display":'none'})
                this.userinfo.respondent = name;
                this.acceptNameList = [];
            },
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

