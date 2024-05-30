<template>
    <div class="content-container" direction="vertical">
        <el-row :gutter="10" align="middle">
            <el-col :span="4" class="info">总交易额:{{ data.allTra }}</el-col>
            <el-col :span="4" class="info">秒杀交易额:{{ data.speTra }}</el-col>
            <el-col :span="4" class="info">普通商品交易额:{{ data.norTra }}</el-col>
            <el-col :span="4" class="info">累计用户数:{{ data.userCount }}</el-col>
            <el-col :span="4" class="info">分销总用户数:{{ data.managerCount }}</el-col>
        </el-row>
        <el-row :gutter="10" align="middle">
            <el-radio-group v-model="type" @change="changeType">
                <el-radio-button label="总交易额"></el-radio-button>
                <el-radio-button label="商品交易额"></el-radio-button>
                <el-radio-button label="新用户销量"></el-radio-button>
                <el-radio-button label="方可转化率"></el-radio-button>
                <el-radio-button label="下单转化率"></el-radio-button>
                <el-radio-button label="付款转化率"></el-radio-button>
                <el-radio-button label="流水"></el-radio-button>
            </el-radio-group>
        </el-row>
        <DataCharts id="charts" :xData="xData" :data="chartsData"></DataCharts>
        <div class="realTime">
            <div class="info">
                实时数据-更新时间:{{ data.time }}
            </div>
            <el-row :gutter="10" align="middle">
                <el-col :span="6">
                    <div class="title">付款金额: 10000</div>
                    <div class="subTitle">当日: 1900</div>
                    <div class="subTitle">昨日: 1020</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">支付订单数: 1000</div>
                    <div class="subTitle">当日: 100</div>
                    <div class="subTitle">昨日: 130</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">付款人数: 503</div>
                    <div class="subTitle">当日: 102</div>
                    <div class="subTitle">昨日: 300</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">付款转化率: 70</div>
                    <div class="subTitle">当日: 50</div>
                    <div class="subTitle">昨日: 70</div>
                </el-col>
            </el-row>
            <el-row :gutter="10" align="middle">
                <el-col :span="6">
                    <div class="title">访客数: 105310</div>
                    <div class="subTitle">当日:10301</div>
                    <div class="subTitle">昨日:20030</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">访问次数: 1022440</div>
                    <div class="subTitle">当日: 101230</div>
                    <div class="subTitle">昨日: 1022102</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">新增用户: 500</div>
                    <div class="subTitle">当日: 300</div>
                    <div class="subTitle">昨日: 200</div>
                </el-col>
                <el-col :span="6">
                    <div class="title">累计用户数: 1542200</div>
                    <div class="subTitle">当日: 1542200</div>
                    <div class="subTitle">昨日: 154200</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import DataCharts from './DataCharts.vue';
import Mock from '@/mock/Mock';

let xData = ref(['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日'])
let chartsData = ref([])
let type = ref('总交易额')
let data = reactive({
    allTra:'',
    speTra:'',
    norTra:'',
    userCount:'',
    managerCount:'',
    time:''
})

onMounted(()=>{
    chartsData.value = Mock.getChartsData()
    data = refreshData(Mock.getTradeData())
})

function refreshData(newData){
    Object.keys(data).forEach(fld=>{
        data[fld] = newData[fld]
    })
}

function changeType(){
    chartsData.value = Mock.getChartsData()
}
</script>

<style scoped>
#charts {
    width: 1200px;
    height: 400px;
}

.info {
    margin: 10px 40px;
    font-size: 20px;
    color: #777777;
}

.realTime {
    border: #777777 solid 1px;
    width: 1200px;
    height: 300px;
}

.title {
    font-size: 20px;
    color: #777777;
    margin-bottom: 5px;
}

.subTitle {
    font-size: 18px;
    color: #777777;
    margin-top: 3px;
}
</style>