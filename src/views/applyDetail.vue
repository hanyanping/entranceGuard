<style rel="stylesheet/scss" lang="scss" scoped>
    $baseFontSize: 75;
    .applyDetail{
        background: #f4f4f4;
        padding: 8px;
        min-height:100vh;
        .detail{
            background: #fff;
            border-radius: 5px;
            padding: 8px;
            font-size: 14px;
            color: #232323;
            .infoBox{
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
                            padding-bottom: 5px;
                        }
                    }
                    .reApplay{
                        background: #0076FF;
                        color: #fff;
                        padding: 8px 16px;
                        border-radius: 5px;
                    }
                }
            }
            .imgInfo{
                background: url('../assets/images/geren.png') no-repeat center center;
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
                    <p class="shoufangInfo">受访单位 : 北京中车科技有限责任公司</p>
                    <p class="shoufangInfo">受访部门 : 技术部门看看</p>
                    <p class="shoufangInfo">受访人 : 北京中车</p>
                    <p class="shoufangInfo">受访手机号 : 13454565565</p>
                    <p class="shoufangInfo">申请人姓名 : 站三里</p>
                </div>
                <div class="imgInfo" >
                </div>
            </div>
            <div class="infoBox">
                <p class="shoufangInfo">身份证号 : 1345456556513454565565</p>
                <p class="shoufangInfo">到访事由 : 技术部门看看</p>
                <p class="shoufangInfo">到访时间 : 北京中车</p>
                <p class="shoufangInfo">结束时间 : 13454565565</p>
                <p class="shoufangInfo">是否携带车辆 : 京344444</p>
                <div class='peitong'>
                    <span>陪同人 : </span>
                    <div class="personInfo">
                        <p> 张三李四 446726664444444445</p>
                        <p> 张三李四 446726664444444445</p>
                    </div>
                </div>
                <div class='peitong flexBetween'>
                    <span>状态 : 审核不通过</span>
                    <div class="reApplay">
                        重新申请
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "applyDetail"
    }
</script>

