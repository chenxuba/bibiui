<template>
  <div class="right">
    <img src="../../assets/logo.png" alt="">
    <!-- 基础组件 -->
    <div class="bb-doc-nav_group">
      <div class="bb-doc-nav_title">
        基础组件
      </div>
      <ol>
        <li v-for="(item,index) in list" :key="index">
          <router-link active-class='active' :to="item.url">
            <span>{{item.name}}</span>
            <span class="icon">
              <bb-icon name='right' size='16px'></bb-icon>
            </span>
          </router-link>
        </li>
      </ol>
    </div>
  </div>

</template>

<script lang='ts'>
import { reactive } from "vue"
import bbIcon from "../../lib/Icon.vue"
export default {
  components: {
    bbIcon
  },
  setup() {
    const list = reactive([
      { url: "/doc/button", name: "Button 按钮" },
      { url: "/doc/switch", name: "Switch 开关" },
      { url: "/doc/dialog", name: "Dialog 弹出框" },
      { url: "/doc/tab", name: "Tab 标签页" },
      { url: "/doc/cell", name: "Cell 单元格" },
      { url: "/doc/icon", name: "Icon 图标" },
      { url: "/doc/field", name: "Field 输入框" }
    ])
    return { list }
  }
}
</script>

<style lang="scss" scoped>
.right {
  width: 340px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 12px #ebedf0;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  min-height: 500px;
  overflow: auto;
  text-align: center;
  position: fixed;
  top: 25px;
  right: 20px;
  bottom: 25px;
  img {
    width: 150px;
  }
  .bb-doc-nav_group {
    text-align: left;
    .bb-doc-nav_title {
      font-size: 14px;
      color: #455a6499;
      margin: 24px 0 15px 20px;
    }
  }
}
ol {
  box-sizing: border-box;
  li {
    font-size: 13px;
    margin: 18px 0;
    padding: 5px 15px 5px 20px;
    box-sizing: border-box;
    border-radius: 30px;
    background: #f7f8fa;
    a {
      text-decoration: none;
      color: #455a64;
      display: block;
      line-height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        color: #455a64;
      }
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 30px;
    }
    &:hover {
      background: #eff0f4;
    }
  }
}
// 去除滚动条
::-webkit-scrollbar {
  width: 0px;
}
</style>