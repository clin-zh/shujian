<template>
  <div class="header">
    <div class="top">
      <div class="banxin">
        <div class="header-left">
          <router-link to="/login" tag="a" target="_blank">
            <span>登陆</span>
          </router-link>|
          <router-link to="/register" tag="a" target="_blank">
            <span>免费注册</span>
          </router-link>
          <img src="/images/header/phone.png" alt="phone">
          <span>下载书笺APP</span>
        </div>

        <ul class="header-right">
          <li class="icon" @mouseenter="ifshow = true" @mouseleave="ifshow = false">
            我的书笺
            <i></i>
            <ol class="item" v-show="ifshow">
              <li>我的订单</li>
              <li>我的优惠券</li>
              <li>我的收藏</li>
              <li>我的收入</li>
              <li>官方消息</li>
            </ol>
          </li>
          <span>|</span>
          <li>收藏夹</li>
          <span>|</span>
          <li>店铺管理</li>
          <span>|</span>
          <li>联系客服</li>
        </ul>
      </div>
    </div>

    <div class="center">
      <div class="banxin">
        <router-link to="/">
          <img src="/images/header/logo.png" alt="logo">
        </router-link>

        <div class="search">
          <input type="text" placeholder="余华">
          <button>
            <img src="/images/header/fangdajing.png" alt>
          </button>
        </div>
        <div class="keyword">
          <span class="active">茅台酒收藏</span>|
          <span>夏摩山谷</span>|
          <span>崔永元 有话说</span>|
          <span>林清玄</span>|
          <span>邓小平大决策</span>
        </div>
        <router-link to="/shoppingcar" tag="a" target="_blank">
          <div class="shopping-car">
            <img src="/images/header/shopping-car.png" alt>
            <span>购物车</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="bottom">
      <div class="banxin">
        <router-link to="/category" tag="a" target="_blank">
          <div class="all-commodity" @mouseenter="navShow = true" @mouseleave="navShow = false">
            <img src="/images/header/caidan.png" alt>
            所有商品分类
            <div class="list" v-show="control||navShow">
              <ul>
                <li
                  v-for="item in data"
                  :key="item.id"
                  @mouseenter="listShow"
                  @mouseleave="listHidden"
                >
                  <span class="icon"></span>
                  {{ item.item }}
                  <span class="arrow"></span>
                </li>

                <div class="nav-list">
                  <p class="hot">
                    <!-- <span>{{ hot }}</span> -->
                    <!-- <span>村上春树</span> -->
                  </p>
                  <div class="row">
                    <div class="left">诗歌散文</div>
                    <div class="right">
                      <span>中国古诗词</span>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </router-link>


        <div class="nav">
          <ul>
            <router-link to="/" tag="a" target="_blank">
              <li>首页</li>
            </router-link>
            <router-link to="/newbook" tag="a" target="_blank">
              <li>新品</li>
            </router-link>
            <router-link to="/timetobuy" tag="a" target="_blank">
              <li>限时购</li>
            </router-link>
            <router-link to="/ranking" tag="a" target="_blank">
              <li>排行榜</li>
            </router-link>
            <span>|</span>
            <router-link to="/library" tag="a" target="_blank">
              <li>图书馆</li>
            </router-link>
            <router-link to="/stationery" tag="a" target="_blank">
              <li>文创馆</li>
            </router-link>
            <router-link to="/lifeaes" tag="a" target="_blank">
              <li>生活美学馆</li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  props: {
    control: Boolean
  },
  data() {
    return {
      isCollapse: true,
      data: [],
      activeNav: {},
      ifshow: false,
      navShow: false,
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
      ]
    };
  },
  methods: {
    listShow() {

    },
    listHidden() {},
    getData() {
      axios.get("/mock/headlist.json").then(this.handleData);
    },
    handleData(res) {
      this.data = res.data;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.css";
@import "~@/assets/style/element.css";

.header {
  height: 220px;
  border-bottom: 2px solid #2db4ea;
  line-height: 30px;
  font-size: 12px;
  color: #666;
  .top {
    width: 100%;
    height: 30px;
    background-color: #f5f5f5;
    .banxin {
      .header-left {
        float: left;
        span {
          color: #666;
          margin: 0 5px;
          &:hover {
            color: #2db4ea;
          }
        }
        img {
          width: 18px;
          height: 18px;
          margin: 0px 4px 0px 30px;
        }
      }
      .header-right {
        float: right;
        span {
          float: left;
        }
        li {
          cursor: pointer;
          padding: 0 20px;
          float: left;
          margin: 0 5px;
          &:hover {
            color: #2db4ea;
          }
        }

        li.icon {
          width: 68px;
          padding: 0 10px;
          z-index: 999;
          position: relative;
          border: 1px solid transparent;
          i {
            width: 6px;
            height: 6px;
            border-right: 2px solid #666;
            border-bottom: 2px solid #666;
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -6px;
          }
          &:hover {
            background-color: #fff;
            border: 1px solid #ccc;
            border-bottom: none;
            i {
              transform: rotate(-135deg);
              margin-top: -2px;
            }
          }
          .item {
            position: absolute;
            left: -1px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-top: none;
            li {
              padding: 0 5px;
              width: 68px;
              height: 30px;
              color: #666;
              &:hover {
                color: #2db4ea;
              }
            }
          }
        }
      }
    }
  }
  .center {
    height: 90px;
    padding-top: 30px;

    .banxin {
      position: relative;

      img {
        width: 200px;
        height: 90px;
        cursor: pointer;
      }
      .search {
        width: 546px;
        height: 35px;
        border: 2px solid #2db4ea;
        position: absolute;
        left: 50%;
        margin-left: -275px;
        top: 50%;
        margin-top: -30px;

        input {
          width: 458px;
          height: 35px;
          padding: 0 10px;
          font-size: 18px;
        }
        input::placeholder {
          font-size: 18px;
          color: #ccc;
        }
        button {
          width: 68px;
          height: 35px;
          background-color: #2db4ea;
          cursor: pointer;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
      .keyword {
        width: 550px;
        height: 25px;
        position: absolute;
        left: 50%;
        margin-left: -275px;
        top: 54px;

        span.active {
          margin-left: 0px;
          color: #e4393c;
        }
        span {
          margin: 0 5px;
          cursor: pointer;
          font-size: 12px;
        }
      }
      a {
        color: #666;
        .shopping-car {
          width: 108px;
          height: 18px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -30px;
          line-height: 18px;
          font-size: 18px;
          &:hover {
            background-color: #f0f0f0;
          }
          a {
          }
          img {
            width: 20px;
            height: 20px;
            vertical-align: center;
            margin-right: 15px;
          }
        }
      }
    }
  }
  .bottom {
    height: 40px;
    margin-top: 30px;
    .banxin {
      position: relative;
      .all-commodity {
        position: absolute;
        left: 0;
        width: 200px;
        height: 40px;
        background-color: #2db4ea;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        text-align: center;

        img {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }

        .list {
          position: absolute;
          top: 42px;
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

              &:hover {
                background-color: #fff;
                color: #333;
                span.icon {
                  background: url("/images/home/spirit.png") no-repeat -50px 0;
                }
                span.arrow {
                  border-right: 2px solid #333;
                  border-bottom: 2px solid #333;
                }
              }

              span.icon {
                width: 50px;
                height: 50px;
                background: url("/images/home/spirit.png") no-repeat;
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
            .nav-list {
              width: 800px;
              height: 500px;
              // background-color: #ccc;
              border: 1px solid #000;
              padding: 10px;
              position: absolute;
              left: 200px;
              top: 0;
              display: none;
              .hot {
                text-align: left;
                span {
                  background-color: #2db4ea;
                  margin: 2px;
                  padding: 4px;
                }
              }
              .row {
                color: #333;
                line-height: 30px;
                border-top: 1px solid #ccc;
                .left {
                  float: left;
                  width: 20%;
                  font-weight: bold;
                }
                .right {
                  float: left;
                  width: 80%;
                  text-align: left;
                  span {
                    margin: 0 4px;
                    display: inline-block;
                  }
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
      }
      .nav {
        position: absolute;
        left: 50%;
        margin-left: -275px;
        width: 550px;
        height: 40px;

        ul {
          // 设置被选中导航栏的样式
          .router-link-exact-active {
            li {
              color: #2db4ea;
            }
          }
          li {
            height: 100%;
            margin: 0 14px;
            cursor: pointer;
            float: left;
            line-height: 40px;
            font-size: 16px;
            color: #666;
          }
          li:hover {
            color: #2db4ea;
          }
          li.active {
            color: #2db4ea;
          }
          span {
            float: left;
            line-height: 40px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>