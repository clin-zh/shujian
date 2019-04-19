<template>
  <div class="tonglan">
    <div class="banxin">
      <router-link to="/">
        <img src="/images/login/logo.png" alt>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "LoginHeader"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.tonglan {
  border-bottom: 1px solid #ccc;
  .banxin {
    padding: 15px 0;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
}
</style>