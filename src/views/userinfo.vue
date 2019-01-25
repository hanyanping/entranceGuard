<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .userInfo{
        background: #f4f4f4;
        padding: 8px;
        border-radius: 5px;
      .carcodeBox{
        position: absolute;
        /*padding: 10px;*/
        border:1px solid #bbb;
        background: #fff;
        top: 0px;
        padding-bottom:10px;
        .contentBox{
          text-align: center;
          .province{
            display: inline-block;
            height: 40px;
            width:40px;
            text-align: center;
            line-height:40px;
            border: 1px solid #bbb;
            margin: 10px 6px 10px;
          }
          a:active{
            color: #0076ff;
            border-color: #0076ff;
          }
        }
        .carCode{
          display:flex;
            .mint-navbar{
              width: 80%;
              height:40px;
              .mint-tab-item{
                padding: 15px 0;
              }
            }
          .sure{
            position: absolute;
            right:0;
            display: inline-block;
            width:20%;
            height:40px;
            background: #0076FF;
            line-height: 40px;
            text-align: center;
            color: #fff;
          }
        }
      }
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
                    min-height: 30px;
                    max-height: 160px;
                    overflow-y: scroll;
                    border: 1px solid #f4f4f4;
                    border-top: 0;
                    li:hover{
                        background: #bbb;
                    }
                }
            }
          .deletIcon{
            color:#fff;
            font-size:16px;
            display:inline-block;
            background:#bbb;
            height:20px;
            width: 20px;
            border-radius:50%;
            text-align: center;
            line-height: 18px;
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
    .zhegaiceng {
      background: rgba(0, 0, 0, 0.6);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      .lodingimg {
        position: absolute;
        height: 60px;
        width: 60px;
        left: 0;
        right: 0;
        margin: 30vh auto;
      }

      .zhegaiContent {
        background: #fff;
        position: absolute;
        width: 60%;
        left: 0;
        right: 0;
        top: 12vh;
        margin: 15vh auto;
        padding: 20px 20px 5px;
        border-radius: 10px;
        .chengnuo {
          color: #096FD4;
          font-size: 18px;
          text-align: center;
          margin-bottom: 15px;
          font-weight: 700;
        }
        .chengnuoText {
          color: #232323;
          margin-bottom: 25px;
          font-size: 15px;
          line-height: 24px;
        }
        .selectBox {
          margin-bottom: 20px;
          color: #bbb;
          .selectImg {
            display: inline-block;
            vertical-align: middle;
            height: 20px;
            width: 20px;
            padding-right: 6px;
          }

        }
        .sureBox {
          margin: 20px auto 20px;
          text-align: center;
          .sure {
            background: #096FD4;
            color: #fff;
            padding: 12px 40px;
            font-size: 15px;
            border-radius: 6px;
          }
          .nosure{
            background: #bbb;
            color: #fff;
            padding: 12px 40px;
            font-size: 15px;
            border-radius: 6px;
          }
        }
      }
      .zhegaiContenttwo{
        top: 10px;
      }
      .zhegaiContentone{
        width: 92%;
        overflow-y: scroll;
        top: 10px;
        margin: 20px auto;
        padding: 5px;
        .chengnuoText {
          color: #232323;
          margin-bottom: 10px;
          margin-top: 10px;
          font-size: 15px;
          line-height: 24px;
          text-align: center;
        }
      }
    }

    .zhegaicengone {
      background: rgba(0, 0, 0, 0.4);
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
                <input class='inputText'style="width: 100%;" type="text" v-model="userinfo.respondent" placeholder="请输入受访人姓名(全名)" @blur="checkRespondent"/>
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
      <div class="infoBox flexBetween" v-if="isSelect" id="carSpan">
            <div class="inputLeft"></div>
            <div style="min-width: 70%;">
              <span class='inputText'  style="text-align: left;display:inline-block;min-width: 70%;" v-if="carNUm != ''" @click="isShowBox=true">{{carNUm}}</span>
              <span class='inputText'  style="text-align: left;display:inline-block;min-width: 70%;" v-if="carNUm == ''" @click="isShowBox=true">{{carText}}</span>
              <span class="deletIcon" @click="carNUm =''">x</span>
              <span class="addInfo" @click="addlicense">添加</span>
            </div>
        </div>
      <div class="infoBox" style="position: relative;border:none;padding: 0;" v-if="isShowBox">
        <div class="carcodeBox">
          <div class="carCode">
              <mt-navbar v-model="tabSelect">
                <mt-tab-item id="1">
                  省
                </mt-tab-item>
                <mt-tab-item id="2">
                  数字
                </mt-tab-item>
              </mt-navbar>
            <span class="sure" @click="isShowBox=false">确定</span>
          </div>
          <div class="contentBox">
            <mt-tab-container v-model="tabSelect">
              <mt-tab-container-item id="1">
                <a class="province" v-for="(item,index) in provinceData" @click="selectItem(item)">{{item}}</a>
              </mt-tab-container-item>
              <mt-tab-container-item id="2">
                <a class="province" v-for="(item,index) in numData" @click="selectItem(item)">{{item}}</a>
              </mt-tab-container-item>

            </mt-tab-container>
          </div>
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
      <div class="zhegaicengone zhegaiceng" v-if="isShowthree">
        <img class='lodingimg' src="../assets/images/loadingpop.gif">
      </div>
    </div>
</template>

<script>
    import { DatetimePicker,Toast ,Navbar, TabItem } from 'mint-ui';
    import Patterns from '../common/patternRules'
    import axios from 'axios'
    export default {
        name: "userinfo",
        data(){
            return{
              isShowBox: false,
              provinceData: ['京','津','沪','渝','冀','晋','辽','吉','黑','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','琼','川','贵','云','陕','甘','青','藏','桂','蒙','宁','新','使','WJ'],
              numData: ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','R','U','V','W','X','Y','Z','学','警','领','港','澳','试','挂','临'],
              tabSelect: "1",
              isShowthree: false,
                url: '',
                companyCard: '',
                companyName: '',
                carText:'请输入车牌号',
                carNUm: '',
                carData: [],
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
                    entourageList:[]
                },
                phone: '17686143833'
            }
        },
        created(){
            this.getCompany();
            if(localStorage.getItem('phone')){
                this.phone = localStorage.getItem('phone');
            }
            console.log(this.provinceData.length)
          this.userinfo.chapterUrl = localStorage.getItem("url")
          if(localStorage.getItem('userinfo')){
            this.userinfo = JSON.parse(localStorage.getItem('userinfo',this.userinfo));
            this.userinfo.company = '';
            this.deptList = [];
            this.userinfo.department = '';
          }
        },
        destroyed() {
            localStorage.setItem('userinfo',JSON.stringify(this.userinfo));
            var that = this;
            document.removeEventListener('message', function(msg) {//获取客户端人脸识别数据
              var data = JSON.parse(msg.data)
              if(data.hasOwnProperty('imageData')) {
                that.userinfo.chapterUrl = data.imageData;
                localStorage.setItem("url", that.userinfo.chapterUrl)
              }
            },true)
        },
        mounted(){
            var that = this;
            document.addEventListener('message', function(msg) {//获取客户端人脸识别数据
                var data = JSON.parse(msg.data);
                if(data){
                    if(data.hasOwnProperty('imageData')){
                        that.userinfo.chapterUrl = data.imageData;
                        localStorage.setItem("url",that.userinfo.chapterUrl)
                      if(that.userinfo.chapterUrl){
                          that.isShowthree = true;
                          that.sureJump()
                      }
                    }
                }else{
                    Toast("检测失败，请重新检测")
                }
            });
        },
        watch:{
          'isShowBox': function(){
            if(this.isShowBox){
              console.log($('#carSpan').offset().top)
              window.scrollTo(0,$('#carSpan').offset().top);
            }

          },
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
          selectItem(item){
            if(this.carNUm.length == 7){

            }else{
              this.carNUm+= item;
            }

          },
            checkRespondent(){
              $(".ulList").css({'display':'none'})
                if(this.acceptNameList.length == 0){
                    this.userinfo.respondent = '';
                    Toast('请输入并选择受访人姓名')
                }else{
                    var n = 0;
                    for(let item of this.acceptNameList){
                        if(item.name != this.userinfo.respondent){
                            n++;
                        }
                    }
                    if(n == this.acceptNameList.length){
                        this.userinfo.respondent = '';
                        Toast('请输入并选择受访人姓名')
                    }
                }
            },

            deletePerson(item,index){
                this.userinfo.entourageList.splice(index,1);
            },
            deleteItem(item,index){
                this.carData.splice(index,1)
            },
            addlicense(){
              console.log(this.carData)
                if(this.carData.length ==5){
                    Toast(" 车辆最多可添加5辆");
                    return;
                }
                if(this.carNUm){
                  this.carData.push(this.carNUm);
                  this.carNUm = '';
                }else{
                  Toast(" 请输入车牌号");
                }
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
                this.companyCard = '';
            },
            validateId(){
                if(!(Patterns.idNum.test(this.userinfo.idCard))){
                    Toast('请输入正确身份证号')
                }
            },
          sureJump(){
            axios.post(this.ajaxUrl + "submitInfo",{
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
              photoData: this.userinfo.chapterUrl,//待确认
              entourageList: this.userinfo.entourageList
            })
              .then(response => {
                this.isShowthree = false;
                if(response.data.rescode == 200){
                  localStorage.removeItem("userinfo");
                  localStorage.removeItem("url");
                  this.$router.push({'path':'/sucess'})
                }else{
                  Toast(response.data.resdes)
                }

              })
              .catch(err => {
                console.log(err);
              })
          },
            submit(){
                if(this.userinfo.company == ''){
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
              if(this.isSelect){
                this.userinfo.isCar = '1';
              }
              if(this.isSelectOne){
                this.userinfo.isCar = '2';
              }
                if(this.userinfo.isCar == '1'){
                    if(this.carData.length == 0){
                        Toast("请输入车牌号");
                        return
                    }
                }

                this.userinfo.licenseNum = this.carData.join(",");
              axios.post(this.ajaxUrl + "checkInfo", {
                companyCode: this.userinfo.company,
                deptCode: this.userinfo.department,
                acceptName:  this.userinfo.respondent
              })
                .then(response => {
                  if(response.data.rescode == 200){
                    window.postMessage('success');
                  }else{
                    Toast(response.data.resdes)
                  }

                })
                .catch(err => {
                  console.log(err);
                })


                localStorage.setItem('userinfo',JSON.stringify(this.userinfo));
            },
            getNameList(){
                axios.post(this.ajaxUrl + "getAcceptNameList", {
                    acceptName: this.userinfo.respondent
                })
                    .then(response => {
                        if(response.data.rescode == 200){
                            this.acceptNameList = response.data.acceptNameList;
                            $(".ulList").css({"display":'block'})
                        }else{
                            Toast(response.data.resdes)
                        }

                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            getCompany(){
                axios.post(this.ajaxUrl + 'getCompanyDept', {
                    phoneNum: this.phone
                })
                    .then(response => {
                        if(response.data.rescode == 200){
                            this.companyList = response.data.companyList;
                            console.log(this.companyList)
                        }else{
                            Toast(response.data.resdes)
                        }

                    })
                    .catch(err => {
                        console.log(err);
                    })
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

