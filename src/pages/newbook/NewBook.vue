<template>
  <div>
    <Header></Header>
    <New></New>
    <month-new-book></month-new-book>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import New from "./components/New";
import MonthNewBook from "./components/MonthNewBook"

export default {
  name: "NewBook",
  components: {
    Header,
    Footer,
    New,
    MonthNewBook
  }
};
</script>

<style>
</style>
