<template>
  <div class="bb-cell bb-field">
    <div class="bb-cell__title bb-field__label">
      <span>{{label}}</span>
    </div>
    <div class="bb-cell__value bb-field__value">
      <div class="bb-field__body">
        <input type="text" :placeholder="placeholder" :value="value || value == '' ? value : modelValue" :disabled="disabled" :readonly="readonly"
          @input="inputval" class="bb-field__control">
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue"
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  setup(props, context) {
    const inputval = e => {
      context.emit("update:value", e.target.value)
    }
    return { inputval }
  }
}
</script>

<style lang="scss" >
.bb-field__label {
  flex: none !important;
  box-sizing: border-box;
  width: 6.2em;
  margin-right: 12px;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}
.bb-field__value {
  overflow: visible;
  width: 100%;
  .bb-field__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 100%;
    .bb-field__control {
      display: block;
      box-sizing: border-box;
      width: 100%;
      color: #323233;
      // line-height: inherit;
      text-align: left;
      background-color: transparent;
      border: 0;
      resize: none;
      outline: none;
      &::placeholder {
        color: #ccc;
      }
    }
  }
}
</style>