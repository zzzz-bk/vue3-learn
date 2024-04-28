<template>
    <el-container id="container">
        <el-header style="width: 100%; height: 120px;">
            <doc-header :items="navItems"></doc-header>
        </el-header>
        <el-main>
            <doc-body :items="bodyItems"></doc-body>
        </el-main>
        <el-footer>
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>

<script setup>
import DocHeader from './DocHeader.vue';
import DocBody from './DocBody.vue'
import { ref } from 'vue'

let navItems = ref([{index:0,title:'HTML专题'},{index:1,title:'CSS专题'}])
let bodyItems = ref([{index:0,title:'HTML简介'},{index:1,title:'HTML编辑器'}])
let desc = ref('版权所有，仅限学习使用，禁止传播!')
</script>

<style scoped>
#container {
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 30px;
    height: 800px;
}
#footer {
    text-align: center;
    background-color: bisque;
    height: 40px;
    line-height: 40px;
    color: #717171;
}
</style>