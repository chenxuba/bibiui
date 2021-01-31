<template>
  <div class="left">
    <!-- 搜索栏 -->
    <div class="input">
      <input type="text" placeholder="Type to search">
    </div>
    <!-- 标题 -->
    <div class="title">Bibi UI</div>
    <!-- 开发指南 -->
    <div class="bb-doc-nav_group">
      <div class="bb-doc-nav_title">
        开发指南
      </div>
      <ol>
        <li>
          <router-link active-class='active' to="/doc/introduce">介绍</router-link>
        </li>
        <li>
          <router-link active-class='active' to="/doc/quickstart">快速上手</router-link>
        </li>
      </ol>
    </div>
    <!-- 基础组件 -->
    <div class="bb-doc-nav_group">
      <div class="bb-doc-nav_title">
        基础组件
      </div>
      <ol>
        <li v-for="(item,index) in list1" :key="index">
          <router-link active-class='active' :to="item.url">{{item.name}}</router-link>
        </li>
      </ol>
    </div>
  </div>

</template>

<script lang="ts">
import { reactive } from "vue"
export default {
  setup() {
    const list1 = reactive([
      { url: "/doc/icon", name: "Icon 图标" },
      { url: "/doc/button", name: "Button 按钮" },
      { url: "/doc/switch", name: "Switch 开关" },
      { url: "/doc/dialog", name: "Dialog 弹出框" },
      { url: "/doc/tab", name: "Tab 标签页" },
      { url: "/doc/cell", name: "Cell 单元格" },
      { url: "/doc/field", name: "Field 输入框" },
      { url: "/doc/search", name: "Search 搜索" },
      { url: "/doc/navbar", name: "NavBar 导航栏" }
    ])
    return { list1 }
  }
}
</script>

<style lang="scss" scoped>
.left {
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .input {
    width: 100%;
    padding: 5px 10px 5px 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    input {
      width: 100%;
      height: 35px;
      border: none;
      outline: none;
      text-indent: 10px;
    }
    input[type="text"]:focus {
      border: 1px solid #25798a;
      box-shadow: 0px 0px 5px 1px #25798a;
    }
    input[type="text"]::placeholder {
      color: #999;
    }
  }
  .title {
    text-align: center;
    line-height: 80px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 30px;
  }
  .bb-doc-nav_group {
    .bb-doc-nav_title {
      padding: 8px 0 8px 30px;
      color: #455a64;
      font-weight: 600;
      font-size: 15px;
      margin: 10px 0 18px 0;
    }
    ol {
      padding-left: 30px;
      box-sizing: border-box;
      li {
        font-size: 13px;
        margin: 18px 0;
        &:hover {
          a {
            color: #4fc08d;
          }
        }
        a {
          text-decoration: none;
          color: #455a64;
          display: block;
          line-height: 25px;
        }
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 30px;
        }
      }
    }
  }
  .active {
    color: #4fc08d !important;
    // border-right: 2px solid #4fc08d;
    background: #effef1;
    margin-right: 10px;
    padding: 0px 10px;
    transform: translateX(-10px);
    border-radius: 40px;
  }
}
</style>