<template>
  <div>
    <!-- 全部商品分类页 -->
    <Header></Header>
    <Top v-show="isShow"></Top>
    <Location></Location>
    <cate-body :cateName="cateName[0]" :catePro="catePro[0]"></cate-body>
    <cate-body :cateName="cateName[1]" :catePro="catePro[1]"></cate-body>
    <cate-body :cateName="cateName[2]" :catePro="catePro[2]"></cate-body>
    <cate-body :cateName="cateName[3]" :catePro="catePro[3]"></cate-body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Top from "../public-components/Top";
import CateBody from "./components/CateBody";
import Location from "./components/Location";
import axios from "axios";
// import { constants } from 'crypto';

export default {
  name: "Category",
  data() {
    return {
      isShow: false,
      cateName: [],
      catePro: []
    };
  },
  components: {
    Header,
    Footer,
    CateBody,
    Top,
    Location
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
      },
      deep: true
    }
  },
  methods: {
    getCateInfo() {
      axios.get("/mock/bookclassification.json").then(this.handleCateInfo);
    },
    handleCateInfo(res) {
      const data = res.data;
      for (var i = 0; i < data.length; i++) {
        this.cateName.push(data[i].name);
        this.catePro.push(data[i].product);
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 222 ? (this.isShow = true) : (this.isShow = false);
    }
  },
  mounted() {
    this.getCateInfo();
    window.addEventListener("scroll", this.handleScroll); // 滚动监听
  }
};
</script>


<style lang="less" scoped>
</style>

