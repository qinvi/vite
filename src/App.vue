<template>
  <div id="app">
    <div>
      <router-link :to="routerPath.home">首页</router-link>
      <router-link :to="routerPath.about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { routerPath } from 'router/map'
import { useStore } from 'vuex'
import { computed } from 'vue'

let store = useStore()

const test = computed(() => store.state.test)
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
