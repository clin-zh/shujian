<template>
  <div>
    <reg-header></reg-header>
    <shop-car-body></shop-car-body>
    <Footer></Footer>
  </div>
</template>


<script>
import RegHeader from "../register/components/RegHeader";
import Footer from "../public-components/Footer";
import ShopCarBody from "./components/ShopCarBody";
export default {
  name: "ShoppingCar",
  components: {
    RegHeader,
    Footer,
    ShopCarBody
  }
}
</script>

<style lang="less" scoped>
  
</style>



