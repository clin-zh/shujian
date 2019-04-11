<template>
  <div class="footer">
    <div class="slogan">
      <div class="zheng">
        <img src="~@/assets/images/footer-zheng.png" alt>
        <p class="text">
          <span>全场正品</span>
          <span>出版社直采·书笺正品</span>
        </p>
      </div>
      <div class="sheng">
        <img src="~@/assets/images/footer-sheng.png" alt>
        <p class="text">全场满59包邮</p>
        <p>惊喜不断·让利多多</p>
      </div>
      <div class="huo">
        <img src="~@/assets/images/footer-huo.png" alt>
        <p class="text">门店自取</p>
        <p>就近取货·方式灵活</p>
      </div>
      <div class="you">
        <img src="~@/assets/images/footer-you.png" alt>
        <p class="text">售后无忧</p>
        <p>服务体验·更加精彩</p>
      </div>
    </div>
    <div class="banxin"></div>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.css";
.footer {
  .slogan {
    width: 100%;
    height: 60px;
    padding: 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    div {
      width: 275px;
      height: 50px;
      float: left;
      img {
        width: 50px;
        height: 50px;
        float: left;
      }
      .text {
        float: right;
      }
    }
  }

  .banxin {
  }
}
</style>