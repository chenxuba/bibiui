<template>
  <div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.bb-tabs-content-item {
  display: none;
  padding: 24px 20px;
  background-color: #fff;
  &.bb-tabs-content--active {
    display: block;
    color: #323233;
    font-size: 16px;
  }
}
</style>