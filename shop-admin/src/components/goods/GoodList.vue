<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">商品名称:</div>
        <div class="inpurt-field">
          <el-input v-model="queryParams.name"></el-input>
        </div>
        <div class="input-tip">商品编号:</div>
        <div class="input-field">
          <el-input v-model="queryParams.id"></el-input>
        </div>
        <div class="input-tip">商品分类:</div>
        <div class="input-field">
          <el-select v-model="queryParams.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
      </el-container>

      <el-container class="content-row">
        <div class="input-tip">是否上架:</div>
        <div class="input-field">
          <el-select v-model="sellState">
            <el-option key="0" label="否" :value="0"></el-option>
            <el-option key="1" label="是" :value="1"></el-option>
            <el-option key="2" label="全部" :value="2"></el-option>
          </el-select>
        </div>
        <div class="input-tip">是否过期:</div>
        <div class="input-field">
          <el-select v-model="expireState">
            <el-option key="0" label="否" :value="0"></el-option>
            <el-option key="1" label="是" :value="1"></el-option>
            <el-option key="2" label="全部" :value="2"></el-option>
          </el-select>
        </div>
      </el-container>
    </div>
    <el-container class="content-row">
      <el-button type="primary" @click="requestData">检索</el-button>
      <el-button type="primary" @click="clear">显示全部</el-button>
      <el-button type="success" @click="addGood">添加商品</el-button>
    </el-container>

    <div>
      <el-table :data="goodsData" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="商品" width="100">
          <template #default="scoped">
            <div style="text-align: center">
              <el-image
                :src="scoped.row.img"
                style="width: 60px; height: 100px"
              ></el-image>
            </div>
            <div style="text-align: center">{{ scoped.row.name }}</div>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="100" prop="price"></el-table-column>
        <el-table-column label="销量" width="100" prop="sellCount"></el-table-column>
        <el-table-column label="库存" width="100" prop="count"></el-table-column>
        <el-table-column label="退款数量" width="100" prop="refund"></el-table-column>
        <el-table-column
          label="退货金额"
          width="100"
          prop="refundAmount"
        ></el-table-column>
        <el-table-column label="操作" width="100" prop="name">
          <template #default="scoped">
            <el-button
              @click="operate(scoped.row)"
              :type="scoped.row.state ? 'danger' : 'success'"
              >{{ scoped.row.state ? "下架" : "上架" }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="管理员" width="100" prop="owner"></el-table-column>
        <el-table-column label="更新时间" width="200" prop="time"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import Mock from "@/mock/Mock";
import { ElMessage } from "element-plus";
import { computed, onMounted, reactive, ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

var goodsData = ref([]);
var categories = ref(["全部", "男装", "女装"]);
var queryParams = reactive({
  name: "",
  id: "",
  category: "",
  sellMode: 2,
  expireMode: 2,
});
var sellState = computed({
  get() {
    return queryParams.sellMode == 2 ? "全部" : queryParams.sellMode == 0 ? "否" : "是";
  },
  set(val) {
    queryParams.sellMode = val.toString();
  },
});
var expireState = computed({
  get() {
    return queryParams.expireMode == 2
      ? "全部"
      : queryParams.expireMode == 0
      ? "否"
      : "是";
  },
  set(val) {
    queryParams.expireMode = val;
  },
});
onMounted(() => {
  refresh();
});
onBeforeRouteUpdate((to) => {
  refresh(to);
});

function refresh(rt = route) {
  goodsData.value = Mock.getGoods(rt.params.type);
  console.log(sellState.value + "|" + expireState.value);
}

function requestData() {
  ElMessage({
    type: "success",
    message: "筛选请求参数:" + JSON.stringify(queryParams),
  });
  refresh();
}

function operate(item) {
  item.state = !item.state;
}

function clear() {
  Object.keys(queryParams).forEach((fld) => {
    if (!fld.endsWith("Mode")) {
      queryParams[fld] = "";
    } else {
      queryParams[fld] = 2;
    }
  });
  refresh();
}

function addGood() {
  router.push({ name: "AddGood", params: { type: route.params.type } });
}
</script>

<style scoped></style>
