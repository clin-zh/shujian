<template>
  <div class="slide-show">
    <div class="banxin">
      <div class="nav">
        <ul>
          <li>
            <span class="icon icon1"></span>文学艺术
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon2"></span>少儿童书
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon3"></span>人文社科
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon4"></span>经管励志
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon5"></span>生活时尚
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon6"></span>科技教育
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon7"></span>创意文具
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon8"></span>生活美学
            <span class="arrow"></span>
          </li>
          <li>
            <span class="icon icon9"></span>影音原版
            <span class="arrow"></span>
          </li>
        </ul>
      </div>
      <div class="store">
        <div class="title">
          <p>书笺体验店</p>
          <div class="share">
            <span>分享店铺:</span>
            <img src="~@/assets/images/weibo.png" alt>
            <img src="~@/assets/images/weixin.png" alt>
            <img src="~@/assets/images/qq.png" alt>
          </div>
        </div>
        <div class="btn">一键开店</div>
        <div class="anno">
          <p>服务公告</p>
          <ul>
            <li>
              <span class="icon"></span>
              IC充值卡兑换通道
            </li>
            <li>
              <span class="icon"></span>
              书笺网服务协议与交易规则公告
            </li>
            <li>
              <span class="icon"></span>
              购物注意事项及常见问题
            </li>
          </ul>
        </div>
      </div>
      <div class="btn-left">
        <span></span>
      </div>
      <div class="btn-right">
        <span></span>
      </div>
      <div class="slogan">
        <span>
          <img src="~@/assets/images/zheng.png" alt="正">
          正品保障
        </span>
        <span>
          <img src="~@/assets/images/tui.png" alt="退">
          七天无理由退货
        </span>
        <span>
          <img src="~@/assets/images/you.png" alt="邮">
          全场满59包邮
        </span>
      </div>
    </div>
    <div class="slide">
      <ul>
        <li>
          <img src="~@/assets/images/slide01.jpg" alt="轮播图1">
        </li>
        <li>
          <img src="~@/assets/images/slide02.jpg" alt="轮播图2">
        </li>
        <li>
          <img src="~@/assets/images/slide03.jpg" alt="轮播图3">
        </li>
        <li>
          <img src="~@/assets/images/slide04.jpg" alt="轮播图4">
        </li>
        <li>
          <img src="~@/assets/images/slide05.jpg" alt="轮播图5">
        </li>
        <li>
          <img src="~@/assets/images/slide06.jpg" alt="轮播图6">
        </li>
        <li>
          <img src="~@/assets/images/slide07.jpg" alt="轮播图7">
        </li>
        <li>
          <img src="~@/assets/images/slide08.jpg" alt="轮播图8">
        </li>
      </ul>
      <ol>
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>


<script>
export default {
  name: "SlideShow"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.slide-show {
  position: relative;

  .slide {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -960px;
    z-index: 99;
    width: 1920px;
    overflow: hidden;
    ul {
      width: 1000%;
      height: 400px;
      background-color: #ccc;
      margin-left: 0px;
      li {
        float: left;
      }
    }
    ol {
      position: absolute;
      bottom: 30px;
      left: 50%;
      margin-left: -72px;
      li {
        width: 14px;
        height: 14px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 4px;
        cursor: pointer;
        float: left;
      }
      li.active {
        background-color: #2db4ea;
      }
    }
  }
  .banxin {
    position: relative;
    height: 440px;
    .nav {
      position: absolute;
      top: 0;
      z-index: 999;
      width: 200px;
      height: 400px;
      background-color: rgba(76, 76, 76, 0.8);

      ul {
        li {
          width: 100%;
          height: 40px;
          cursor: pointer;
          text-align: center;
          line-height: 40px;
          color: #fff;
          position: relative;

          span.icon {
            width: 50px;
            height: 50px;
            background: url("~@/assets/images/spirit.png") no-repeat;
            position: absolute;
            left: 10px;
          }
          span.icon1 {
            background-position: 0 0;
          }
          span.icon2 {
            background-position: 0 -50px;
          }
          span.icon3 {
            background-position: 0 -100px;
          }
          span.icon4 {
            background-position: 0 -150px;
          }
          span.icon5 {
            background-position: 0 -200px;
          }
          span.icon6 {
            background-position: 0 -250px;
          }
          span.icon7 {
            background-position: 0 -300px;
          }
          span.icon8 {
            background-position: 0 -350px;
          }
          span.icon9 {
            background-position: 0 -400px;
          }
          span.arrow {
            width: 8px;
            height: 8px;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 30px;
            transform: rotate(-45deg);
          }
        }
      }
    }
    .store {
      width: 160px;
      height: 300px;
      padding: 20px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: absolute;
      top: 30px;
      right: 0;
      z-index: 999;

      .title {
        margin: 10px auto;

        p {
          height: 40px;
          border-bottom: 1px solid #ccc;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
        }
        .share {
          width: 100%;
          margin-top: 10px;
          img {
            width: 24px;
            height: 24px;
            margin: 0 4px;
          }
        }
      }
      .btn {
        width: 124px;
        height: 36px;
        margin: 20px auto;
        border: 1px solid #ccc;
        border-radius: 18px;
        color: #fff;
        background-color: #2db4ea;
        text-align: center;
        line-height: 36px;
        font-size: 18px;
        cursor: pointer;
      }
      .anno {
        p {
          padding: 15px 0;
          border-bottom: 1px solid #ccc;
          font-size: 16px;
        }
        ul {
          li {
            height: 30px;
            padding-left: 15px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 30px;
            color: #666;
            font-size: 12px;
            span.icon {
              width: 8px;
              height: 8px;
              border-right: 1px solid #666;
              border-bottom: 1px solid #666;
              transform: rotate(-45deg);
              position: absolute;
              left: 0;
              top: 10px;
            }
          }
          li:hover {
            color: #2db4ea;
          }
        }
      }
    }
    .btn-left {
      width: 36px;
      height: 74px;
      background-color: rgba(45, 180, 234, 0.5);
      position: absolute;
      top: 163px;
      margin-top: -37px;
      left: 200px;
      z-index: 999;
      cursor: pointer;
      span {
        display: block;
        width: 16px;
        height: 16px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
        margin-top: 29px;
        margin-left: 14px;
      }
    }
    .btn-right {
      width: 36px;
      height: 74px;
      background-color: rgba(45, 180, 234, 0.5);
      position: absolute;
      top: 163px;
      margin-top: -37px;
      right: 200px;
      z-index: 999;
      cursor: pointer;
      span {
        display: block;
        width: 16px;
        height: 16px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg);
        margin-top: 29px;
        margin-left: 6px;
      }
    }
    .slogan {
      width: 100%;
      height: 40px;
      position: absolute;
      top: 400px;
      line-height: 40px;
      span {
        color: #666;
        margin-right: 20px;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>


