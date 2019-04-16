<template>
  <div>
    <Header></Header>
    <New></New>
    <book-list :booklist="febBookList" :title="feb"></book-list>
    <book-list :booklist="janBookList" :title="jan"></book-list>
    <book-list :booklist="year2018List" :title="year2018Title"></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import New from "./components/New";
import BookList from "../public-components/BookList";

export default {
  name: "NewBook",
  data() {
    return {
      febBookList: [
        {
          id: "001",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "002",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "003",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "004",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "005",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "006",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "007",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "008",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "009",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "010",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "011",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "012",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "013",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "014",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "015",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "016",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "017",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        },
        {
          id: "018",
          name: "康德与鸭嘴兽(精)",
          price: "￥48.28",
          oldPrice: "￥68.00",
          url: require("../../assets/images/newbook/01.jpg")
        }
      ],
      feb: {
        name: "2月新品",
        img: require("../../assets/images/newbook/title.png"),
        page: ["第2期", "第1期"]
      },

      janBookList: [
        {
          id: "001",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "002",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "003",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "004",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "005",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "006",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "007",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "008",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "009",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "010",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "011",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "012",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "013",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "014",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "015",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "016",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "017",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        },
        {
          id: "018",
          name: "北归记",
          price: "￥25.92",
          oldPrice: "￥36.00",
          url: require("../../assets/images/newbook/02.jpg")
        }
      ],
      jan: {
        name: "1月新品",
        img: require("../../assets/images/newbook/title.png"),
        page: ["第3期", "第2期", "第1期"]
      },

      year2018List: [
        {
          id: "001",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "002",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "003",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "004",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "005",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "006",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "007",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "008",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "009",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "010",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "011",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "012",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "013",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "014",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "015",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "016",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "017",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        },
        {
          id: "018",
          name: "有话说",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/newbook/03.jpg")
        }
      ],
      year2018Title: {
        name: "2018年",
        img: require("../../assets/images/newbook/title.png"),
        page: ["12月", "11月", "10月", "9月", "8月"]
      }
    };
  },
  components: {
    Header,
    Footer,
    New,
    BookList
  }
};
</script>

<style>
</style>
