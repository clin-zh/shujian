<template>
  <div class="flash-sale">
    <div class="banxin">
      <div class="title">
        <div class="title-left"></div>
        <p>
          总有你想不到的低价
          <span class="icon"></span>
        </p>
        <div class="title-right">当前场次 后结束抢购</div>
      </div>
      <div class="slide-show">
        <ul>
          <li>
            <img src="~@/assets/images/flashsale01.jpg" alt>
            <a>【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪</a>
            <div>
              <span class="price">￥1.90</span>
              <span>|</span>
              <span class="old-price">￥19.80</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale02.jpg" alt>
            <a>发现号特快(写给孩子的交通机械发明史)(精)</a>
            <div>
              <span class="price">¥64.00</span>
              <span>|</span>
              <span class="old-price">¥128.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale03.jpg" alt>
            <a>笨狼的故事注音版5册</a>
            <div>
              <span class="price">¥48.60</span>
              <span>|</span>
              <span class="old-price">¥100.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale04.jpg" alt>
            <a>【满59包邮不可用券】三叠纪劫掠战/恐龙帝国惊魂历险记</a>
            <div>
              <span class="price">￥1.90</span>
              <span>|</span>
              <span class="old-price">¥16.80</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale05.jpg" alt>
            <a>【满59包邮不可用券】 妙趣横生的人体/爆笑科技50问系列</a>
            <div>
              <span class="price">¥5.90</span>
              <span>|</span>
              <span class="old-price">¥23.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale06.jpg" alt>
            <a>【满59包邮不可用券】十万个知识问答(上中下百科知识旗舰馆)</a>
            <div>
              <span class="price">¥9.90</span>
              <span>|</span>
              <span class="old-price">¥58.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale07.jpg" alt>
            <a>【满59包邮不可用券】动物小说大王沈石溪(科学启蒙馆共6册)</a>
            <div>
              <span class="price">¥19.90</span>
              <span>|</span>
              <span class="old-price">¥94.80</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale08.jpg" alt>
            <a>思维导图完整手册(精)</a>
            <div>
              <span class="price">¥36.80</span>
              <span>|</span>
              <span class="old-price">¥58.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale09.jpg" alt>
            <a>国家宝藏</a>
            <div>
              <span class="price">¥53.90</span>
              <span>|</span>
              <span class="old-price">¥88.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale10.jpg" alt>
            <a>企鹅经典：小黑书（第二辑）</a>
            <div>
              <span class="price">¥88.80</span>
              <span>|</span>
              <span class="old-price">¥149.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale11.jpg" alt>
            <a>笨狼的故事(20年荣誉典藏纪念版)/中国幽默儿童文学创作汤素兰系列</a>
            <div>
              <span class="price">¥16.80</span>
              <span>|</span>
              <span class="old-price">¥25.00</span>
            </div>
          </li>
          <li>
            <img src="~@/assets/images/flashsale12.jpg" alt>
            <a>百年孤独(精)</a>
            <div>
              <span class="price">¥35.90</span>
              <span>|</span>
              <span class="old-price">¥55.00</span>
            </div>
          </li>
        </ul>
        <div class="btn btn-left">
          <span></span>
        </div>
        <div class="btn btn-right">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashSale"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.css";

.flash-sale {
  background-color: #f0f0f0;
  .banxin {
    .title {
      height: 40px;
      border-bottom: 2px solid #ea5863;
      line-height: 40px;
      color: #ea5863;
      .title-left {
        width: 96px;
        height: 40px;
        margin: 0 20px;
        background: url("~@/assets/images/flashsale.png") no-repeat center;
        float: left;
      }
      p {
        float: left;
      }
      .title-right {
        float: right;
      }
    }
    .slide-show {
      width: 100%;
      height: 270px;
      overflow: hidden;
      position: relative;
      ul {
        li {
          width: 160px;
          height: 230px;
          float: left;
          padding: 20px;
          background-color: #fff;
          text-align: center;
          position: relative;
          img {
            width: 160px;
            margin-bottom: 20px;
          }
          a {
            display: block;
            height: 30px;
            color: #666;
            line-height: 15px;
            overflow: hidden;
          }
          div {
            position: absolute;
            bottom: 20px;
            width: 160px;
            text-align: center;
            span.price {
              font-size: 16px;
              color: #ea5863;
              font-weight: bold;
            }
            span {
              color: #ccc;
            }
            span.old-price {
              font-size: 14px;
              text-decoration: line-through;
            }
          }
        }
      }
      ul::after {
        content: "";
        display: block;
        clear: both;
      }
      .btn {
        position: absolute;
        top: 50%;
        margin-top: -37px;
        width: 36px;
        height: 74px;
        background-color: rgba(45, 180, 234, 0.5);
        cursor: pointer;

        span {
          display: block;
          width: 10px;
          height: 10px;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          margin-top: 32px;
          margin-left: 13px;
        }
      }
      .btn-left {
        left: 0;
        span {
          transform: rotate(135deg);
        }
      }
      .btn-right {
        right: 0;
        span {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
