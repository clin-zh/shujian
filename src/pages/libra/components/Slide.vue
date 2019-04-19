<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="slide">
        <ul>
          <li v-for="item of slideList" :key="item.id">
            <img :src="item.imgUrl" alt="图片">
          </li>
        </ul>
        <ol>
          <li v-for="item in slideList.length" :key="item.index"></li>
        </ol>
        <div class="btn btn-left">
          <span></span>
        </div>
        <div class="btn btn-right">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {
      slideList: [
        {
          id: "001",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "002",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "003",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "004",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "005",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "006",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "007",
          imgUrl: "/images/libra/banner01.jpg"
        },
        {
          id: "008",
          imgUrl: "/images/libra/banner01.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tonglan {
  .banxin {
    .slide {
      position: relative;
      z-index: 99;
      width: 1200px;
      height: 400px;
      overflow: hidden;
      ul {
        width: 1000%;
        height: 400px;
        margin-left: 0px;
        li {
          height: 100%;
          float: left;
        }
      }
      ol {
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -72px;
        li {
          width: 14px;
          height: 14px;
          background-color: #fff;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          float: left;
        }
        li.active {
          background-color: #2db4ea;
        }
      }
      .btn {
        width: 36px;
        height: 74px;
        background-color: rgba(45, 180, 234, 0.5);
        position: absolute;
        top: 163px;
        margin-top: -37px;
        z-index: 999;
        cursor: pointer;
        span {
          display: block;
          width: 16px;
          height: 16px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          margin-top: 29px;
        }
      }
      .btn-left {
        left: 0;
        span {
          transform: rotate(45deg);
          margin-left: 14px;
        }
      }
      .btn-right {
        right: 0;
        span {
          transform: rotate(-135deg);
          margin-left: 6px;
        }
      }
    }
  }
}
</style>

