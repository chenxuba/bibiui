<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Dialog 弹窗
      </p>
    </div>
    <!-- 介绍 -->
    <div class="card desc">
      <h1>介绍</h1>
      <p>弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
      </p>
      <p>弹出框组件 <span style="color:red">暂不支持</span> 函数调用（后期维护更新）仅支持组件调用方式。</p>
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
    <!-- 组件调用 -->
    <div class="card desc">
      <h2>组件调用</h2>
      <p>如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。</p>
      <div class="pre">
        <pre>


&lt;<span style="color:#4994df;">bb-dialog v-model:show</span>=<span style="color:#4fc08d;">"showDialogFlag"</span> <span style="color:#4994df;">@confirm</span>=<span style="color:#4fc08d;">'confirm'</span> <span style="color:#4994df;">@cancel</span>=<span style="color:#4fc08d;">'cancel'</span> 

  <span style="color:#4994df;">confirm-button-color</span>=<span style="color:#4fc08d;">'#fe8130'</span> <span style="color:#4994df;">confirm-button-text</span>=<span style="color:#4fc08d;">'确认'</span>

  <span style="color:#4994df;">showCancelButton</span> <span style="color:#4994df;">title</span>=<span style="color:#4fc08d;">"温馨提示"</span>&gt;

   欢迎加微信1115009958交流，求成都内推前端开发

&lt;/<span style="color:#4994df;">bb-dialog</span>&gt;
        </pre>
      </div>
      <div class="pre">
        <pre>
<p><span style="color:#8080ff;">import</span> { ref } <span style="color:#8080ff;">from</span> <span style="color:#4fc08d">'vue'</span>;</p>

<span style="color:#8080ff;">export default</span> { 

  <span style="color:#4994df;">setup</span>() {

    <span style="color:#8080ff;">const</span> showDialogFlag = ref(<span style="color:#eb6f6f;">false</span>);

    <span style="color:#8080ff;">const</span> confirm = () <span style="color:#8080ff;">=></span> {

      <span style="color:#4994df;">alert</span>("你点了确认")

    }

    <span style="color:#8080ff;">const</span> cancel = () <span style="color:#8080ff;">=></span> {

      <span style="color:#4994df;">alert</span>("你点了取消")

    }

    <span style="color:#8080ff;">return</span> { showDialogFlag };

  },
};
        </pre>
      </div>

    </div>
  </div>
  <DemoModel title='Dialog'>
    <!-- 组件调用 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">组件调用</h2>
      <div class="demo-button-row">
        <bb-button color="#fe8130" size='small' @click="toggle">提示弹窗</bb-button>
        <bb-dialog v-model:show="showDialogFlag" @confirm='confirm' @cancel='cancel' confirm-button-color='#fe8130' confirm-button-text='确认'
          showCancelButton title="温馨提示">
          欢迎加微信1115009958交流，求成都内推前端开发
        </bb-dialog>
      </div>
    </div>
  </DemoModel>
</template>

<script lang='ts'>
import { ref } from "vue"
import bbDialog from "../../lib/Dialog.vue"
import bbButton from "../../lib/Button.vue"
import DemoModel from "../Common/demoModel.vue"

export default {
  components: {
    bbDialog,
    bbButton,
    DemoModel
  },
  setup() {
    const showDialogFlag = ref(false)
    const toggle = () => {
      showDialogFlag.value = !showDialogFlag.value
    }
    const confirm = () => {
      alert("你点了确认")
    }
    const cancel = () => {
      alert("你点了取消")
    }
    return { showDialogFlag, toggle, confirm, cancel }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
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