<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="top">
        <div class="header-left">
          <router-link to="/login">
            <span>登陆</span>
          </router-link>|
          <router-link to="/register">
            <span>免费注册</span>
          </router-link>
          <img src="~@/assets/images/header/phone.png" alt="phone">
          <span>下载书笺APP</span>
        </div>

        <ul class="header-right">
          <li class="icon" @mouseenter="show" @mouseleave="hidden">
            我的书笺
            <i></i>
            <ol class="item" v-show="ifshow">
              <li>我的订单</li>
              <li>我的优惠券</li>
              <li>我的收藏</li>
              <li>我的收入</li>
              <li>官方消息</li>
            </ol>
          </li>
          <span>|</span>
          <li>收藏夹</li>
          <span>|</span>
          <li>店铺管理</li>
          <span>|</span>
          <li>联系客服</li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <div class="banxin">
        <router-link to="/">
          <img src="~@/assets/images/login/logo.png" alt>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegHeader",
  data() {
    return {
      ifshow: false
    };
  },
  methods: {
    show() {
      this.ifshow = true;
    },
    hidden() {
      this.ifshow = false;
    }
  }
};
</script>


<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  line-height: 30px;
  font-size: 12px;
  color: #666;
  background-color: #f5f5f5;
  .banxin {
    .top {
      width: 100%;
      height: 30px;

      .header-left {
        float: left;
        span {
          color: #666;
          margin: 0 5px;
          &:hover {
            color: #2db4ea;
          }
        }
        img {
          width: 18px;
          height: 18px;
          margin: 0px 4px 0px 30px;
        }
      }
      .header-right {
        float: right;
        span {
          float: left;
        }
        li {
          cursor: pointer;
          padding: 0 20px;
          float: left;
          margin: 0 5px;
          &:hover {
            color: #2db4ea;
          }
        }

        li.icon {
          width: 68px;
          padding: 0 10px;
          z-index: 999;
          position: relative;
          border: 1px solid transparent;
          i {
            width: 6px;
            height: 6px;
            border-right: 2px solid #666;
            border-bottom: 2px solid #666;
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -6px;
          }
          &:hover {
            background-color: #fff;
            border: 1px solid #ccc;
            border-bottom: none;
            i {
              transform: rotate(-135deg);
              margin-top: -2px;
            }
          }
          .item {
            position: absolute;
            left: -1px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-top: none;
            li {
              padding: 0 5px;
              width: 68px;
              height: 30px;
              color: #666;
              &:hover {
                color: #2db4ea;
              }
            }
          }
        }
      }
    }
  }
}
.logo {
  width: 100%;
  background-color: #fff;
  .banxin {
    border-bottom: 1px solid #ccc;
    img {
      height: 100px;
      cursor: pointer;
      margin: 15px 0;
    }
  }
}
</style>

