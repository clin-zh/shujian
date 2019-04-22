<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="banner">
        <img src="/images/ranking/banner.jpg" alt="">
        <ul>
          <li v-for="item in keywordList" :key="item.index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "KeyWord",
  data() {
    return {
      keywordList: ["图书总榜","童书","文学","教辅","经管励志","人文社科","生活","科技"]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.tonglan {
  background-color: #f0f0f0;
  padding: 0;
  height: 200px;
  .banxin {
    position: relative;
    .banner {
      position: absolute;
      right: 0;
      top: 10px;
      ul {
        padding: 16px;
        margin-top: 10px;
        background-color: #fff;
        li {
          float: left;
          padding: 8px 12px;
          margin: 0 4px;
          background-color: #ccc;
          color: #666;
          cursor: pointer;
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
    }
  }
}
</style>