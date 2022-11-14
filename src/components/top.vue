<template>
  <h1>我是头部,{{ myname }},{{ msg }}</h1>
  <themask></themask>
  <h2>现在是{{ time }}</h2>
  <input type="text" placeholder="请输入1" v-model="num1" />
  <input type="text" placeholder="请输入2" v-model="num2" />
  <button @click="answer">答案是</button>
  <slot></slot>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
//两秒之后引入数据
const themask = defineAsyncComponent(() => import("./mask.vue"));
// const themask = defineAsyncComponent({
//   // 加载函数
//   loader: () => import("./mask.vue"),

//   // 加载异步组件时使用的组件
//   // loadingComponent: LoadingComponent,
//   // 展示加载组件前的延迟时间，默认为 200ms
//   delay: 2000,

//   // 加载失败后展示的组件
//   // errorComponent: ErrorComponent,
//   // 如果提供了一个 timeout 时间限制，并超时了
//   // 也会显示这里配置的报错组件，默认值是：Infinity
//   timeout: 3000,
// });
// import themask from "./mask.vue";
export default {
  name: "top",
  props: { msg: String, date: String },
  components: { themask },
  setup(props) {
    //props在第一个里面接收
    console.log(props);
    let myname = "zzl";
    let num1 = ref();
    let num2 = ref();
    let num3 = num1 + num2;
    let now = ref();

    function answer() {
      alert(Number(num1.value) + Number(num2.value) || "现在还不确定");
    }
    function time() {
      now = new Date();
      return now;
    }
    return {
      myname,
      num1,
      num2,
      answer,
      time,
    };
  },
  mounted() {
    console.log("666");
  },
};
</script>

<style>
</style>