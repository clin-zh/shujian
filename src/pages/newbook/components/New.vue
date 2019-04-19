<template>
  <div class="box">
    <div class="banxin">
      <div class="box-left">
        <ul>
          <li v-for="item in bookList " :key="item.id">
            <img :src="item.imgUrl" alt>
            <div class="right">
              <p class="book-name">{{ item.name }}</p>
              <p class="author">{{ item.author }}</p>
              <p class="price">
                <span class="new-price">{{ item.newPrice }}</span>
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
  props: {
    bookList: Array
  },
  data() {
    return {};
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
      background: url("/images/newbook/newbook.jpg") no-repeat;
    }
  }
}
.box::after {
  content: "";
  display: block;
  clear: both;
}
</style>
