<template>
  <div>
    <Header></Header>
    <Recom></Recom>
    <Product :prod="tea"></Product>
    <Product :prod="incense"></Product>
    <Product :prod="teaSup"></Product>
    <Slogan></Slogan>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Recom from "./components/Recom";
import Product from "./components/Product";
import Slogan from "./components/Slogan";

export default {
  name: "LifeAes",
  data() {
    return {
      tea: {
        productName: "茶",
        productList: ["茶叶", "茶器", "茶衍生品"],
        product: [
          {
            id: "01",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "02",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "03",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "04",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "05",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "06",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "07",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          },
          {
            id: "08",
            img: require("../../assets/images/lifeaes/hongcha.jpg"),
            name: "2018年'年话'茶礼 红茶",
            newPrice: "￥186.00",
            oldPrice: "￥308.00"
          }
        ]
      },
      incense: {
        productName: "香",
        productList: ["香炉", "香插", "香衍生品"],
        product: [
          {
            id: "01",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "02",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "03",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "04",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "05",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "06",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "07",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          },
          {
            id: "08",
            img: require("../../assets/images/lifeaes/xiang.jpg"),
            name: "云起香插 酸枝黄铜",
            newPrice: "￥238.00",
            oldPrice: "￥326.00"
          }
        ]
      },
      teaSup: {
        productName: "茶道用品",
        productList: ["茶夹", "茶滤", "茶则", "养壶笔"],
        product: [
          {
            id: "01",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "02",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "03",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "04",
           img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "05",
           img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "06",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "07",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          },
          {
            id: "08",
            img: require("../../assets/images/lifeaes/shua.jpg"),
            name: "安吉竹制 紫竹根茶道 二君子",
            newPrice: "￥36.00",
            oldPrice: "￥66.00"
          }
        ]
      }
    };
  },
  components: {
    Header,
    Footer,
    Recom,
    Product,
    Slogan
  }
};
</script>

<style lang="less" scoped>
</style>