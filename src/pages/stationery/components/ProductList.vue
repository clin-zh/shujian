<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="title">
        <p class="title-left">{{ productTitle.name }}</p>
        <ol class="title-right">
          <li v-for="item in productTitle.pageList" :key="item.index">
            <span class="item">{{ item }}</span>
            <span>|</span>
          </li>
          <li>更多>></li>
        </ol>
      </div>
      <ul>
        <li v-for="item in productList" :key="item.id">
          <img :src="item.img" alt>
          <p class="name">{{ item.name }}</p>
          <p class="price">
            <span class="new-price">{{ item.newPrice }}</span>|
            <span class="old-price">{{ item.oldPrice }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductList",
  props: {
    productTitle: Object,
    productList: Array
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
      line-height: 30px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      p.title-left {
        font-size: 20px;

        font-weight: bold;
        margin-bottom: 20px;
        margin-left: 20px;
        float: left;
      }
      ol.title-right {
        float: right;
        color: #666;
        li {
          margin: 0 10px;
          float: left;
          cursor: pointer;
          span.item {
            margin-right: 20px;
          } 
        }
      }
    }
    ul {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      li {
        width: 156px;
        height: 226px;
        padding: 20px;
        margin: 2px;
        background-color: #fff;
        text-align: center;
        float: left;
        img {
          width: 160px;
          height: 160px;
        }
        p.name {
          height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 8px;
          cursor: pointer;
          color: #666;
          line-height: 20px;
          &:hover {
            color: #2db4ea;
          }
        }
        p.price {
          margin-top: 5px;
          span {
            color: #666;
            margin: 0 5px;
          }
          .new-price {
            color: red;
          }
          .old-price {
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>