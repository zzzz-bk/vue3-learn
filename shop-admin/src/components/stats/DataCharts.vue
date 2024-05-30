<template>
    <div ref="chart">
        
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps(['xData','data'])
let name = ref('销量')
var chart=ref()
watch(props.xData,()=>{
    refresh()
})
watch(props.data,()=>[
    refresh()
])
onMounted(()=>{
    refresh()
})
function refresh(){
    let c = echarts.init(chart);
    c.clear()
    c.setOption({
        xAxis:{
            data:props.xData
        },
        yAxis:{
            type:'value'
        },
        series:{
            name:name.value,
            type:'line',
            data:props.data
        }
    })
}
</script>

<style lang="scss" scoped>


</style>