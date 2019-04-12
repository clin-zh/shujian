<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from './pages/home/Home';

export default {
  name: 'app',
  components: {
    Home,
  }
}
</script>

<style lang="less">
</style>
