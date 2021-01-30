<template>
  <div class="flex">
    <div class="left">
      <!-- logo -->
      <div class="card logo">
        <img src="../../assets/logo.png" alt="">
        <p class="intro">轻量、可靠的移动端 Vue3 组件库</p>
      </div>
      <!-- 介绍 -->
      <div class="card desc">
        <h1>介绍</h1>
        <p>BiBi-UI 是由 <span style="color:#333;font-weight:bold;">个人开发者</span> 开源的移动端组件库，于 2021 年开源，会持续维护。欢迎大家使用，本库会争取成为业界主流的 <span
            style="color:#333;font-weight:bold;">Vue3</span> 移动端组件库之一。</p>
      </div>
      <!-- 快速上手 -->
      <div class="card desc">
        <h1>快速上手</h1>
        <p>请参考 <router-link to="/doc/quickstart" style="color:#398af2;text-decoration: none;">快速上手</router-link> 章节。</p>
      </div>
      <!-- 开源协议 -->
      <div class="card desc">
        <h1>开源协议</h1>
        <p>本项目基于 <a target="_blank" href="https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89"
            style="color:#398af2;text-decoration: none;">MIT</a> 协议，请自由地享受和参与开源。
        </p>
      </div>
    </div>
    <RightNav></RightNav>
  </div>
</template>

<script>
import { reactive } from 'vue';
import RightNav from "../Common/rightNav.vue";
export default {
  components: {
    RightNav
  },
  setup() {

  }
}
</script>

<style lang="scss" scoped>
.flex {
  .left {
    padding-right: 360px;
    .card {
      width: 100%;
      height: 200px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 8px 12px #ebedf0;
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 200px;
      }
      .intro {
        line-height: 60px;
        font-size: 15px;
        color: #455a64;
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
    }
  }
}
</style>