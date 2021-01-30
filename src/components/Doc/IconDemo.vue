<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Icon 图标
      </p>
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
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">v-model:active</span>绑定当前激活标签对应的active值。
      </p>
      <div class="pre">
        <pre>
&lt;<span style="color:#4994df;">bb-Tabs v-model:active</span>=<span style="color:#4fc08d;">'active'</span>&gt;

  &lt;<span style="color:#4994df;">bb-Tab title</span>=<span style="color:#4fc08d;">'标签一'</span>&gt;内容1&lt;/<span style="color:#4994df;">bb-Tab</span>&gt;

  &lt;<span style="color:#4994df;">bb-Tab title</span>=<span style="color:#4fc08d;">'标签二'</span>&gt;内容2&lt;/<span style="color:#4994df;">bb-Tab</span>&gt;

  &lt;<span style="color:#4994df;">bb-Tab title</span>=<span style="color:#4fc08d;">'标签三'</span>&gt;内容3&lt;/<span style="color:#4994df;">bb-Tab</span>&gt;

  &lt;<span style="color:#4994df;">bb-Tab title</span>=<span style="color:#4fc08d;">'标签四'</span>&gt;内容4&lt;/<span style="color:#4994df;">bb-Tab</span>&gt;

  &lt;<span style="color:#4994df;">bb-Tab title</span>=<span style="color:#4fc08d;">'标签五'</span>&gt;内容5&lt;/<span style="color:#4994df;">bb-Tab</span>&gt;

&lt;/<span style="color:#4994df;">bb-Tabs</span>&gt;
            </pre>
      </div>
      <div class="pre">
        <pre>


<span style="color:#8080ff;">export default</span> { 

  <span style="color:#4994df;">setup</span>() {

    <span style="color:#8080ff;">const</span> active = ref(<span style="color:#eb6f6f;">0</span>);

    <span style="color:#8080ff;">return</span> { active };

  },
};
        </pre>
      </div>
    </div>
    <!-- API -->
    <div class="logo">
      <p class="intro p">
        API
      </p>
    </div>

  </div>
  <!-- right -->
  <DemoModel title='Icon'>
    <!-- tab -->
    <bb-tabs v-model:active="active">
      <bb-tab title="用法示例">
        <!-- 基础用法 -->
        <div class="bb-doc-demo-block">
          <h2 class="bb-doc-demo-block__title">基础用法</h2>
          <div class="demo-button-row">
            <bb-icon name='msg-o'></bb-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <bb-icon name='right'></bb-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <bb-icon name='https://b.yzcdn.cn/vant/icon-demo-1126.png'></bb-icon>
          </div>
        </div>
        <!-- 图标颜色 -->
        <div class="bb-doc-demo-block">
          <h2 class="bb-doc-demo-block__title">图标颜色</h2>
          <div class="demo-button-row">
            <bb-icon name='fire-o' color='red'></bb-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <bb-icon name='car-o' color='#fe8130'></bb-icon>
          </div>
        </div>
        <!-- 图标大小 -->
        <div class="bb-doc-demo-block">
          <h2 class="bb-doc-demo-block__title">图标大小</h2>
          <div class="demo-button-row">
            <bb-icon name='msg-o' size='40px'></bb-icon>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <bb-icon name='msg-o' size='45px'></bb-icon>
          </div>
        </div>
      </bb-tab>
      <bb-tab title="基础图标">基础图标</bb-tab>
      <bb-tab title="线框风格">线框风格</bb-tab>
      <bb-tab title="实底风格">实底风格</bb-tab>
    </bb-tabs>
  </DemoModel>
</template>

<script lang='ts'>
import bbIcon from "../../lib/Icon.vue"
import bbTabs from "../../lib/Tabs.vue"
import bbTab from "../../lib/Tab.vue"
import DemoModel from "../Common/demoModel.vue"

import { ref } from "vue"
export default {
  components: {
    bbIcon,
    bbTabs,
    bbTab,
    DemoModel
  },
  setup() {
    const active = ref(0)
    return { active }
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
  // padding: 10px 20px 0 20px;
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
  padding: 15px 0px 16px 0px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>