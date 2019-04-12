<template>
  <div class="header">
    <div class="top">
      <div class="banxin">
        <div class="header-left">
          <span>登陆</span> |
          <span>免费注册</span>
          <img src="~@/assets/images/phone.png" alt="phone">
          <span>下载书笺APP</span>
        </div>
        <div class="header-right">
          <span class="icon">
            我的书笺
            <i></i>
          </span> |
          <span>收藏夹</span> |
          <span>店铺管理</span> |
          <span>联系客服</span>
        </div>
      </div>
    </div>
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
    <div class="bottom">
      <div class="banxin">
        <div class="all-commodity">
          <img src="~@/assets/images/caidan.png" alt>
          所有商品分类
        </div>
        <div class="nav">
          <ul>
            <router-link to="/">
              <li>首页</li>
            </router-link>
            <router-link to="/newbook">
              <li>新品</li>
            </router-link>
            <router-link to="/">
              <li>限时购</li>
            </router-link>
            <router-link to="/">
              <li>排行榜</li>
            </router-link>
            <span>|</span>
            <router-link to="/">
              <li>图书馆</li>
            </router-link>
            <router-link to="/">
              <li>文创馆</li>
            </router-link>
            <router-link to="/">
              <li>生活美学馆</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {}
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.header {
  height: 220px;
  border-bottom: 2px solid #2db4ea;
  line-height: 30px;
  font-size: 12px;
  color: #666;

  .top {
    width: 100%;
    height: 30px;
    background-color: #f5f5f5;

    .banxin {
      span {
        cursor: pointer;
        margin: 0 5px;
      }
      span:hover {
        color: #2db4ea;
      }
      .header-left {
        float: left;

        img {
          width: 18px;
          height: 18px;
          margin: 0px 4px 0px 30px;
        }
      }
      .header-right {
        float: right;

        span.icon {
          padding-right: 25px;
          position: relative;

          i {
            width: 8px;
            height: 8px;
            border-right: 2px solid #666;
            border-bottom: 2px solid #666;
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
            right: 8px;
            margin-top: -8px;
            margin-left: 5px;
          }
        }
      }
    }
  }
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
  .bottom {
    height: 40px;
    margin-top: 30px;

    .banxin {
      position: relative;
      .all-commodity {
        position: absolute;
        left: 0;
        width: 200px;
        height: 40px;
        background-color: #2db4ea;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        text-align: center;

        img {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
      }
      .nav {
        position: absolute;
        left: 50%;
        margin-left: -275px;
        width: 550px;
        height: 40px;

        ul {
          li {
            height: 100%;
            margin: 0 14px;
            cursor: pointer;
            float: left;
            line-height: 40px;
            font-size: 16px;
            color: #666;
          }
          li:hover {
            color: #2db4ea;
          }
          li.active {
            color: #2db4ea;
          }
          span {
            float: left;
            line-height: 40px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>