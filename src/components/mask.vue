<template >
  <button @click="now = !now">开启弹窗</button>
  <button @click="show">开启弹窗2</button>
  <!-- 开启遮罩层 -->
  <teleport to="body">
    <div class="mask" v-if="now">
      <div class="dialog">
        <div @click="now = !now">点击关闭</div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  name: "mask",
  setup(props) {
    let now = ref(true);
    //函数实现
    function show() {
      let m = function (e) {
        e.preventDefault();
      };
      //   console.log(now);
      now.value = !now.value;

      console.log(666);
    }
    watchEffect(() => {
      if (now.value) {
        document.body.style.overflow = "hidden";
      } else {
        console.log(555);
        document.body.style.overflow = "visible";
      }
    });
    return {
      now,
      show,
    };
  },
  mounted() {},
};
</script>

<style scoped>
button {
  color: aqua;
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>