<template>
  <div class="tonglan">
    <div class="banxin">
      <router-link to="/">
        <img src="/images/header/logo.png" alt="logo">
      </router-link>

      <div class="search">
        <input type="text" placeholder="余华">
        <button>
          <img src="/images/header/fangdajing.png" alt>
        </button>
      </div>

      <router-link to="/shoppingcar" tag="a" target="_blank">
        <div class="shopping-car">
          <img src="/images/header/shopping-car.png" alt>
          <span>购物车</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #2db4ea;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 9999;

  .banxin {
    position: relative;

    img {
      height: 50px;
      cursor: pointer;
    }
    .search {
      width: 546px;
      height: 36px;
      border: 2px solid #2db4ea;
      position: absolute;
      left: 50%;
      margin-left: -275px;
      top: 50%;
      margin-top: -20px;

      input {
        width: 458px;
        height: 36px;
        padding: 0 10px;
        font-size: 18px;
        float: left;
      }
      input::placeholder {
        font-size: 18px;
        color: #ccc;
      }
      button {
        width: 68px;
        height: 36px;
        background-color: #2db4ea;
        cursor: pointer;
        float: right;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    a {
      color: #666;
      .shopping-car {
        width: 108px;
        height: 18px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -20px;
        line-height: 18px;
        font-size: 18px;
        img {
          width: 20px;
          height: 20px;
          vertical-align: center;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
