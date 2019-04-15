<template>
  <div class="center">
    <div class="banxin">
      <img src="~@/assets/images/logo.png" alt="logo">
      <div class="search">
        <input type="text" placeholder="余华">
        <button>
          <img src="~@/assets/images/fangdajing.png" alt>
        </button>
      </div>
      <div class="keyword">
        <span class="active">茅台酒收藏</span>|
        <span>夏摩山谷</span>|
        <span>崔永元 有话说</span>|
        <span>林清玄</span>|
        <span>邓小平大决策</span>
      </div>
      <div class="shopping-car">
        <a href="#">
          <img src="~@/assets/images/shopping-car.png" alt>
          <span>购物车</span>
        </a>
      </div>
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
.center {
  height: 90px;
  padding-top: 30px;

  .banxin {
    position: relative;

    img {
      width: 200px;
      height: 90px;
      cursor: pointer;
    }
    .search {
      width: 546px;
      height: 35px;
      border: 2px solid #2db4ea;
      position: absolute;
      left: 50%;
      margin-left: -275px;
      top: 50%;
      margin-top: -30px;

      input {
        width: 458px;
        height: 35px;
        padding: 0 10px;
        font-size: 18px;
      }
      input::placeholder {
        font-size: 18px;
        color: #ccc;
      }
      button {
        width: 68px;
        height: 35px;
        background-color: #2db4ea;
        cursor: pointer;

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .keyword {
      width: 550px;
      height: 25px;
      position: absolute;
      left: 50%;
      margin-left: -275px;
      top: 54px;

      span.active {
        margin-left: 0px;
        color: #e4393c;
      }
      span {
        margin: 0 5px;
        cursor: pointer;
        font-size: 12px;
      }
    }
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
      margin-top: -30px;
      line-height: 18px;
      font-size: 18px;

      a {
        color: #666;
      }
      img {
        width: 20px;
        height: 20px;
        vertical-align: center;
        margin-right: 15px;
      }
    }
  }
}
</style>
