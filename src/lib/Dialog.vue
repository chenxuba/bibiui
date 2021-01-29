<template>
  <div class="bb-dialog--overlay" v-if="show">
    <div class="bb-dialog--wrapper">
      <div class="bb-dialog">
        <header>{{title}}</header>
        <main>
          <slot />
        </main>
        <footer>
          <bb-button v-if="showCancelButton" color='#fff' class="dd-button" @click="cancel" style="flex:1;border-right:1px solid #eee;">
            <span class="bb-button__text" :style="{color:cancelButtonColor}">{{cancelButtonText}}</span>
          </bb-button>
          <bb-button color='#fff' @click="confirm" style="flex:1">
            <span class="bb-button__text" :style="{color:confirmButtonColor}">{{confirmButtonText}}</span>
          </bb-button>
        </footer>
      </div>
    </div>
  </div>
</template> 

<script lang='ts'>
import bbButton from "./Button.vue"
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    confirmButtonColor: {
      type: String,
      default: "#ee0a24"
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    cancelButtonColor: {
      type: String,
      default: "black"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: { bbButton },
  setup(props, context) {
    const close = () => {
      context.emit("update:show", !props.show)
    }
    const confirm = () => {
      context.emit("confirm")
      close()
    }
    const cancel = () => {
      context.emit("cancel")
      close()
    }
    return { confirm, cancel }
  }
}
</script>

<style lang="scss" scoped>
$radius: 8px;
$border-color: #d9d9d9;
.bb-dialog--overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: fade_out(black, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .bb-dialog {
    background: #fff;
    border-radius: $radius;
    width: 320px;
    max-width: 90%;
    margin: 0 auto;
    animation: dd-dialog-open 0.5s 1;
    > header {
      text-align: center;
      padding: 20px 0 25px 0;
      color: #323232;
      font-size: 16px;
      font-weight: 500;
    }
    > main {
      color: #646566;
      font-size: 13px;
      padding: 0px 24px 20px 24px;
      line-height: 20px;
      text-align: center;
    }
    > footer {
      display: flex;
      border-top: 1px solid #eee;
      border-radius: 0 0 $radius $radius;
      .bb-button--normal {
        margin: 0;
        border-radius: 0 0 $radius $radius !important;
      }
    }
  }
}
@keyframes dd-dialog-open {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0, 0, 1);
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
  }
}
</style>