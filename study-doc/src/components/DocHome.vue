<template>
    <el-container id="container">
        <el-header style="width: 100%; height: 120px;">
            <doc-header :items="navItems" @selected="changeSelected"></doc-header>
        </el-header>
        <el-main>
            <doc-body :items="bodyItems" :topic="navItems[currentTopicIndex].title"></doc-body>
        </el-main>
        <el-footer>
            <div id="footer">{{ desc }}</div>
        </el-footer>
    </el-container>
</template>

<script setup>
import DocHeader from './DocHeader.vue';
import DocBody from './DocBody.vue'
import { computed, onMounted, ref } from 'vue'
import fileManager from '@/tools/fileManager';

onMounted(() => {
    fileManager.getPostContent('HTML专题','文本标签').then(()=>{
        // console.log(res)
    })
})

let navItems = ref(fileManager.getAllTopic().map((item,index)=>{
    return {
        index:index,
        title:item
    }
}))
let currentTopicIndex = ref(0)
let bodyItems = computed(()=>{
    return fileManager.getPosts(currentTopicIndex.value).map((item,index)=>{
        return {
            index:index,
            title:item
        }
    })
})
let desc = ref('版权所有，仅限学习使用，禁止传播!')

function changeSelected(index){
    currentTopicIndex.value = index
}
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