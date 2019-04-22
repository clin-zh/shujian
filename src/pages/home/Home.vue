<template>
  <div>
    <!-- 首页 -->
    <Header :control="true"></Header>
    <Top v-show="isShow"></Top>
    <slide-show></slide-show>
    <flash-sale :booklist="booklist"></flash-sale>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../public-components/Header";
import Top from "../public-components/Top";
import SlideShow from "./components/Slideshow";
import FlashSale from "./components/Flashsale";
import Footer from "../public-components/Footer";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      booklist: [],
      isShow: false
    };
  },
  components: {
    Header,
    Top,
    SlideShow,
    FlashSale,
    Footer
  },
  methods: {
    getData() {
      axios.get("/mock/book.json").then(this.handleData);
    },
    handleData(res) {
      const data = res.data;
      this.booklist = data[1].list;
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
    this.getData();
    window.addEventListener("scroll", this.handleScroll); // 滚动监听
  }
};
</script>

<style lang="less" scoped></style>

