<template>
  <svg viewBox="0 0 250 250" aria-hidden="true">
    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
    <path
      d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
      fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
    <path
      d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
      fill="currentColor" class="octo-body"></path>
  </svg>
  <section class="cover">
    <div class="mask"></div>
    <div class="cover-main">
      <h1 id="bibi-ui">
        <span>BiBi UI</span>
      </h1>
      <p class="text">一款不哔哔的Vue3组件库</p>
      <p class="desc">A vue3 component library without beep</p>
      <div class="item">
        <span>
          <a href="#">GitHub</a>
        </span>
        <span class="start">
          <router-link to="/doc">马上开始</router-link>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
export default {}
</script>

<style lang="scss" scoped>
svg {
  color: #fff;
  fill: #206e7e;
  height: 80px;
  width: 80px;
  position: absolute;
  right: 0;
  z-index: 99;
  &:hover {
    cursor: pointer;
  }
}
section.cover {
  height: 100vh;
  width: 100vw;
  background: url("https://www.sunniejs.cn/static/wx/bg.jpg") center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .mask {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(hsla(0, 0%, 100%, 0.25), hsla(0, 0%, 100%, 0.25));
    background-color: transparent;
    opacity: 1;
  }
  .cover-main {
    z-index: 99;
    #bibi-ui {
      font-size: 2.5rem;
      font-weight: 800;
      position: relative;
      text-align: center;
      span {
        font-family: "Lobster", cursive;
        color: #25798a;
      }
    }
    .text {
      line-height: 60px;
      font-size: 16px;
      color: #34495e;
      text-align: center;
    }
    .desc {
      color: #34495e;
      text-align: center;
    }
    .item {
      text-align: center;
      span {
        border-radius: 2rem;
        border: 1px solid #25798a;
        box-sizing: border-box;
        color: #25798a;
        display: inline-block;
        font-size: 17px;
        letter-spacing: 0.1rem;
        padding: 0.75em 2rem;
        margin: 25px 20px 0 20px;
        a {
          text-decoration: none;
          color: #25798a;
        }
      }
      .start {
        background: #25798a;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>