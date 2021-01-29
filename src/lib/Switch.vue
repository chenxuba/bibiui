<template>
  <button :disabled='disabled' class="bb-switch" @click="toggle" :class="classes" :style="value?bgActiveColor:bgInactiveColor"> <span></span>
  </button>
</template>

<script lang='ts'>
import { computed, ref } from "vue"
export default {
  props: {
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: "#1989fa "
    },
    inactiveColor: {
      type: String,
      default: "#dddee0"
    }
  },
  setup(props, context) {
    const { activeColor, inactiveColor } = props
    const toggle = () => {
      context.emit("update:value", !props.value)
      context.emit("change", !props.value)
    }
    const classes = computed(() => {
      return {
        [`bb-switch--${props.value ? "checked" : ""}`]: props.value,
        [`bb-switch--${props.disabled ? "disabled" : ""}`]: props.disabled
      }
    })
    const bgActiveColor = computed(() => {
      return { background: activeColor }
    })
    const bgInactiveColor = computed(() => {
      return { background: inactiveColor }
    })

    return { toggle, classes, bgActiveColor, bgInactiveColor }
  }
}
</script>

<style lang="scss" scoped>
$h: 24px;
$h2: $h - 4px;
.bb-switch {
  height: $h;
  width: $h * 2;
  border: none;
  // background: #dddee0;
  border-radius: 999px;
  position: relative;
  outline: none;
  cursor: pointer;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: 999px;
    transition: all 250ms;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
}
.bb-switch--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bb-switch--checked {
  // background: #1989fa;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>