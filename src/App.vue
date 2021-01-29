<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue"

export default {
  name: "App",
  setup() {
    const menuVisible = ref(true)
    provide("menuVisible", menuVisible)
  }
}
</script>
<style lang="scss" >
body,
html,
#app {
  min-width: 1200px;
}
</style>