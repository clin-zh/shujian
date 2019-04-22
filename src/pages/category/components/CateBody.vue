<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="title">{{ cateName }}</div>
      <div class="item" v-for="item in catePro" :key="item.index">
        <div class="left">
          <a href="javascript:;">{{ item.item }}</a>
        </div>
        <ul class="right">
          <li v-for="cate in item.list" :key="cate.index">
            <a class="content">{{ cate }}</a>
            <span>|</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
// import { constants } from 'crypto';
export default {
  name: "CateBody",
  props: {
    cateName: String,
    catePro: Array
  }

  // watch: {
  //   cateName: {
  //     handler(newValue, oldValue) {
  //       for (let i = 0; i < newValue.length; i++) {
  //         if (oldValue[i] != newValue[i]) {
  //           console.log(newValue);
  //           console.log(oldValue);
  //         }
  //       }
  //     },
  //     deep: true
  //   }
  // },
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  padding-bottom: 50px;
  .banxin {
    
    .title {
      height: 45px;
      padding-left: 15px;
      font-size: 20px;
      line-height: 45px;
      border-bottom: 2px solid #2db4ea;
      margin-bottom: 30px;
    }
    .item {
      line-height: 30px;
      border-bottom: 1px dotted #ccc;
      margin: 10px 0;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .left {
        float: left;
        width: 15%;
        text-align: center;
      }
      .right {
        float: right;
        width: 85%;
        li {
          float: left;
          a.content {
            margin: 0 10px;
            cursor: pointer;
            color: #666;
            &:hover {
              color: #2db4ea;
            }
          }
        }
      }
    }
  }
}
</style>
