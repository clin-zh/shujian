<template>
  <div>
    <!-- 文创馆页 -->
    <Header></Header>
    <sta-banner></sta-banner>
    <product-list :productTitle="newPenTitle" :productList="newPenList"></product-list>
    <Brand></Brand>
    <product-list :productTitle="pen1fTitle" :productList="pen1fList"></product-list>
    <product-list :productTitle="pen2fTitle" :productList="pen2fList"></product-list>
    <product-list :productTitle="pen3fTitle" :productList="pen3fList"></product-list>
    <product-list :productTitle="pen4fTitle" :productList="pen4fList"></product-list>
    <product-list :productTitle="pen5fTitle" :productList="pen5fList"></product-list>
    <product-list :productTitle="pen6fTitle" :productList="pen6fList"></product-list>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../public-components/Header";
import Footer from "../public-components/Footer";
import StaBanner from "./components/StaBanner";
import ProductList from "./components/ProductList";
import Brand from "./components/Brand";

export default {
  name: "Stationery",
  data() {
    return {
      newPenTitle: {
        name: "新品抢先看"
      },
      newPenList: [
        {
          id: "001",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        },
        {
          id: "002",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        },
        {
          id: "003",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        },
        {
          id: "004",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        },
        {
          id: "005",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        },
        {
          id: "006",
          img: "/images/stationery/newpen.jpg",
          name:
            "晨光2.0自动铅笔粗芯小学生2b铅笔考试专用自动笔不易断文具用品可换笔芯活动笔自带削笔刀 自动铅笔1支（黑/2B）＋5支铅芯",
          newPrice: "￥21.80",
          oldPrice: "￥28.00"
        }
      ],

      pen1fTitle: {
        name: "1F 书写笔类",
        pageList: ["中性笔", "钢笔", "圆珠笔"]
      },
      pen1fList: [
        {
          id: "001",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "002",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "003",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "004",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "005",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "006",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "007",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "008",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "009",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "010",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "011",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        },
        {
          id: "012",
          img: "/images/stationery/1f.jpg",
          name:
            "晨光签字黑笔彩色中性笔水笔韩国小清新可爱创意萌简约复古学生用 紫色（12支）",
          newPrice: "￥22.80",
          oldPrice: "￥38.50"
        }
      ],

      pen2fTitle: {
        name: "2F 纸张本册",
        pageList: ["笔记本", "复印纸", "单据/账本"]
      },
      pen2fList: [
        {
          id: "001",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "002",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "003",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "004",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "005",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "006",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "007",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "008",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "009",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "010",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "011",
          img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        },
        {
          id: "012",
         img: "/images/stationery/2f.jpg",
          name: "广博箱装A4复印纸70g80g克 每包500张 5包 箱 80克印加",
          newPrice: "￥130.00",
          oldPrice: "￥180.00"
        }
      ],

      pen3fTitle: {
        name: "3F 桌面办公",
        pageList: ["计算器", "订书机", "美工刀", "票夹"]
      },
      pen3fList: [
        {
          id: "001",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "002",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "003",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "004",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "005",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "006",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "007",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "008",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "009",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "010",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "011",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        },
        {
          id: "012",
          img: "/images/stationery/3f.jpg",
          name:
            "得力儿童磁性软白板墙贴家用涂鸦 可擦写黑板贴教学小白板可裁剪自粘 50000 软黑板（0.5*450*1000mm带背胶）",
          newPrice: "￥60.00",
          oldPrice: "￥97.80"
        }
      ],

      pen4fTitle: {
        name: "4F 文件收纳",
        pageList: ["文件夹", "资料册", "档案盒", "拉链袋"]
      },
      pen4fList: [
        {
          id: "001",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "002",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "003",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "004",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "005",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "006",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "007",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "008",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "009",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "010",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "011",
         img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        },
        {
          id: "012",
          img: "/images/stationery/4f.jpg",
          name: "得力A4资料册文件夹 30页（5003）",
          newPrice: "￥7.50",
          oldPrice: "￥13.30"
        }
      ],

      pen5fTitle: {
        name: "5F 办公设备/办公生活",
        pageList: ["白板", "装订机", "塑封机", "考勤机"]
      },
      pen5fList: [
        {
          id: "001",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "002",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "003",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "004",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "005",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "006",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "007",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "008",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "009",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "010",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "011",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        },
        {
          id: "012",
          img: "/images/stationery/5f.jpg",
          name: "得力3906A点钞机 灰色",
          newPrice: "￥628.00",
          oldPrice: "￥1196.00"
        }
      ],

      pen6fTitle: {
        name: "6F 学生文具",
        pageList: ["笔袋", "削笔机", "美术画材", "书法练字"]
      },
      pen6fList: [
        {
          id: "001",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "002",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "003",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "004",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "005",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "006",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "007",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "008",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "009",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "010",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "011",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        },
        {
          id: "012",
          img: "/images/stationery/6f.jpg",
          name:
            "联众迪士尼50支铅笔小学生HB桶装铅笔米奇儿童带橡皮头 50支带皮头（漫威）",
          newPrice: "￥22.80",
          oldPrice: "￥38.80"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    StaBanner,
    ProductList,
    Brand,
  }
};
</script>

<style lang="less" scoped>
</style>






