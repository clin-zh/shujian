<template>
  <div class="tonglan">
    <div class="banxin">
      {{ cateName }}
      {{ catePro }}
    </div>
  </div>
</template>


<script>
// import { constants } from 'crypto';
export default {
  name: "CateBody",
  props: {
    cateName: Array,
    catePro: Array
  },

  watch: {
    cateName: {
      handler(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            console.log(newValue);
            console.log(oldValue);
          }
        }
      }
    },
    deep: true
  },
  create() {
    console.log(this.cateName);
  },
  beforeMount() {
    console.log(this.cateName);
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  background-color: #f0f0f0;
  height: 500px;
  .banxin {
  }
}
</style>
