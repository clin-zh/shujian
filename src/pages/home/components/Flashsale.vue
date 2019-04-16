<template>
  <div class="tonglan">
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
          <li v-for="item in timeLimitList" :key="item.id">
            <img :src="item.img" alt>
            <a>{{ item.name }}</a>
            <div>
              <span class="price">{{ item.newPrice }}</span>
              <span>|</span>
              <span class="old-price">{{ item.oldPrice }}</span>
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
  name: "FlashSale",
  data() {
    return {
      timeLimitList: [
        {
          id: "01",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "02",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "03",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "04",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "05",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "06",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "07",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "08",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "09",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "10",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "11",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        },
        {
          id: "12",
          img: require("../../../assets/images/home/flashsale01.jpg"),
          name: "【满59包邮不可用券】吓你一跳的植物真相/真的好奇怪",
          newPrice: "￥1.90",
          oldPrice: "￥19.80"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.tonglan {
  background-color: #f0f0f0;
  padding-bottom: 20px;
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
        background: url("~@/assets/images/home/flashsale.png") no-repeat center;
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
