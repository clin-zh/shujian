<template>
  <div>
    <!-- 限时购页 -->
    <Header></Header>
    <Time></Time>
    <book-list :booklist="bookList"></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Time from "./components/Time";
import BookList from "./components/BookList";
import axios from "axios";

export default {
  name: "TimeToBuy",
  components: {
    Header,
    Footer,
    Time,
    BookList
  },
  data() {
    return {
      bookList: []
    }
  },
  methods: {
    getData() {
      axios.get("/mock/book.json").then(this.handleData)
    },
    handleData(res) {
      const Data = res.data;
      this.bookList = Data[1].list;
    }
  },
  mounted () {
    this.getData();
  }
}
</script>

<style lang="less" scoped>
  
</style>
