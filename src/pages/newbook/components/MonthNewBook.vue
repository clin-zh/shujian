<template>
  <div class="box">
    <div class="banxin">
      <div class="title">
        <div class="title-left">
          <img src="~@/assets/images/newbook/feb-newbook/title.png" alt>
          2月新品
        </div>
        <div class="page">
          <span>第2期</span>
          <span>第1期</span>
        </div>
      </div>
      <div class="month-book">
        <ul>
          <li v-for="item in bookList" :key="item.id">
            <a href="#">
              <img :src="item.url" alt>
            </a>
            <a href="#">{{ item.name }}</a>
            <p>
              <span class="price">{{ item.price }}</span>
              <span>|</span>
              <span class="old-price">{{ item.oldPrice }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthNewBook",
  data() {
    return {
      bookList: [
        {
          id: "001",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "002",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "003",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "004",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "005",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "006",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "007",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "008",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "009",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "010",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "011",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "012",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "013",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "014",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "015",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "016",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "017",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        },
        {
          id: "018",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../../assets/images/newbook/feb-newbook/01.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box {
  background-color: #f0f0f0;
  .banxin {
    .title {
      width: 100%;
      height: 45px;
      border-bottom: 2px solid #2db4ea;
      .title-left {
        float: left;
        line-height: 45px;
        font-size: 20px;
      }
      .page {
        float: right;
        span {
          line-height: 45px;
          margin: 0 15px;
          color: #fff;
          background-color: #2db4ea;
          padding: 6px;
          cursor: pointer;
        }
      }
    }
    .month-book {
      ul {
        li {
          width: 198px;
          height: 278px;
          float: left;
          margin: 1px;
          background-color: #fff;
          img {
            width: 148px;
            height: 148px;
          }
          a {
            display: block;
            text-align: center;
            color: #666;
            margin: 25px;
          }
          p {
            text-align: center;
            margin-top: 20px;
            span {
              font-size: 20px;
              color: #999;
            }
            .price {
              color: red;
            }
            .old-price {
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
    }
  }
}
</style>
