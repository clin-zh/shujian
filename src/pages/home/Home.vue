<template>
  <div>
    <!-- 首页 -->
    <Header></Header>
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
      booklist:[]
    }
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
      axios.get("/mock/book.json").then(this.handleData)
    },
    handleData(res) {
      const data = res.data;
      this.booklist = data[1].list;
    }
  },
  mounted () {
    this.getData();
  }
};
</script>

<style></style>

