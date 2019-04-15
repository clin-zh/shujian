<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="content">
        <p class="title">书笺用户登录</p>
        <div class="box">
          <label for="user">
            <img src="~@/assets/images/login/user.png" alt>
          </label>
          <input type="text" id="user" placeholder="请输入手机号码/用户名">
        </div>
        <div class="box">
          <label for="password">
            <img src="~@/assets/images/login/password.png" alt>
          </label>
          <input type="password" id="password" placeholder="请输入密码">
        </div>
        <p class="verification-code">
          <label for="ver-code">验证码:</label>
          <input id="ver-code" type="text">
          <img src="~@/assets/images/login/authcode.jpg" alt>
          <a href="#">换一张</a>
        </p>
        <p class="find-psw">
          <a href="#">找回密码</a>
        </p>
        <button>登录</button>
        <div class="login-way">
          <a>
            <img src="~@/assets/images/login/qq.png" alt>QQ登录
          </a>
          <a>
            <img src="~@/assets/images/login/weixin.png" alt>微信登陆
          </a>
          <a>
            <img src="~@/assets/images/login/zhifubao.png" alt>支付宝登陆
          </a>
          <a>
            <img src="~@/assets/images/login/weibo.png" alt>微博登陆
          </a>
        </div>
        <div class="new-user">
          <a href="#">马上注册新用户</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBody"
};
</script>

<style lang="less" scoped>
.tonglan {
  height: 600px;
  background: url("~@/assets/images/login/banner.jpg") no-repeat center center;
  .banxin {
    height: 100%;
    .content {
      width: 380px;
      height: 450px;
      padding: 20px;
      background-color: #fff;
      float: right;
      margin-top: 75px;
      .title {
        width: 380px;
        height: 32px;
        color: #2db4ea;
        line-height: 32px;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
      }
      .box {
        margin-top: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        label {
          width: 56px;
          height: 38px;
          float: left;
          background-color: #ccc;
          img {
            width: 20px;
            height: 20px;
            margin-left: 18px;
            margin-top: 9px;
          }
        }
        input {
          height: 38px;
          padding: 0 10px;
          &::placeholder {
            color: #ccc;
          }
        }
      }
      .verification-code {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-top: 20px;
        input {
          width: 164px;
          height: 38px;
          padding: 0 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 0 10px;
        }
        a {
          color: #2db4ea;
        }
      }
      .find-psw {
        margin-top: 20px;
        text-align: right;
        line-height: 20px;
        color: #2db4ea;
      }
      button {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        background: #2db4ea;
        font-size: 17px;
      }
      .login-way {
        margin-top: 20px;
        a {
          margin-right: 20px;
          cursor: pointer;
          color: #333;
          img {
            width: 20px;
            height: 20px;
          }
          &:hover {
            color: #2db4ea;
          }
        }
      }
      .new-user {
        width: 380px;
        height: 38px;
        border: 1px solid #ccc;
        line-height: 38px;
        text-align: center;
        margin-top: 30px;
        border-radius: 5px;
      }
    }
  }
}
</style>


