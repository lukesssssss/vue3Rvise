<template>
  <div>
    <top msg="我要找到工作" date="2022/11/8">
    <div>我是不知道的</div>
  </top>
  <thenav @sayHello="sayHello"></thenav>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite"> </HelloWorld>
  <uselife></uselife>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import top from "./components/top.vue";
import thenav from "./components/nav.vue";
import uselife from "./components/uselife.vue";
import Uselife from "./components/uselife.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    top,
    thenav,
    Uselife,
    uselife,
  },
  setup() {
    function sayHello() {
      alert("你好啊");
    }
    return {
      sayHello,
    };
  },
};
</script>
