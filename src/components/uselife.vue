<template>
  <h1>使用生命周期</h1>
  <div>鼠标的坐标是{{ x }},{{ y }}</div>
  <div>{{ delay }}+{{ delay }}</div>
  <div @click="num++">{{ num }}</div>
</template>

<script>
import { customRef, onMounted, reactive, toRefs, ref } from "vue";
//使用hook方法引入
import usePoint from "../hooks/usePoint";
export default {
  name: "uselife",
  setup(props) {
    // let mouse = reactive({
    //   a: "",
    //   b: "",
    // });
    // function getMouse(event) {
    //   mouse.a = event.pageX;
    //   mouse.b = event.pageY;
    // }
    // //获取鼠标坐标
    // onMounted(() => {
    //   window.addEventListener("click", getMouse);
    // });
    let point = usePoint();
    //自定义ref
    // let delay = myRef(1);
    let delay = myRef(point);
    let num = ref(1);

    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            //追踪trigger更改
            track();
            return value;
          },
          set(newValue, oldValue) {
            console.log("修改了," + oldValue);
            value = value++;
            //重新解析模板
            trigger();
          },
        };
      });
    }
    return {
      //torefs可以把数据进行双向绑定
      ...toRefs(point),
      delay,
      num,
    };
  },
};
</script>

<style>
</style>