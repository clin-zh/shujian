<template>
  <div>
    <Header></Header>
    <cate-body :cateName="cateName" :catePro="catePro"></cate-body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import CateBody from "./components/CateBody";
import axios from "axios";
// import { constants } from 'crypto';

export default {
  name: "Category",
  data() {
    return {
      data: {},
      cateName: ["123"],
      catePro: ["456 "]
    };
  },
  components: {
    Header,
    Footer,
    CateBody
  },
  methods: {
    getCateInfo() {
      axios.get("/mock/bookclassification.json").then(this.handleCateInfo);
    },
    handleCateInfo(res) {
      const data = res.data;
      for (var i = 0; i < data.length; i++) {
        this.cateName[i] = data[i].name;
        this.catePro[i] = data[i].product;
      }
    }
  },
  mounted() {
    this.getCateInfo();
  }
};
</script>


<style lang="less" scoped>
</style>

