<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Search 搜索
      </p>
    </div>
    <!-- 引入 -->
    <div class="card desc">
      <h2>引入</h2>
      <p>请参考 <router-link to="/doc/quickstart" style="color:#398af2;text-decoration: none;">快速上手</router-link> 章节。</p>
    </div>
    <!-- 代码演示 -->
    <!-- <div class="logo">
      <p class="intro p">
        代码演示
      </p>
    </div> -->
    <!-- 基础用法 -->
    <!-- <div class="card desc">
      <h2>基础用法</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">v-model:active</span>绑定当前激活标签对应的active值。
      </p>
    </div> -->
    <!-- API -->

  </div>
  <!-- right -->
  <DemoModel title="Search">
    <!-- 基础用法 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">基础用法</h2>
      <div class="demo-button-row">
        <bb-search v-model:value="value" placeholder="请输入搜索关键词"></bb-search>
        <div v-if="value!=''" class="l" style="padding:10px 0 0 15px;color:#fe8130;font-size:14px;">您输入的是：{{value}}</div>
      </div>
    </div>
    <!-- 自定义背景色 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">自定义背景色</h2>
      <div class="demo-button-row">
        <bb-search v-model:value="value" background="#fe8130" shape="round" placeholder="请输入搜索关键词"></bb-search>
        <div v-if="value!=''" class="l" style="padding:10px 0 0 15px;color:#fe8130;font-size:14px;">您输入的是：{{value}}</div>
      </div>
    </div>
  </DemoModel>
</template>

<script lang='ts'>
import DemoModel from "../Common/demoModel.vue"
import bbSearch from "../../lib/Search.vue"
import { ref } from "vue"
export default {
  components: {
    DemoModel,
    bbSearch
  },
  setup() {
    const value = ref("")
    return { value }
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
      background: #fafafa;
      padding: 10px 15px;
      box-sizing: border-box;
      margin-top: 20px;
      border-radius: 10px;
      color: #58727e;
      font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
      font-size: 14px;
      h2 {
        margin-bottom: 20px;
        color: black;
      }
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
    .api {
      margin-bottom: 25px;
      font-weight: 600;
      font-size: 18px;
    }
    table {
      width: 100%;
      margin-top: 12px;
      color: #34495e;
      font-size: 14px;
      line-height: 1.5;
      border-collapse: collapse;
      text-align: left;
      thead {
        > tr {
          th {
            padding-bottom: 10px;
          }
        }
      }
      td {
        padding: 10px 0;
        border-top: 1px solid #f1f4f8;
        font-size: 13px;
        &:first-child {
          padding-left: 0;
        }
        em {
          color: #4fc08d;
          font-size: 14px;
          font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
          font-style: normal;
          -webkit-font-smoothing: auto;
        }
      }
    }
  }
}
.bb-doc-demo-block {
  .demo-button-row {
    margin-bottom: 15px;
    > span {
      margin-left: 10px;
      color: #455a64;
    }
  }
}
.bb-doc-demo-block__title {
  padding: 15px 0px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>