<template>
    <div class="content-container" direction="vertical">
        <el-tabs v-model="activeTab" type="card" @tab-click="onTabClick">
            <el-tab-pane label="基础设置" name="1">
                <good-base-setting></good-base-setting>
            </el-tab-pane>
            <el-tab-pane label="价格库存" name="2">
                <good-price-setting></good-price-setting>
            </el-tab-pane>
            <el-tab-pane label="商品详情" name="3">
                <good-detail-setting></good-detail-setting>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import GoodBaseSetting from './GoodBaseSetting.vue';
import GoodPriceSetting from './GoodPriceSetting.vue';
import GoodDetailSetting from './GoodDetailSetting.vue';
import { ref } from 'vue';

let activeTab = ref('1')

function onTabClick(){
    console.log('tab click')
}
</script>

<style scoped>

</style>