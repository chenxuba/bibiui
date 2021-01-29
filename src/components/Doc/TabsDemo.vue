<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Tab 标签页
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
  <div class="right">
    <div class="demo-nav">
      <div class="demo-nav__title">Tab</div>
      <svg class="demo-nav__back" viewBox="0 0 1000 1000">
        <path fill="#969799" fill-rule="evenodd"
          d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z">
        </path>
      </svg>
    </div>
    <!-- 基础用法 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">基础用法</h2>
      <div class="demo-button-row">
        <bb-Tabs v-model:active='active'>
          <bb-Tab title='标签一'>内容1</bb-Tab>
          <bb-Tab title='标签二'>内容2</bb-Tab>
          <bb-Tab title='标签三'>内容3</bb-Tab>
          <bb-Tab title='标签四'>内容4</bb-Tab>
          <bb-Tab title='标签五'>内容5</bb-Tab>
        </bb-Tabs>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, ref } from "vue"
import bbTabs from "../../lib/Tabs.vue"
import bbTab from "../../lib/Tab.vue"
export default {
  components: {
    bbTabs,
    bbTab
  },
  setup() {
    const active = ref(0)
    const apiList = reactive([
      { a: "v-model:active", b: "绑定当前选中标签的标识符", c: "number", d: "0" },
      { a: "color", b: "标签主题色", c: "string", d: "#ee0a24" },
      { a: "background", b: "标签栏背景色	", c: "string", d: "white" },
      { a: "line-width", b: "底部条宽度，默认单位 px", c: "string", d: "30px" },
      { a: "line-height", b: "底部条高度，默认单位 px	", c: "string", d: "3px" },
      { a: "title-active-color", b: "标题选中态颜色	", c: "string", d: "-" },
      { a: "title-inactive-color", b: "标题默认态颜色	", c: "string", d: "-" }
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
.right {
  width: 350px;
  background: #f7f8fa;
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
    padding: 15px 0px 16px 16px;
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