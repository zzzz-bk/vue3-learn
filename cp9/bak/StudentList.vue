<template>
    <div>
        <el-container>
            <el-header height="80px" style="padding: 0;">
                <div class="header">教务系统学生管理</div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu class="aside" @select="handleSelect" default-active="1" :unique-opened="true">
                        <el-sub-menu index="1">
                            <template #title>
                                <span>7年级</span>
                            </template>
                            <el-menu-item index="1">1班</el-menu-item>
                            <el-menu-item index="2">2班</el-menu-item>
                            <el-menu-item index="3">3班</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <span>8年级</span>
                            </template>
                            <el-menu-item index="4">1班</el-menu-item>
                            <el-menu-item index="5">2班</el-menu-item>
                            <el-menu-item index="6">3班</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="3">
                            <template #title>
                                <span>9年级</span>
                            </template>
                            <el-menu-item index="7">1班</el-menu-item>
                            <el-menu-item index="8">2班</el-menu-item>
                            <el-menu-item index="9">3班</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-header height="80px" style="padding: 0;margin: 0;">
                        <el-container class="subHeader">
                            <div class="desc">{{ desc }}</div>
                            <el-button style="width: 100px;height: 30px;margin: 20px;">新增记录</el-button>
                        </el-container>
                    </el-header>
                    <el-main style="margin: 0;padding: 0;">
                        <div class="content">
                            <el-table :data="stus">
                                <el-table-column prop="name" label="姓名"></el-table-column>
                                <el-table-column prop="age" label="年龄"></el-table-column>
                                <el-table-column prop="sex" label="性别"></el-table-column>
                                <el-table-column prop="date" label="录入日期"></el-table-column>
                            </el-table>
                        </div>
                    </el-main>
                    <el-footer height="30px" class="footer">Vue3+ElementPlus</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let desc=ref('7年级1班学生统计');
let stus = ref([
    {name:'王境泽',age:14,sex:'男',date:'2024/04/20'},
    {name:'张飞',age:15,sex:'男',date:'2024/04/13'},
    {name:'小秋',age:15,sex:'女',date:'2024/04/03'}
])
let handleSelect = function(index){
    let ranks = [7,8,9]
    let rank = ranks[Math.floor(index-1)/3]
    desc.value = `${rank}年级${((index-1)%3)+1}班学生统计`
}
</script>

<style scoped>
.header {
    font-size: 30px;
    line-height: 80px;
    background-color: #f1f1f1;
}
.aside {
    background-color: wheat;
    height: 600px;
}

.subHeader {
    background-color: cornflowerblue;
}

.desc {
    font-size: 25px;
    line-height: 80px;
    color: white;
    width: 800px;
}

.content {
    height: 410px;
}

.footer {
    background-color: dimgray;
    color: white;
    font-size: 17px;
    line-height: 30px;
}
</style>