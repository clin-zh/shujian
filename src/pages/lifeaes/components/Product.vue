<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="title">
        <span class="prod">{{ prod.productName }}</span>
        <ul>
          <li v-for="item in prod.productList" :key="item.index">
            <span class="title-item">{{ item }}</span>
            <span>|</span>
          </li>
          <li>
            <span class="icon">更多</span>
          </li>
        </ul>
      </div>
        <ul class="product">
          <li v-for="item in prod.product" :key="item.id">
            <a href="javascript:;">
              <img :src="item.img" alt>
            </a>
            <p class="name">{{ item.name }}</p>
            <div class="price">
              <span class="newPrice">{{ item.newPrice }}</span>
              <span>|</span>
              <span class="oldPrice">{{ item.oldPrice }}</span>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
    };
  },
  props: {
    prod: Object
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
      height: 100px;
      background-color: #e7a769;
      color: #fff;
      line-height: 100px;
      span.prod {
        float: left;
        font-size: 30px;
        margin-left: 20px;
      }
      ul {
        float: right;
        position: relative;
        li {
          float: left;
          font-size: 17px;
          cursor: pointer;
        }
        span {
          float: left;
        }
        span.title-item {
          margin: 0 25px;
        }
        span.icon {
          margin: 0 25px;
          &::after {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            position: absolute;
            top: 43px;
            right: 15px;
            transform: rotate(-45deg);
          }
        }
      }
    }
    .product {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      li {
        float: left;
        width: 290px;
        height: 390px;
        background-color: #fff;
        margin: 0 5px 10px 5px;
        text-align: center;
        img {
          width: 232px;
          height: 232px;
          margin-top: 20px;
        }
        .name {
          font-size: 17px;
          color: #666;
          padding: 0 5px;
          margin-top: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
        }
        .price {
          margin-top: 30px;
          text-align: center;
          span {
            color: #ccc;
            margin: 0 2px;
            &.newPrice {
              color: red;
            }
            &.oldPrice {
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>

