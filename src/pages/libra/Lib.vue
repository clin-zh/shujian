<template>
  <div>
    <!-- 图书馆页 -->
    <Header></Header>
    <Slide></Slide>
    <book-list :booklist="booklist[0]" :title="recomTitle"></book-list>
    <book-list :booklist="booklist[1]" :title="jan"></book-list>
    <book-list :booklist="booklist[2]" :title="classifyTitle"></book-list>
    <book-list :booklist="booklist[3]" :title="childTitle"></book-list>
    <book-list :booklist="booklist[4]" :title="moreTitle"></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Slide from "./components/Slide";
import BookList from "../public-components/BookList";
import axios from "axios";

export default {
  name: "Lib",
  data() {
    return {
      booklist:[],
      recomTitle: {
        name: "重磅推荐",
        img: "/images/libra/plate.png"
      },

      jan: {
        name: "1月新品",
        img: "/images/newbook/title.png",
        page: ["第3期", "第2期", "第1期"]
      },

      classifyTitle: {
        name: "分类推荐",
        img: "/images/libra/plate_52_5.png",
        page: ["美妆", "美食", "居家", "旅行", "健身","投资","心理","IT","设计","影视小说","悬疑","科幻","青春"]
      },
      childTitle: {
        name: "童书频道",
        img: "/images/libra/plate_52_1.png",
        page: ["新品", "故事", "绘本", "英语", "科普","启蒙","益智","成长","玩具书","动漫","0-3","4-6","7-14","胎教","育儿"]
      },
      moreTitle: {
        name: "更多图书",
        img: "/images/libra/plate_52_0.png",
      },
    };
  },
  components: {
    Header,
    Footer,
    Slide,
    BookList
  },
  methods: {
    getData() {
      axios.get("/mock/book.json").then(this.handleData)
    },
    handleData(res) {
      const data = res.data;
      this.booklist = data[2].list;
    }
  },
  mounted () {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
</style>

