<template>
  <DemoModel title='NavBar'>
    <!-- 基础用法 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">基础用法</h2>
      <div class="demo-button-row">
        <bb-navBar left-arrow title="标题" left-text="返回" right-text="按钮" @click-left='onClickLeft' @click-right='onClickRight'>
        </bb-navBar>
      </div>
    </div>
    <!-- 使用插槽 -->
    <div class="bb-doc-demo-block">
      <h2 class="bb-doc-demo-block__title">使用插槽</h2>
      <div class="demo-button-row">
        <bb-navBar left-arrow title="标题" left-text="返回" @click-left='onClickLeft'>
          <template #right>
            <bb-icon name="search" size="17px" />
          </template>
        </bb-navBar>
      </div>
    </div>
  </DemoModel>
</template>

<script lang='ts'>
import DemoModel from "../Common/demoModel.vue"
import bbNavBar from "../../lib/NavBar.vue"
import bbIcon from "../../lib/Icon.vue"

export default {
  components: {
    bbNavBar,
    DemoModel,
    bbIcon
  },
  setup() {
    const onClickLeft = () => {
      alert("返回")
    }
    const onClickRight = () => {
      alert("按钮")
    }
    return { onClickLeft, onClickRight }
  }
}
</script>

<style lang="scss" scoped>
.bb-doc-demo-block {
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
</style>