<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-row :gutter="0">
                <el-tabs type="card" @tab-click="onTabClick">
                    <el-tab-pane label="日汇总" name="0"></el-tab-pane>
                    <el-tab-pane label="月汇总" name="1"></el-tab-pane>
                    <el-tab-pane label="年汇总" name="2"></el-tab-pane>
                </el-tabs>
            </el-row>
        </div>
        <div>
            <el-table :data="reportList" tooltip-effect="dark">
                <el-table-column label="日期" prop="date" width="200"></el-table-column>
                <el-table-column label="收入" prop="incoming" width="100"></el-table-column>
                <el-table-column label="支出" prop="outgoing" width="100"></el-table-column>
                <el-table-column label="备注" prop="summary" width="300"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import Mock from '@/mock/Mock';
import { onMounted, ref } from 'vue';

let reportList = ref([]);

onMounted(()=>{
    refresh(0)    
})

function refresh(type){
    reportList.value = Mock.getReportList(type)
}

function onTabClick(pane){
    refresh(pane.props.name)
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
}
</style>