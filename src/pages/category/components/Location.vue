<template>
  <div class="tonglan">
    <div class="banxin">
      <p class="location">
        <span>您当前的位置:</span>
        <a href="JavaScript:;">书笺首页</a>
        <span>></span>
        <a href="JavaScript:;">全部商品分类</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Location"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.tonglan {
  .banxin {
    .location {
      line-height: 30px;
      margin: 15px 0;
      color: #666;
      a {
        margin: 0 10px;
        color: #666;
      }
    }
  }
}
</style>

