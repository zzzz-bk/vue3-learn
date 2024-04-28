<template>
    <el-container style="height: 100%">
        <el-aside width="200px" style="background-color: #f1f1f1;">
            <div></div>
            <el-menu
            mode="vertical"
            background-color="#f1f1f1"
            text-color="#777777"
            active-text-color="#000000"
            :default-active="0"
            @select="onSelect">
                <el-menu-item v-for="item in items" :index="item.index" :key="item.index">
                    <div id="text">{{ item.title }}</div>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <MarkDownView :content="content"></MarkDownView>
        </el-main>
    </el-container>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import MarkDownView from './MarkDownView.vue';
import fileManager from '@/tools/fileManager';

let currentIndex = ref(0)
let content = ref('')

const props = defineProps({
    items:{
        type:Array,
        default:()=>[]
    },
    topic:{
        type:Number,
        default:()=>0
    }
})
// let refTopic = ref(props.topic)
watch(currentIndex,(val)=>{
    fileManager.getPostContent(props.topic,props.items[val].title).then((res)=>{
        content.value = res.data
    })
})
watch(()=>props.topic,(val)=>{
    // console.log("watch topic:"+props.items)
    fileManager.getPostContent(val,props.items[currentIndex.value].title).then((res)=>{
        content.value = res.data
    })
})
onMounted(()=>{
    console.log("mounted:"+props.items)
    fileManager.getPostContent(props.topic,props.items[currentIndex.value].title).then((res)=>{
        content.value = res.data
    })
})

function onSelect(index){
    currentIndex.value = index
}


</script>

<style scoped>
.el-menu-item.is-active {
    background-color: #ffffff !important;
}
    
</style>