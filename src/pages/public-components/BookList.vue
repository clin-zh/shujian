<template>
  <div class="box">
    <div class="banxin">
      <div class="title">
        <div class="title-left">
          <img :src="title.img" alt>
          {{ title.name }}
        </div>
        <div class="page">
          <span v-for="item in title.page" :key="item.index">{{ item }}</span>
        </div>
      </div>
      <div class="month-book">
        <ul>
          <li v-for="item in booklist" :key="item.id">
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
  name: "BookList",
  data() {
    return {};
  },
  props: {
    booklist: Array,
    title: Object
  }
};
</script>

<style lang="less" scoped>
.box {
  background-color: #f0f0f0;
  padding: 20px 0;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
