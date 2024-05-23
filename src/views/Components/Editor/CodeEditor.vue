<script setup lang="tsx">
import { CodeEditor } from '@/components/CodeEditor'
import { ContentWrap } from '@/components/ContentWrap'
import { ref } from 'vue'
import { BaseButton } from '@/components/Button'
import { ElDivider } from 'element-plus'
const content = ref(
  'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
)

const MonacoEditRef = ref<InstanceType<typeof CodeEditor>>()
</script>
<template>
  <ContentWrap title="代码编辑器" message="基于 monaco-editor 二次封装">
    <BaseButton @click="console.log(content)">控制台打印内容</BaseButton>
    <ElDivider />
    <div class="edit-container h-60vh">
      <CodeEditor ref="MonacoEditRef" v-model="content" language="java" />
    </div>
  </ContentWrap>
</template>
