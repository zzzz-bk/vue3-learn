<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">订单状态</el-col>
                <el-col :span="4">
                    <el-select v-model="queryParams.state">
                        <el-option key="0" label="未完成" :value="0"></el-option>
                        <el-option key="0" label="已完成" :value="1"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="1.5">订单名称</el-col>
                <el-col :span="4">
                    <el-input placeholder="订单信息" v-model="queryParams.ordername" clearable></el-input>
                </el-col>
                <el-col :span="1.5">用户名称</el-col>
                <el-col :span="4">
                    <el-input placeholder="用户名" v-model="queryParams.owner"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">发货时间</el-col>
                <el-col :span="8">
                    <el-date-picker type="datetimerange" start-placeholder="开始时间" range-separator="至"
                        end-placeholder="结束时间" v-model="queryParams.sendtime" clearable></el-date-picker>
                </el-col>
                <el-col :span="1.5">支付时间</el-col>
                <el-col :span="8">
                    <el-date-picker type="datetimerange" start-placeholder="开始时间" range-separator="至"
                        end-placeholder="结束时间" v-model="queryParams.trxtime" clearable></el-date-picker>
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
            <el-table :data="managerOrderList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="类型" width="100">
                    <template #default="scoped">
                        {{ scoped.row.type==0?'店长订单':'其他订单' }}
                    </template>
                </el-table-column>
                <el-table-column label="名称" prop="orderName" width="300"></el-table-column>
                <el-table-column label="订单号" prop="orderNo" width="200"></el-table-column>
                <el-table-column label="店长信息" prop="owner" width="100"></el-table-column>
                <el-table-column label="件数" prop="count" width="100"></el-table-column>
                <el-table-column label="价格" prop="amount" width="100"></el-table-column>
                <el-table-column label="佣金" prop="fee" width="100"></el-table-column>
                <el-table-column label="支付时间" prop="trxtime" width="200"></el-table-column>
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
    state: 0,
    ordername: '',
    owner: '',
    sendtime: '',
    trxtime: ''
})
let managerOrderList = ref([])

onMounted(()=>{
    managerOrderList.value = Mock.getManagerOrderList()
})

function search(){
    ElMessage({
        type:'success',
        message:'查询条件:'+JSON.stringify(queryParams)
    })
    managerOrderList.value = Mock.getManagerOrderList()
}

function clear(){
    Object.keys(queryParams).forEach(fld=>queryParams[fld]='')
    managerOrderList.value = Mock.getManagerOrderList()
}

function expose(){
    Tools.exportJson('店长订单.json',managerOrderList.value);
}
</script>

<style scoped>
.el-row{
    margin-top: 10px;
}
</style>