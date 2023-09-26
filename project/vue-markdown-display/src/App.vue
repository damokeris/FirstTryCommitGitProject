<!-- 测试markdown转html -->
<template>
  <div class="a">v-md-editor预览组件测试：</div>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script>
import markdownContent from './assets/markdown/demo.md?raw';

export default {
  data() {
    return {
      text: markdownContent,
    };
  },
};
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>