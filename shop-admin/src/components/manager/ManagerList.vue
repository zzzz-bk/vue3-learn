<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">店长手机：</el-col>
                <el-col :span="4">
                    <el-input placeholder="手机号" v-model="queryParams.phone"></el-input>
                </el-col>
                <el-col :span="1.5">店长昵称:</el-col>
                <el-col :span="4">
                    <el-input placeholder="昵称" v-model="queryParams.name"></el-input>
                </el-col>
                <el-col :span="1.5">店长状态:</el-col>
                <el-col :span="4">
                    <el-select v-model="queryParams.state" placeholder="状态">
                        <el-option key="0" label="全部" :value="0"></el-option>
                        <el-option key="1" label="后台开通" :value="1"></el-option>
                        <el-option key="2" label="站外申请" :value="2"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="15" align="middle">
                <el-col :span="1.5">
                    <el-button type="primary" @click="search">搜索</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button type="warning" @click="clear">清空搜索条件</el-button>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-table :data="managerList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="分销人信息" width="200" prop="people"></el-table-column>
                <el-table-column label="微信信息" width="150" prop="weixin"></el-table-column>
                <el-table-column label="状态" width="100">
                    <template #default="scoped">
                        <el-tag :type="scoped.row.state ? 'success':''">{{ scoped.row.state? '激活':'审核中' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="收入总额" width="100" prop="income"></el-table-column>
                <el-table-column label="退款" width="100" prop="refund"></el-table-column>
                <el-table-column label="来源" width="100">
                    <template #default="scoped">
                        <el-tag>{{ scoped.row.source }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="客户数" width="100" prop="customer"></el-table-column>
                <el-table-column label="更新时间" width="200" prop="time"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import Mock from '@/mock/Mock';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

let managerList = ref([])
let queryParams = reactive({
    phone: '',
    name: '',
    state: ''
})

onMounted(()=>{
    managerList.value = Mock.getManagerList()
})

function search(){
    ElMessage({
        type:'success',
        message:'请求参数:'+JSON.stringify(queryParams)
    })
    managerList.value = Mock.getManagerList();
}

function clear(){
    Object.keys(queryParams).forEach(fld=>queryParams[fld]='')
    managerList.value = Mock.getManagerList()
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
}
</style>