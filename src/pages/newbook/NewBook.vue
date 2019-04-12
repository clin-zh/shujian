<template>
  <div>
    <Header></Header>
    <New></New>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import New from "./components/New"

export default {
  name: "NewBook",
  components: {
    Header,
    Footer,
    New
  }
};
</script>

<style>
</style>
