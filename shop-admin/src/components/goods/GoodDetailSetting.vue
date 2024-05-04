<template>
    <div style="margin-bottom: 20px;">
        <good-edit @contentChange="contentChange"></good-edit>
    </div>
    <el-row :gutter="10">
        <el-col :span="2">
            <el-button type="success" @click="submit" plain>提交</el-button>
        </el-col>
        <el-col :span="1">
            <el-button type="warning" @click="cancel" plain>取消</el-button>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import GoodEdit from './GoodEdit.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const router = useRouter();
let content = ref('')

function contentChange(editCont){
    content.value = editCont
}

function cancel(){
    router.go(-1)
}

function submit(){
    ElMessage({
        type:'success',
        message:'详情设置:'+content.value
    })
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
}
</style>