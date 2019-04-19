<template>
  <div>
    <!-- 排行榜页 -->
    <Header></Header>
    <key-Word></key-Word>
    <Paging></Paging>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Top from "../public-components/Top";
import KeyWord from "./components/KeyWord";
import Paging from "./components/Paging";

export default {
  name: "Ranking",
  components: {
    Header,
    Footer,
    Top,
    KeyWord,
    Paging
  }
};
</script>

<style lang="less" scoped>
</style>
