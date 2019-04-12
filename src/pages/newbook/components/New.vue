<template>
  <div class="box">
    <div class="banxin">
      <div class="box-left">
        <ul>
          <li v-for="item in newList " :key="item.id">
            <img :src="item.img" alt>
            <div class="right">
              <p class="book-name">{{ item.bookName }}</p>
              <p class="author">{{ item.author }}</p>
              <p class="price">
                <span class="new-price">{{ item.price }}</span>
                <span class="old-price">{{ item.oldPrice }}</span>
              </p>
              <button>加入购物车</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="box-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      newList: [
        {
          id: "01",
          bookName: "岩波新书精选(共7册)",
          author: "(日)森冈孝二",
          price: "￥210.70",
          oldPrice: "￥301.00",
          img: require("../../../assets/images/newbook/book01.jpg")
        },
        {
          id: "02",
          bookName: "历史写作简明指南",
          author:
            "[美]理查德·马里厄斯（RICHARD MARIUS）[美]梅尔文·E.佩吉（MELVIN E. PAGE）",
          price: "￥25.20",
          oldPrice: "￥36.00",
          img: require("../../../assets/images/newbook/book02.jpg")
        },
        {
          id: "03",
          bookName: "卡尔·马克思(精)",
          author: "(英)以赛亚·伯林|译者:李寅",
          price: "￥53.82",
          oldPrice: "￥78.00",
          img: require("../../../assets/images/newbook/book03.jpg")
        },
        {
          id: "04",
          bookName: "戴旭讲甲午战争(从晚清解体透视历代王朝的政治败因)",
          author: "戴旭",
          price: "￥31.05",
          oldPrice: "￥45.00",
          img: require("../../../assets/images/newbook/book04.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.css";

.box {
  width: 100%;
  background-color: #f0f0f0;
  .banxin {
    .box-left {
      float: left;
      color: #666;
      ul {
        width: 800px;
        height: 400px;
        li {
          width: 398px;
          height: 198px;
          float: left;
          margin: 1px;
          background-color: #fff;
          img {
            width: 130px;
            height: 130px;
            float: left;
            margin-left: 28px;
            margin-top: 20px;
          }
          .right {
            float: right;
            width: 220px;
            margin-top: 20px;
            .book-name {
              font-size: 18px;
              line-height: 30px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .author {
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            p.price {
              margin-top: 40px;
              .new-price {
                color: red;
                font-size: 20px;
                margin-right: 10px;
              }
              .old-price {
                color: #999;
                text-decoration: line-through;
              }
            }
            button {
              width: 100px;
              height: 30px;
              background-color: #2db4ea;
              margin-top: 10px;
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
    .box-right {
      width: 400px;
      height: 400px;
      float: right;
      background: url("~@/assets/images/newbook/newbook.jpg") no-repeat;
    }
  }
}
.box::after {
  content: "";
  display: block;
  clear: both;
}
</style>
