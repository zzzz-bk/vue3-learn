<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">商品名称:</el-col>
                <el-col :span="4">
                    <el-input placeholder="商品名称" v-model="queryParams.goodName"></el-input>
                </el-col>
                <el-col :span="1.5">用户名称:</el-col>
                <el-row :span="4">
                    <el-input placeholder="用户名" v-model="queryParams.userName"></el-input>
                </el-row>
                <el-col :span="1.5">手机号:</el-col>
                <el-col :span="4">
                    <el-input placeholder="手机号" v-model="queryParams.phone"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">订单类型</el-col>
                <el-col :span="4">
                    <el-select v-model="queryParams.orderType" clearable placeholder="类型">
                        <el-option key="0" label="普通订单" :value="0"></el-option>
                        <el-option key="1" label="秒杀订单" :value="1"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="1.5">平台单号</el-col>
                <el-col :span="4">
                    <el-input placeholder="订单号" v-model="queryParams.orderNo" clearable></el-input>
                </el-col>
                <el-col :span="1.5">支付时间</el-col>
                <el-col :span="8">
                    <el-date-picker type="datetimerange" start-placeholder="开始时间" range-separator="至"
                        end-placeholder="结束时间" v-model="queryParams.trxtime"></el-date-picker>
                </el-col>
            </el-row>
            <el-row :gutter="10" align="middle">
                <el-col :span="2">
                    <el-button type="primary" @click="search">搜索</el-button>
                </el-col>
                <el-col :span="3">
                    <el-button type="warning" @click="clear">清空搜索条件</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button type="info" @click="expose">导出</el-button>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-table :data="trxinfoList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="名称" prop="orderName" width="300"></el-table-column>
                <el-table-column label="单号" prop="orderNo" width="200"></el-table-column>
                <el-table-column label="用户" prop="userName" width="100"></el-table-column>
                <el-table-column label="支付方式" width="100">
                    <template #default="scoped">
                        <el-tag>{{ scoped.row.trxtype ? '线上支付' : '线下支付' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="交易时间" width="200" prop="trxtime"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import Mock from '@/mock/Mock';
import Tools from '@/tools/Tools';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

let queryParams = reactive({
    goodName: '',
    userName: '',
    phone: '',
    orderType: '',
    orderNo: '',
    trxtime: ''
})

let trxinfoList = ref([])

function refresh() {
    trxinfoList.value = Mock.getTrxinfoList()
}

onMounted(() => {
    refresh()
})

function search() {
    ElMessage({
        type: 'success',
        message: '查询条件:' + JSON.stringify(queryParams)
    })
    refresh()
}

function clear() {
    Object.keys(queryParams).forEach(fld => queryParams[fld] = '')
    refresh()
}

function expose() {
    Tools.exportJson('交易明细.json', trxinfoList)
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
}
</style>