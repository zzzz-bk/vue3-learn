<template>
    <div id="wangeditor">
        <div ref="editorElem" style="text-align: left;"></div>
    </div>
</template>

<script setup>
import E from 'wangeditor';
import { onMounted,ref,defineEmits } from 'vue';
const editorElem = ref();
const emits = defineEmits(['contentChange'])

let editor = ref(null);
let editorContent = ref(null);

onMounted(()=>{
    editor.value = new E(editorElem.value);
    editor.value.config.onchange = contentChange;
    editor.value.config.menus = ['head','bold','fontSize','fontName','italic','underline','strikeThrough','foreColor','backColor','link','list','justify','quote','emoticon','image','table','code','undo','redo']
    editor.value.create()
})

function contentChange(html){
    editorContent.value = html;
    emits('contentChange',editorContent.value)
}
</script>

<style lang="scss" scoped>


</style>