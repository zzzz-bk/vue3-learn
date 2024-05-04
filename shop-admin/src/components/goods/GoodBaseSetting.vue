<template>
    <div>
        <el-row>
            <el-col :span="2">商品名称:</el-col>
            <el-col :span="4">
                <el-input v-model="queryParams.name"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">商品简介:</el-col>
            <el-col :span="5">
                <el-input type="textarea" :row="3" v-model="queryParams.desc"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">商品封面:</el-col>
            <el-col :span="4">
                <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
                    <el-icon><Plus /></el-icon>
                </el-upload>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">列表图片:</el-col>
            <el-col :span="4">
                <el-upload :auto-upload="false" :limit="5" list-type="picture-card">
                    <el-icon><Plus /></el-icon>
                </el-upload>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">上架日期:</el-col>
            <el-col :span="4">
                <el-date-picker type="daterange" range-separator="至" 
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                v-model="queryParams.timeRange"></el-date-picker>
            </el-col>
        </el-row>
        <el-row align="middle">
            <el-col :span="2">商品分类:</el-col>
            <el-col :span="2">
                <el-select v-model="queryParams.category">
                    <el-option key="0" label="男装" :value="0"></el-option>
                    <el-option key="1" label="男鞋" :value="1"></el-option>
                    <el-option key="2" label="围巾" :value="2"></el-option>
                </el-select>
            </el-col>
            <el-col :span="1" style="margin-left: 20px;">
                <el-button type="primary" size="small" round>添加分类</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2">
                <el-button type="success" plain @click="submit">提交</el-button>
            </el-col>
            <el-col :span="1">
                <el-button type="warning" plain @click="cancel">取消</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

let queryParams = reactive({
    name:'',
    desc:'',
    timeRange:'',
    category:0
})
function cancel(){
    router.go(-1)
}
function submit(){
    ElMessage({
        type:'success',
        message:'设置商品基本属性：'+JSON.stringify(queryParams)
    })
}
</script>

<style scoped>
.el-row {
    margin-top: 10px;
}
</style>