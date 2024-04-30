<template>
    <div id="container">
        <div id="title">
            <h1>电商后台管理系统</h1>
        </div>
        <div class="input">
            <el-input v-model="name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </div>
        <div class="input">
            <el-input type="password" v-model="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password></el-input>
        </div>
        <div class="input">
            <el-button @click="login" style="width:500px" type="primary" :disabled="disabled">登录</el-button>
        </div>
    </div>
</template>

<script setup>
import Store from '@/tools/Storage';
import { ElMessage } from 'element-plus';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

let name = ref('')
let password = ref('')
let disabled = computed(()=>name.value.length == 0 || password.value.length == 0)

function login() {
    Store.commit('registUserInfo',{
        name:name.value,
        password:password.value
    })
    ElMessage({
        message:'登录成功',
        type:'success',
        duration:'3000'
    })
    setTimeout(() => {
        router.push({name:'home'})
    }, 1500);
}
</script>

<style scoped>
#container {
    background: #595959;
    background-image: url("~@/assets/login_bg.jpg");
    height: 100%;
    width: 100%;
    position: absolute;
}
#title {
    text-align: center;
    color: azure;
    margin-top: 200px;
}

.input {
    margin: 20px auto;
    width: 500px;
}
</style>