<template>
  <div class="content">
    <aside v-if="menuVisible">
      <LeftNav />
    </aside>
    <!-- 展开收起按钮 -->
    <div class="flag" @click="changeFlag">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script lang='ts'>
import { inject, Ref } from "vue"
import LeftNav from "../components/Common/leftNav.vue"
export default {
  components: {
    LeftNav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible")
    // 展开/收起  侧边栏
    const changeFlag = () => {
      menuVisible.value = !menuVisible.value
    }
    return { changeFlag, menuVisible }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  background: #fff;
  display: flex;
  aside {
    width: 249px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #eee;
  }
  main {
    flex: 1;
    height: 100%;
    background: #f7f8fa;
    padding: 25px;
    box-sizing: border-box;
    overflow: auto;
  }
  .flag {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 10px;
    cursor: pointer;
    span {
      display: inline-block;
      width: 60%;
      height: 2px;
      background: #25798a;
    }
    &:hover {
      span {
        background: #8fc8d3;
      }
    }
  }
}
</style>