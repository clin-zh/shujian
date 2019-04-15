<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="nav">
        <ul>
          <li v-for="item in itemList" :key="item.id">
            <span :class="item.style"></span>
            {{ item.name }}
            <span class="arrow"></span>
          </li>
        </ul>
      </div>
      <div class="banner">
        <img src="~@/assets/images/ranking/banner.jpg" alt="">
        <ul>
          <li v-for="item in keywordList" :key="item.index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "KeyWord",
  data() {
    return {
      itemList: [
        {
          id: "01",
          name: "文学艺术",
          style: "icon icon1"
        },
        {
          id: "02",
          name: "少儿童书",
          style: "icon icon2"
        },
        {
          id: "03",
          name: "人文社科",
          style: "icon icon3"
        },
        {
          id: "04",
          name: "经管励志",
          style: "icon icon4"
        },
        {
          id: "05",
          name: "生活时尚",
          style: "icon icon5"
        },
        {
          id: "06",
          name: "科技教育",
          style: "icon icon6"
        },
        {
          id: "07",
          name: "创意文具",
          style: "icon icon7"
        },
        {
          id: "08",
          name: "生活美学",
          style: "icon icon8"
        },
        {
          id: "09",
          name: "影音原版",
          style: "icon icon9"
        }
      ],
      keywordList: ["图书总榜","童书","文学","教辅","经管励志","人文社科","生活","科技"]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";

.tonglan {
  background-color: #f0f0f0;
  padding: 0;
  height: 200px;
  .banxin {
    position: relative;
    .nav {
      position: absolute;
      top: 0px;
      z-index: 999;
      width: 200px;
      height: 400px;
      background-color: rgba(76, 76, 76, 0.8);

      ul {
        li {
          width: 100%;
          height: 40px;
          cursor: pointer;
          text-align: center;
          line-height: 40px;
          color: #fff;
          position: relative;

          span.icon {
            width: 50px;
            height: 50px;
            background: url("~@/assets/images/spirit.png") no-repeat;
            position: absolute;
            left: 10px;
          }
          span.icon1 {
            background-position: 0 0;
          }
          span.icon2 {
            background-position: 0 -50px;
          }
          span.icon3 {
            background-position: 0 -100px;
          }
          span.icon4 {
            background-position: 0 -150px;
          }
          span.icon5 {
            background-position: 0 -200px;
          }
          span.icon6 {
            background-position: 0 -250px;
          }
          span.icon7 {
            background-position: 0 -300px;
          }
          span.icon8 {
            background-position: 0 -350px;
          }
          span.icon9 {
            background-position: 0 -400px;
          }
          span.arrow {
            width: 8px;
            height: 8px;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 30px;
            transform: rotate(-45deg);
          }
        }
      }
    }
    .banner {
      position: absolute;
      right: 0;
      top: 10px;
      ul {
        padding: 16px;
        margin-top: 10px;
        background-color: #fff;
        li {
          float: left;
          padding: 8px 12px;
          margin: 0 4px;
          background-color: #ccc;
          color: #666;
          cursor: pointer;
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
    }
  }
}
</style>