<template>
  <div class="bb-nav-bar bb-hairline--bottom">
    <div class="bb-nav-bar__content">
      <div class="bb-nav-bar__left" @click="clickLeft">
        <bb-icon v-if="leftArrow" name='left' class="bb-nav-bar__arrow" size="19px"></bb-icon>
        <span class="bb-nav-bar__text" v-if="leftText">{{leftText}}</span>
      </div>
      <div class="bb-nav-bar__title bb-ellipsis">{{title}}</div>
      <div class="bb-nav-bar__right" v-if="rightText">
        <span class="bb-nav-bar__text" @click="clickRight">{{rightText}}</span>
      </div>
      <div class="bb-nav-bar__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import bbIcon from "../lib/Icon.vue"
export default {
  props: {
    title: {
      type: String
    },
    leftText: {
      type: String
    },
    rightText: {
      type: String
    },
    leftArrow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    bbIcon
  },
  setup(props, context) {
    const clickLeft = () => {
      context.emit("clickLeft")
    }
    const clickRight = () => {
      context.emit("clickRight")
    }
    return { clickLeft, clickRight }
  }
}
</script>

<style lang="scss" scoped>
.bb-nav-bar {
  position: relative;
  z-index: 1;
  line-height: 22px;
  text-align: center;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  .bb-nav-bar__content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 46px;
    .bb-nav-bar__left {
      left: 0;
    }
    .bb-nav-bar__left,
    .bb-nav-bar__right {
      position: absolute;
      top: 0;
      bottom: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 0 16px;
      font-size: 14px;
      cursor: pointer;
      :deep(.bb-nav-bar__arrow) {
        margin-right: 4px;
        font-size: 16px;
      }
    }
    :deep(.bb-icon) {
      color: #1989fa !important;
    }

    .bb-nav-bar__text {
      color: #1989fa;
    }
    .bb-nav-bar__title {
      max-width: 60%;
      margin: 0 auto;
      color: #323233;
      font-weight: 500;
      font-size: 16px;
    }
    .bb-ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .bb-nav-bar__right {
      right: 0;
    }
  }
}
</style>