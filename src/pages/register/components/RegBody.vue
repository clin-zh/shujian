<template>
  <div class="tonglan">
    <div class="banxin">
      <h3>用户注册</h3>
      <p class="info-box">
        <span class="info">1.填写注册信息</span>
        <span class="succ">2.注册成功</span>
      </p>
      <ul class="box">
        <li>
          <label for="phone-num">手机号:</label>
          <input type="text" id="phone-num" placeholder="请输入手机号码">
        </li>
        <li>
          <label for="gra-ver-code">图形验证码:</label>
          <input type="text" id="gra-ver-code" placeholder="请输入图形验证码">
          <img src="~@/assets/images/register/authcode.jpg" alt="">
          <a href="#">看不清,换一张</a>
        </li>
        <li>
          <label for="ver-code">验证码:</label>
          <input type="text" id="ver-code" placeholder="请输入手机验证码">
          <button class="get-code">获取验证码</button>
        </li>
        <li>
          <label for="password">密码:</label>
          <input type="text" id="password" placeholder="请输入密码">
        </li>
        <li>
          <button class="reg-btn">注册</button>
        </li>
        <li>
          <a href="#" class="goto-login">已有账号 前往登陆</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegBody"
}
</script>

<style lang="less" scoped>
  .tonglan {
    .banxin {
      h3 {
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0 10px;
      }
      p.info-box {
        &::after {
          content:'';
          display: block;
          clear: both;
        }
        .info {
          width: 50%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #fff;
          float: left;
          background-color: #2db4ea;
        }
        .succ {
          width: 50%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #000;
          float: left;
          background-color: #ccc;          
        }
      }
      ul.box {
        width: 650px;
        margin: 30px auto;
  
        li{
          height: 30px;
          margin: 20px 0;
          label {
            width: 100px;
            height: 100%;
            float: left;
            line-height: 30px;
            text-align: right;
          }
          input {
            border: 1px solid #ccc;
            float: left;
            height: 100%;
            margin: 0 10px;
            padding: 0 5px;
            &::placeholder {
              color: #ccc;
            }
          }
          img {
            height: 30px;
            margin: 0 10px;
          }
          a {
            line-height: 30px;
          }
          .get-code {
            width: 100px;
            height: 100%;
            background-color: #2db4ea;
            color: #fff;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
          }
          button.reg-btn {
            width: 400px;
            height: 40px;
            background-color: #2db4ea;
            color: #fff;
            font-weight: bold;
            font-size: 17px;
            border-radius: 5px;
            margin: 0 30px;
            cursor: pointer;
          }
          .goto-login {
            margin-left: 30px;
          }
          #phone-num {
            width: 300px;
          }
          #password {
            width: 300px;
          }
        }
      }
    }
  }
</style>
