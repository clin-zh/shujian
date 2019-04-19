<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="title">
        优选品牌
      </div>
      <ul>
        <li v-for="item in 12" :key="item.index"><a href="JavaScript:;"><img src="/images/stationery/chenguanglogo.jpg" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "Brand",
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  background-color: #f0f0f0;
  padding-bottom: 20px;
  .banxin {
    .title {
      font-size: 20px;
      font-weight: bold;
      line-height: 30px;
      margin-bottom: 5px;
      padding-left: 20px;
    }
    ul {
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      li {
        float: left;
        width: 196px;
        height: 126px;
        margin: 2px;
        overflow: hidden;
      }
    }
  }
}
  
</style>