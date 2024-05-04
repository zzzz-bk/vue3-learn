<template>
    <div class="title">
        <div style="line-height: 35px;margin-left: 20px;">价格设置</div>
    </div>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">市场价:</el-col>
        <el-col :span="3">
            <el-input placeholder="市场价" v-model="queryParams.maketPrice" clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">展示价:</el-col>
        <el-col :span="3">
            <el-input placeholder="展示价" v-model="queryParams.showPrice" clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">积分数:</el-col>
        <el-col :span="3">
            <el-input placeholder="积分" v-model="queryParams.coin" clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">成本价:</el-col>
        <el-col :span="3">
            <el-input placeholder="成本价" v-model="queryParams.price" clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">限购数:</el-col>
        <el-col :span="3">
            <el-input placeholder="限购" v-model="queryParams.limit" clearable></el-input>
        </el-col>
    </el-row>

    <div class="title">
        <div style="line-height: 35px;margin-left: 20px;">价格设置</div>
    </div>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">库存数量:</el-col>
        <el-col :span="3">
            <el-input placeholder="库存" v-model="queryParams.stock" clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">基础销量:</el-col>
        <el-col :span="3">
            <el-input placeholder="销量" v-model="queryParams.sold"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" align="middle">
        <el-col :span="1.5">浏览数量:</el-col>
        <el-col :span="3">
            <el-input placeholder="浏览数" v-model="queryParams.views"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10">
        <el-col :span="2">
            <el-button type="success" plain @click="submit">提交</el-button>
        </el-col>
        <el-col :span="1">
            <el-button type="warning" plain @click="cancel">取消</el-button>
        </el-col>
    </el-row>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

let queryParams = reactive({
    maketPrice: 0,
    showPrice: 0,
    coin: 0,
    price: 0,
    limit: 0,
    stock: 0,
    sold: 0,
    views: 0
})

function cancel(){
    router.go(-1)
}

function submit(){
    ElMessage({
        type:'success',
        message:'价格与库存设置:'+JSON.stringify(queryParams)
    })
}
</script>

<style scoped>
.title {
    background-color: #e1e1e1;
    height: 35px;
    margin-bottom: 15px;
    margin-top: 15px;
}
.el-row {
    margin-top: 10px;
}
</style>