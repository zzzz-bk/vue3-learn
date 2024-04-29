<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-container class="content-row">
                <div class="input-tip">
                    商品名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.good"></el-input>
                </div>
                <div class="input-tip">
                    收货人:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.consignee"></el-input>
                </div>
                <div class="input-tip">
                    支付时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.payTime"></el-date-picker>
                </div>
            </el-container>

            <el-container class="content-row">
                <div class="input-tip">
                    用户名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.name"></el-input>
                </div>
                <div class="input-tip">
                    手机号:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.phone"></el-input>
                </div>
                <div class="input-tip">
                    发货时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.sendTime"></el-date-picker>
                </div>
            </el-container>

            <el-container class="content-row">
                <el-container>
                    <el-button type="primary" @click="requestData">筛选</el-button>
                    <el-button type="danger" @click="clear">清空筛选</el-button>
                    <el-button type="primary" @click="exportData">导出</el-button>
                    <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
                    <el-button type="primary" @click="exportDispatchGoods">下载批量发货订单</el-button>
                </el-container>
            </el-container>
        </div>

        <div>
            <el-tabs type="card" @tab-click="onTabClick">
                <el-tab-pane label="全部"></el-tab-pane>
                <el-tab-pane label="未支付"></el-tab-pane>
                <el-tab-pane label="已支付"></el-tab-pane>
                <el-tab-pane label="待发货"></el-tab-pane>
                <el-tab-pane label="已发货"></el-tab-pane>
                <el-tab-pane label="支付超时"></el-tab-pane>
            </el-tabs>

            <el-table ref="multipleTable" :data="orderList" tooltip-effect="dark" style="width: 100%;" @selection-change="onSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="商品" width="100" prop="name"></el-table-column>
                <el-table-column label="总价/数量" width="100" prop="price"></el-table-column>
                <el-table-column label="买家信息" width="100" prop="buyer"></el-table-column>
                <el-table-column label="交易时间" width="200" prop="time"></el-table-column>
                <el-table-column label="分销信息" width="100">
                    <template #default="scoped">
                        <el-tag :type="scoped.row.role? '':'info'">{{ scoped.row.role? '经理':'分销员' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="状态" width="100">
                    <template #default="scoped">
                        <el-tag :type="scoped.row.state ? 'success':'danger'">{{ scoped.row.state ? '已完成':'未完成' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template #default="scoped">
                        <el-button size="small" type="danger" @click="deleteItem(scoped.$index)">删除</el-button>
                        <el-button size="small" type="primary" @click="callUser(scoped.row)">联系客户</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="支付方式" width="100">
                    <template #default="scoped">
                        <el-tag>{{ scoped.row.payType ? '微信':'支付宝' }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="来源" width="200" prop="source"></el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import Mock from '@/mock/Mock';
import { onMounted, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
const route = useRoute();

let orderList = ref([]);
let queryParam = reactive({
    good:'',
    consignee:'',
    phone:'',
    name:'',
    payTime:'',
    sendTime:''
});
let multipleSelection = ref([])

onMounted(()=>{
    orderList.value = Mock.getOrder(route.params.type)
})

onBeforeRouteUpdate((to)=>{
    orderList.value = Mock.getOrder(to.params.type)
})

function requestData(){
    ElMessage({
        type:'success',
        message:'筛选请求参数:' + JSON.stringify(queryParam)
    })
    orderList.value = Mock.getOrder(route.params.type)
}
</script>

<style scoped>

</style>