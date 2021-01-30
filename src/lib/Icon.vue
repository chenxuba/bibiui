<template>
  <i class="bb-icon" v-if="!isImageFlag" :class="iconName" :style="{color:color,fontSize:size,cursor:pointer?'pointer':'default'}" />
  <i class="bb-icon" :style="{fontSize:size,cursor:pointer?'pointer':'default'}">
    <img :src="name" v-if="isImageFlag" alt="" class="bb-icon__image">
  </i>
</template>

<script lang='ts'>
import { computed } from "vue"
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      // 字体颜色
      type: String,
      default: "#000"
    },
    size: {
      type: String,
      default: "32px"
    },
    pointer: {
      // 默认开启鼠标手状
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    // 判断是否是图片链接
    function isImage(name) {
      return name ? name.indexOf("/") !== -1 : false
    }
    const isImageFlag = isImage(props.name)

    const iconName = computed(() => {
      return `bb-icon-${props.name}`
    })
    return { iconName, isImageFlag }
  }
}
</script>

<style lang="scss" scoped>
.bb-icon {
  font-size: 32px;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
}
.bb-icon__image {
  width: 1em;
  height: 1em;
  object-fit: contain;
}
@font-face {
  font-family: "bb-icon";
  src: url("//at.alicdn.com/t/font_2355356_nwbi12wmc4.eot?t=1612012492288"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2355356_nwbi12wmc4.eot?t=1612012492288#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,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")
      format("woff2"),
    url("//at.alicdn.com/t/font_2355356_nwbi12wmc4.woff?t=1612012492288") format("woff"),
    url("//at.alicdn.com/t/font_2355356_nwbi12wmc4.ttf?t=1612012492288") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2355356_nwbi12wmc4.svg?t=1612012492288#bb-icon") format("svg"); /* iOS 4.1- */
}

.bb-icon {
  font-family: "bb-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bb-icon-search:before {
  content: "\e69a";
}

.bb-icon-add:before {
  content: "\e664";
}

.bb-icon-add-circle:before {
  content: "\e665";
}

.bb-icon-browse:before {
  content: "\e666";
}

.bb-icon-bad:before {
  content: "\e667";
}

.bb-icon-cry:before {
  content: "\e66a";
}

.bb-icon-customer-service:before {
  content: "\e66b";
}

.bb-icon-fabulous:before {
  content: "\e66f";
}

.bb-icon-file:before {
  content: "\e671";
}

.bb-icon-good:before {
  content: "\e673";
}

.bb-icon-hide:before {
  content: "\e674";
}

.bb-icon-home:before {
  content: "\e675";
}

.bb-icon-map:before {
  content: "\e677";
}

.bb-icon-notification:before {
  content: "\e679";
}

.bb-icon-mic:before {
  content: "\e678";
}

.bb-icon-play:before {
  content: "\e67a";
}

.bb-icon-refresh:before {
  content: "\e67b";
}

.bb-icon-picture:before {
  content: "\e67c";
}

.bb-icon-success:before {
  content: "\e67f";
}

.bb-icon-setting:before {
  content: "\e67d";
}

.bb-icon-favorite-filling:before {
  content: "\e68a";
}

.bb-icon-filter-filling:before {
  content: "\e68b";
}

.bb-icon-news-filling:before {
  content: "\e68c";
}

.bb-icon-smile-filling:before {
  content: "\e68d";
}

.bb-icon-picture-filling:before {
  content: "\e68e";
}

.bb-icon-success-filling:before {
  content: "\e68f";
}

.bb-icon-warning-filling:before {
  content: "\e690";
}

.bb-icon-folder-filling:before {
  content: "\e691";
}

.bb-icon-map-filling:before {
  content: "\e692";
}

.bb-icon-moments:before {
  content: "\e941";
}

.bb-icon-taobao:before {
  content: "\e944";
}

.bb-icon-alipay:before {
  content: "\e946";
}

.bb-icon-wechat:before {
  content: "\e945";
}

.bb-icon-right:before {
  content: "\e600";
}

.bb-icon-left:before {
  content: "\e6a1";
}

.bb-icon-fire-o:before {
  content: "\e6a0";
}

.bb-icon-my-o:before {
  content: "\e635";
}

.bb-icon-car-o:before {
  content: "\e621";
}

.bb-icon-msg-o:before {
  content: "\e629";
}
</style>

