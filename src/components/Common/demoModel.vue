<template>
  <div class="right">
    <div class="demo-nav">
      <div class="demo-nav__title">{{title}}</div>
      <div class="demo-nav__back" @click="$router.go(-1)">
        <bb-icon name='left' size='27px'></bb-icon>
      </div>
    </div>
    <!-- 基础用法 -->
    <slot />
  </div>
</template>

<script>
import bbIcon from "../../lib/Icon.vue"
export default {
  components: {
    bbIcon
  },
  props: ['title',]
}
</script>

<style lang="scss" scoped>
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
</style>