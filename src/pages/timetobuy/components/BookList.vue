<template>
  <div class="tonglan">
    <div class="banxin">
      <ul class="list">
        <li v-for="item in booklist" :key="item.id">
          <img :src="item.imgUrl" alt>
          <p>{{ item.name }}</p>
          <div class="box">
            <div class="buy">
              <p>
                <span class="price">{{ item.newPrice }}</span>
                <span class="oldPrice">{{ item.oldPrice }}</span>
              </p>
              <p>仅剩{{ item.remaining }}件</p>
            </div>
            <button>马上抢</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: {
    booklist: Array
  }
};
</script>


<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  background-color: #f0f0f0;
  padding: 30px 0;
  .banxin {
    .list {
      li {
        width: 230px;
        height: 332px;
        float: left;
        background-color: #fff;
        text-align: center;
        position: relative;
        margin: 10px 5px;
        img {
          width: 190px;
          height: 190px;
          margin-top: 20px;
        }
        p {
          margin: 20px 5px 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .box {
          width: 100%;
          height: 42px;
          position: absolute;
          bottom: 0;
          .buy {
            float: left;
            text-align: left;
            p {
              margin-top: 0px;
              margin-left: 5px;
              span {
                line-height: 21px;
                &.price {
                  color: red;
                  margin-right: 10px;
                }
                &.oldPrice {
                  text-decoration: line-through;
                  color: #666;
                }
              }
            }
          }
          button {
            margin-right: 10px;
            margin-top: 5px;
            float: right;
            background-color: lightpink;
            color: lightcoral;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
              color: #fff;
              background-color: lightcoral;
            }
          }
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
</style>
