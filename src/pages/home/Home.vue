<template>
  <div>
    <Header></Header>
    <slide-show></slide-show>
    <flash-sale></flash-sale>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./components/Header";
import SlideShow from "./components/Slideshow";
import FlashSale from "./components/Flashsale";
import Footer from "./components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    SlideShow,
    FlashSale,
    Footer
  }
};
</script>

<style></style>

