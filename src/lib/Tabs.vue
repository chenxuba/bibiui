<template>
  <!-- tabs - nav -->
  <div class="bb-tabs">
    <div class="bb-tabs__wrap">
      <div class="bb-tabs__nav bb-tabs__nav--line" :style="tabNavStyle">
        <div class="bb-tab" v-for="(item,i) in titles" :key="i" :class="active==i?'bb-tab--active':''" @click="change(i)"
          :ref="el =>{if (el) navItems[i] = el}" :style="active==i?activeObj:inactiveObj">
          <span class="bb-tab__text bb-tab__text--ellipsis">{{item}}</span>
        </div>
        <!-- bb-tabs__line -->
        <div class="bb-tabs__line" style="transition-duration: 0.3s;" :style="styleObject">
        </div>
      </div>
    </div>
    <!-- bb-tabs__content -->
    <div class="bb-tabs__content">
      <component class="bb-tabs-content-item" v-for="(item,index) in defaults" :key="index" :is="item"
        :class="active===index?'bb-tabs-content--active':''" />
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, nextTick, onMounted, reactive, ref } from "vue"
import Tab from "./Tab.vue"
export default {
  props: {
    active: {
      type: Number,
      default: 0
    },
    background: {
      type: String
    },
    color: {
      type: String
    },
    lineWidth: {
      type: String
    },
    lineHeight: {
      type: String
    },
    titleActiveColor: {
      type: String
    },
    titleInactiveColor: {
      type: String
    }
  },
  setup(props, context) {
    // 获取选中tab宽度的公用方法
    function getActiveTabWidth() {
      const doms = navItems.value
      const activeDom = doms.filter(div => div.classList.contains("bb-tab--active"))[0]
      const { offsetLeft, offsetWidth } = activeDom
      const left = offsetLeft + offsetWidth / 2
      return left
    }
    /**
     * 动态绑定ref
     * :ref="el =>{if (el) navItems[i] = el}"
     */
    const navItems = ref([])
    /**
     * 验证子标签合法性
     */
    const defaultss = context.slots.default()
    let defaults = reactive([])
    defaultss.forEach(tag => {
      if (tag.props == null) {
        defaults = defaults.concat(tag.children)
      } else {
        defaults.push(tag)
      }
    })
    // 得出所有的标签
    // console.log(defaults)
    // defaults.forEach(tag => {
    //   if (tag.type !== Tab) {
    //     throw new Error("Tabs 子标签必须是bb-Tab")
    //   }
    // })
    for (let index = 0; index < defaults.length; index++) {
      const tag = defaults[index]
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是bb-Tab")
      }
    }
    /**
     * 获取tab标签名
     */
    // const titles = defaults.map(tag => {
    //   return tag.props.title
    // })
    const titles = reactive([])
    for (let index = 0; index < defaults.length; index++) {
      const tag = defaults[index]
      titles.push(tag.props.title)
    }
    /**
     * 动态绑定style，改变小横条的样式
     */
    const styleObject = reactive({
      transform: "",
      background: props.color,
      width: props.lineWidth,
      height: props.lineHeight
    })

    onMounted(() => {
      /**
       * 在Dom渲染完成后赋初始值，改变小横条的位置
       */
      styleObject.transform = `translateX(${getActiveTabWidth()}px) translateX(-50%)`
      scrollTo()
    })
    /**
     * 点击切换方法
     */
    const change = index => {
      context.emit("update:active", index)
      nextTick(() => {
        styleObject.transform = `translateX(${getActiveTabWidth()}px) translateX(-50%)`
      })
    }

    /**
     * 扩展：
     * 动态绑定nav的style，背景颜色
     */
    const tabNavStyle = reactive({
      background: props.background
    })
    /**
     * 扩展：
     * 动态设置选中的标签字体颜色
     */
    const activeObj = reactive({
      color: props.titleActiveColor
    })
    /**
     * 扩展:
     * 动态设置未选中的标签字体颜色
     */
    const inactiveObj = reactive({
      color: props.titleInactiveColor
    })
    return { defaults, titles, change, styleObject, navItems, tabNavStyle, activeObj, inactiveObj }
  }
}
</script>

<style lang="scss" scoped>
.bb-tabs {
  width: 100%;
  position: relative;
  .bb-tabs__wrap {
    height: 44px;
    overflow: hidden;
    .bb-tabs__nav {
      position: relative;
      display: flex;
      background-color: white;
      user-select: none;
      overflow-x: scroll;
      // overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      overflow-y: hidden;
    }
    .bb-tabs__nav--line {
      box-sizing: content-box;
      height: 100%;
      padding-bottom: 15px;
    }

    .bb-tab {
      position: relative;
      display: flex;
      flex: 1 0 auto;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 4px;
      padding: 0 12px;
      color: #646566;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      .bb-tab__text--ellipsis {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
    .bb-tab--active {
      font-weight: 500;
    }
    .bb-tabs__line {
      position: absolute;
      bottom: 15px;
      left: 0;
      z-index: 1;
      width: 30px;
      height: 3px;
      background-color: #ee0a24;
      border-radius: 3px;
    }
  }
}
</style>