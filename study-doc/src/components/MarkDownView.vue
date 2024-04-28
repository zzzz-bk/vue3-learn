<template>
    <p v-html="data"></p>
</template>

<script setup>
import { marked } from 'marked';
import {defineProps,computed} from 'vue'

const props = defineProps(['content'])

let data = computed(()=>{
    return marked(props.content)
})

</script>