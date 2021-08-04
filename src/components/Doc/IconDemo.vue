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
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">name</span>属性来指定需要使用的图标，bibiUi 内置了一套图标库（见右侧示例），可以直接传入对应的名称来使用。
      </p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-icon name</span>=<span style="color:#4fc08d;">"msg-o"</span> /&gt;</p>
      </div>
    </div>
    <!-- 图标颜色 -->
    <div class="card desc">
      <h2>图标颜色</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">color</span>属性来设置图标的颜色。
      </p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-icon name</span>=<span style="color:#4fc08d;">"msg-o"</span> <span
            style="color:#4994df;">color</span>=<span style="color:#4fc08d;">"#fe8130"</span> /&gt;</p>
      </div>
    </div>
    <!-- 使用图片 URL -->
    <div class="card desc">
      <h2>使用图片 URL</h2>
      <p>你也可以直接在 <span style="padding:2px 5px;background:#f7f8fa;">name</span>属性中传入一个图片 URL 来作为图标。
      </p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-icon name</span>=<span style="color:#4fc08d;">"https://b.yzcdn.cn/vant/icon-demo-1126.png"</span> /&gt;
        </p>
      </div>
    </div>
    <!-- 图标大小 -->
    <div class="card desc">
      <h2>图标大小</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">size</span>属性来设置图标的尺寸大小，暂时只支持px单位且必须指定
      </p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-icon name</span>=<span style="color:#4fc08d;">"msg-o"</span> <span style="color:#4994df;">
            size</span>=<span style="color:#4fc08d;">"30px"</span> /&gt;
        </p>
      </div>
    </div>
    <!-- API -->
    <div class="logo">
      <p class="intro p">
        API
      </p>
    </div>
    <div class="card desc">
      <h2 class="api">Tabs Props</h2>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in apiList" :key="index">
            <td>{{item.a}}</td>
            <td>{{item.b}}</td>
            <td>
              <em>{{item.c}}</em>
            </td>
            <td>{{item.d}}</td>
          </tr>
        </tbody>
      </table>
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

import { ref, reactive } from "vue"
export default {
  components: {
    bbIcon,
    bbTabs,
    bbTab,
    DemoModel
  },
  setup() {
    const active = ref(0)
    const apiList = reactive([
      { a: "name", b: "图标名称或图片链接", c: "string", d: "-" },
      { a: "color", b: "图标颜色", c: "string", d: "inherit" },
      { a: "size", b: "图标大小，如 20px，必须携带单位 px	", c: "string", d: "32px" }
    ])
    return { active, apiList }
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