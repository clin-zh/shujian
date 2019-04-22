<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="paging">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>

        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="/images/ranking/wms.jpg"
                class="image"
              >
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paging"
};
</script>

<style lang="less" scoped>
@import "~@/assets/style/main.css";
@import "~@/assets/style/element.css";

.tonglan {
  background-color: #f0f0f0;
  height: 500px;
  .banxin {
    .paging {
      float: right;
    }
  }
}
</style>
