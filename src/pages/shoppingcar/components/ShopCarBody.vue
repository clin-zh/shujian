<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="title">
        <p class="title-left">我的购物车</p>
        <p class="title-right">温馨提示:1.购物车中的商品无法保留库存，请您尽快完成购买。2.商品的价格和库存将以订单提交时为准哦。</p>
      </div>
      <div class="car">
        <img src="/images/shoppingcar/shopcar.png" alt>
        <p>购物车还是空滴</p>
        <router-link to="/login">
          <button class="login">登陆</button>
        </router-link>
        <router-link to="/">
          <button class="continue">继续逛</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCarBody"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  .banxin {
    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .title-left {
        float: left;
        font-size: 20px;
      }
      .title-right {
        float: right;
        color: #666;
      }
    }
    .car {
      width: 300px;
      margin: 100px auto;
      margin-top: 100px;
      text-align: center;
      p {
        font-size: 20px;
        margin-top: 20px;
        line-height: 30px;
      }
      button {
        margin: 50px 0;
        padding: 10px 50px;
        font-size: 17px;
        cursor: pointer;
        &.login {
          background-color: #2db4ea;
          color: #fff;
          margin-right: 5px;
        }
        &.continue {
          background-color: #d5f0fb;
          color: #2db4ea;
          border: 1px solid #2db4ea;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>


