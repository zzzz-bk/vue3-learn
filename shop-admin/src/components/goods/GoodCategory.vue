<template>
    <div class="content-container" direction="vertical">
        <el-row :gutter="0" align="middle">
            <el-col :span="2">
                <el-button type="primary" @click="addCategory">添加分类</el-button>
            </el-col>
        </el-row>
        <div>
            <el-table :data="categoryList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="id" width="100" prop="id"></el-table-column>
                <el-table-column label="分类名称" width="100" prop="name"></el-table-column>
                <el-table-column label="分类负责人" width="500" prop="manager"></el-table-column>
                <el-table-column label="操作" width="200">
                    <template #default="scoped">
                        <el-button type="danger" @click="deleteCategory(scoped.$index)" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus'
let categoryList = ref([
    { id: 1231, name: '男装', manager: '管理员用户01' },
    { id: 1131, name: '男鞋', manager: '管理员用户01' },
    { id: 1031, name: '帽子', manager: '管理员用户02' }
])

function deleteCategory(index) {
    categoryList.value.splice(index, 1)
}
function addCategory() {
    ElMessageBox.prompt('请输入分类名称', '新增分类', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
    }).then(({value}) => {
        categoryList.value.push({
            id:1000,
            name:value,
            manager:'管理员用户01'
        })
    });
}
</script>

<style lang="scss" scoped></style>