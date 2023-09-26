
import { createApp } from 'vue'
import App from './App.vue'

import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

/*// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});*/
VMdPreview.use(vuepressTheme)
VMdEditor.use(vuepressTheme);

const app = createApp(App)

app.use(VMdEditor);
app.use(VMdPreview)

app.mount('#app')
