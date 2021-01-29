<template>
  <div>
    <DemoModel title='FieId'>
      <!-- 基础用法 -->
      <div class="bb-doc-demo-block">
        <h2 class="bb-doc-demo-block__title">基础用法</h2>
        <div class="demo-button-row">
          <bb-cell-group>
            <bb-field v-model:value="value" label="用户名" placeholder="请输入用户名"></bb-field>
          </bb-cell-group>
        </div>
      </div>
    </DemoModel>
  </div>
</template>

<script lang='ts'>
import bbField from "../../lib/Field.vue"
import bbCellGroup from "../../lib/CellGroup.vue"
import DemoModel from "../Common/demoModel.vue"
import { ref } from "vue"
export default {
  components: {
    bbCellGroup,
    bbField,
    DemoModel
  },
  setup() {
    const value = ref("")
    return { value }
  }
}
</script>

<style lang="scss" scoped>
.bb-doc-demo-block {
  // padding: 10px 20px 0 20px;
  // background: #fff;
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