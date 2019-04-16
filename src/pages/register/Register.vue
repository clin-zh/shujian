<template>
  <div>
    <reg-header></reg-header>
    <reg-body></reg-body>
  </div>
</template>

<script>
import RegHeader from "./components/RegHeader";
import RegBody from "./components/RegBody";

export default {
  name: "Register",
  components: {
    RegHeader,
    RegBody
  }
}
</script>


<style lang="less" scoped>

</style>

