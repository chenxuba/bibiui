<template>
  <div class="bb-cell-group bb-hairline--top-bottom">
    <slot />
  </div>
</template>

<script lang='ts'>
export default {}
</script>

<style lang="scss">
.bb-hairline,
.bb-hairline--top,
.bb-hairline--left,
.bb-hairline--right,
.bb-hairline--bottom,
.bb-hairline--surround,
.bb-hairline--top-bottom {
  position: relative;
}
[class*="bb-hairline"]::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: 0 solid #ebedf0;
  /*! autoprefixer: ignore next */
  -webkit-transform: scale(0.5);
  /* autoprefixer: on */
  transform: scale(0.5);
}

.bb-hairline--top-bottom::after,
.bb-hairline-unset--top-bottom::after {
  border-width: 1px 0;
}
</style>