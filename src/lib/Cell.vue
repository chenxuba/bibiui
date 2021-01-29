<template>
  <div class="bb-cell" :class="classCell">
    <div class="bb-cell__title" v-if="title">
      <span>{{title}}</span>
      <div class="bb-cell__label" v-if="label">{{label}}</div>
    </div>
    <div class="bb-cell__value" :class="classValue" v-if="value">
      <span>{{value}}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed } from "vue"
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    label: {
      type: String
    },
    size: {
      type: String
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const { title, size, value, label, center } = props
    const classValue = computed(() => {
      return {
        [`bb-cell__value--alone`]: title == undefined && label == undefined,
        [`bb-cell--center`]: center
      }
    })
    const classCell = computed(() => {
      return {
        [`bb-cell--center`]: center
      }
    })
    return { classValue, classCell }
  }
}
</script>

<style lang="scss">
.bb-cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  .bb-cell__title,
  .bb-cell__value {
    flex: 1;
  }
  .bb-cell__label {
    margin-top: 4px;
    color: #969799;
    font-size: 12px;
    line-height: 18px;
  }
  .bb-cell__value {
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    /*! autoprefixer: ignore next */
    -webkit-transform: scaleY(0.5);
    /* autoprefixer: on */
    transform: scaleY(0.5);
  }
}
.bb-cell--large {
  padding-top: 12px;
  padding-bottom: 12px;
  .bb-cell__title {
    font-size: 16px;
  }
  .bb-cell__label {
    font-size: 14px;
  }
}
.bb-cell--center {
  align-items: center;
}
.bb-cell__value--alone {
  color: #323233 !important;
  text-align: left !important;
}
</style>