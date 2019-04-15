<template>
  <div>
    <login-header></login-header>
    <login-body></login-body>
    <Footer></Footer>
  </div>
</template>


<script>
import LoginHeader from "./components/LoginHeader";
import Footer from "../public-components/Footer";
import LoginBody from "./components/LoginBody"

export default {
  name: "Login",
  components: {
    LoginHeader,
    Footer,
    LoginBody
  }
}
</script>


<style lang="less" scoped>
  
</style>



