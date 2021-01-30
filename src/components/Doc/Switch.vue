<template>
  <!-- left -->
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Switch 开关
      </p>
    </div>
    <!-- 介绍 -->
    <div class="card desc">
      <h1>介绍</h1>
      <p>用于在打开和关闭状态之间进行切换。</p>
    </div>
    <!-- 引入 -->
    <div class="card desc">
      <h2>引入</h2>
      <p>请参考 <router-link to="/doc/quickstart" style="color:#398af2;text-decoration: none;">快速上手</router-link> 章节。</p>
    </div>
    <!-- 代码演示 -->
    <div class="logo">
      <p class="intro p">
        代码演示
      </p>
    </div>
    <!-- 基础用法 -->
    <div class="card desc">
      <h2>基础用法</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">v-model:value </span>绑定开关的选中状态，<span
          style="padding:2px 5px;background:#f7f8fa;">true</span>表示开。<span style="padding:2px 5px;background:#f7f8fa;">false</span>表示关。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">van-switch v-model:value</span>=<span style="color:#4fc08d;">"checked"</span> /&gt;</p>
      </div>
      <div class="pre">
        <p><span style="color:#8080ff;">import</span> { ref } <span style="color:#8080ff;">from</span> <span style="color:#4fc08d">'vue'</span>;</p>
        <pre>


<span style="color:#8080ff;">export default</span> { 

  <span style="color:#4994df;">setup</span>() {

    <span style="color:#8080ff;">const</span> checked = ref(<span style="color:#eb6f6f;">true</span>);

    <span style="color:#8080ff;">return</span> { checked };

  },
};
        </pre>
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="card desc">
      <h2>禁用状态</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">disabled </span>属性来禁用开关，禁用状态下开关不可点击。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">van-switch v-model:value</span>=<span style="color:#4fc08d;">"checked" </span> <span
            style="color:#4994df">disabled</span> /&gt;</p>
      </div>
    </div>
    <!-- 自定义颜色 -->
    <div class="card desc">
      <h2>自定义颜色</h2>
      <p><span style="padding:2px 5px;background:#f7f8fa;">active-color </span>属性表示打开时的背景色，<span
          style="padding:2px 5px;background:#f7f8fa;">inactive-color </span>表示关闭时的背景色。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">van-switch v-model:value</span>=<span style="color:#4fc08d;">"checked" </span> <span
            style="color:#4994df">active-color</span>=<span style="color:#4fc08d;">"#dc3131" </span> <span
            style="color:#4994df">inactive-color</span>=<span style="color:#4fc08d;">"#dcdee0" </span> /&gt;</p>
      </div>
    </div>
  </div>
  <!-- right -->
  <DemoModel title='Switch'>
    <!-- 基础用法 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">基础用法</h2>
      <div class="demo-button-row">
        <!-- <bb-switch :value='y' @update:value="y = $event"></bb-switch> -->
        <bb-switch v-model:value='checked'></bb-switch>
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">禁用状态</h2>
      <div class="demo-button-row">
        <bb-switch v-model:value='checked' disabled></bb-switch>
      </div>
    </div>
    <!-- 自定义颜色 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">自定义颜色</h2>
      <div class="demo-button-row">
        <bb-switch v-model:value='checked' active-color='#dc3131' inactive-color="#dcdee0"></bb-switch>
      </div>
    </div>
  </DemoModel>
</template>

<script lang='ts'>
import { ref } from "vue"
import bbSwitch from "../../lib/Switch.vue"
import DemoModel from "../Common/demoModel.vue"

export default {
  components: {
    bbSwitch,
    DemoModel
  },
  setup() {
    const checked = ref(true)
    return { checked }
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
  }
}
.right {
  width: 350px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 12px #ebedf0;
  box-sizing: border-box;
  min-height: 500px;
  overflow: auto;
  position: fixed;
  top: 25px;
  right: 20px;
  bottom: 25px;
  .bb-doc-demo-block {
    padding: 10px 20px 0 20px;
    .demo-button-row {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      > span {
        margin-left: 10px;
        color: #455a64;
      }
    }
  }
  .bb-doc-demo-block__title {
    padding: 15px 0px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .demo-nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background-color: #fff;
    .demo-nav__title {
      font-weight: 600;
      font-size: 17px;
      text-transform: capitalize;
    }
    .demo-nav__back {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
}
// 去除滚动条
::-webkit-scrollbar {
  width: 0px;
}
</style>