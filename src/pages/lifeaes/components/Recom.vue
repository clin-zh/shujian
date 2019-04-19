<template>
  <div class="tonglan">
    <div class="banxin">
      <a href="javascript:;" v-for="item in imgList" :key="item.id">
        <img :src="item.imgUrl" alt>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recom",
  data() {
    return {
      imgList: [
        {
          id: "01",
          imgUrl: "/images/lifeaes/shitidian.jpg"
        },
        {
          id: "02",
          imgUrl: "/images/lifeaes/tuijian.jpg"
        },
        {
          id: "03",
          imgUrl: "/images/lifeaes/xiangya.jpg"
        },
        {
          id: "04",
          imgUrl: "/images/lifeaes/qilan.jpg"
        },
        {
          id: "05",
          imgUrl: "/images/lifeaes/lingyun.jpg"
        },
        {
          id: "06",
          imgUrl: "/images/lifeaes/xiangyabai.jpg"
        },
        {
          id: "07",
          imgUrl: "/images/lifeaes/bigua.jpg"
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
  padding-bottom: 30px;
}
</style>
