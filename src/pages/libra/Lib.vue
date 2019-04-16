<template>
  <div>
    <Header></Header>
    <Slide></Slide>
    <book-list :booklist="recomList" :title="recomTitle"></book-list>
    <book-list :booklist="janBookList" :title="jan"></book-list>
    <book-list :booklist="classifyList" :title="classifyTitle"></book-list>
    <book-list :booklist="childList" :title="childTitle"></book-list>
    <book-list :booklist="moreList" :title="moreTitle"></book-list>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import Slide from "./components/Slide";
import BookList from "../public-components/BookList";

export default {
  name: "Lib",
  data() {
    return {
      recomList: [
        {
          id: "001",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "002",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "003",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "004",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "005",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "006",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "007",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "008",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "009",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "010",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "011",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "012",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "013",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "014",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "015",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "016",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "017",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        },
        {
          id: "018",
          name: "无羁",
          price: "￥33.20",
          oldPrice: "￥48.00",
          url: require("../../assets/images/libra/wuji.jpg")
        }
      ],
      recomTitle: {
        name: "重磅推荐",
        img: require("../../assets/images/libra/plate.png")
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

      classifyList: [
        {
          id: "001",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "002",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "003",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "004",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "005",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "006",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "007",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "008",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "009",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "010",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "011",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "012",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "013",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "014",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "015",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "016",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "017",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
        {
          id: "018",
          name: "时尚简史(一本书带你读懂时尚珍藏版)(精)阅美悦读",
          price: "￥28.60",
          oldPrice: "￥52.00",
          url: require("../../assets/images/libra/shishang.jpg")
        },
      ],
      classifyTitle: {
        name: "分类推荐",
        img: require("../../assets/images/libra/plate_52_5.png"),
        page: ["美妆", "美食", "居家", "旅行", "健身","投资","心理","IT","设计","影视小说","悬疑","科幻","青春"]
      },
      childList: [
         {
          id: "001",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "002",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "003",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "004",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "005",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "006",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "007",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "008",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "009",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "010",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "011",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "012",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "013",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "014",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "015",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "016",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "017",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
        {
          id: "018",
          name: "我的第一本科普小百科(共6册)",
          price: "￥86.18",
          oldPrice: "￥136.80",
          url: require("../../assets/images/libra/sea.jpg")
        },
      ],
      childTitle: {
        name: "童书频道",
        img: require("../../assets/images/libra/plate_52_1.png"),
        page: ["新品", "故事", "绘本", "英语", "科普","启蒙","益智","成长","玩具书","动漫","0-3","4-6","7-14","胎教","育儿"]
      },
      moreList: [
        {
          id: "001",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        },
        {
          id: "002",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        },
        {
          id: "003",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        },
        {
          id: "004",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        },
        {
          id: "005",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        },
        {
          id: "006",
          name: "红楼梦(上下)中国古典文学读本丛书",
          price: "￥45.37",
          oldPrice: "￥59.70",
          url: require("../../assets/images/libra/hongloumeng.jpg")
        }
      ],
      moreTitle: {
        name: "更多图书",
        img: require("../../assets/images/libra/plate_52_0.png"),
      },
    };
  },
  components: {
    Header,
    Footer,
    Slide,
    BookList
  }
};
</script>

<style lang="less" scoped>
</style>

