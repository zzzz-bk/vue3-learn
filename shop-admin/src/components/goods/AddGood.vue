<template>
    <div class="content-container" direction="vertical">
        <el-tabs v-model="activeTab" type="card" @tab-click="onTabClick">
            <el-tab-pane label="基础设置" name="1">
                <base-setting></base-setting>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import {GoodBaseSetting as BaseSetting} from './GoodBaseSetting.vue';


</script>

<style scoped>

</style>