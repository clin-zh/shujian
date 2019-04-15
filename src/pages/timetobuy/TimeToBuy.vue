<template>
  <div>
    <Header></Header>
    <Time></Time>
    <book-list></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Time from "./components/Time";
import BookList from "./components/BookList";

export default {
  name: "TimeToBuy",
  components: {
    Header,
    Footer,
    Time,
    BookList
  }
}
</script>

<style lang="less" scoped>
  
</style>
