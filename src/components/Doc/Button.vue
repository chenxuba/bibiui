<template>
  <div class="left">
    <!-- logo -->
    <div class="logo">
      <p class="intro">
        Button 按钮
      </p>
    </div>
    <!-- 介绍 -->
    <div class="card desc">
      <h1>介绍</h1>
      <p>按钮用于触发一个操作，如提交表单。</p>
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
    <!-- 按钮类型 -->
    <div class="card desc">
      <h2>按钮类型</h2>
      <p>按钮支持 <span style="padding:2px 5px;background:#f7f8fa;">default</span>、<span style="padding:2px 5px;background:#f7f8fa;">primary
        </span>、<span style="padding:2px 5px;background:#f7f8fa;">success </span>、<span style="padding:2px 5px;background:#f7f8fa;">warning
        </span>、<span style="padding:2px 5px;background:#f7f8fa;">danger </span>五种类型，默认为<span
          style="padding:2px 5px;background:#f7f8fa;">default</span>。</p>
      <div class="pre">
        <!-- <p><span style="color:#8080ff;">import</span> { createApp } <span style="color:#8080ff;">from</span> <span style="color:#4fc08d">'vue'</span>
          ;</p>
        <p><span style="color:#8080ff;">import</span> { button } <span style="color:#8080ff;">from</span> <span
            style="color:#4fc08d">'bibi-ui'</span>;</p>
        <p class="p1"><span style="color:#8080ff;">import</span> <span style="col or:#4fc08d">'bibi-ui/dist/lib/bibiUI.css'</span>;</p>
        <p><span style="color:#8080ff;">const</span> app = createApp();</p>
        <p>app.use(bibiUI);</p> -->
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"primary"</span>&gt;主要按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"success"</span>&gt;成功按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"default"</span>&gt;默认按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"warning"</span>&gt;警告按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"danger"</span>&gt;危险按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 朴素按钮 -->
    <div class="card desc">
      <h2>朴素按钮</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">plain</span>属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button plain type</span>=<span style="color:#4fc08d;">"primary"</span>&gt;主要按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button plain type</span>=<span style="color:#4fc08d;">"success"</span>&gt;成功按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 按钮尺寸 -->
    <div class="card desc">
      <h2>禁用状态</h2>
      <p>支持 <span style="padding:2px 5px;background:#f7f8fa;">large</span>、<span style="padding:2px 5px;background:#f7f8fa;">normal
        </span>、<span style="padding:2px 5px;background:#f7f8fa;">small </span>、<span style="padding:2px 5px;background:#f7f8fa;">mini
        </span>、四种类型，默认为<span style="padding:2px 5px;background:#f7f8fa;">large</span>。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"primary"</span> <span style="color:#4994df;">
            size</span>=<span style="color:#4fc08d;">"large"</span>&gt;大号按钮&lt;/<span style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"primary"</span> <span style="color:#4994df;">
            size</span>=<span style="color:#4fc08d;">"normal"</span>&gt;普通按钮&lt;/<span style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"primary"</span> <span style="color:#4994df;">
            size</span>=<span style="color:#4fc08d;">"small"</span>&gt;小型按钮&lt;/<span style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button type</span>=<span style="color:#4fc08d;">"primary"</span> <span style="color:#4994df;">
            size</span>=<span style="color:#4fc08d;">"mini"</span>&gt;迷你按钮&lt;/<span style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="card desc">
      <h2>禁用状态</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">disabled</span>属性来禁用按钮，禁用状态下按钮不可点击。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button disabled type</span>=<span style="color:#4fc08d;">"primary"</span>&gt;禁用状态&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button disabled type</span>=<span style="color:#4fc08d;">"success"</span>&gt;禁用状态&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 加载状态 -->
    <div class="card desc">
      <h2>加载状态</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">loading</span>属性设置按钮为加载状态，单标签闭合会隐藏按钮文字，如果要展示文字，请使用插槽的方式。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button loading type</span>=<span style="color:#4fc08d;">"primary"</span>/&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button loading type</span>=<span style="color:#4fc08d;">"success"</span>&gt;加载中...&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 按钮形状 -->
    <div class="card desc">
      <h2>按钮形状</h2>
      <p>通过 <span style="padding:2px 5px;background:#f7f8fa;">square</span>设置方形按钮，通过 <span
          style="padding:2px 5px;background:#f7f8fa;">round</span>设置圆形按钮</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button square type</span>=<span style="color:#4fc08d;">"primary"</span>&gt;方形按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button round type</span>=<span style="color:#4fc08d;">"success"</span>&gt;圆形按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 块级元素 -->
    <div class="card desc">
      <h2>块级元素</h2>
      <p>按钮在默认情况下为行内块级元素，通过<span style="padding:2px 5px;background:#f7f8fa;">block</span>属性可将按钮的元素类型设置为块级元素。permission.js</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button block type</span>=<span style="color:#4fc08d;">"primary"</span>&gt;块级元素&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
      </div>
    </div>
    <!-- 自定义颜色 -->
    <div class="card desc">
      <h2>自定义颜色</h2>
      <p>通过<span style="padding:2px 5px;background:#f7f8fa;">color</span>属性可以自定义按钮的颜色。</p>
      <div class="pre">
        <p>&lt;<span style="color:#4994df;">bb-button color</span>=<span style="color:#4fc08d;">"#7232dd"</span>&gt;单色按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button plain color</span>=<span style="color:#4fc08d;">"#7232dd"</span>&gt;单色按钮&lt;/<span
            style="color:#4994df;">bb-button</span>&gt;</p>
        <p>&lt;<span style="color:#4994df;">bb-button color</span>=<span style="color:#4fc08d;">"linear-gradient(to right, #ff6034,
            #ee0a24)"</span>&gt;
          <br>
          渐变色按钮
          <br>
          &lt;/<span style="color:#4994df;">bb-button</span>&gt;
        </p>
      </div>
    </div>
  </div>
  <DemoModel title="Button">
    <!-- 按钮类型 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">按钮类型</h2>
      <div class="demo-button-row">
        <bb-button type='primary'>主要按钮</bb-button>
        <bb-button type='success'>成功按钮</bb-button>
        <bb-button type='default'>默认按钮</bb-button>
      </div>
      <bb-button type='danger'>危险按钮</bb-button>
      <bb-button type='warning'>警告按钮</bb-button>
    </div>
    <!-- 朴素按钮 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">朴素按钮</h2>
      <div class="demo-button-row">
        <bb-button type='primary' plain>朴素按钮</bb-button>
        <bb-button type='success' plain>朴素按钮</bb-button>
      </div>
    </div>
    <!-- 按钮尺寸 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">按钮尺寸</h2>
      <div class="demo-button-row">
        <bb-button type='primary' size="large">大号按钮</bb-button>
      </div>
      <bb-button type='primary' size="normal">普通按钮</bb-button>
      <bb-button type='primary' size="small">小型按钮</bb-button>
      <bb-button type='primary' size="mini">迷你按钮</bb-button>
    </div>
    <!-- 禁用状态 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">禁用状态</h2>
      <div class="demo-button-row">
        <bb-button type='primary' disabled>禁用状态</bb-button>
        <bb-button type='warning' :disabled='true'>禁用状态</bb-button>
      </div>
    </div>
    <!-- 加载状态 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">加载状态</h2>
      <div class="demo-button-row">
        <bb-button type='primary' loading />
        <bb-button type='danger' :loading='true'>加载中...</bb-button>
      </div>
    </div>
    <!-- 按钮形状 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">按钮形状</h2>
      <div class="demo-button-row">
        <bb-button type='primary' square>方形按钮</bb-button>
        <bb-button type='success' round>圆形按钮</bb-button>
      </div>
    </div>
    <!-- 块级元素 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">块级元素</h2>
      <div class="demo-button-row">
        <bb-button type='success' block>块级元素</bb-button>
      </div>
    </div>
    <!-- 自定义颜色 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">自定义颜色</h2>
      <div class="demo-button-row">
        <bb-button type='primary' color='#7232dd'>单色按钮</bb-button>
        <bb-button type='primary' color='#fe8130' plain>单色按钮</bb-button>
        <bb-button type='primary' color='linear-gradient(to right, #ff6034, #ee0a24)'>渐变色按钮</bb-button>
      </div>
    </div>
  </DemoModel>
</template>

<script lang='ts'>
import { ref } from "vue"
import bbButton from "../../lib/Button.vue"
import DemoModel from "../Common/demoModel.vue"

export default {
  components: {
    bbButton,
    DemoModel
  },
  setup() {
    const onClick = () => {
      console.log(111)
    }

    return { onClick }
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