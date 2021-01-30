<template>
  <div class="bb-search" :style="styleObj">
    <div class="bb-search__content " :class="classes">
      <div class="bb-cell bb-cell--borderless bb-field">
        <div class="bb-field__left-icon">
          <bb-icon name='search' size='16px'></bb-icon>
        </div>
        <div class="bb-cell__value bb-cell__value--alone bb-field__value">
          <div class="bb-field__body">
            <input type="search" :value="value" @input="inputval" :placeholder="placeholder" class="bb-field__control">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed } from "vue"
import bbIcon from "../lib/Icon.vue"
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入搜索关键词"
    },
    background: {
      type: String,
      default: "#fff"
    },
    shape: {
      type: String,
      default: "square"
    }
  },
  components: {
    bbIcon
  },
  setup(props, context) {
    const { shape } = props
    const inputval = e => {
      context.emit("update:value", e.target.value)
    }
    const styleObj = computed(() => {
      return {
        background: props.background
      }
    })
    const classes = computed(() => {
      return {
        [`bb-search__content--${shape == "round" ? "round" : "square"}`]: shape
      }
    })
    return { inputval, styleObj, classes }
  }
}
</script>

<style lang="scss" scoped>
.bb-search {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 12px;
  // background-color: #fff;
  .bb-search__content--round {
    border-radius: 999px !important;
  }
  .bb-search__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 12px;
    background-color: #f7f8fa;
    border-radius: 2px;
  }
  .bb-cell {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 8px 5px 0;
    background-color: transparent;
    position: initial;
    .bb-field__left-icon {
      margin-right: 4px;
      .bb-icon,
      .bb-field__right-icon .bb-icon {
        display: block;
        font-size: 16px !important;
        line-height: inherit;
      }
    }

    .bb-field__control[type="search"] {
      -webkit-appearance: none;
    }
  }
}
</style>