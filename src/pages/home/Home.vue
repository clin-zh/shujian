<template>
  <div>
    <Header></Header>
    <slide-show></slide-show>
    <flash-sale></flash-sale>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../public-components/Header";
import Top from "../public-components/Top";
import SlideShow from "./components/Slideshow";
import FlashSale from "./components/Flashsale";
import Footer from "../public-components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Top,
    SlideShow,
    FlashSale,
    Footer
  }
};
</script>

<style></style>

