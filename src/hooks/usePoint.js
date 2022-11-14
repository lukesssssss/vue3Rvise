import {
    onMounted,
    reactive,
} from "vue";
export default function () {
    //获取鼠标坐标
    let point = reactive({
        x: 0,
        y: 0
    })

    function getMouse(e) {
        point.x = e.pageX
        point.y = e.pageY
    }
    onMounted(() => {
        window.addEventListener('click', getMouse)
    })

    return point
}