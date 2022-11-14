<template>
  <button @click="tosay">触发自定义事件</button>
  <div>{{ now }}</div>
  <div>{{ my.name }}</div>
  <div>{{ my.age }}</div>
  <button @click="my.age++" class="btn" ref="btn">时间</button>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "nav",
  emits: ["sayHello"],
  setup(props, context) {
    let my = reactive({
      name: "zzl",
      age: 22,
    });
    function tosay() {
      context.emit("sayHello");
    }
    //使用computed做一个时间表
    let now = computed(() => {
      let time = ref();
      setInterval(() => {
        time.value = new Date();
      }, 1000);
      return time;
    });
    function changeColor() {
      console.log(context);
    }

    watch(
      my,
      (a, b) => {
        console.log("改变了", a, b);
      },
      { immediate: true },
      { deep: true }
    );
    watchEffect(() => {
      if (my.age > 25) {
        alert("等死吧");
      }
    });
    return {
      tosay,
      now,
      changeColor,
      my,
    };
  },
};
</script>

<style scoped>
</style>