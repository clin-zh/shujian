<template>
  <div class="footer">
    <div class="tonglan">
      <div class="slogan">
        <div class="zheng">
          <img src="~@/assets/images/footer-zheng.png" alt>
          <div class="text">
            <p class="title">全场正品</p>
            <p>出版社直采·书笺正品</p>
          </div>
        </div>
        <div class="sheng">
          <img src="~@/assets/images/footer-sheng.png" alt>
          <div class="text">
            <p class="title">全场满59包邮</p>
            <p>惊喜不断·让利多多</p>
          </div>
        </div>
        <div class="huo">
          <img src="~@/assets/images/footer-huo.png" alt>
          <div class="text">
            <p class="title">门店自取</p>
            <p>就近取货·方式灵活</p>
          </div>
        </div>
        <div class="you">
          <img src="~@/assets/images/footer-you.png" alt>
          <div class="text">
            <p class="title">售后无忧</p>
            <p>服务体验·更加精彩</p>
          </div>
        </div>
      </div>
    </div>

    <div class="banxin">
      <ul class="serve-left">
        <li>
          <span>新手指南</span>
          <p>
            <a href="#">新用户注册</a>
          </p>
          <p>
            <a href="#">购物流程</a>
          </p>
          <p>
            <a href="#">积分制度</a>
          </p>
          <p>
            <a href="#">注册开店</a>
          </p>
          <p>
            <a href="#">激励制度</a>
          </p>
        </li>
        <li>
          <span>支付与配送</span>
          <p>
            <a href="#">IC卡充值说明</a>
          </p>
          <p>
            <a href="#">验货与签收</a>
          </p>
          <p>
            <a href="#">配送范围</a>
          </p>
          <p>
            <a href="#">自行取货</a>
          </p>
          <p>
            <a href="#">支付方式</a>
          </p>
        </li>
        <li>
          <span>售后服务</span>
          <p>
            <a href="#">发票制度</a>
          </p>
          <p>
            <a href="#">退换货流程</a>
          </p>
          <p>
            <a href="#">7天无理由退换货</a>
          </p>
        </li>
        <li>
          <span>个人中心</span>
          <p>
            <a href="#">店铺设置</a>
          </p>
          <p>
            <a href="#">团队管理</a>
          </p>
          <p>
            <a href="#">收入管理</a>
          </p>
          <p>
            <a href="#">我的订单</a>
          </p>
          <p>
            <a href="#">我的优惠券</a>
          </p>
          <p>
            <a href="#">我的等级</a>
          </p>
        </li>
        <li>
          <span>了解书笺</span>
          <p>
            <a href="#">关于书笺</a>
          </p>
          <p>
            <a href="#">联系我们</a>
          </p>
          <p>
            <a href="#">书笺网隐私政策</a>
          </p>
          <p>
            <a href="#">书笺用户注册协议</a>
          </p>
          <p>
            <a href="#">书笺网分销商注册协议</a>
          </p>
        </li>
      </ul>

      <div class="serve-right">
        <ul>
          <li>
            <p class="title">手机书笺</p>
            <img src="~@/assets/images/erweima.jpg" alt>
            <p>下载手机客户端</p>
          </li>
          <li>
            <p class="title">关注微信</p>
            <img src="~@/assets/images/erweima.jpg" alt>
            <p>关注官方微信</p>
          </li>
        </ul>
        <p class="phone">服务热线 XXXX - XXXXXXXX</p>
        <p class="serve-time">服务时间 9:00 - 21:00</p>
      </div>
    </div>
    <div class="info">
      <p>&copy;Copyright 2018-2019 shujian.cn 版权所有</p>
      <p>增值电信业务经营许可证:粤XX-XXXXXXX</p>
      <p>声明:本网站只做学习交流,不做任何商业用途</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.footer {
  .tonglan {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .slogan {
      width: 1100px;
      height: 60px;
      margin: 0 auto;
      padding: 20px;

      div {
        width: 275px;
        height: 50px;
        float: left;
        img {
          width: 50px;
          height: 50px;
          float: left;
          margin-right: 5px;
        }
        .text {
          width: 220px;
          height: 50px;
          float: right;
          .title {
            font-size: 22px;
            margin-bottom: 4px;
          }
        }
      }
    }
  }

  .banxin {
    height: 270px;
    .serve-left {
      margin: 30px 0;
      border-right: 1px solid #ccc;
      float: left;

      li {
        float: left;
        width: 170px;
        span {
          font-size: 16px;
          line-height: 30px;
        }
        p {
          line-height: 30px;
          color: #666;
          a {
            color: #666;
          }
          a:hover {
            color: #2db4ea;
          }
        }
      }
    }

    .serve-right {
      width: 280px;
      height: 210px;
      float: right;
      padding: 30px;
      margin-left: 8px;
      color: #666;
      ul {
        li {
          width: 105px;
          float: left;
          margin: 0 17px 15px 17px;
          p.title {
            font-size: 16px;
          }
          img {
            width: 105px;
            height: 105px;
            border: 1px solid #ccc;
            padding: 1px;
            margin: 10px 0;
          }
          p {
            text-align: center;
          }
        }
      }
      p.phone {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 24px;
      }
      p.serve-time {
        text-align: center;
        line-height: 24px;
      }
    }
  }

  .info {
    width: 100%;
    height: 60px;
    padding: 15px 0;
    background-color: #414141;
    color: #999;
    text-align: center;
    line-height: 20px;
  }
}
</style>