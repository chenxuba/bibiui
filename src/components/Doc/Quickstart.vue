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
.right {
  width: 340px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 12px #ebedf0;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  min-height: 500px;
  overflow: auto;
  text-align: center;
  position: fixed;
  top: 25px;
  right: 20px;
  bottom: 25px;
  img {
    width: 150px;
  }
  .bb-doc-nav_group {
    text-align: left;
    .bb-doc-nav_title {
      font-size: 14px;
      color: #455a6499;
      margin: 24px 0 15px 20px;
    }
    ol {
      box-sizing: border-box;
      li {
        font-size: 13px;
        margin: 18px 0;
        padding: 5px 15px 5px 20px;
        box-sizing: border-box;
        border-radius: 30px;
        background: #f7f8fa;

        a {
          text-decoration: none;
          color: #455a64;
          display: block;
          line-height: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icon {
            color: #455a64;
          }
        }
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 30px;
        }
        &:hover {
          background: #eff0f4;
        }
      }
    }
  }
}
// 去除滚动条
::-webkit-scrollbar {
  width: 0px;
}
</style>