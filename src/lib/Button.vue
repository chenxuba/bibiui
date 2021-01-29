<template>
  <button class="bb-button" :class="classes" :disabled='disabled||loading' :style="color?obj:''">
    <div class="bb-button__content">
      <span class="bb-button__loading" v-if="loading"></span>
      <span class="bb-button__text">
        <slot />
      </span>
    </div>
  </button>
</template>

<script lang='ts'>
import { computed, ref } from "vue"
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { type, size, loading, round, square, block, color, plain } = props
    const classes = computed(() => {
      return {
        [`bb-button--${type}`]: type,
        [`bb-button--${size}`]: size,
        [`bb-button--${loading ? "loading" : ""}`]: loading,
        [`bb-button--${round ? "round" : ""}`]: round,
        [`bb-button--${square ? "square" : ""}`]: square,
        [`bb-button--${block ? "block" : ""}`]: block,
        [`bb-button--${plain ? "plain" : ""}`]: plain
      }
    })
    const obj = ref({
      color: plain ? color : "white",
      border: RegExp(/linear-gradient/).test(color) ? 0 : "",
      background: color,
      borderColor: color
    })
    return { classes, obj }
  }
}
</script>

<style lang="scss">
$h: 44px;
$border-color: #d9d9d9;
$color: #323232;
$blue: #40a9ff;
$white: #fff;
$radius: 2px;
.bb-button {
  position: relative;
  box-sizing: border-box;
  height: $h;
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  border-radius: $radius;
  &:not(:last-child) {
    margin-right: 16px;
  }
  .bb-button__content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .bb-button__text {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  // &:active {
  //   transform: scale(0.98);
  // }
  &:active::before {
    display: block;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 5%);
  }
}

.bb-button--primary {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
.bb-button--success {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
}
.bb-button--default {
  color: #323233;
  background-color: #fff;
  border: 1px solid #ebedf0;
}
.bb-button--danger {
  color: #fff;
  background-color: #ee0a24;
  border: 1px solid #ee0a24;
}
.bb-button--warning {
  color: #fff;
  background-color: #ff976a;
  border: 1px solid #ff976a;
}

.bb-button--large {
  width: 100%;
  height: 50px;
}
.bb-button--normal {
  padding: 0 15px;
  font-size: 14px;
}
.bb-button--small {
  height: 32px;
  padding: 0 8px;
  font-size: 12px;
}
.bb-button--mini {
  height: 24px;
  padding: 0 4px;
  font-size: 10px;
}

.bb-button {
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    &:active::before {
      display: block;
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0);
    }
  }
}
.bb-button__loading {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: $white $white $white transparent;
  border-style: solid;
  border-width: 2px;
  animation: bibi-spin 1s infinite linear;
}

.bb-button--loading {
  cursor: default !important;
}
@keyframes bibi-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bb-button--round {
  border-radius: 999px;
  &:active::before {
    border-radius: 999px;
  }
}
.bb-button--square {
  border-radius: 0;
}
.bb-button--block {
  display: block;
  width: 100%;
}
.bb-button--plain {
  background-color: #fff !important;
}
.bb-button--plain.bb-button--primary {
  color: #1989fa;
}
.bb-button--plain.bb-button--success {
  color: #07c160;
}
.bb-button--plain.bb-button--danger {
  color: #ee0a24;
}
.bb-button--plain.bb-button--warning {
  color: #ff976a;
}
</style>