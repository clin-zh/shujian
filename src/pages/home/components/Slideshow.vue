<template>
  <div class="tonglan">
    <div class="banxin">
      <el-carousel trigger="click" class="el-carousel" height="400px">
        <el-carousel-item v-for="item in slideList" :key="item.id">
          <img :src="item.imgUrl" alt="图片">
        </el-carousel-item>
      </el-carousel>

      <div class="store">
        <div class="title">
          <p>书笺体验店</p>
          <div class="share">
            <span>分享店铺:</span>
            <img src="/images/home/weibo.png" alt>
            <img src="/images/home/weixin.png" alt>
            <img src="/images/home/qq.png" alt>
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

      <div class="slogan">
        <span>
          <img src="/images/home/zheng.png" alt="正">
          正品保障
        </span>
        <span>
          <img src="/images/home/tui.png" alt="退">
          七天无理由退货
        </span>
        <span>
          <img src="/images/home/you.png" alt="邮">
          全场满59包邮
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SlideShow",
  data() {
    return {
      slideList: [
        {
          id: "001",
          imgUrl: "/images/home/slide01.jpg"
        },
        {
          id: "002",
          imgUrl: "/images/home/slide02.jpg"
        },
        {
          id: "003",
          imgUrl: "/images/home/slide03.jpg"
        },
        {
          id: "004",
          imgUrl: "/images/home/slide04.jpg"
        },
        {
          id: "005",
          imgUrl: "/images/home/slide05.jpg"
        },
        {
          id: "006",
          imgUrl: "/images/home/slide06.jpg"
        },
        {
          id: "007",
          imgUrl: "/images/home/slide07.jpg"
        },
        {
          id: "008",
          imgUrl: "/images/home/slide08.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
@import "~@/assets/style/element.css";

.tonglan {
  .banxin {
    position: relative;
    height: 440px;
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


