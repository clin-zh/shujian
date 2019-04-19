<template>
  <div>
    <!-- 新品页 -->
    <Header></Header>
    <New :bookList="bookList[0]"></New>
    <book-list :booklist="bookList[1]" :title="feb"></book-list>
    <book-list :booklist="bookList[2]" :title="jan"></book-list>
    <book-list :booklist="bookList[3]" :title="year2018Title"></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import New from "./components/New";
import BookList from "../public-components/BookList";
import axios from "axios";

export default {
  name: "NewBook",
  data() {
    return {
      bookList: [],
      feb: {
        name: "2月新品",
        img: "/images/newbook/title.png",
        page: ["第2期", "第1期"]
      },
      jan: {
        name: "1月新品",
        img: "/images/newbook/title.png",
        page: ["第3期", "第2期", "第1期"]
      },
      year2018Title: {
        name: "2018年",
        img: "/images/newbook/title.png",
        page: ["12月", "11月", "10月", "9月", "8月"]
      }
    };
  },
  components: {
    Header,
    Footer,
    New,
    BookList
  },
  methods: {
    getData() {
      axios.get("/mock/book.json").then(this.handleData);
    },
    handleData(res) {
      const Data = res.data;
      this.bookList = Data[0].list;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>
