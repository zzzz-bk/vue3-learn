<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-row :gutter="10" align="middle">
                <el-col :span="1.5">用户状态:</el-col>
                <el-col :span="4">
                    <el-select v-model="queryParams.state">
                        <el-option key="0" label="待审核" :value="0"></el-option>
                        <el-option key="1" label="通过" :value="1"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="1.5">用户信息:</el-col>
                <el-col :span="4">
                    <el-input placeholder="信息" v-model="queryParams.userInfo" clearable></el-input>
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
            <el-table :data="managerReqList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="用户信息" prop="userInfo" width="300"></el-table-column>
                <el-table-column label="状态" width="100">
                    <template #default="scoped">
                        <el-tag :type="scoped.row.state ? 'success' : ''">{{ scoped.row.state ? '通过' : '待审核' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="更新时间" prop="updatetime" width="200"></el-table-column>
                <el-table-column label="添加时间" prop="createtime" width="200"></el-table-column>
                <el-table-column label="操作" width="100">
                    <template #default="scoped">
                        <el-button :type="scoped.row.state ? 'warning' : 'success'" @click="operator(scoped.row)">{{ scoped.row.state ? '下线' : '通过'
                            }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import Mock from '@/mock/Mock';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

let queryParams = reactive({
    state: 0,
    userInfo: ''
})
let managerReqList = ref([])

onMounted(() => {
    managerReqList.value = Mock.getManagerReqList()
})
function search(){
    ElMessage({
        type:'success',
        message:'搜索条件:'+JSON.stringify(queryParams)
    })
    managerReqList.value = Mock.getManagerReqList()
}
function clear(){
    Object.keys(queryParams).forEach(fld=>queryParams[fld]=null)
    managerReqList.value=Mock.getManagerReqList()
}
function operator(row){
    row.state = !row.state
}
</script>

<style lang="scss" scoped></style>