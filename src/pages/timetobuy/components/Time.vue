<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="img">
        <img src="/images/timetobuy/banner_xsqg.jpg" alt>
      </div>
      <ul class="time">
        <li v-for="item in timeList" :key="item.id">
          <p>
            <span class="icon"></span>
            {{ item.time }}
          </p>
          <p>{{ item.state }}</p>
        </li>
        <li class="tomorrow">明日预告</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      timeList: [
        {
          id: "01",
          time: "00:00",
          state: "已开场"
        },
        {
          id: "02",
          time: "08:00",
          state: "已开场"
        },
        {
          id: "03",
          time: "12:00",
          state: "抢购进行中"
        },
        {
          id: "04",
          time: "14:00",
          state: "即将开场"
        },
        {
          id: "05",
          time: "20:00",
          state: "即将开场"
        }
      ],

    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.less";
.tonglan {
  background-color: #f0f0f0;
  .banxin {
    .img {
    }
    .time {
      box-shadow: 0px 10px 10px #ccc;
      background-color: #fff;
      li {
        float: left;
        width: 120px;
        height: 60px;
        cursor: pointer;
        margin: 0 40px;
        font-size: 20px;
        color: #666;

        &:hover {
          background-color: lightpink;
          border-radius: 10px;
          color: #fff;
        }

        &.tomorrow {
          text-align: center;
          line-height: 60px;
        }

        p {
          height: 30px;
          line-height: 30px;
          text-align: center;
          position: relative;

          .icon {
            width: 20px;
            height: 20px;
            background: url("/images/timetobuy/time.png") no-repeat;
            position: absolute;
            top: 7px;
            left: 15px;
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

