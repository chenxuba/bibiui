<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        快速上手
      </p>
    </div>
    <!-- 介绍 -->
    <div class="card desc">
      <h1>介绍</h1>
      <p>通过本章节你可以了解到 Bibi-ui 的安装方法和基本使用姿势。</p>
    </div>
    <!-- 安装 -->
    <div class="logo">
      <p class="intro p">
        安装
      </p>
    </div>
    <div class="card desc">
      <h2>通过 npm 安装</h2>
      <p>在现有项目中使用 Bibi-ui 时，可以通过 npm 或 yarn 进行安装：</p>
      <!-- <pre class="language-css" v-html="Prism.highlight(html, Prism.languages.html, 'html')" /> -->
      <div class="pre">
        <p class="md"># Vue 3 项目，npm安装 Bibi-ui：</p>
        <p class="p1">npm i bibi-ui -S</p>
        <p class="md"># Vue 3 项目，yarn安装 Bibi-ui：</p>
        <p>yarn add bibi-ui</p>
      </div>
    </div>
    <!-- 引入组件 -->
    <div class="logo">
      <p class="intro p">
        引入组件
      </p>
    </div>
    <div class="card desc">
      <h2>方式一.导入所有组件</h2>
      <p>Bibi-ui 支持一次性导入所有组件，目前仅支持该方式引入，后期会加入按需加载的方式。</p>
      <!-- <pre class="language-css" v-html="Prism.highlight(html, Prism.languages.html, 'html')" /> -->
      <div class="pre">
        <p><span style="color:#8080ff;">import</span> { createApp } <span style="color:#8080ff;">from</span> <span style="color:#4fc08d">'vue'</span>
          ;</p>
        <p><span style="color:#8080ff;">import</span> { bibiUI } <span style="color:#8080ff;">from</span> <span
            style="color:#4fc08d">'bibi-ui'</span>;</p>
        <p class="p1"><span style="color:#8080ff;">import</span> <span style="color:#4fc08d">'bibi-ui/dist/lib/bibiUI.css'</span>;</p>
        <p><span style="color:#8080ff;">const</span> app = createApp();</p>
        <p>app.use(bibiUI);</p>
      </div>
    </div>
    <div class="card desc">
      <h2>方式二.按需引入所需组件 ( 推荐！！！)</h2>
      <p>Bibi-ui 支持按需引入所需组件，不用安装任何插件。在 <span style="color:red">src</span> 目录下创建 <span style="color:red">plugins/bibi-ui.js</span></p>
      <div class="pre">
        <p><span style="color:#8080ff;">import</span> { createApp } <span style="color:#8080ff;">from</span> <span style="color:#4fc08d">'vue'</span>
          ;</p>
        <p><span style="color:#8080ff;">import</span> bibiUI <span style="color:#8080ff;">from</span> <span
            style="color:#4fc08d">'@/plugins/bibi-ui'</span>;</p>
        <p><span style="color:#8080ff;">const</span> app = createApp();</p>
        <p>app.use(bibiUI);</p>
      </div>
      <p><span style="color:red">plugins/bibi-ui.js</span> 写法如下</p>

      <div class="pre">
        <p><span style="color:#8080ff;">import</span> { bbButton, bbTabs, bbTab } <span style="color:#8080ff;">from</span> <span
            style="color:#4fc08d">'bibi-ui'</span></p>
        <p><span style="color:#8080ff;">import</span> <span style="color:#4fc08d">'bibi-ui/dist/lib/bibiUI.css' </span> </p>
        <p> <span style="color:#8080ff;">export default</span> { </p>
        <p><span style="color:#8080ff;"> install</span>: (app) => {</p>
        <p>&nbsp;&nbsp;&nbsp; <span style="color:#8080ff;">app.component</span>("bbButton", bbButton);</p>
        <p>&nbsp;&nbsp;&nbsp; <span style="color:#8080ff;">app.component</span>("bbTabs", bbTabs);</p>
        <p>&nbsp;&nbsp;&nbsp; <span style="color:#8080ff;">app.component</span>("bbTab", bbTab);</p>
        <p>&nbsp;&nbsp;}</p>
        <p>};</p>
        <!-- import { bbButton, bbTabs, bbTab } from "bibi-ui";
        import 'bibi-ui/dist/lib/bibiUI.css'
        export default {
            install: (app) => {
                app.component("bbButton", bbButton);
                app.component("bbTabs", bbTabs);
                app.component("bbTab", bbTab);
            },
        }; -->
      </div>

    </div>
  </div>
  <RightNav></RightNav>
</template>

<script lang='ts'>
import { ref } from "vue"
import RightNav from "../Common/rightNav.vue"

export default {
  components: {
    RightNav
  },
  setup() {
    const html = ref(`
#Vue 3 项目，npm安装 Bibi-ui：

npm i bibi-ui -S

#Vue 3 项目，yarn安装 Bibi-ui：

yarn add bibi-ui
    `)

    return { html }
  }
}
</script>

<style lang="scss" scoped>
.left {
  padding-right: 370px;
  .card {
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
  }
  .logo {
    .intro {
      color: #323233;
      font-size: 25px;
    }
    .p {
      margin-top: 50px;
    }
  }
  .desc {
    height: auto;
    margin-top: 25px;
    padding: 20px;
    box-sizing: border-box;
    h1 {
      font-size: 16px;
      font-weight: 500;
      color: #455a64;
    }
    > p {
      font-size: 14px;
      color: #455a64;
      line-height: 25px;
      margin-top: 20px;
    }
    h2 {
      font-size: 17px;
    }
    .pre {
      width: 100%;
      background: #eef9fe;
      padding: 10px 15px;
      box-sizing: border-box;
      margin-top: 20px;
      border-radius: 10px;
      color: #58727e;
      font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
      font-size: 14px;
      p {
        line-height: 30px;
      }
      .md {
        color: #999;
        font-size: 14px;
      }
      .p1 {
        margin-bottom: 20px;
      }
    }
  }
}
</style>